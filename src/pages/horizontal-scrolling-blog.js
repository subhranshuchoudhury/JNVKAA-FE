import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, EffectFade } from "swiper";
import { useMemo } from "react";
import Link from "next/link";
SwiperCore.use([Navigation, Autoplay, EffectFade]);

function HorizontalScrollingBlog() {
    const slider = useMemo(()=>{
      return {
        slidesPerView: "auto",
      speed: 1400,
      spaceBetween: 20,
      loop: true,
  
      autoplay: {
        delay: 3000, // Autoplay duration in milliseconds
      },
      navigation: {
        nextEl: ".banner1-next",
        prevEl: ".banner1-prev",
      },
  
      breakpoints: {
        280: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        386: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 3.3,
          centeredSlides: true,
        },
        1400: {
          slidesPerView: 3.7,
          centeredSlides: true,
        },
        1600: {
          slidesPerView: 4.4,
          centeredSlides: true,
        }
      }
      };
    },[])
  return (
    <section className="banner-section-1 mb-100">
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12 mb-30">
          <div id="myTabContent" className="tab-content">
            <div className="tab-pane fade active show" id="tab-one" role="tabpanel">
              <Swiper {...slider} className="swiper banner-1-slider">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="blog-grid-3">
                      <Link legacyBehavior href="/blog-classic"><a  className="eg-badge badge--red">Life Style</a></Link>
                      <Link legacyBehavior href="/author-details">
                        <a  className="author">
                        <img src="assets/images/authors/author1-1.jpg" alt="image" />
                        </a>
                      </Link>
                       <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a className="image">
                        <img src="assets/images/banner/banner1-1.jpg" alt="image" />
                        </a>
                      </Link>
                      <div className="content">
                        <ul>
                          <li><Link legacyBehavior href="/author-details"><a>By Rison donec</a></Link></li>
                          <li><Link legacyBehavior href="/blog-standard"><a>Nov 10, 2022</a></Link></li>
                          <li>1.5k View</li>
                        </ul>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Our Begin Now To Being What You Will Be.</a></Link></h4>
                        <div className="bottom-area">
                          <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
                          <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                            </svg>2 Day Read</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="blog-grid-3">
                     <Link legacyBehavior href="/author-details">
                        <a  className="author">
                        <img src="assets/images/authors/author1-2.jpg" alt="image" />
                        </a>
                      </Link>
                      <Link legacyBehavior href="/blog-classic"><a  className="eg-badge badge--red">Creative</a></Link>
                      <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                        <img src="assets/images/banner/banner1-2.jpg" alt="image" />
                        </a>
                      </Link>
                      <div className="content">
                        <ul>
                          <li><Link legacyBehavior href="/author-details"><a>By Rison donec</a></Link></li>
                          <li><Link legacyBehavior href="/blog-standard"><a>Nov 10, 2022</a></Link></li>
                          <li>1.5k View</li>
                        </ul>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Unleash Your Creativity: Explore the World of Creative Works.</a></Link></h4>
                        <div className="bottom-area">
                          <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
                          <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                            </svg>2 Day Read</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="blog-grid-3">
                      <Link legacyBehavior href="/author-details">
                        <a  className="author">
                        <img src="assets/images/authors/author1-3.jpg" alt="image" />
                        </a>
                      </Link>
                      <Link legacyBehavior href="/blog-classic"><a  className="eg-badge badge--red">Golf Club</a></Link>
                      <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                        <img src="assets/images/banner/banner1-3.jpg" alt="image" />
                        </a>
                      </Link>
                      <div className="content">
                        <ul>
                          <li><Link legacyBehavior href="/author-details"><a>By Rison donec</a></Link></li>
                          <li><Link legacyBehavior href="/blog-standard"><a>Nov 10, 2022</a></Link></li>
                          <li>1.5k View</li>
                        </ul>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Hit the Green: Explore Our Golf Club's Amazing Offerings.</a></Link></h4>
                        <div className="bottom-area">
                          <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
                          <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                            </svg>2 Day Read</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="blog-grid-3">
                       <Link legacyBehavior href="/author-details">
                        <a  className="author">
                        <img src="assets/images/authors/author2-4.jpg" alt="image" />
                        </a>
                      </Link>
                      <Link legacyBehavior href="/blog-classic"><a  className="eg-badge badge--red">Art</a></Link>
                      <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                        <img src="assets/images/banner/banner1-4.jpg" alt="image" />
                        </a>
                      </Link>
                      <div className="content">
                        <ul>
                          <li><Link legacyBehavior href="/author-details"><a>By Rison donec</a></Link></li>
                          <li><Link legacyBehavior href="/blog-standard"><a>Nov 10, 2022</a></Link></li>
                          <li>1.5k View</li>
                        </ul>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Brushstrokes of Creativity: Art in Motion.</a></Link></h4>
                        <div className="bottom-area">
                          <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
                          <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                            </svg>2 Day Read</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="blog-grid-3">
                      <Link legacyBehavior href="/author-details">
                        <a  className="author">
                        <img src="assets/images/authors/author2-1.jpg" alt="image" />
                        </a>
                      </Link>
                      <Link legacyBehavior href="/blog-classic"><a  className="eg-badge badge--red">Interior</a></Link>
                      <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                        <img src="assets/images/banner/banner1-5.jpg" alt="image" />
                        </a>
                      </Link>
                      <div className="content">
                        <ul>
                          <li><Link legacyBehavior href="/author-details"><a>By Rison donec</a></Link></li>
                          <li><Link legacyBehavior href="/blog-standard"><a>Nov 10, 2022</a></Link></li>
                          <li>1.5k View</li>
                        </ul>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Discover the Art of Interior Decoration and Styling.</a></Link></h4>
                        <div className="bottom-area">
                          <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
                          <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                            </svg>2 Day Read</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="blog-grid-3">
                      <Link legacyBehavior href="/author-details">
                        <a  className="author">
                        <img src="assets/images/authors/author2-2.jpg" alt="image" />
                        </a>
                      </Link>
                      <Link legacyBehavior href="/blog-classic"><a  className="eg-badge badge--red">Foodest</a></Link>
                      <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                        <img src="assets/images/banner/banner1-11.jpg" alt="image" />
                        </a>
                      </Link>
                      <div className="content">
                        <ul>
                          <li><Link legacyBehavior href="/author-details"><a>By Rison donec</a></Link></li>
                          <li><Link legacyBehavior href="/blog-standard"><a>Nov 10, 2022</a></Link></li>
                          <li>1.5k View</li>
                        </ul>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Foodie's Paradise: Indulge in Exquisite Cuisine.</a></Link></h4>
                        <div className="bottom-area">
                          <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
                          <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                            </svg>2 Day Read</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="blog-grid-3">
                     <Link legacyBehavior href="/author-details">
                        <a  className="author">
                        <img src="assets/images/authors/author1-2.jpg" alt="image" />
                        </a>
                      </Link>
                      <Link legacyBehavior href="/blog-classic"><a  className="eg-badge badge--red">Sports</a></Link>
                      <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                        <img src="assets/images/banner/banner1-12.jpg" alt="image" />
                        </a>
                      </Link>
                      <div className="content">
                        <ul>
                          <li><Link legacyBehavior href="/author-details"><a>By Rison donec</a></Link></li>
                          <li><Link legacyBehavior href="/blog-standard"><a>Nov 10, 2022</a></Link></li>
                          <li>1.5k View</li>
                        </ul>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Elevate Your Game: The Ultimate Sports Experience.</a></Link></h4>
                        <div className="bottom-area">
                          <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
                          <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                            </svg>2 Day Read</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="blog-grid-3">
                      <Link legacyBehavior href="/author-details">
                        <a  className="author">
                        <img src="assets/images/authors/author1-4.jpg" alt="image" />
                        </a>
                      </Link>
                       <Link legacyBehavior href="/blog-classic"><a  className="eg-badge badge--red">Travel</a></Link>
                     <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                        <img src="assets/images/banner/banner1-13.jpg" alt="image" />
                        </a>
                      </Link>
                      <div className="content">
                        <ul>
                          <li><Link legacyBehavior href="/author-details"><a>By Rison donec</a></Link></li>
                          <li><Link legacyBehavior href="/blog-standard"><a>Nov 10, 2022</a></Link></li>
                          <li>1.5k View</li>
                        </ul>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Explore the World: Unforgettable Travel Destinations.</a></Link></h4>
                        <div className="bottom-area">
                          <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
                          <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                            </svg>2 Day Read</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
            <div className="tab-pane fade" id="tab-two" role="tabpanel">
              <Swiper {...slider} className="swiper banner-1-slider">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="blog-grid-3">
                      <Link legacyBehavior href="/blog-classic"><a  className="eg-badge badge--red">Life Style</a></Link>
                      <Link legacyBehavior href="/author-details">
                        <a  className="author">
                        <img src="assets/images/authors/author1-1.jpg" alt="image" />
                        </a>
                      </Link>
                       <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a className="image">
                        <img src="assets/images/banner/banner1-1.jpg" alt="image" />
                        </a>
                      </Link>
                      <div className="content">
                        <ul>
                          <li><Link legacyBehavior href="/author-details"><a>By Rison donec</a></Link></li>
                          <li><Link legacyBehavior href="/blog-standard"><a>Nov 10, 2022</a></Link></li>
                          <li>1.5k View</li>
                        </ul>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Our Begin Now To Being What You Will Be.</a></Link></h4>
                        <div className="bottom-area">
                          <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
                          <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                            </svg>2 Day Read</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="blog-grid-3">
                     <Link legacyBehavior href="/author-details">
                        <a  className="author">
                        <img src="assets/images/authors/author1-2.jpg" alt="image" />
                        </a>
                      </Link>
                       <Link legacyBehavior href="/blog-classic"><a  className="eg-badge badge--red">Creative</a></Link>
                      <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                        <img src="assets/images/banner/banner1-2.jpg" alt="image" />
                        </a>
                      </Link>
                      <div className="content">
                        <ul>
                          <li><Link legacyBehavior href="/author-details"><a>By Rison donec</a></Link></li>
                          <li><Link legacyBehavior href="/blog-standard"><a>Nov 10, 2022</a></Link></li>
                          <li>1.5k View</li>
                        </ul>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>imperdiet ident turpis Nuncon ont scelerisque ante.</a></Link></h4>
                        <div className="bottom-area">
                          <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
                          <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                            </svg>2 Day Read</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="blog-grid-3">
                      <Link legacyBehavior href="/author-details">
                        <a  className="author">
                        <img src="assets/images/authors/author1-3.jpg" alt="image" />
                        </a>
                      </Link>
                      <Link legacyBehavior href="/blog-classic"><a  className="eg-badge badge--red">Golf Club</a></Link>
                      <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                        <img src="assets/images/banner/banner1-3.jpg" alt="image" />
                        </a>
                      </Link>
                      <div className="content">
                        <ul>
                          <li><Link legacyBehavior href="/author-details"><a>By Rison donec</a></Link></li>
                          <li><Link legacyBehavior href="/blog-standard"><a>Nov 10, 2022</a></Link></li>
                          <li>1.5k View</li>
                        </ul>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>hendrerit condimentum orcho id porta lobortis nibh.</a></Link></h4>
                        <div className="bottom-area">
                          <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
                          <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                            </svg>2 Day Read</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="blog-grid-3">
                       <Link legacyBehavior href="/author-details">
                        <a  className="author">
                        <img src="assets/images/authors/author2-4.jpg" alt="image" />
                        </a>
                      </Link>
                      <Link legacyBehavior href="/blog-classic"><a  className="eg-badge badge--red">Art</a></Link>
                      <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                        <img src="assets/images/banner/banner1-4.jpg" alt="image" />
                        </a>
                      </Link>
                      <div className="content">
                        <ul>
                          <li><Link legacyBehavior href="/author-details"><a>By Rison donec</a></Link></li>
                          <li><Link legacyBehavior href="/blog-standard"><a>Nov 10, 2022</a></Link></li>
                          <li>1.5k View</li>
                        </ul>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>eleifend consectetu ante quam Nam quis.</a></Link></h4>
                        <div className="bottom-area">
                          <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
                          <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                            </svg>2 Day Read</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="blog-grid-3">
                      <Link legacyBehavior href="/author-details">
                        <a  className="author">
                        <img src="assets/images/authors/author2-1.jpg" alt="image" />
                        </a>
                      </Link>
                      <Link legacyBehavior href="/blog-classic"><a  className="eg-badge badge--red">Interior</a></Link>
                      <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                        <img src="assets/images/banner/banner1-5.jpg" alt="image" />
                        </a>
                      </Link>
                      <div className="content">
                        <ul>
                          <li><Link legacyBehavior href="/author-details"><a>By Rison donec</a></Link></li>
                          <li><Link legacyBehavior href="/blog-standard"><a>Nov 10, 2022</a></Link></li>
                          <li>1.5k View</li>
                        </ul>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Our Begin Now To Being What You Will Be.</a></Link></h4>
                        <div className="bottom-area">
                          <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
                          <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                            </svg>2 Day Read</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="blog-grid-3">
                      <Link legacyBehavior href="/author-details">
                        <a  className="author">
                        <img src="assets/images/authors/author2-2.jpg" alt="image" />
                        </a>
                      </Link>
                      <Link legacyBehavior href="/blog-classic"><a  className="eg-badge badge--red">Foodest</a></Link>
                      <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                        <img src="assets/images/banner/banner1-11.jpg" alt="image" />
                        </a>
                      </Link>
                      <div className="content">
                        <ul>
                          <li><Link legacyBehavior href="/author-details"><a>By Rison donec</a></Link></li>
                          <li><Link legacyBehavior href="/blog-standard"><a>Nov 10, 2022</a></Link></li>
                          <li>1.5k View</li>
                        </ul>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>ullamcorper dolor Proinol augue dolor..</a></Link></h4>
                        <div className="bottom-area">
                          <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
                          <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                            </svg>2 Day Read</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="blog-grid-3">
                      <Link legacyBehavior href="/author-details">
                        <a  className="author">
                        <img src="assets/images/authors/author1-2.jpg" alt="image" />
                        </a>
                      </Link>
                      <Link legacyBehavior href="/blog-classic"><a  className="eg-badge badge--red">Sports</a></Link>
                      <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                        <img src="assets/images/banner/banner1-12.jpg" alt="image" />
                        </a>
                      </Link>
                      <div className="content">
                        <ul>
                          <li><Link legacyBehavior href="/author-details"><a>By Rison donec</a></Link></li>
                          <li><Link legacyBehavior href="/blog-standard"><a>Nov 10, 2022</a></Link></li>
                          <li>1.5k View</li>
                        </ul>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>imperdiet ident turpis Nuncon ont scelerisque ante.</a></Link></h4>
                        <div className="bottom-area">
                          <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
                          <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                            </svg>2 Day Read</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="blog-grid-3">
                      <Link legacyBehavior href="/author-details">
                        <a  className="author">
                        <img src="assets/images/authors/author1-4.jpg" alt="image" />
                        </a>
                      </Link>
                      <Link legacyBehavior href="/blog-classic"><a  className="eg-badge badge--red">Travel</a></Link>
                     <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                        <img src="assets/images/banner/banner1-13.jpg" alt="image" />
                        </a>
                      </Link>
                      <div className="content">
                        <ul>
                          <li><Link legacyBehavior href="/author-details"><a>By Rison donec</a></Link></li>
                          <li><Link legacyBehavior href="/blog-standard"><a>Nov 10, 2022</a></Link></li>
                          <li>1.5k View</li>
                        </ul>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>imperdiet ident turpis Nuncon ont scelerisque ante.</a></Link></h4>
                        <div className="bottom-area">
                          <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
                          <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                            </svg>2 Day Read</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
            <div className="tab-pane fade" id="tab-three" role="tabpanel">
              <Swiper {...slider} className="swiper banner-1-slider">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="blog-grid-3">
                      <Link legacyBehavior href="/blog-classic"><a  className="eg-badge badge--red">Life Style</a></Link>
                      <Link legacyBehavior href="/author-details">
                        <a  className="author">
                        <img src="assets/images/authors/author1-1.jpg" alt="image" />
                        </a>
                      </Link>
                       <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a className="image">
                        <img src="assets/images/banner/banner1-1.jpg" alt="image" />
                        </a>
                      </Link>
                      <div className="content">
                        <ul>
                          <li><Link legacyBehavior href="/author-details"><a>By Rison donec</a></Link></li>
                          <li><Link legacyBehavior href="/blog-standard"><a>Nov 10, 2022</a></Link></li>
                          <li>1.5k View</li>
                        </ul>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Our Begin Now To Being What You Will Be.</a></Link></h4>
                        <div className="bottom-area">
                          <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
                          <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                            </svg>2 Day Read</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="blog-grid-3">
                     <Link legacyBehavior href="/author-details">
                        <a  className="author">
                        <img src="assets/images/authors/author1-2.jpg" alt="image" />
                        </a>
                      </Link>
                       <Link legacyBehavior href="/blog-classic"><a  className="eg-badge badge--red">Creative</a></Link>
                      <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                        <img src="assets/images/banner/banner1-2.jpg" alt="image" />
                        </a>
                      </Link>
                      <div className="content">
                        <ul>
                          <li><Link legacyBehavior href="/author-details"><a>By Rison donec</a></Link></li>
                          <li><Link legacyBehavior href="/blog-standard"><a>Nov 10, 2022</a></Link></li>
                          <li>1.5k View</li>
                        </ul>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>imperdiet ident turpis Nuncon ont scelerisque ante.</a></Link></h4>
                        <div className="bottom-area">
                          <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
                          <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                            </svg>2 Day Read</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="blog-grid-3">
                      <Link legacyBehavior href="/author-details">
                        <a  className="author">
                        <img src="assets/images/authors/author1-3.jpg" alt="image" />
                        </a>
                      </Link>
                      <Link legacyBehavior href="/blog-classic"><a  className="eg-badge badge--red">Golf Club</a></Link>
                      <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                        <img src="assets/images/banner/banner1-3.jpg" alt="image" />
                        </a>
                      </Link>
                      <div className="content">
                        <ul>
                          <li><Link legacyBehavior href="/author-details"><a>By Rison donec</a></Link></li>
                          <li><Link legacyBehavior href="/blog-standard"><a>Nov 10, 2022</a></Link></li>
                          <li>1.5k View</li>
                        </ul>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>hendrerit condimentum orcho id porta lobortis nibh.</a></Link></h4>
                        <div className="bottom-area">
                          <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
                          <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                            </svg>2 Day Read</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="blog-grid-3">
                       <Link legacyBehavior href="/author-details">
                        <a  className="author">
                        <img src="assets/images/authors/author2-4.jpg" alt="image" />
                        </a>
                      </Link>
                      <Link legacyBehavior href="/blog-classic"><a  className="eg-badge badge--red">Art</a></Link>
                      <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                        <img src="assets/images/banner/banner1-4.jpg" alt="image" />
                        </a>
                      </Link>
                      <div className="content">
                        <ul>
                          <li><Link legacyBehavior href="/author-details"><a>By Rison donec</a></Link></li>
                          <li><Link legacyBehavior href="/blog-standard"><a>Nov 10, 2022</a></Link></li>
                          <li>1.5k View</li>
                        </ul>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>eleifend consectetu ante quam Nam quis.</a></Link></h4>
                        <div className="bottom-area">
                          <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
                          <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                            </svg>2 Day Read</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="blog-grid-3">
                      <Link legacyBehavior href="/author-details">
                        <a  className="author">
                        <img src="assets/images/authors/author2-1.jpg" alt="image" />
                        </a>
                      </Link>
                      <Link legacyBehavior href="/blog-classic"><a  className="eg-badge badge--red">Interior</a></Link>
                      <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                        <img src="assets/images/banner/banner1-5.jpg" alt="image" />
                        </a>
                      </Link>
                      <div className="content">
                        <ul>
                          <li><Link legacyBehavior href="/author-details"><a>By Rison donec</a></Link></li>
                          <li><Link legacyBehavior href="/blog-standard"><a>Nov 10, 2022</a></Link></li>
                          <li>1.5k View</li>
                        </ul>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Our Begin Now To Being What You Will Be.</a></Link></h4>
                        <div className="bottom-area">
                          <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
                          <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                            </svg>2 Day Read</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="blog-grid-3">
                      <Link legacyBehavior href="/author-details">
                        <a  className="author">
                        <img src="assets/images/authors/author2-2.jpg" alt="image" />
                        </a>
                      </Link>
                      <Link legacyBehavior href="/blog-classic"><a  className="eg-badge badge--red">Foodest</a></Link>
                      <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                        <img src="assets/images/banner/banner1-11.jpg" alt="image" />
                        </a>
                      </Link>
                      <div className="content">
                        <ul>
                          <li><Link legacyBehavior href="/author-details"><a>By Rison donec</a></Link></li>
                          <li><Link legacyBehavior href="/blog-standard"><a>Nov 10, 2022</a></Link></li>
                          <li>1.5k View</li>
                        </ul>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>ullamcorper dolor Proinol augue dolor..</a></Link></h4>
                        <div className="bottom-area">
                          <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
                          <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                            </svg>2 Day Read</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="blog-grid-3">
                     <Link legacyBehavior href="/author-details">
                        <a  className="author">
                        <img src="assets/images/authors/author1-2.jpg" alt="image" />
                        </a>
                      </Link>
                      <Link legacyBehavior href="/blog-classic"><a  className="eg-badge badge--red">Sports</a></Link>
                      <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                        <img src="assets/images/banner/banner1-12.jpg" alt="image" />
                        </a>
                      </Link>
                      <div className="content">
                        <ul>
                          <li><Link legacyBehavior href="/author-details"><a>By Rison donec</a></Link></li>
                          <li><Link legacyBehavior href="/blog-standard"><a>Nov 10, 2022</a></Link></li>
                          <li>1.5k View</li>
                        </ul>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>imperdiet ident turpis Nuncon ont scelerisque ante.</a></Link></h4>
                        <div className="bottom-area">
                          <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
                          <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                            </svg>2 Day Read</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="blog-grid-3">
                      <Link legacyBehavior href="/author-details">
                        <a  className="author">
                        <img src="assets/images/authors/author1-4.jpg" alt="image" />
                        </a>
                      </Link>
                       <Link legacyBehavior href="/blog-classic"><a  className="eg-badge badge--red">Travel</a></Link>
                      <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                        <img src="assets/images/banner/banner1-13.jpg" alt="image" />
                        </a>
                      </Link>
                      <div className="content">
                        <ul>
                          <li><Link legacyBehavior href="/author-details"><a>By Rison donec</a></Link></li>
                          <li><Link legacyBehavior href="/blog-standard"><a>Nov 10, 2022</a></Link></li>
                          <li>1.5k View</li>
                        </ul>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>imperdiet ident turpis Nuncon ont scelerisque ante.</a></Link></h4>
                        <div className="bottom-area">
                          <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
                          <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                            </svg>2 Day Read</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
            <div className="tab-pane fade" id="tab-four" role="tabpanel">
              <Swiper {...slider} className="swiper banner-1-slider">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="blog-grid-3">
                      <Link legacyBehavior href="/blog-classic"><a  className="eg-badge badge--red">Life Style</a></Link>
                      <Link legacyBehavior href="/author-details">
                        <a  className="author">
                        <img src="assets/images/authors/author1-1.jpg" alt="image" />
                        </a>
                      </Link>
                       <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a className="image">
                        <img src="assets/images/banner/banner1-1.jpg" alt="image" />
                        </a>
                      </Link>
                      <div className="content">
                        <ul>
                          <li><Link legacyBehavior href="/author-details"><a>By Rison donec</a></Link></li>
                          <li><Link legacyBehavior href="/blog-standard"><a>Nov 10, 2022</a></Link></li>
                          <li>1.5k View</li>
                        </ul>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Our Begin Now To Being What You Will Be.</a></Link></h4>
                        <div className="bottom-area">
                          <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
                          <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                            </svg>2 Day Read</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="blog-grid-3">
                     <Link legacyBehavior href="/author-details">
                        <a  className="author">
                        <img src="assets/images/authors/author1-2.jpg" alt="image" />
                        </a>
                      </Link>
                       <Link legacyBehavior href="/blog-classic"><a  className="eg-badge badge--red">Creative</a></Link>
                      <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                        <img src="assets/images/banner/banner1-2.jpg" alt="image" />
                        </a>
                      </Link>
                      <div className="content">
                        <ul>
                          <li><Link legacyBehavior href="/author-details"><a>By Rison donec</a></Link></li>
                          <li><Link legacyBehavior href="/blog-standard"><a>Nov 10, 2022</a></Link></li>
                          <li>1.5k View</li>
                        </ul>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>imperdiet ident turpis Nuncon ont scelerisque ante.</a></Link></h4>
                        <div className="bottom-area">
                          <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
                          <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                            </svg>2 Day Read</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="blog-grid-3">
                      <Link legacyBehavior href="/author-details">
                        <a  className="author">
                        <img src="assets/images/authors/author1-3.jpg" alt="image" />
                        </a>
                      </Link>
                      <Link legacyBehavior href="/blog-classic"><a  className="eg-badge badge--red">Golf Club</a></Link>
                      <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                        <img src="assets/images/banner/banner1-3.jpg" alt="image" />
                        </a>
                      </Link>
                      <div className="content">
                        <ul>
                          <li><Link legacyBehavior href="/author-details"><a>By Rison donec</a></Link></li>
                          <li><Link legacyBehavior href="/blog-standard"><a>Nov 10, 2022</a></Link></li>
                          <li>1.5k View</li>
                        </ul>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>hendrerit condimentum orcho id porta lobortis nibh.</a></Link></h4>
                        <div className="bottom-area">
                          <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
                          <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                            </svg>2 Day Read</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="blog-grid-3">
                      <Link legacyBehavior href="/author-details">
                        <a  className="author">
                        <img src="assets/images/authors/author2-4.jpg" alt="image" />
                        </a>
                      </Link>
                      <Link legacyBehavior href="/blog-classic"><a  className="eg-badge badge--red">Art</a></Link>
                      <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                        <img src="assets/images/banner/banner1-4.jpg" alt="image" />
                        </a>
                      </Link>
                      <div className="content">
                        <ul>
                          <li><Link legacyBehavior href="/author-details"><a>By Rison donec</a></Link></li>
                          <li><Link legacyBehavior href="/blog-standard"><a>Nov 10, 2022</a></Link></li>
                          <li>1.5k View</li>
                        </ul>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>eleifend consectetu ante quam Nam quis.</a></Link></h4>
                        <div className="bottom-area">
                          <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
                          <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                            </svg>2 Day Read</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="blog-grid-3">
                      <Link legacyBehavior href="/author-details">
                        <a  className="author">
                        <img src="assets/images/authors/author2-1.jpg" alt="image" />
                        </a>
                      </Link>
                      <Link legacyBehavior href="/blog-classic"><a  className="eg-badge badge--red">Interior</a></Link>
                      <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                        <img src="assets/images/banner/banner1-5.jpg" alt="image" />
                        </a>
                      </Link>
                      <div className="content">
                        <ul>
                          <li><Link legacyBehavior href="/author-details"><a>By Rison donec</a></Link></li>
                          <li><Link legacyBehavior href="/blog-standard"><a>Nov 10, 2022</a></Link></li>
                          <li>1.5k View</li>
                        </ul>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Our Begin Now To Being What You Will Be.</a></Link></h4>
                        <div className="bottom-area">
                          <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
                          <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                            </svg>2 Day Read</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="blog-grid-3">
                      <Link legacyBehavior href="/author-details">
                        <a  className="author">
                        <img src="assets/images/authors/author2-2.jpg" alt="image" />
                        </a>
                      </Link>
                      <Link legacyBehavior href="/blog-classic"><a  className="eg-badge badge--red">Foodest</a></Link>
                      <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                        <img src="assets/images/banner/banner1-11.jpg" alt="image" />
                        </a>
                      </Link>
                      <div className="content">
                        <ul>
                          <li><Link legacyBehavior href="/author-details"><a>By Rison donec</a></Link></li>
                          <li><Link legacyBehavior href="/blog-standard"><a>Nov 10, 2022</a></Link></li>
                          <li>1.5k View</li>
                        </ul>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>ullamcorper dolor Proinol augue dolor..</a></Link></h4>
                        <div className="bottom-area">
                          <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
                          <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                            </svg>2 Day Read</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="blog-grid-3">
                     <Link legacyBehavior href="/author-details">
                        <a  className="author">
                        <img src="assets/images/authors/author1-2.jpg" alt="image" />
                        </a>
                      </Link>
                      <Link legacyBehavior href="/blog-classic"><a  className="eg-badge badge--red">Sports</a></Link>
                      <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                        <img src="assets/images/banner/banner1-12.jpg" alt="image" />
                        </a>
                      </Link>
                      <div className="content">
                        <ul>
                          <li><Link legacyBehavior href="/author-details"><a>By Rison donec</a></Link></li>
                          <li><Link legacyBehavior href="/blog-standard"><a>Nov 10, 2022</a></Link></li>
                          <li>1.5k View</li>
                        </ul>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>imperdiet ident turpis Nuncon ont scelerisque ante.</a></Link></h4>
                        <div className="bottom-area">
                          <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
                          <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                            </svg>2 Day Read</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="blog-grid-3">
                      <Link legacyBehavior href="/author-details">
                        <a  className="author">
                        <img src="assets/images/authors/author1-4.jpg" alt="image" />
                        </a>
                      </Link>
                       <Link legacyBehavior href="/blog-classic"><a  className="eg-badge badge--red">Travel</a></Link>
                     <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                        <img src="assets/images/banner/banner1-13.jpg" alt="image" />
                        </a>
                      </Link>
                      <div className="content">
                        <ul>
                          <li><Link legacyBehavior href="/author-details"><a>By Rison donec</a></Link></li>
                          <li><Link legacyBehavior href="/blog-standard"><a>Nov 10, 2022</a></Link></li>
                          <li>1.5k View</li>
                        </ul>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>imperdiet ident turpis Nuncon ont scelerisque ante.</a></Link></h4>
                        <div className="bottom-area">
                          <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
                          <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                            </svg>2 Day Read</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
            <div className="tab-pane fade" id="tab-five" role="tabpanel">
              <Swiper {...slider} className="swiper banner-1-slider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="blog-grid-3">
                      <Link legacyBehavior href="/blog-classic"><a  className="eg-badge badge--red">Life Style</a></Link>
                      <Link legacyBehavior href="/author-details">
                        <a  className="author">
                        <img src="assets/images/authors/author1-1.jpg" alt="image" />
                        </a>
                      </Link>
                      <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a className="image">
                        <img src="assets/images/banner/banner1-1.jpg" alt="image" />
                        </a>
                      </Link>
                      <div className="content">
                        <ul>
                          <li><Link legacyBehavior href="/author-details"><a>By Rison donec</a></Link></li>
                          <li><Link legacyBehavior href="/blog-standard"><a>Nov 10, 2022</a></Link></li>
                          <li>1.5k View</li>
                        </ul>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Our Begin Now To Being What You Will Be.</a></Link></h4>
                        <div className="bottom-area">
                          <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
                          <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                            </svg>2 Day Read</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <SwiperSlide className="swiper-slide">
                    <div className="blog-grid-3">
                     <Link legacyBehavior href="/author-details">
                        <a  className="author">
                        <img src="assets/images/authors/author1-2.jpg" alt="image" />
                        </a>
                      </Link>
                       <Link legacyBehavior href="/blog-classic"><a  className="eg-badge badge--red">Creative</a></Link>
                      <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                        <img src="assets/images/banner/banner1-2.jpg" alt="image" />
                        </a>
                      </Link>
                      <div className="content">
                        <ul>
                          <li><Link legacyBehavior href="/author-details"><a>By Rison donec</a></Link></li>
                          <li><Link legacyBehavior href="/blog-standard"><a>Nov 10, 2022</a></Link></li>
                          <li>1.5k View</li>
                        </ul>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>imperdiet ident turpis Nuncon ont scelerisque ante.</a></Link></h4>
                        <div className="bottom-area">
                          <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
                          <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                            </svg>2 Day Read</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="blog-grid-3">
                      <Link legacyBehavior href="/author-details">
                        <a  className="author">
                        <img src="assets/images/authors/author1-3.jpg" alt="image" />
                        </a>
                      </Link>
                      <Link legacyBehavior href="/blog-classic"><a  className="eg-badge badge--red">Golf Club</a></Link>
                      <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                        <img src="assets/images/banner/banner1-3.jpg" alt="image" />
                        </a>
                      </Link>
                      <div className="content">
                        <ul>
                          <li><Link legacyBehavior href="/author-details"><a>By Rison donec</a></Link></li>
                          <li><Link legacyBehavior href="/blog-standard"><a>Nov 10, 2022</a></Link></li>
                          <li>1.5k View</li>
                        </ul>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>hendrerit condimentum orcho id porta lobortis nibh.</a></Link></h4>
                        <div className="bottom-area">
                          <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
                          <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                            </svg>2 Day Read</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="blog-grid-3">
                       <Link legacyBehavior href="/author-details">
                        <a  className="author">
                        <img src="assets/images/authors/author2-4.jpg" alt="image" />
                        </a>
                      </Link>
                      <Link legacyBehavior href="/blog-classic"><a  className="eg-badge badge--red">Art</a></Link>
                      <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                        <img src="assets/images/banner/banner1-4.jpg" alt="image" />
                        </a>
                      </Link>
                      <div className="content">
                        <ul>
                          <li><Link legacyBehavior href="/author-details"><a>By Rison donec</a></Link></li>
                          <li><Link legacyBehavior href="/blog-standard"><a>Nov 10, 2022</a></Link></li>
                          <li>1.5k View</li>
                        </ul>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>eleifend consectetu ante quam Nam quis.</a></Link></h4>
                        <div className="bottom-area">
                          <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
                          <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                            </svg>2 Day Read</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="blog-grid-3">
                      <Link legacyBehavior href="/author-details">
                        <a  className="author">
                        <img src="assets/images/authors/author2-1.jpg" alt="image" />
                        </a>
                      </Link>
                      <Link legacyBehavior href="/blog-classic"><a  className="eg-badge badge--red">Interior</a></Link>
                      <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                        <img src="assets/images/banner/banner1-5.jpg" alt="image" />
                        </a>
                      </Link>
                      <div className="content">
                        <ul>
                          <li><Link legacyBehavior href="/author-details"><a>By Rison donec</a></Link></li>
                          <li><Link legacyBehavior href="/blog-standard"><a>Nov 10, 2022</a></Link></li>
                          <li>1.5k View</li>
                        </ul>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Our Begin Now To Being What You Will Be.</a></Link></h4>
                        <div className="bottom-area">
                          <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
                          <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                            </svg>2 Day Read</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="blog-grid-3">
                      <Link legacyBehavior href="/author-details">
                        <a  className="author">
                        <img src="assets/images/authors/author2-2.jpg" alt="image" />
                        </a>
                      </Link>
                      <Link legacyBehavior href="/blog-classic"><a  className="eg-badge badge--red">Foodest</a></Link>
                      <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                        <img src="assets/images/banner/banner1-11.jpg" alt="image" />
                        </a>
                      </Link>
                      <div className="content">
                        <ul>
                          <li><Link legacyBehavior href="/author-details"><a>By Rison donec</a></Link></li>
                          <li><Link legacyBehavior href="/blog-standard"><a>Nov 10, 2022</a></Link></li>
                          <li>1.5k View</li>
                        </ul>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>ullamcorper dolor Proinol augue dolor..</a></Link></h4>
                        <div className="bottom-area">
                          <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
                          <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                            </svg>2 Day Read</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="blog-grid-3">
                     <Link legacyBehavior href="/author-details">
                        <a  className="author">
                        <img src="assets/images/authors/author1-2.jpg" alt="image" />
                        </a>
                      </Link>
                      <Link legacyBehavior href="/blog-classic"><a  className="eg-badge badge--red">Sports</a></Link>
                      <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                        <img src="assets/images/banner/banner1-12.jpg" alt="image" />
                        </a>
                      </Link>
                      <div className="content">
                        <ul>
                          <li><Link legacyBehavior href="/author-details"><a>By Rison donec</a></Link></li>
                          <li><Link legacyBehavior href="/blog-standard"><a>Nov 10, 2022</a></Link></li>
                          <li>1.5k View</li>
                        </ul>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>imperdiet ident turpis Nuncon ont scelerisque ante.</a></Link></h4>
                        <div className="bottom-area">
                          <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
                          <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                            </svg>2 Day Read</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="blog-grid-3">
                      <Link legacyBehavior href="/author-details">
                        <a  className="author">
                        <img src="assets/images/authors/author1-4.jpg" alt="image" />
                        </a>
                      </Link>
                       <Link legacyBehavior href="/blog-classic"><a  className="eg-badge badge--red">Travel</a></Link>
                     <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                        <img src="assets/images/banner/banner1-13.jpg" alt="image" />
                        </a>
                      </Link>
                      <div className="content">
                        <ul>
                          <li><Link legacyBehavior href="/author-details"><a>By Rison donec</a></Link></li>
                          <li><Link legacyBehavior href="/blog-standard"><a>Nov 10, 2022</a></Link></li>
                          <li>1.5k View</li>
                        </ul>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>imperdiet ident turpis Nuncon ont scelerisque ante.</a></Link></h4>
                        <div className="bottom-area">
                          <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
                          <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
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
        <div className="col-12 text-center d-flex align-items-center justify-content-center gap-5">
          <div className="banner1-prev swiper-prev-arrow" tabIndex={0} role="button" aria-label="Previous slide">
            <i className="bi bi-arrow-left" />
          </div>
          <ul className="nav nav-tabs nav-style-1 justify-content-center" role="tablist">
            <li className="nav-item" role="presentation">
              <a className="nav-link active" data-bs-toggle="tab" href="#tab-one" aria-selected="true" role="tab" tabIndex={-1}>Newest</a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" data-bs-toggle="tab" href="#tab-two" aria-selected="true" role="tab">Trending</a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" data-bs-toggle="tab" href="#tab-three" aria-selected="true" role="tab" tabIndex={-1}>Top View</a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" data-bs-toggle="tab" href="#tab-four" aria-selected="true" role="tab">Top Like</a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" data-bs-toggle="tab" href="#tab-five" aria-selected="true" role="tab">Recent</a>
            </li>
          </ul>
          <div className="banner1-next swiper-next-arrow" tabIndex={0} role="button" aria-label="Next slide">
            <i className="bi bi-arrow-right" />
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}

export default HorizontalScrollingBlog
