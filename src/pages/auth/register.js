import React, { useState } from 'react'
import { RegisterAlumni } from '@/utils/fetch';
import toast from 'react-hot-toast';
import Link from 'next/link';
import social from '@/data/topbar/social.json';
import { checkRegisterStepOne } from '@/utils/validator';
import { useRouter } from 'next/router';

function Register() {

    const [Data, setData] = useState(null);
    const [Name, setName] = useState("");
    const [Mobile, setMobile] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");


    const router = useRouter();

    const AsyncRegister = async (event) => {
        event.preventDefault();

        const validatorResponse = checkRegisterStepOne(Name, Mobile, Password, ConfirmPassword);

        if (validatorResponse.response) {
            return toast.error(validatorResponse.message);
        }
        const loadingToast = toast.loading("Please wait...");
        const response = await RegisterAlumni(Mobile, Password, Name);
        toast.dismiss(loadingToast);
        setData(response);

        if (response.status === 200) {
            toast.success(response.data.message);
            router.push(`/auth/otp/${Mobile}`);
        } else {

            if (response.status === 301) {

                toast.error("Redirecting to verify...", {
                    icon: "🚀",
                })

                router.push(`/auth/otp/${Mobile}`);

            } else {

                toast.error("response.data.message");
            }
        }

    }
    return (

        <section className="contact-section pt-100 pb-100">
            <div className="container">
                <div className="row gy-4 justify-content-center align-items-center">

                    <div className="col-lg-7">
                        <div className="form-title">
                            <h2>Register Here!</h2>
                        </div>
                        <form className="contact-form">
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-inner">
                                        <input onChange={e => setName(e.target.value)} value={Name} type="text" placeholder="Enter Your Name" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-inner">
                                        <input onChange={e => setMobile(e.target.value)} value={Mobile} type="tel" placeholder="Mobile" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-inner">
                                        <input onChange={e => setPassword(e.target.value)} value={Password} type="password" placeholder="Password (min 6 characters)" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-inner">
                                        <input onChange={e => setConfirmPassword(e.target.value)} value={ConfirmPassword} type="password" placeholder="Confirm Password" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button onClick={AsyncRegister} type="submit" className="eg-btn btn--primary btn--lg">
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
                                    reply you as soon as possible. Otherwise you can forgot your password whenever you want.
                                </p>
                            </div>
                            <div className="left-social">
                                <ul>

                                    {
                                        social.map((item, index) => {
                                            return <li key={index}>
                                                <a href={item?.link}>
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
                                <div className="single-info">
                                    <div className="icon">
                                        <i className="bi bi-person-square" />
                                    </div>
                                    <div className="info">
                                        <Link href="/auth/teacher-register">Are you a teacher?</Link>
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

export default Register;