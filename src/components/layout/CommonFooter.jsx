// VISITED: SUBHRANSHU CHOUDHURY

import Link from 'next/link'
import { useContext } from 'react'
import Socials from '@/data/topbar/social.json'
import { VisitorCounter } from '../VisitorCounter'
import { ThemeContext } from '../ThemeContext'

function CommonFooter() {
  const { theme } = useContext(ThemeContext);
  return (
    <footer className="style-1">
      <div className="container">
        <div className="row justify-content-start align-items-start pt-90 pb-90 gy-5">
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="footer-info">
              <Link legacyBehavior href="/">
                <a className="footer-logo">
                  <img width={100} src="/assets/images/logo/jnvkaa-logo2.png" alt="image" />
                </a>
              </Link>
              <h3 className={`${theme === "dark" ? "text-light" : ""}`}>We Would Love To Having You.</h3>
            </div>

          </div>

          <div className="col-xl-3 col-lg-2 col-md-6 col-sm-6 col-6">
            <h4 className={`footer-title ${theme === "dark" ? "text-light" : ""}`}>Quick Link</h4>
            <ul className="footer-list">
              <li><Link legacyBehavior href="/teachers"><a className={`${theme === "dark" ? "text-light" : ""}`}>Teachers</a></Link></li>
              <li><Link legacyBehavior href="/about"><a className={`${theme === "dark" ? "text-light" : ""}`}>About</a></Link></li>
              <li><Link legacyBehavior href="/contact"><a className={`${theme === "dark" ? "text-light" : ""}`}>Contact</a></Link></li>
            </ul>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6">
            <h4 className={`footer-title ${theme === "dark" ? "text-light" : ""}`}>Social Media</h4>
            <ul className="social-2">

              {
                Socials?.map((val, i) => (
                  <li key={i}>
                    <a href={val?.link}>
                      <div className={`icon ${theme === "dark" ? "border border-light" : ""}`}>
                        <i className={`${val?.icon} ${theme === "dark" ? "text-light" : ""}`} />
                      </div>
                      <p className={`${theme === "dark" ? "text-light" : ""}`}>{val?.platform}</p>
                    </a>
                  </li>
                ))
              }


            </ul>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6">
            <h4 className={`footer-title ${theme === "dark" ? "text-light" : ""}`}>Visitor Counter</h4>
            <ul className="social-2">
              <VisitorCounter />
            </ul>
          </div>
        </div>
        <div className="help-center d-flex justify-content-md-between justify-content-center align-items-center">
          <h5><Link legacyBehavior href="/contact"><a className={`${theme === "dark" ? "text-light" : ""}`}>Contact Us</a></Link></h5>
          <ul className="help-list">
            <li><a href="/privacy-policy" className={`${theme === "dark" ? "text-light text-hover" : ""}`}>Privacy Policy</a></li>
            <li><a href="/terms-and-conditions" className={`${theme === "dark" ? "text-light text-hover" : ""}`}>Terms &amp; Conditions</a></li>
            <li><Link legacyBehavior href="/contact"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>Contact</a></Link></li>
          </ul>
        </div>
        <div className="row copyright-area">

          <div className={`col-lg-12 text-center ${theme === "dark" ? "text-light" : ""} `}>
            <p>© 2023 <a href="#">JNVKAA</a>, Kendrapara</p>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default CommonFooter
