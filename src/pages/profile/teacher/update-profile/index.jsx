// teacher profile


// import { batch } from "@/data/batch";
// import { bloodGroups } from "@/data/bloodgroup";
// import Select from 'react-select'
// import DatePicker from "react-datepicker";
import { deleteImage, getTeacherOwnProfileByToken, uploadImage, updateTeacherProfile } from "@/utils/fetch";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import "react-datepicker/dist/react-datepicker.css";
import { useGeolocated } from "react-geolocated";
import Resizer from "react-image-file-resizer";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";
import { ThemeContext } from "@/components/ThemeContext";


function updateProfile() {
    const router = useRouter();
    const { theme } = useContext(ThemeContext);
    // const [startDate, setStartDate] = useState(new Date());
    const [PostData, setPostData] = useState({
        title: "",
        description: "",
        externalLink: null,
        imageSrcId: null
    });
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: true,
            },
            userDecisionTimeout: 5000,
        });


    const [IsUploaded, setIsUploaded] = useState(false)

    const [ImageBlob, setImageBlob] = useState(null);



    const [Loading, setLoading] = useState(true);

    const [isSuccessLoaded, setIsSuccessLoaded] = useState(false)

    const [UpdateUserData, setUpdateUserData] = useState({
        name: "",
        mobile: "",
        premiumExpiry: "",
        isProfileCompleted: false,
        profileImage: null,
        joiningYear: "",
        leavingYear: "",
        subject: "",
        whatsappNo: "",
        designation: ""
    });

    const handleChange = (event) => {
        setUpdateUserData({
            ...UpdateUserData,
            [event.target.name]: event.target.value
        })
    }

    const resizeFile = (file) =>
        new Promise((resolve) => {
            Resizer.imageFileResizer(
                file,
                300,
                300,
                "JPEG",
                100, // Quality
                0,
                (uri) => {
                    resolve(uri);
                },
                "blob"
            );
        });






    const uploadImageToCloud = async () => {


        if (!ImageBlob) {
            toast.error("Please select an image", {
                icon: "⚠"
            })
            return;
        }

        const loading = toast.loading("Uploading image...");
        const response = await uploadImage(ImageBlob);
        toast.dismiss(loading);

        if (response.status === 200) {

            console.log("Image", response.data);
            setIsUploaded(true);
            handleChange({
                target: {
                    name: "profileImage",
                    value: response.data._id
                }
            })
            return response.data._id;

        } else {
            setIsUploaded(false);
            toast.error("Image upload failed", {
                icon: "⚠"
            })
        }
    }

    const clearImageSelection = async (event) => {
        event.preventDefault();

        if (IsUploaded && PostData?.image) {
            const response = await deleteImage(PostData?.image);

            if (response.status === 200) {
                toast.success("Image deleted successfully", {
                    icon: "✔"
                })
            }
        }
        setImageBlob(null);
        setPreviewImage(null);
        setIsUploaded(false);
        handleChange({
            target: {
                name: "profileImage",
                value: null
            }
        })
    }



    const fileTypes = ['PNG', 'JPEG', 'JPG'];
    const [PreviewImageBase64, setPreviewImage] = useState(null);

    const previewImage = async (event) => {

        var input = event.target;
        // console.log(input.files[0].type);
        if (input.files && input.files[0]) {

            if (!fileTypes.includes(input.files[0].type.split("/")[1].toUpperCase())) {
                toast.error("File type is not supported", {
                    icon: "⚠"
                })
                setPreviewImage(null)
                setImageBlob(null)
                input.value = null;
                return;
            }

            if (input.files[0].size >= 500000) {
                toast.error("File size is greater than 500 KB", {
                    icon: "⚠"
                })
                setPreviewImage(null)
                setImageBlob(null)
                input.value = null;
                return;
            }
            // setImageBlob(input.files[0]); // setting the image blob.
            const modifiedImageBlob = await resizeFile(input.files[0]);
            setImageBlob(modifiedImageBlob);
            UpdateUserData.profileImage = "QUEUE";

            var reader = new FileReader();
            reader.onload = function (e) {
                setPreviewImage(e.target.result);
            };
            reader.readAsDataURL(modifiedImageBlob);
        }
    }

    useEffect(() => {
        getMyProfile()
    }, [])

    const getMyProfile = async () => {
        setLoading(true)
        const response = await getTeacherOwnProfileByToken();
        if (response.status === 200) {
            console.log("TEACHER DATA", response.data)
            setIsSuccessLoaded(true)
            setCookie("isProfileCompleted", response.data.profileDetails.isProfileCompleted, { maxAge: 60 * 60 * 24 * 365 * 3 });
            UpdateUserData.name = response.data.name
            UpdateUserData.mobile = response.data.mobile
            UpdateUserData.subject = response.data.profileDetails.subject
            UpdateUserData.joiningYear = response.data.profileDetails.joiningYear
            UpdateUserData.leavingYear = response.data.profileDetails.leavingYear
            UpdateUserData.profileImage = response.data.profileDetails.profileImage
            UpdateUserData.whatsappNo = response.data.profileDetails.whatsappNo
            UpdateUserData.designation = response.data.profileDetails.designation
        } else {
            toast.error("Something went wrong");
        }
        setLoading(false)
    }

    const updateDetails = async (e) => {
        e.preventDefault();
        const checkEmptyField = checkEmptyValuesAndAlert(UpdateUserData);
        if (!checkEmptyField?.success) {
            toast.error(checkEmptyField?.message);
            return;
        };

        if (!IsUploaded && ImageBlob) {

            try {
                const responseImageID = await uploadImageToCloud();
                UpdateUserData.profileImage = responseImageID;
            } catch (error) {
                toast.error("Image Uploading failed");
            }

        }
        const loadingToast = toast.loading("Updating profile...");

        const response = await updateTeacherProfile(UpdateUserData);
        if (response.status === 200) {
            console.log(response.data)
            setCookie("isProfileCompleted", response.data.teacher.profileDetails.isProfileCompleted, { maxAge: 60 * 60 * 24 * 365 * 3 })
            toast.dismiss(loadingToast);
            toast.success("Profile updated successfully");
            // window.location.href = "/";
        } else {
            toast.error("Something went wrong");
        }
    }
    const checkEmptyValuesAndAlert = (obj) => {
        const keysToExclude = ["isProfileCompleted", "premiumExpiry", "leavingYear"];
        let hasEmptyValues = false;

        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (keysToExclude.includes(key)) {
                    continue; // Skip checking for specified keys
                }

                const value = obj[key];
                if (value === "" || value === undefined || value === null) {
                    hasEmptyValues = true;

                    return {
                        message: `Kindly fill details of "${key}".`,
                        success: false
                    }
                }
            }
        }

        return {
            success: true
        }


    }


    return (
        <section className="contact-section pt-100 pb-100">
            <div className="container">


                <div className="col-lg-7">
                    <div className="form-title">
                        <h2 className={`${theme === "dark" ? "text-light" : ""}`}>Profile Update</h2>

                        {
                            Loading && <div className="d-flex justify-content-center">
                                <div className={`spinner-border text-${theme === "dark" ? "light" : "primary"}`} role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        }
                    </div>

                    {
                        !Loading && isSuccessLoaded && <form className="contact-form">
                            <div className="row">
                                <label htmlFor="">Profile Picture<span className="text-danger">*</span></label>
                                {
                                    PreviewImageBase64 && <div className="col-12">
                                        <div className='form-inner'>
                                            <Image style={
                                                IsUploaded ? {
                                                    filter: "grayscale(0)"
                                                } : {
                                                    filter: "grayscale(1)"
                                                }
                                            } alt="preview image" width={200} height={200} src={PreviewImageBase64} />
                                        </div>
                                    </div>
                                }

                                {
                                    !ImageBlob && <div className="col-12">
                                        <div className={`form-inner ${theme === "dark" ? "bg-light" : ""}`}>
                                            <input onChange={previewImage} type="file" />
                                        </div>
                                    </div>
                                }


                                {/* {
                                    !IsUploaded && ImageBlob && <div className="col-6">
                                        <div className="form-inner">
                                            <button onClick={uploadImageToCloud} type="submit" className="eg-btn btn--primary btn--sm m-2">
                                                Upload
                                            </button>
                                        </div>
                                    </div>
                                } */}

                                {
                                    ImageBlob && <>
                                        <div className="col-6">
                                            <div className="form-inner">
                                                <button onClick={clearImageSelection} type="submit" className="eg-btn btn--primary-3 btn--sm m-2">
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                }
                                <div className="col-12">
                                    <div className="form-inner">
                                        <label htmlFor="">Name<span className="text-danger">*</span></label>
                                        <input className={`${theme === "dark" ? "text-light" : ""}`} disabled value={UpdateUserData?.name || ""} name="name" onChange={handleChange} type="text" placeholder="Enter Your Name" />
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="form-inner">
                                        <label htmlFor="Batch">Mobile<span className="text-danger">*</span></label>
                                        <input className={`${theme === "dark" ? "text-light" : ""}`} disabled name="mobile" value={UpdateUserData?.mobile || ""} onChange={handleChange} type="text" placeholder="eg. +91 7656826945" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-inner">
                                        <label htmlFor="whatsappNo">WhatsApp<span className="text-danger">*</span></label>
                                        <input name="whatsappNo" value={UpdateUserData?.whatsappNo || ""} onChange={handleChange} type="text" placeholder="eg. +91 7656826945" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-inner">
                                        <label htmlFor="subject">Subject<span className="text-danger">*</span></label>
                                        <input value={UpdateUserData?.subject || ""} name="subject" onChange={handleChange} type="text" placeholder="eg. Economics" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-inner">
                                        <label htmlFor="designation">Designation<span className="text-danger">*</span></label>
                                        <input value={UpdateUserData?.designation || ""} name="designation" onChange={handleChange} type="text" placeholder="eg. PHD Mathematics" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-inner">
                                        <label htmlFor="joiningYear">Joining Year<span className="text-danger">*</span></label>
                                        <input type="number" name="joiningYear" onChange={handleChange} value={UpdateUserData?.joiningYear || ""} placeholder="eg. 2003" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-inner">
                                        <label htmlFor="leavingYear">Leaving Year<span className="text-danger">*</span></label>
                                        <input type="number" name="leavingYear" onChange={handleChange} value={UpdateUserData?.leavingYear || ""} placeholder="eg. 2003" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button onClick={updateDetails} className="eg-btn btn--primary btn--lg">
                                        Update
                                    </button>
                                </div>
                            </div>
                        </form>
                    }
                </div>
            </div>
        </section>
    );
}



export default updateProfile;
