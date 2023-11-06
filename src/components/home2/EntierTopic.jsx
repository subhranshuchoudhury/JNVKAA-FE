import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, EffectFade } from "swiper";
import { useMemo } from "react";
import Link from "next/link";
SwiperCore.use([Navigation, Autoplay, EffectFade]);

function EntierTopic() {
    const slider = useMemo(()=>{
        return {
            slidesPerView: "auto",
            speed: 1500,
            spaceBetween: 30,
           
            loop: true,
            autoplay: {
                delay: 3000, // Autoplay duration in milliseconds
            },
            navigation: {
                nextEl: ".entire-next",
                prevEl: ".entire-prev",
            },
    
            breakpoints: {
                280: {
                    slidesPerView: 1,
                },
                386: {
                    slidesPerView: 1,
                },
                576: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3
                },
                1200: {
                    slidesPerView: 4
                },
                1400: {
                    slidesPerView: 4
                },
            }
        }
    },[])
  return (
    <div className="h2-entire-tropic-area">
  <div className="container">
    <div className="row align-items-center mb-40">
      <div className="col-lg-12">
        <div className="section-title-2">
          <div className="titel">
            <h4>Entire Topic</h4>
            <div className="dash" />
          </div>
          <div className="slider-arrows arrow-style-2 text-center d-lg-flex d-none flex-row justify-content-center align-items-center gap-4">
            <div className="entire-next swiper-next-arrow">
              <i className="bi bi-arrow-left" />
            </div>
            <div className="entire-prev swiper-prev-arrow">
              <i className="bi bi-arrow-right" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row justify-content-center">
      <Swiper {...slider} className="swiper entire-topic-slider">
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <div className="tropic-card">
              <div className="tropic-img">
                <Link legacyBehavior href="/blog-classic"><a><img src="assets/images/category/cat2-1.png" alt="" /></a></Link>
              </div>
              <div className="tropic-content">
                <Link legacyBehavior href="/blog-classic">
                    <a  className="tropic-icon">
                  <img src="assets/images/icons/creative-02.svg" alt="" />
                    </a>
                </Link>
                <h4><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></h4>
                <p>800 Article</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="tropic-card">
              <div className="tropic-img">
                <Link legacyBehavior href="/blog-classic"><a><img src="assets/images/category/cat2-2.png" alt="" /></a></Link>
              </div>
              <div className="tropic-content">
                <Link legacyBehavior href="/blog-classic">
                    <a  className="tropic-icon">
                  <img src="assets/images/icons/lifestyle-02.svg" alt="" />
                    </a>
                </Link>
                <h4><Link legacyBehavior href="/blog-classic"><a>Lifestyle</a></Link></h4>
                <p>1.5k Article</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="tropic-card">
              <div className="tropic-img">
                <Link legacyBehavior href="/blog-classic"><a><img src="assets/images/category/cat2-3.png" alt="" /></a></Link>
              </div>
              <div className="tropic-content">
                <Link legacyBehavior href="/blog-classic">
                    <a  className="tropic-icon">
                  <img src="assets/images/icons/fashion-02.svg" alt="" />
                    </a>
                </Link>
                <h4><Link legacyBehavior href="/blog-classic"><a>Fashion</a></Link></h4>
                <p>755 Article</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="tropic-card">
              <div className="tropic-img">
                <Link legacyBehavior href="/blog-classic"><a><img src="assets/images/category/cat2-4.png" alt="" /></a></Link>
              </div>
              <div className="tropic-content">
                <Link legacyBehavior href="/blog-classic">
                    <a  className="tropic-icon">
                  <img src="assets/images/icons/travel-02.svg" alt="" />
                    </a>
                </Link>
                <h4><Link legacyBehavior href="/blog-classic"><a>Travel</a></Link></h4>
                <p>2.85k Article</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="tropic-card">
              <div className="tropic-img">
                <Link legacyBehavior href="/blog-classic"><a><img src="assets/images/category/cat2-5.png" alt="" /></a></Link>
              </div>
              <div className="tropic-content">
                <Link legacyBehavior href="/blog-classic">
                    <a  className="tropic-icon">
                  <img src="assets/images/icons/travel-02.svg" alt="" />
                    </a>
                </Link>
                <h4><Link legacyBehavior href="/blog-classic"><a>Fitness</a></Link></h4>
                <p>2.85k Article</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="tropic-card">
              <div className="tropic-img">
                <Link legacyBehavior href="/blog-classic"><a><img src="assets/images/category/cat2-6.png" alt="" /></a></Link>
              </div>
              <div className="tropic-content">
                <Link legacyBehavior href="/blog-classic">
                    <a  className="tropic-icon">
                  <img src="assets/images/icons/creative-02.svg" alt="" />
                    </a>
                </Link>
                <h4><Link legacyBehavior href="/blog-classic"><a>Art</a></Link></h4>
                <p>2.85k Article</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="tropic-card">
              <div className="tropic-img">
                <Link legacyBehavior href="/blog-classic"><a><img src="assets/images/category/cat2-7.png" alt="" /></a></Link>
              </div>
              <div className="tropic-content">
                <Link legacyBehavior href="/blog-classic">
                    <a className="tropic-icon">
                  <img src="assets/images/icons/lifestyle-02.svg" alt="" />
                    </a>
                </Link>
                <h4><Link legacyBehavior href="/blog-classic"><a>Event</a></Link></h4>
                <p>2.85k Article</p>
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

export default EntierTopic
