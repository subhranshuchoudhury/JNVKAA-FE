import { batch } from "@/data/batch";
import { bloodGroups } from "@/data/bloodgroup";
import { deleteImage, getAlumniProfileById, updateUserProfile, uploadImage } from "@/utils/fetch";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Select from 'react-select'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGeolocated } from "react-geolocated";
import Resizer from "react-image-file-resizer";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";


function updateProfile() {
    const router = useRouter();
    const [startDate, setStartDate] = useState(new Date());
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
        graduationYear: "",
        dob: "",
        bloodGroup: "",
        whatsappNo: "",
        mailId: "",
        location: "",
        schoolNo: "",
        address: "",
        profession: "",
        instagram: "",
        facebook: "",
        linkedIn: "",
        about: ""
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
        const response = await getAlumniProfileById();
        if (response.status === 200) {
            setIsSuccessLoaded(true)
            setCookie("isProfileCompleted", response.data.profileDetails.isProfileCompleted, { maxAge: 60 * 60 * 24 * 365 * 3 });
            console.log(isGeolocationAvailable, isGeolocationAvailable, coords
            );
            UpdateUserData.name = response.data.name
            UpdateUserData.mobile = response.data.mobile
            UpdateUserData.schoolNo = response.data.profileDetails.schoolNo
            UpdateUserData.whatsappNo = response.data.profileDetails.whatsappNo
            UpdateUserData.mailId = response.data.profileDetails.mailId
            setStartDate(new Date(response.data.profileDetails.dob))
            UpdateUserData.address = response.data.profileDetails.address
            UpdateUserData.profession = response.data.profileDetails.profession
            UpdateUserData.instagram = response.data.profileDetails.instagram
            UpdateUserData.facebook = response.data.profileDetails.facebook
            UpdateUserData.linkedIn = response.data.profileDetails.linkedIn
            UpdateUserData.about = response.data.profileDetails.about
            UpdateUserData.bloodGroup = response.data.profileDetails.bloodGroup
            UpdateUserData.dob = response.data.profileDetails.dob
            UpdateUserData.graduationYear = response.data.profileDetails.graduationYear
            UpdateUserData.about = response.data.profileDetails.about
            UpdateUserData.profileImage = response.data.profileDetails.profileImage
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

        UpdateUserData.location = isGeolocationAvailable && isGeolocationEnabled && coords ? `${coords.latitude}-${coords.longitude}` : UpdateUserData.location
        const response = await updateUserProfile(UpdateUserData);
        if (response.status === 200) {
            console.log(response.data)
            setCookie("isProfileCompleted", response.data.alumni.profileDetails.isProfileCompleted, { maxAge: 60 * 60 * 24 * 365 * 3 })
            toast.dismiss(loadingToast);
            toast.success("Profile updated successfully");
            window.location.href = "/";
        } else {
            toast.error("Something went wrong");
        }
    }

    const checkEmptyValuesAndAlert = (obj) => {
        const keysToExclude = ["instagram", "linkedIn", "isProfileCompleted", "premiumExpiry", "location", "facebook"];
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
                        <h2>Profile Update</h2>

                        {
                            Loading && <div className="d-flex justify-content-center">
                                <div className="spinner-border text-primary" role="status">
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
                                        <input disabled value={UpdateUserData?.name || ""} name="name" onChange={handleChange} type="text" placeholder="Enter Your Name" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-inner">
                                        <label htmlFor="batch">12th Pass Out Year<span className="text-danger">*</span></label>
                                        <Select onChange={(e) => {

                                            handleChange({
                                                target: {
                                                    name: "graduationYear",
                                                    value: e?.value || ""
                                                }
                                            })
                                        }} value={{
                                            label: UpdateUserData?.graduationYear || ""
                                        }} options={batch} />

                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-inner">
                                        <label htmlFor="schoolID">School No<span className="text-danger">*</span></label>
                                        <input name="schoolNo" value={UpdateUserData?.schoolNo || ""} onChange={handleChange} type="number" placeholder="Enter School No." />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-inner">
                                        <label htmlFor="bloodGroup">Blood Group<span className="text-danger">*</span></label>
                                        <Select onChange={(e) => {
                                            handleChange({
                                                target: {
                                                    name: "bloodGroup",
                                                    value: e?.value || ""
                                                }
                                            })
                                        }} value={{
                                            label: UpdateUserData?.bloodGroup || ""

                                        }} options={bloodGroups} />

                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="form-inner">
                                        <label htmlFor="bloodGroup">DOB<span className="text-danger">*</span></label>
                                        <br />
                                        <DatePicker showYearDropdown showPopperArrow dateFormat={"dd/MM/yyyy"} selected={startDate} onChange={(date) => {
                                            setStartDate(date); handleChange({
                                                target: {
                                                    name: "dob",
                                                    value: date
                                                }
                                            })
                                        }} />

                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-inner">
                                        <label htmlFor="Batch">Mobile<span className="text-danger">*</span></label>
                                        <input disabled name="mobile" value={UpdateUserData?.mobile || ""} onChange={handleChange} type="text" placeholder="eg. +91 7656826945" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-inner">
                                        <label htmlFor="schoolID">Whatsapp<span className="text-danger">*</span></label>
                                        <input value={UpdateUserData?.whatsappNo || ""} name="whatsappNo" onChange={handleChange} type="tel" placeholder="eg. +91 7656826945" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-inner">
                                        <label htmlFor="email">Email<span className="text-danger">*</span></label>
                                        <input type="email" name="mailId" onChange={handleChange} value={UpdateUserData?.mailId || ""} placeholder="eg. example@gmail.com" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-inner">
                                        <label htmlFor="schoolID">Profession<span className="text-danger">*</span></label>
                                        <input name="profession" value={UpdateUserData?.profession || ""} onChange={handleChange} type="text" placeholder="eg. Engineer" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-inner">
                                        <label htmlFor="Batch">Instagram</label>

                                        <input name="instagram" value={UpdateUserData?.instagram || ""} onChange={handleChange} type="text" placeholder="eg. https://instagram.com/..." />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-inner">
                                        <label htmlFor="schoolID">Facebook</label>
                                        <input name="facebook" value={UpdateUserData?.facebook || ""} onChange={handleChange} type="text" placeholder="eg. https://facebook.com/..." />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-inner">
                                        <label htmlFor="Batch">LinkedIn</label>

                                        <input name="linkedIn" value={UpdateUserData?.linkedIn || ""} onChange={handleChange} type="text" placeholder="eg. https://linkedin.com/..." />
                                    </div>
                                </div>
                                {/* <div className="col-6">
                                    <div className="form-inner">
                                        <label htmlFor="Batch">Location</label>

                                        {
                                            isGeolocationAvailable && isGeolocationEnabled && coords && <input name="location" onChange={handleChange} type="text" value={"ABC" || ""} placeholder="Kindly give location permission." />
                                        }


                                    </div>
                                </div> */}
                                <div className="col-12">
                                    <div className="form-inner">
                                        <label htmlFor="about">Your Address<span className="text-danger">*</span></label>
                                        <textarea
                                            rows={5}
                                            placeholder="About Yourself"
                                            name="address"
                                            value={UpdateUserData?.address || ""}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-inner">
                                        <label htmlFor="about">About Yourself<span className="text-danger">*</span></label>
                                        <textarea
                                            rows={5}
                                            placeholder="About Yourself"
                                            name="about"
                                            value={UpdateUserData?.about || ""}
                                            onChange={handleChange}
                                        />
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
