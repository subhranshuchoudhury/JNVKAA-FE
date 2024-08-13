// teacher profile


// import { batch } from "@/data/batch";
// import { bloodGroups } from "@/data/bloodgroup";
// import Select from 'react-select'
// import DatePicker from "react-datepicker";
import { RegisterTeacher, deleteImage, uploadImageNonAuth } from "@/utils/fetch";
import Image from "next/image";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import "react-datepicker/dist/react-datepicker.css";
// import { useGeolocated } from "react-geolocated";
import Resizer from "react-image-file-resizer";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";
import { ThemeContext } from "@/components/ThemeContext";


function updateProfile() {
    const { theme } = useContext(ThemeContext)
    const router = useRouter();
    // const [startDate, setStartDate] = useState(new Date());
    const [PostData, setPostData] = useState({
        title: "",
        description: "",
        externalLink: null,
        imageSrcId: null
    });
    // const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    //     useGeolocated({
    //         positionOptions: {
    //             enableHighAccuracy: true,
    //         },
    //         userDecisionTimeout: 5000,
    //     });


    const [IsUploaded, setIsUploaded] = useState(false)

    const [ImageBlob, setImageBlob] = useState(null);



    // const [Loading, setLoading] = useState(false);

    // const [isSuccessLoaded, setIsSuccessLoaded] = useState(true)

    const [UpdateUserData, setUpdateUserData] = useState({
        name: "",
        mobile: "",
        // premiumExpiry: "",
        isProfileCompleted: false,
        profileImage: null,
        joiningYear: "",
        leavingYear: "",
        subject: "",
        whatsappNo: "",
        designation: "",
        password: "",
        confirmPassword: ""
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
        const response = await uploadImageNonAuth(ImageBlob);
        toast.dismiss(loading);

        if (response.status === 200) {

            // console.log("Image", response.data);
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

            // if (input.files[0].size >= 500000) {
            //     toast.error("File size is greater than 500 KB", {
            //         icon: "⚠"
            //     })
            //     setPreviewImage(null)
            //     setImageBlob(null)
            //     input.value = null;
            //     return;
            // }
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





    const updateDetails = async (e) => {
        e.preventDefault();
        const checkEmptyField = checkEmptyValuesAndAlert(UpdateUserData);
        if (!checkEmptyField?.success) {
            toast.error(checkEmptyField?.message);
            return;
        };

        if (UpdateUserData.password !== UpdateUserData.confirmPassword) {
            toast.error("Password and Confirm Password does not match");
            return;
        }

        if (!IsUploaded && ImageBlob) {

            try {
                const responseImageID = await uploadImageToCloud();
                UpdateUserData.profileImage = responseImageID;
            } catch (error) {
                toast.error("Image Uploading failed");
            }

        }
        const loadingToast = toast.loading("Creating profile...");

        const response = await RegisterTeacher(UpdateUserData);
        if (response.status === 200) {
            setCookie("isProfileCompleted", true, { maxAge: 60 * 60 * 24 * 365 * 3 })
            toast.dismiss(loadingToast);
            toast.success(response.data.message);
            setTimeout(() => {
                router.push("/auth/login-teacher");
            }, 2000);
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
                        <h2 className={`${theme === "dark" ? "text-light" : ""}`}>Teacher Register</h2>
                    </div>


                    <form className="contact-form">
                        <div className="row">
                            <label htmlFor="">Profile Picture<span className="text-danger">*</span></label>
                            {
                                PreviewImageBase64 && <div className="col-12">
                                    <div className="form-inner">
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
                                    <div className="form-inner">
                                        <input onChange={previewImage} className={`${theme === "dark" ? "bg-light" : ""}`} type="file" accept="image/png, image/jpeg" />
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
                                    <input value={UpdateUserData?.name || ""} name="name" onChange={handleChange} type="text" placeholder="Enter Your Name" />
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="form-inner">
                                    <label htmlFor="Batch">Mobile<span className="text-danger">*</span></label>
                                    <input name="mobile" value={UpdateUserData?.mobile || ""} onChange={handleChange} type="text" placeholder="eg. +91 7656826945" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-inner">
                                    <label htmlFor="Password">Password<span className="text-danger">*</span></label>
                                    <input onChange={handleChange} name="password" value={UpdateUserData?.password} type="password" placeholder="Password (min 6 characters)" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-inner">
                                    <label htmlFor="Password">Confirm Password<span className="text-danger">*</span></label>
                                    <input onChange={handleChange} name="confirmPassword" value={UpdateUserData?.confirmPassword} type="password" placeholder="Confirm Password" />
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
                                    <label htmlFor="leavingYear">Leaving Year</label>
                                    <input type="number" name="leavingYear" onChange={handleChange} value={UpdateUserData?.leavingYear || ""} placeholder="eg. 2003" />
                                </div>
                            </div>
                            <div className="col-12">
                                <button onClick={updateDetails} className="eg-btn btn--primary btn--lg">
                                    Create Profile
                                </button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    );
}



export default updateProfile;
