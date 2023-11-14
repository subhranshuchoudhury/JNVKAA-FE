import React, { useState } from 'react'
import "../styles/Login.module.css"
import { LoginAlumni } from '@/utils/fetch';
import toast from 'react-hot-toast';
function Login() {

  const [Data, setData] = useState(null);
  const [Mobile, setMobile] = useState("");
  const [Password, setPassword] = useState("");

  const AsyncLogin = async (event) => {
    event.preventDefault();

    console.log(Mobile, Password);

    const response = await LoginAlumni(Mobile, Password);
    setData(response);

    if (response.status === 200) {
      toast.success("Login Successfull");
    } else {
      toast.error("Login Failed");

    }


  }

  return (

    <div className='d-flex align-items-center py-4 bg-body-tertiary'>

      <main className="form-signin m-auto">
        <form>
          <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
          <h1 className="h3 mb-3">Login</h1>

          <div className="form-floating mb-2">
            <input onChange={(e) => setMobile(e.target.value)} value={Mobile} type="tel" className="form-control" id="floatingInput" placeholder="824958XXXX" />
            <label htmlFor="floatingInput">Mobile No</label>
          </div>
          <div className="form-floating">
            <input onChange={(e) => setPassword(e.target.value)} value={Password} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="form-check text-start my-3">
            <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Remember me
            </label>
          </div>
          <button className="btn btn-primary w-100 py-2" onClick={(e) => AsyncLogin(e)}>Login</button>
          <p className="mt-5 mb-3 text-body-secondary">&copy; JNKAA 2023</p>
        </form>
      </main>
    </div>
  )
}

export default Login;