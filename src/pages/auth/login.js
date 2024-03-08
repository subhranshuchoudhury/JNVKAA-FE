import React, { useState } from 'react'
import { LoginAlumni } from '@/utils/fetch';
import toast from 'react-hot-toast';
import Link from 'next/link';
import social from '@/data/topbar/social.json';
import { checkLogin } from '@/utils/validator';
import { setCookie } from "cookies-next";
import { useRouter } from 'next/router';

function Login() {

  const [Data, setData] = useState(null);
  const [Mobile, setMobile] = useState("");
  const [Password, setPassword] = useState("");

  const router = useRouter();

  const AsyncLogin = async (event) => {
    event.preventDefault();

    if (checkLogin(Mobile, Password).response) {
      return toast.error(checkLogin(Mobile, Password).message);
    }
    const loadingToast = toast.loading("Please wait...");
    const response = await LoginAlumni(Mobile, Password);
    toast.dismiss(loadingToast);
    setData(response);

    if (response.status === 200) {
      toast.success("Welcome " + response.data.name.split(" ")?.[0] + " 👋");
      setCookie("token", response.data.accessToken, { maxAge: 60 * 60 * 24 * 365 * 3 });
      setCookie("isProfileCompleted", response.data.isProfileCompleted, { maxAge: 60 * 60 * 24 * 365 * 3 })
      setCookie("userType", "TEACHER", { maxAge: 60 * 60 * 24 * 365 * 3 });

      localStorage.setItem("userData", JSON.stringify(response.data.data));

      if (response.data.isProfileCompleted) {
        window.location.href = "/alumnus";
      } else {
        window.location.href = "/profile/update-profile";

      }
    } else {
      toast.error(response.data.message);
    }

  }
  return (

    <section className="contact-section pt-100 pb-100">
      <div className="container">
        <div className="row gy-4 justify-content-center align-items-center">

          <div className="col-lg-7">
            <div className="form-title">
              <h2>Login Here!</h2>
            </div>
            <form className="contact-form">
              <div className="row">
                <div className="col-6">
                  <div className="form-inner">
                    <input onChange={e => setMobile(e.target.value)} value={Mobile} type="tel" placeholder="Mobile" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-inner">
                    <input onChange={e => setPassword(e.target.value)} value={Password} type="password" placeholder="Password" />
                  </div>
                </div>
                <div className="col-12">
                  <button onClick={AsyncLogin} type="submit" className="eg-btn btn--primary btn--lg">
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
                {/* <div className="single-info">
                  <div className="icon">
                    <i className="bi bi-envelope" />
                  </div>
                  <div className="info">
                    <Link href="/forgot-password">Forgot Password?</Link>
                  </div>
                </div> */}
                <div className="single-info">
                  <div className="icon">
                    <i className="bi bi-person-square" />
                  </div>
                  <div className="info">
                    <Link href="/auth/login-teacher">Are you a teacher?</Link>
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

export default Login;