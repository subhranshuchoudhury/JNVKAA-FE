import React from 'react'
import "../styles/Login.module.css"
function Login() {
  return (

    <div className='d-flex align-items-center py-4 bg-body-tertiary'>

    <main className="form-signin m-auto">
  <form>
    <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
    <h1 className="h3 mb-3 fw-normal">Login</h1>

    <div className="form-floating mb-2">
      <input type="tel" className="form-control" id="floatingInput" placeholder="824958XXXX" />
      <label for="floatingInput">Mobile No</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
      <label for="floatingPassword">Password</label>
    </div>

    <div className="form-check text-start my-3">
      <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
      <label className="form-check-label" for="flexCheckDefault">
        Remember me
      </label>
    </div>
    <button className="btn btn-primary w-100 py-2" type="submit">Login</button>
    <p className="mt-5 mb-3 text-body-secondary">&copy; JNKAA 2023</p>
  </form>
</main>
    </div>
  )
}

export default Login;