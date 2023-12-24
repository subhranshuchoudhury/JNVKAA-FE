// VISITED: SUBHRANSHU CHOUDHURY

import Link from 'next/link'
import React from 'react'
import Socials from '@/data/topbar/social.json'
function CommonFooter() {
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
              <h3>We Would Love To Having You.</h3>
            </div>

          </div>

          <div className="col-xl-3 col-lg-2 col-md-6 col-sm-6 col-6">
            <h4 className="footer-title">Quick Link</h4>
            <ul className="footer-list">
              <li><Link legacyBehavior href="/teachers"><a>Teachers</a></Link></li>
              <li><Link legacyBehavior href="/about"><a>About</a></Link></li>
              <li><Link legacyBehavior href="/contact"><a>Contact</a></Link></li>
            </ul>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6">
            <h4 className="footer-title">Social Media</h4>
            <ul className="social-2">

              {
                Socials?.map((val, i) => (
                  <li key={i}>
                    <a href={val?.link}>
                      <div className="icon">
                        <i className={val?.icon} />
                        {/* <span>{val?.count}</span> */}
                      </div>
                      <p>{val?.platform}</p>
                    </a>
                  </li>
                ))
              }


            </ul>
          </div>
        </div>
        <div className="help-center d-flex justify-content-md-between justify-content-center align-items-center">
          <h5><Link legacyBehavior href="/contact"><a>Contact Us</a></Link></h5>
          <ul className="help-list">
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-and-conditions">Terms &amp; Conditions</a></li>
            <li><Link legacyBehavior href="/contact"><a>Contact</a></Link></li>
          </ul>
        </div>
        <div className="row copyright-area">
          <div className="col-lg-12 text-center">
            <p>© 2023 <a href="#">JNVKAA</a>, Kendrapara</p>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default CommonFooter
