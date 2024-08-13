import { ThemeContext } from "@/components/ThemeContext";
import { sendOTP } from "@/utils/fetch";
import { checkSendOTP } from "@/utils/validator";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import social from "@/data/topbar/social.json";
import Link from "next/link";

const ForgetPassword = () => {
  const { theme } = useContext(ThemeContext);
  const [Mobile, setMobile] = useState("");
  const asyncForgetPassword = async (e) => {
    e.preventDefault();
    if (checkSendOTP(Mobile).response) {
      return toast.error(checkSendOTP(Mobile).message);
    }
    const loadingText = toast.loading("Please wait...");
    const response = await sendOTP(Mobile);
    toast.dismiss(loadingText);

    if (response.status === 200) {
      toast.success(response.data.message);
      window.location.href = `/auth/verify-otp/${Mobile}`;
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <section className="contact-section pt-100 pb-100">
      <div className="container">
        <div className="row gy-4 justify-content-center align-items-center">
          <div className="col-lg-7">
            <div className="form-title">
              <h2 className={`${theme === "dark" ? "text-light" : ""}`}>
                Forgot Password
              </h2>
            </div>
            <form className="contact-form">
              <div className="row">
                <div className="col-12">
                  <div className="form-inner">
                    <input
                      onChange={(e) => setMobile(e.target.value)}
                      value={Mobile}
                      type="tel"
                      placeholder="Mobile"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <button
                    onClick={asyncForgetPassword}
                    type="submit"
                    className="eg-btn btn--primary btn--lg"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-5 pe-lg-5 pe-0">
            <div className="contact-box">
              <div className="title">
                <h3>Any Issues?</h3>
                <p>
                  If you are facing any problem please contact with us. We will
                  reply you as soon as possible. Otherwise you can forgot your
                  password whenever you want.
                </p>
              </div>
              <div className="left-social">
                <ul>
                  {social.map((item, index) => {
                    return (
                      <li key={index}>
                        <a href={item?.link}>
                          <i className={item?.icon} />
                          {/* {item?.count} */}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="informations">
                <div className="single-info">
                  <div className="icon">
                    <i className="bi bi-telephone-fill" />
                  </div>
                  <div className="info">
                    <a href="tel:7656826945">+91 7656826945</a>
                    {/* <a href="tel:06571111576">+880 657 1111 576</a> */}
                  </div>
                </div>
                <div className="single-info">
                  <div className="icon">
                    <i className="bi bi-lock" />
                  </div>
                  <div className="info">
                    <Link href="/auth/login">Already have an account?</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;
