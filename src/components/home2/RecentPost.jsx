import Link from 'next/link'
import React, { useState } from 'react'
import ModalVideo from 'react-modal-video';
function RecentPost() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="home-two-recent-post pb-100">
  <div className="container">
    <div className="row align-items-center mb-40">
      <div className="col-lg-12">
        <div className="section-title-2">
          <div className="titel">
            <h4>Recent Post</h4>
            <div className="dash" />
          </div>
          <Link legacyBehavior href="/blog-standard" ><a className="eg-btn arrow-btn-2 two">View Post<i className="bi bi-arrow-right" /></a></Link>
        </div>
      </div>
    </div>
    <div className="row justify-content-center g-lg-4 gy-5">
      <div className="col-lg-8">
        <div className="row justify-content-center gy-4">
          <div className="col-md-6 col-sm-6">
            <div className="blog-grid-1 two">
              <Link legacyBehavior href="/post-format-no-sidebar-02">
                <a  className="image">
                <img src="assets/images/recent-post/recent2-1.png" alt="image" />
                </a>
              </Link>
              <div className="content">
                <ul>
                  <li><Link legacyBehavior href="/author-details"><a>By Rison donec</a></Link></li>
                  <li><Link legacyBehavior href="/blog-classic"><a>Lifestyle</a></Link></li>
                </ul>
                <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a >Nulla Gotem sem imperdie foret eget elitat
                    sollicitudin.</a></Link></h4>
                <div className="bottom-area">
                  <Link legacyBehavior href="/post-format-no-sidebar-02"><a className=" eg-btn arrow-btn two">View Details<i className="bi bi-arrow-right" /></a></Link>
                  <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z">
                      </path>
                    </svg>2 Day Read</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="blog-grid-1 two">
              <Link legacyBehavior href="/post-format-no-sidebar-02">
                <a  className="image">
                <img src="assets/images/recent-post/recent2-2.png" alt="image" />
                </a>
              </Link>
              <div className="content">
                <ul>
                  <li><Link legacyBehavior href="/author-details"><a>By Dani Alves</a></Link></li>
                  <li><Link legacyBehavior href="/blog-classic"><a>Entertainment</a></Link></li>
                </ul>
                <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Maecenas ullamcorper urna jusi non enim aliquet.</a></Link>
                </h4>
                <div className="bottom-area">
                  <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn two">View Details<i className="bi bi-arrow-right" /></a></Link>
                  <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z">
                      </path>
                    </svg>2 Day Read</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="blog-grid-1 two">
              <Link legacyBehavior href="/post-format-no-sidebar-02">
                <a  className="image">
                <img src="assets/images/recent-post/recent2-3.png" alt="image" />
                </a>
              </Link>
              <div className="content">
                <ul>
                  <li><Link legacyBehavior href="/author-details"><a>By Thiago Silva</a></Link></li>
                  <li><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></li>
                </ul>
                <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>blandit sit amet diam eu luctus hendrerit.
                    Praesent.</a></Link></h4>
                <div className="bottom-area">
                  <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn two">View Details<i className="bi bi-arrow-right" /></a></Link>
                  <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z">
                      </path>
                    </svg>2 Day Read</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="blog-grid-1 two">
              <Link legacyBehavior href="/post-format-no-sidebar-02">
                <a  className="image">
                <img src="assets/images/recent-post/recent2-4.png" alt="image" />
                </a>
              </Link>
              <div className="content">
                <ul>
                  <li><Link legacyBehavior href="/author-details"><a>By Allison Baker</a></Link></li>
                  <li><Link legacyBehavior href="/blog-classic"><a>Fashion</a></Link></li>
                </ul>
                <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Quisque ipsum diam fringil one non exsit ametpe.</a></Link>
                </h4>
                <div className="bottom-area">
                  <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn two">View Details<i className="bi bi-arrow-right" /></a></Link>
                  <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z">
                      </path>
                    </svg>2 Day Read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="section-title-2 two mb-30">
          <h4>Another Post</h4>
          <div className="dash" />
        </div>
        <div className="another-post-area mb-50">
          <div className="recent-list-1 mb-25">
            <div className="image">
              <img src="assets/images/blog-list/video-img1.jpg" alt="image" />
              <div className="video-play2">
                <div onClick={()=>setOpen(true)} data-fancybox="popup-youtube"><i className="bx bx-play" /></div>
              </div>
            </div>
            <div className="content">
              <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>gravida orci sed jaritob laoreet tellus.</a></Link>
              </h6>
              <ul>
                <li><Link legacyBehavior href="/blog-standard"><a>Nov 10, 2022</a></Link></li>
                <li><Link legacyBehavior href="/blog-standard"><a>520 Comment</a></Link></li>
              </ul>
            </div>
          </div>
          <div className="recent-list-1 mb-25">
            <div className="image">
              <img src="assets/images/blog-list/video-img2.jpg" alt="image" />
            </div>
            <div className="content">
              <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Vestibulum rhoncus euism Inurna oni
                  consequat.</a></Link></h6>
              <ul>
                <li><Link legacyBehavior href="/blog-standard"><a>Nov 10, 2022</a></Link></li>
                <li><Link legacyBehavior href="/blog-standard"><a>520 Comment</a></Link></li>
              </ul>
            </div>
          </div>
          <div className="recent-list-1 p-0">
            <div className="image">
              <img src="assets/images/blog-list/video-img3.jpg" alt="image" />
              <div className="video-play2">
                <div onClick={()=>setOpen(true)} data-fancybox="popup-youtube"><i className="bx bx-play" /></div>
              </div>
            </div>
            <div className="content">
              <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>pulvinar facilisis Sed turpa dapibusot
                  vitae.</a></Link></h6>
              <ul>
                <li><Link legacyBehavior href="/blog-standard"><a>Nov 10, 2022</a></Link></li>
                <li><Link legacyBehavior href="/blog-standard"><a>520 Comment</a></Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="stay-connect">
          <div className="section-title-2 two mb-30">
            <h4>Our Handles</h4>
          </div>
          <ul className="social-list">
            <li>
              <a href="https://www.facebook.com/"><span><i className="bx bxl-facebook" />Facebook</span><span><strong>3.5K</strong>
                  &nbsp;Like</span></a>
            </li>
            <li>
              <a href="https://www.twitter.com/"><span><i className="bx bxl-twitter" />Twitter</span><span><strong>60k</strong>
              &nbsp;Follower</span></a>
            </li>
            <li>
              <a href="https://www.pinterest.com/"><span><i className="bx bxl-pinterest-alt" />Pinterest</span><span><strong>25k</strong>
              &nbsp;Follower</span></a>
            </li>
            <li>
              <a href="https://www.instagram.com/"><span><i className="bx bxl-instagram" />Instagram</span><span><strong>75k</strong>
              &nbsp;Follower</span></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <ModalVideo
				channel="youtube"
				youtube={{ mute: 0, autoplay: 0 }}
				isOpen={isOpen}
				videoId="L61p2uyiMSo"
				onClose={() => setOpen(false)} 
			/>
</div>

  )
}

export default RecentPost
