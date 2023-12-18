import React from "react";
import socialHandles from "@/data/topbar/social.json";
import Link from "next/link";
function contact() {
  return (
    <section className="contact-section pt-100 pb-100">
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
                    <input type="text" placeholder="Enter Your Name" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-inner">
                    <input type="email" placeholder="Enter your email" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-inner">
                    <input type="text" placeholder="Enter Your Subject" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-inner">
                    <textarea
                      rows={5}
                      placeholder="Enter Your Message"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <Link href="mailto:jnvkpara@gmail.com" type="submit" className="eg-btn btn--primary btn--lg">
                    Send Mail
                  </Link>
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
