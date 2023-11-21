import React from "react";

function CreatePost() {
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
                            <div className="col-12">
                                <button type="submit" className="eg-btn btn--primary btn--lg">
                                    Send Message
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
