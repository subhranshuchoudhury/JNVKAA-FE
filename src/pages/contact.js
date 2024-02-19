import React, { useState } from "react";
import socialHandles from "@/data/topbar/social.json";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { postSupport } from "@/utils/fetch";
function contact() {

  const [PostData, setPostData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""

  });

  const handleInputChange = (e) => {
    setPostData({ ...PostData, [e.target.name]: e.target.value });
  }

  const sendMail = async (e) => {
    e.preventDefault();
    if (!PostData.name || !PostData.email || !PostData.subject || !PostData.message) {
      toast.error("All fields are required");
      return;
    }
    const sendingMailToast = toast.loading("Sending mail...");
    const response = await postSupport(PostData);
    toast.dismiss(sendingMailToast);
    if (response?.status === 200) {
      toast.success("Mail sent successfully");
    } else {
      toast.error("Mail not sent");
    }
  }
  return (
    <section className="contact-section pt-100 pb-100">
      <Toaster />
      <div className="container">
        <div className="row gy-4 justify-cotnent-center align-items-center">
          <div className="col-lg-5 pe-lg-5 pe-0">
            <div className="contact-box">
              <div className="title">
                <h3>Contact Us</h3>
                <p>
                  If you have any queries or doubt then contact on our official handles.{" "}
                </p>
              </div>
              <div className="left-social">
                <ul>
                  {
                    socialHandles?.map((social, index) => {
                      return <li key={index}>
                        <a href={social?.link}><i className={social?.icon} /></a>
                      </li>
                    })
                  }
                </ul>
              </div>
              <div className="informations">
                <div className="single-info">
                  <div className="icon">
                    <i className="bi bi-telephone-fill" />
                  </div>
                  <div className="info">
                    <a href="tel:05661111985">+91 9348463339</a>
                    <a href="tel:06571111576">+971 509046495</a>
                  </div>
                </div>
                <div className="single-info">
                  <div className="icon">
                    <i className="bi bi-envelope" />
                  </div>
                  <div className="info">
                    <a href="mailto:jnvkpara@gmail.com">jnvkpara@gmail.com</a>
                    {/* <a href="mailto: info@support.com">info@support.com</a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="form-title">
              <h2>Have Any Questions</h2>
            </div>
            <form className="contact-form">
              <div className="row">
                <div className="col-12">
                  <div className="form-inner">
                    <input value={PostData.name} name="name" onChange={handleInputChange} type="text" placeholder="Enter Your Name" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-inner">
                    <input value={PostData.email} name="email" onChange={handleInputChange} type="email" placeholder="Enter your email" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-inner">
                    <input value={PostData.subject} name="subject" onChange={handleInputChange} type="text" placeholder="Enter Your Subject" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-inner">
                    <textarea
                      name="message"
                      value={PostData.message}
                      onChange={handleInputChange}
                      rows={5}
                      placeholder="Enter Your Message"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <button onClick={sendMail} className="eg-btn btn--primary btn--lg">
                    Send Mail
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default contact;
