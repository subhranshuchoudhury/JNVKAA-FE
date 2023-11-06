import Link from 'next/link'
import React from 'react'

function NewsLatter() {
  return (
    <div className="newsletter-section3 pt-120 pb-120" id="newsletter" style={{backgroundImage: 'url("assets/images/bg/newsletter-bg3.png")'}}>
    <div className="container-fluid">
      <div className="newsletter-3-wrapper">
        <div className="content">
          <h3>Get the best blog stories into your inbox <Link legacyBehavior href="/contact"><a>Connect Us.</a></Link> now.</h3>
        </div>
        <form className="newsletter">
          <div className="form-inner">
            <input type="email" name="email" placeholder="Enter Your Email..." />
            <button type="submit"><span className="d-md-flex d-none">Subscribe</span> <img src="assets/images/icons/arrow.svg" alt="image" /></button>
          </div>
        </form>
      </div>
    </div>
  </div>
  
  )
}

export default NewsLatter
