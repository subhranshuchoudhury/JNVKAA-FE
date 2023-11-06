import Link from 'next/link'
import React from 'react'

function Footer4() {
  return (
    <footer className="style-4">
    <div className="container">
      <div className="footer-top">
        <div className="row align-items-center">
          <div className="col-lg-3">
            <div className="footer-title">
              <h5>Quick Link</h5>
            </div>
            <ul className="footer-list">
              <li><Link legacyBehavior href="/about"><a>About</a></Link></li>
              <li><Link legacyBehavior href="/gallery-post-format"><a>Gallery Post</a></Link></li>
              <li><Link legacyBehavior href="/topic"><a>Topic</a></Link></li>
              <li><Link legacyBehavior href="/video-post-format"><a>Video Post</a></Link></li>
              <li><Link legacyBehavior href="/post-format-no-sidebar-01"><a>Post</a></Link></li>
              <li><Link legacyBehavior href="/blog-standard"><a>Recent Post</a></Link></li>
              <li><Link legacyBehavior href="/blog-classic"><a>Blog</a></Link></li>
              <li><Link legacyBehavior href="/blog-masonary"><a>Trending</a></Link></li>
              <li><Link legacyBehavior href="/contact"><a>Contact</a></Link></li>
              <li><Link legacyBehavior href="/blog-classic"><a>New Article</a></Link></li>
            </ul>
          </div>
          <div className="col-lg-6">
            <div className="footer-info text-lg-center text-start">
              <Link legacyBehavior href="/"><a><img src="assets/images/logo/footer-logo.svg" alt="image" /></a></Link>
              <h3><span>Feel</span> Free To <br />
                <span>Read Article</span>, Anytime.
              </h3>
              <ul className="about-list d-flex gap-3 justify-content-lg-center">
                <li><a href="#">Terms</a></li>
                <li><Link legacyBehavior href="/about"><a>Condition</a></Link></li>
                <li><a href="#">Privacy</a></li>
                <li><Link legacyBehavior href="/contact"><a>Policy</a></Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-author">
              <h4>Become <span>An Author</span> And Share
                Your Great Stories.</h4>
              <a href="#" className="eg-btn btn--lg btn--primary-4">Become An Author</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="copyright">
          <p>© 2023 Blogxton is Proudly Powered by <a href="https://www.egenstheme.com/">Egens Theme</a></p>
        </div>
        <div className=" footer-social">
          <ul>
            <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
            <li><a href="https://www.twitter.com/"><i className="bx bxl-twitter" /></a></li>
            <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a></li>
            <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  
  )
}

export default Footer4
