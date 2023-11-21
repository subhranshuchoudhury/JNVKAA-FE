import Image from "next/image";
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import toast from "react-hot-toast";
function CreatePost() {


    const fileTypes = ['PNG', 'JPEG', 'JPG'];
    const [PreviewImageBase64, setPreviewImage] = useState(null);

    const previewImage = (event) => {

        var input = event.target;
        console.log(input.files);
        if (input.files && input.files[0]) {

            if (input.files[0].size >= 125000) {
                toast.error("File size is greater than 1MB", {
                    icon: "⚠"
                })
                setPreviewImage(null)
                return;
            }
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
                                    <input type="text" placeholder="Enter Title" />
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
                                        defaultValue={""}
                                    />
                                </div>
                            </div>

                            {
                                PreviewImageBase64 && <div className="col-12">
                                    <div className="form-inner">
                                        <Image alt="preview image" width={200} height={200} src={PreviewImageBase64} />
                                    </div>
                                </div>
                            }

                            <div className="col-12">
                                <div className="form-inner">
                                    <input onChange={previewImage} type="file" />
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="form-inner">
                                    <input onChange={() => { }} type="text" placeholder="External link" />
                                </div>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="eg-btn btn--primary btn--lg">
                                    POST
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}



export default CreatePost;
