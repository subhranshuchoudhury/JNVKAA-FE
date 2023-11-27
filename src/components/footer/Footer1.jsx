// VISITED: SUBHRANSHU CHOUDHURY

import Link from 'next/link'
import React from 'react'
import Socials from '@/data/topbar/social.json'
function Footer1() {
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
          <div className="col-xl-4 col-lg-5 col-md-6">
            <h4 className="footer-title">Recent Posts by Members</h4>
            <div className="blog-list-1 mb-25">
              <Link legacyBehavior href="/post-format-no-sidebar-02">
                <a className="image">
                  <img src="/assets/images/blog-list/blog-list1-1.jpg" alt="image" />
                </a>
              </Link>
              <div className="content">
                <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Our Begin Now To Being What You Will Be.</a></Link></h6>
                <ul>
                  <li><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Nov 02, 2022</a></Link></li>
                  <li><Link legacyBehavior href="/post-format-no-sidebar-02"><a>520 Comment</a></Link></li>
                </ul>
              </div>
            </div>
            <div className="blog-list-1">
              <Link legacyBehavior href="/post-format-no-sidebar-02">
                <a className="image">
                  <img src="/assets/images/blog-list/blog-list1-2.jpg" alt="image" />
                </a>
              </Link>
              <div className="content">
                <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Our Begin Now To Being What You Will Be.</a></Link></h6>
                <ul>
                  <li><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Nov 11, 2022</a></Link></li>
                  <li><Link legacyBehavior href="/post-format-no-sidebar-02"><a>454 Comment</a></Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-2 col-md-6 col-sm-6 col-6">
            <h4 className="footer-title">Quick Link</h4>
            <ul className="footer-list">
              <li><Link legacyBehavior href="/about"><a>About</a></Link></li>
              <li><Link legacyBehavior href="events"><a>Topic</a></Link></li>
              <li><Link legacyBehavior href="/post"><a>Post</a></Link></li>
              <li><Link legacyBehavior href="/feature"><a>Feature</a></Link></li>
              <li><Link legacyBehavior href="/contact"><a>Contact</a></Link></li>
            </ul>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6">
            <h4 className="footer-title">Social Media</h4>
            <ul className="social-2">

              {
                Socials?.map((val, i) => (
                  <li>
                    <a href={val?.link}>
                      <div className="icon">
                        <i className={val?.icon} />
                        <span>{val?.count}</span>
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
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms &amp; Conditions</a></li>
            <li><a href="#">Services</a></li>
            <li><Link legacyBehavior href="/contact"><a>Help</a></Link></li>
          </ul>
        </div>
        <div className="row copyright-area">
          <div className="col-lg-12 text-center">
            <p>© 2023 <a href="#">Navodaya</a>, Kendrapara</p>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer1
