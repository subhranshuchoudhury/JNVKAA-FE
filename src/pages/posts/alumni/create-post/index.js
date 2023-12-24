import { createPostAlumni, deleteImage, uploadImage } from "@/utils/fetch";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import toast from "react-hot-toast";

function CreatePost() {

    const router = useRouter()

    const [PostData, setPostData] = useState({
        title: "",
        description: "",
        externalLink: null,
        imageSrcId: null
    });

    const [IsUploaded, setIsUploaded] = useState(false)

    const [ImageBlob, setImageBlob] = useState(null);



    const handleChangePostData = (event) => {
        setPostData({
            ...PostData,
            [event.target.name]: event.target.value
        })
    }

    const publishPost = async (event) => {
        event.preventDefault();

        if (!PostData.title || !PostData.description) {
            toast.error("Please fill all the fields");
        }

        const loading = toast.loading("Publishing post...");

        const response = await createPostAlumni(PostData);

        toast.dismiss(loading);

        if (response.status === 200) {
            console.log(response.data)
            toast.success(response.data.message);
            router.replace("/posts/alumni/id/" + response.data.id)

        } else {
            toast.error("Post publishing failed")
        }


    }


    const uploadImageToCloud = async (event) => {
        event.preventDefault();

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
            handleChangePostData({
                target: {
                    name: "imageSrcId",
                    value: response.data._id
                }
            })
            toast.success("Image uploaded successfully", {
                icon: "✔"
            })
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
        handleChangePostData({
            target: {
                name: "image",
                value: null
            }
        })
    }



    const fileTypes = ['PNG', 'JPEG', 'JPG'];
    const [PreviewImageBase64, setPreviewImage] = useState(null);

    const previewImage = (event) => {

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

            if (input.files[0].size >= 1250000) {
                toast.error("File size is greater than 1MB", {
                    icon: "⚠"
                })
                setPreviewImage(null)
                setImageBlob(null)
                input.value = null;
                return;
            }
            setImageBlob(input.files[0]);
            var reader = new FileReader();
            reader.onload = function (e) {
                setPreviewImage(e.target.result);
            };
            reader.readAsDataURL(input.files[0]);
        }

    }

    return (
        <section className="contact-section pt-100 pb-100">
            <div className="container">

                <div className="col-lg-7">
                    <div className="form-title">
                        <h2>Publish A Post</h2>
                    </div>
                    <form className="contact-form">
                        <div className="row">
                            <div className="col-12">
                                <div className="form-inner">
                                    <input name="title" onChange={handleChangePostData} value={PostData?.title} type="text" placeholder="Enter Title" />
                                </div>
                            </div>
                            {/* <div className="col-6">
                                <div className="form-inner">
                                    <input type="email" placeholder="Enter your email" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-inner">
                                    <input type="text" placeholder="Enter Your Subject" />
                                </div>
                            </div> */}
                            <div className="col-12">
                                <div className="form-inner">
                                    <textarea
                                        rows={5}
                                        placeholder="Enter Post Description"
                                        name="description"
                                        value={PostData?.description}
                                        onChange={handleChangePostData}
                                    />
                                </div>
                            </div>

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


                            {
                                !IsUploaded && ImageBlob && <div className="col-6">
                                    <div className="form-inner">
                                        <button onClick={uploadImageToCloud} type="submit" className="eg-btn btn--primary btn--sm m-2">
                                            Upload
                                        </button>
                                    </div>
                                </div>
                            }



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





                            {
                                PostData.title && PostData?.description && <>

                                    <div className="col-12">
                                        <div className="form-inner">
                                            <input onChange={handleChangePostData} name="externalLink" value={PostData?.externalLink || ""} type="text" placeholder="External link" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button onClick={publishPost} type="submit" className="eg-btn btn--primary btn--lg">
                                            Publish
                                        </button>
                                    </div>
                                </>
                            }

                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}



export default CreatePost;
