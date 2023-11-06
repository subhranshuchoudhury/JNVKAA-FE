import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, EffectFade } from "swiper";
import { useMemo } from "react";
import Link from "next/link";
SwiperCore.use([Navigation, Autoplay, EffectFade]);

function SelectedPost() {
    const slider = useMemo(()=>{
        return {
            slidesPerView: "auto",
		speed: 1200,
		spaceBetween: 20,
		loop: true,
		roundLengths: true,
		navigation: {
			nextEl: ".selected-next",
			prevEl: ".selected-prev",
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: 'true',
		},
		breakpoints: {
			280: {
				slidesPerView: 1,
				navigation: false,
			},
			576: {
				slidesPerView: 1,
				navigation: false,
			},
			768: {
				slidesPerView: 2,
				navigation: false,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 4
			}
		}
        }
    })
  return (
    <div className="selected-post-section pt-120">
    <div className="row mb-40">
      <div className="col-sm-8">
        <div className="section-title-3">
          <img src="assets/images/icons/sec-title-vector.svg" alt="image" />
          <h2>Selected Posts</h2>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="slider-arrows arrow-style-3 text-center d-flex flex-row justify-content-end align-items-center gap-2">
          <div className="selected-next swiper-next-arrow" tabIndex={0} role="button" aria-label="Next slide">
            <i className="bi bi-arrow-left" />PRV
          </div>
          <div className="selected-prev swiper-prev-arrow" tabIndex={0} role="button" aria-label="Previous slide">NXT
            <i className="bi bi-arrow-right" />
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <Swiper {...slider} className="swiper selected-slider">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="blog-grid-5 style-2">
                <Link legacyBehavior href="/post-format-no-sidebar-02">
                    <a  className="image">
                    <div className="date">
                    <h4>03</h4>
                    <span>August</span>
                  </div>
                  <img src="assets/images/blog-grid/select-post1.jpg" alt="image" />
                    </a>
                </Link>
                <div className="content">
                  <ul>
                    <li><Link legacyBehavior href="/author-details"><a>By <span>Rison donec</span></a></Link></li>
                    <li><Link legacyBehavior href="/blog-classic"><a>Lifestyle</a></Link></li>
                  </ul>
                  <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Our Begin To Beingonl What You Will Be.</a></Link>
                  </h4>
                  <div className="bottom-area">
                   <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn-2 four">View
                      Details<i className="bi bi-arrow-right" /></a></Link>
                    <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z">
                        </path>
                      </svg>2 Day Read</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="blog-grid-5 style-2">
                <Link legacyBehavior href="/post-format-no-sidebar-02">
                    <a  className="image">
                    <div className="date">
                    <h4>13</h4>
                    <span>August</span>
                  </div>
                  <img src="assets/images/blog-grid/select-post2.jpg" alt="image" />
                    </a>
                </Link>
                <div className="content">
                  <ul>
                    <li><Link legacyBehavior href="/author-details"><a>By <span>Rison donec</span></a></Link></li>
                    <li><Link legacyBehavior href="/blog-classic"><a>Travel</a></Link></li>
                  </ul>
                  <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Mauris placerat dolor nec seman porttitor
                      suscipit.</a></Link>
                  </h4>
                  <div className="bottom-area">
                    <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn-2 four">View
                      Details<i className="bi bi-arrow-right" /></a></Link>
                    <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z">
                        </path>
                      </svg>2 Day Read</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="blog-grid-5 style-2">
                <Link legacyBehavior href="/post-format-no-sidebar-02">
                    <a  className="image">
                    <div className="date">
                    <h4>23</h4>
                    <span>August</span>
                  </div>
                  <img src="assets/images/blog-grid/select-post3.jpg" alt="image" />
                    </a>
                  
                </Link>
                <div className="content">
                  <ul>
                    <li><Link legacyBehavior href="/author-details"><a>By <span>Rison donec</span></a></Link></li>
                   <li><Link legacyBehavior href="/blog-classic"><a>Travel</a></Link></li>
                  </ul>
                  <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>per inceptos himenaeos malesua Vivamus
                      portaip</a></Link>
                  </h4>
                  <div className="bottom-area">
                   <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn-2 four">View
                      Details<i className="bi bi-arrow-right" /></a></Link>
                    <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z">
                        </path>
                      </svg>2 Day Read</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="blog-grid-5 style-2">
                <Link legacyBehavior href="/post-format-no-sidebar-02">
                  <a  className="image"><div className="date">
                    <h4>30</h4>
                    <span>August</span>
                  </div>
                  <img src="assets/images/blog-grid/select-post4.jpg" alt="image" /></a>
                </Link>
                <div className="content">
                  <ul>
                    <li><Link legacyBehavior href="/author-details"><a>By <span>Rison donec</span></a></Link></li>
                    <li><Link legacyBehavior href="/blog-classic"><a>Fashion</a></Link></li>
                  </ul>
                  <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Integer convallis nisagoi necerat fermentum
                      vehicula.</a></Link>
                  </h4>
                  <div className="bottom-area">
                   <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn-2 four">View
                      Details<i className="bi bi-arrow-right" /></a></Link>
                    <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z">
                        </path>
                      </svg>2 Day Read</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="blog-grid-5 style-2">
                <Link legacyBehavior href="/post-format-no-sidebar-02">
                    <a  className="image">
                    <div className="date">
                    <h4>15</h4>
                    <span>August</span>
                  </div>
                  <img src="assets/images/blog-grid/select-post5.jpg" alt="image" />
                    </a>
                </Link>
                <div className="content">
                  <ul>
                    <li><Link legacyBehavior href="/author-details"><a>By <span>Rison donec</span></a></Link></li>
                    <li><Link legacyBehavior href="/blog-classic"><a>Fashion</a></Link></li>
                  </ul>
                  <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Integer convallis nisagoi necerat fermentum
                      vehicula.</a></Link>
                  </h4>
                  <div className="bottom-area">
                   <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn-2 four">View
                      Details<i className="bi bi-arrow-right" /></a></Link>
                    <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z">
                        </path>
                      </svg>2 Day Read</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="blog-grid-5 style-2">
                <Link legacyBehavior href="/post-format-no-sidebar-02">
                    <a  className="image">
                    <div className="date">
                    <h4>25</h4>
                    <span>August</span>
                  </div>
                  <img src="assets/images/blog-grid/select-post6.jpg" alt="image" />
                    </a>
                  
                </Link>
                <div className="content">
                  <ul>
                    <li><Link legacyBehavior href="/author-details"><a>By <span>Rison donec</span></a></Link></li>
                    <li><Link legacyBehavior href="/blog-classic"><a>Fashion</a></Link></li>
                  </ul>
                  <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Integer convallis nisagoi necerat fermentum
                      vehicula.</a></Link>
                  </h4>
                  <div className="bottom-area">
                   <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn-2 four">View
                      Details<i className="bi bi-arrow-right" /></a></Link>
                    <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z">
                        </path>
                      </svg>2 Day Read</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="blog-grid-5 style-2">
                <Link legacyBehavior href="/post-format-no-sidebar-02">
                    <a  className="image">
                    <div className="date">
                    <h4>05</h4>
                    <span>August</span>
                  </div>
                  <img src="assets/images/blog-grid/select-post7.jpg" alt="image" />
                    </a>
           
                </Link>
                <div className="content">
                  <ul>
                    <li><Link legacyBehavior href="/author-details"><a>By <span>Rison donec</span></a></Link></li>
                    <li><Link legacyBehavior href="/blog-classic"><a>Fashion</a></Link></li>
                  </ul>
                  <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Integer convallis nisagoi necerat fermentum
                      vehicula.</a></Link>
                  </h4>
                  <div className="bottom-area">
                   <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn-2 four">View
                      Details<i className="bi bi-arrow-right" /></a></Link>
                    <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z">
                        </path>
                      </svg>2 Day Read</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  </div>
  
  )
}

export default SelectedPost
