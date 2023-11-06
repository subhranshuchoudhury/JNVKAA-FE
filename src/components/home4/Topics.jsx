import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, EffectFade } from "swiper";
import { useMemo } from "react";
import Link from "next/link";
SwiperCore.use([Navigation, Autoplay, EffectFade]);

function Topics() {
  const slide = useMemo(()=>{
    return {
    slidesPerView: "auto",
		speed: 1500,
		spaceBetween: 20,
		
		loop: true,
		autoplay: {
			delay: 3000, // Autoplay duration in milliseconds
		},
		navigation: {
			nextEl: ".important-next",
			prevEl: ".important-prev",
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
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 4,
			},
			1400: {
				slidesPerView: 5
			},
		}
    }
  })
  return (
    <div className="category-section section-wrap" style={{backgroundImage: 'url("assets/images/bg/section-bg.png")'}}>
  <div className="row mb-40">
    <div className="col-8">
      <div className="section-title-3">
        <img src="assets/images/icons/sec-title-vector.svg" alt="image" />
        <h2>Explore Topic</h2>
      </div>
    </div>
    <div className="col-4">
      <div className="slider-arrows arrow-style-3 text-center d-lg-flex d-none flex-row justify-content-end align-items-center gap-4">
        <div className="important-next swiper-next-arrow" tabIndex={0} role="button" aria-label="Next slide">
          <i className="bi bi-arrow-left" />PRV
        </div>
        <div className="important-prev swiper-prev-arrow" tabIndex={0} role="button" aria-label="Previous slide">NXT
          <i className="bi bi-arrow-right" />
        </div>
      </div>
    </div>
  </div>
  <div className="row">
    <Swiper {...slide} className="swiper category-2-slider">
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <div className="category-2">
            <Link legacyBehavior href="/blog-classic">
              <a  className="image">
              <img src="assets/images/category/cate4-1.jpg" alt="image" />
              </a>
            </Link>
            <div className="content">
              <h4><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></h4>
              <ul>
                <li>800 Article</li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="category-2">
             <Link legacyBehavior href="/blog-classic">
              <a  className="image">
              <img src="assets/images/category/cate4-2.jpg" alt="image" />
              </a>
            </Link>
            <div className="content">
              <h4><Link legacyBehavior href="/blog-classic"><a>Life Style</a></Link></h4>
              <ul>
                <li>700 Article</li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="category-2">
             <Link legacyBehavior href="/blog-classic">
              <a  className="image">
              <img src="assets/images/category/cate4-3.jpg" alt="image" />
              </a>
            </Link>
            <div className="content">
              <h4><Link legacyBehavior href="/blog-classic"><a>Fashion</a></Link></h4>
              <ul>
                <li>680 Article</li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="category-2">
             <Link legacyBehavior href="/blog-classic">
              <a  className="image">
              <img src="assets/images/category/cate4-4.jpg" alt="image" />
              </a>
            </Link>
            <div className="content">
              <h4><Link legacyBehavior href="/blog-classic"><a>Travel</a></Link></h4>
              <ul>
                <li>900 Article</li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="category-2">
             <Link legacyBehavior href="/blog-classic">
              <a  className="image">
              <img src="assets/images/category/cate4-5.jpg" alt="image" />
              </a>
            </Link>
            <div className="content">
              <h4><Link legacyBehavior href="/blog-classic"><a>Fitness</a></Link></h4>
              <ul>
                <li>800 Article</li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="category-2">
             <Link legacyBehavior href="/blog-classic">
              <a  className="image">
              <img src="assets/images/category/cate4-6.jpg" alt="image" />
              </a>
            </Link>
            <div className="content">
              <h4><Link legacyBehavior href="/blog-classic"><a>Hotel</a></Link></h4>
              <ul>
                <li>800 Article</li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="category-2">
             <Link legacyBehavior href="/blog-classic">
              <a  className="image">
              <img src="assets/images/category/cate4-7.jpg" alt="image" />
              </a>
            </Link>
            <div className="content">
              <h4><Link legacyBehavior href="/blog-classic"><a>Photography</a></Link></h4>
              <ul>
                <li>800 Article</li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="category-2">
             <Link legacyBehavior href="/blog-classic">
              <a  className="image">
              <img src="assets/images/category/cate4-8.jpg" alt="image" />
              </a>
            </Link>
            <div className="content">
              <h4><Link legacyBehavior href="/blog-classic"><a>Sports</a></Link></h4>
              <ul>
                <li>800 Article</li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  </div>
</div>

  )
}

export default Topics
