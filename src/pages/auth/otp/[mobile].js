import React, { useEffect, useState } from 'react'
import { sendOTP, verifyOTP } from '@/utils/fetch';
import toast from 'react-hot-toast';
import Link from 'next/link';
import social from '@/data/topbar/social.json';
import { setCookie } from "cookies-next";
import { checkOTP, checkSendOTP } from '@/utils/validator';
import { useRouter } from 'next/router'


function OTPVerify(props) {

    const router = useRouter()
    const [Data, setData] = useState(null);
    const [OTP, setOTP] = useState("")
    const [IsOTPSent, setIsOTPSent] = useState(false)

    const asyncSendOTP = async (event, mobile) => {
        event.preventDefault();

        const validatorResponse = checkSendOTP(mobile);

        if (validatorResponse.response) {
            return toast.error(validatorResponse.message);
        }
        const loadingToast = toast.loading("Please wait...");
        const response = await sendOTP(mobile);
        toast.dismiss(loadingToast);
        setData(response);

        if (response.status === 200) {
            toast.success(response.data.message);
        } else {
            toast.error(response.data.message + " ECODE: " + response.status);
        }

        if (response.status === 200 || response.status === 400) {
            setIsOTPSent(true)
        }

    }

    const asyncVerifyOTP = async (event, mobile, otp) => {
        event.preventDefault();

        const validatorResponse = checkOTP(otp);

        if (validatorResponse.response) {
            return toast.error(validatorResponse.message);
        }
        const loadingToast = toast.loading("Please wait...");
        const response = await verifyOTP(mobile, otp);
        toast.dismiss(loadingToast);
        setData(response);

        if (response.status === 200) {
            toast.success(response.data.message);
            setCookie("token", response.data.accessToken, { maxAge: 60 * 60 * 24 });
            localStorage.setItem("userData", JSON.stringify(response.data.data));
            window.location.href = "/posts/alumni";

        } else {
            toast.error(response.data.message + " ECODE: " + response.status);
        }
    }
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
                                        <input disabled value={router.query.mobile || 0} type="tel" placeholder="Mobile" />
                                    </div>
                                </div>

                                {
                                    IsOTPSent && <div className="col-12">
                                        <div className="form-inner">
                                            <input onWheel={
                                                (e) => {
                                                    e.target.blur()
                                                }
                                            } onChange={e => setOTP(e.target.value)} value={OTP} type="number" placeholder="Enter OTP" />
                                        </div>
                                    </div>
                                }



                                {
                                    router.query.mobile && <div className="col-6">
                                        <button onClick={(e) => asyncSendOTP(e, router.query.mobile)} type="submit" className="eg-btn btn--primary btn--lg">
                                            {
                                                IsOTPSent ? "Resend OTP" : "Send OTP"
                                            }
                                        </button>
                                    </div>
                                }

                                {
                                    IsOTPSent && <div className="col-6">
                                        <button onClick={(e) => asyncVerifyOTP(e, router.query.mobile, OTP)} type="submit" className="eg-btn btn--primary btn--lg">
                                            Verify OTP
                                        </button>
                                    </div>
                                }

                            </div>
                        </form>
                    </div>

                    <div className="col-lg-5 pe-lg-5 pe-0">
                        <div className="contact-box">
                            <div className="title">
                                <h3>Any Issues?</h3>
                                <p>
                                    If you are facing any problem please contact with us. We will
                                    reply you as soon as possible. Otherwise you can forgot your password whenever you want.
                                </p>
                            </div>
                            <div className="left-social">
                                <ul>

                                    {
                                        social.map((item, index) => {
                                            return <li key={index}>
                                                <a href="https://www.instagram.com/jnvkaa">
                                                    <i className={item?.icon} />
                                                    {/* {item?.count} */}
                                                </a>
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
                                        <a href="tel:8249587552">+91 8249587552</a>
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
    )
}

export default OTPVerify;