import React, { useState } from 'react'
import "../styles/Login.module.css"
import { LoginAlumni } from '@/utils/fetch';
import toast from 'react-hot-toast';
import Link from 'next/link';
import social from '@/data/topbar/social.json';
import { checkLogin } from '@/utils/validator';
import { getCookie, setCookie } from "cookies-next";
function Login() {

  const [Data, setData] = useState(null);
  const [Mobile, setMobile] = useState("");
  const [Password, setPassword] = useState("");

  const AsyncLogin = async (event) => {
    event.preventDefault();

    if (checkLogin(Mobile, Password).response) {
      return toast.error(checkLogin(Mobile, Password).message);
    }
    const response = await LoginAlumni(Mobile, Password);
    setData(response);

    if (response.status === 200) {
      toast.success(response.data.message);
      setCookie("token", response.data.accessToken, { maxAge: 60 * 60 * 24 });
      localStorage.setItem("userData", JSON.stringify(response.data.data));
    } else {
      toast.error(response.data.message);
    }
  }




  return (

    <section className="contact-section pt-100 pb-100">
      <div className="container">
        <div className="row gy-4 justify-cotnent-center align-items-center">
          <div className="col-lg-5 pe-lg-5 pe-0">
            <div className="contact-box">
              <div className="title">
                <h3>Facing Problem ?</h3>
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
                    <a href="tel:918249587552">+91 8249587552</a>
                    {/* <a href="tel:06571111576">+880 657 1111 576</a> */}
                  </div>
                </div>
                <div className="single-info">
                  <div className="icon">
                    <i className="bi bi-envelope" />
                  </div>
                  <div className="info">
                    <Link href="/forgot-password">Forgot Password?</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="form-title">
              <h2>Login To Your Account</h2>
            </div>
            <form className="contact-form">
              <div className="row">
                <div className="col-6">
                  <div className="form-inner">
                    <input onChange={e => setMobile(e.target.value)} value={Mobile} type="tel" placeholder="Enter Your Mobile" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-inner">
                    <input onChange={e => setPassword(e.target.value)} value={Password} type="password" placeholder="Enter Your Password" />
                  </div>
                </div>
                <div className="col-12">
                  <button onClick={AsyncLogin} type="submit" className="eg-btn btn--primary btn--lg">
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login;