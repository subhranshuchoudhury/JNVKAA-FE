import React, { useEffect, useState } from "react";
import { forgotPassword, sendOTP, verifyOTP } from "@/utils/fetch";
import toast from "react-hot-toast";
import Link from "next/link";
import social from "@/data/topbar/social.json";
import { setCookie } from "cookies-next";
import { checkOTP, checkResetPassword, checkSendOTP } from "@/utils/validator";
import { useRouter } from "next/router";

function ResetPassword() {
  const router = useRouter();
  const [OTP, setOTP] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const asyncSendOTP = async (event, mobile) => {
    event.preventDefault();

    const validatorResponse = checkSendOTP(mobile);

    if (validatorResponse.response) {
      return toast.error(validatorResponse.message);
    }
    const loadingToast = toast.loading("Please wait...");
    const response = await sendOTP(mobile);
    toast.dismiss(loadingToast);

    if (response.status === 200) {
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  const asyncResetPassword = async (e) => {
    e.preventDefault();

    const checkResetPasswordResponse = checkResetPassword(
      newPassword,
      OTP,
      router.query.mobile
    );
    if (checkResetPasswordResponse.response) {
      return toast.error(checkResetPasswordResponse.message);
    }

    const loadingText = toast.loading("Please wait...");
    const response = await forgotPassword(
      router.query.mobile,
      newPassword,
      OTP
    );
    toast.dismiss(loadingText);

    if (response.status === 200) {
      toast.success(response.data.message);
      window.location.href = "/auth/login";
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
              <h2>Verify OTP</h2>
            </div>
            <form className="contact-form">
              <div className="row">
                <div className="col-12">
                  <div className="form-inner">
                    <input
                      onWheel={(e) => {
                        e.target.blur();
                      }}
                      onChange={(e) => setOTP(e.target.value)}
                      value={OTP}
                      type="number"
                      placeholder="Enter OTP"
                      className="default-arrow-remove"
                    />
                  </div>
                </div>
                {router.query.mobile && (
                  <div className="col-12">
                    <div className="form-inner">
                      <input
                        onWheel={(e) => {
                          e.target.blur();
                        }}
                        onChange={(e) => setNewPassword(e.target.value)}
                        value={newPassword}
                        type="password"
                        placeholder="Enter New Password"
                      />
                    </div>
                  </div>
                )}

                {router.query.mobile && (
                  <div className="col-6">
                    <button
                      onClick={(e) => asyncSendOTP(e, router.query.mobile)}
                      type="submit"
                      className="eg-btn btn--primary btn--lg"
                    >
                      Resend OTP
                    </button>
                  </div>
                )}

                <div className="col-6">
                  <button
                    onClick={(e) => asyncResetPassword(e)}
                    type="submit"
                    className="eg-btn btn--primary btn--lg"
                  >
                    Reset Password
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
}

export default ResetPassword;
