import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, EffectFade } from "swiper";
import { useMemo } from "react";
import Link from "next/link";
SwiperCore.use([Navigation, Autoplay, EffectFade]);

function AuthorFeature() {
    const slider = useMemo(()=>{
        return {
            slidesPerView: "auto",
		speed: 1500,
		spaceBetween: 30,
		
		loop: true,
		// autoplay: {
		// 	delay: 3000, // Autoplay duration in milliseconds
		//   },
		navigation: {
			nextEl: ".author1-next",
			prevEl: ".author1-prev",
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
    <section className="author-section">
  <div className="author-bg bg-two for-padding">
    <div className="container">
      <div className="row align-items-center mb-40">
        <div className="col-lg-9">
          <div className="section-title-2">
            <div className="titel">
              <h4>Featured Author</h4>
              <div className="dash" />
            </div>
          </div>
        </div>
        <div className="col-lg-3 d-flex justify-content-end">
          <div className="slider-arrows arrow-style-2 text-center d-lg-flex d-none flex-row justify-content-center align-items-center gap-4">
            <div className="author1-next swiper-next-arrow" tabIndex={0} role="button" aria-label="Next slide">
              <i className="bi bi-arrow-left" />
            </div>
            <div className="author1-prev swiper-prev-arrow" tabIndex={0} role="button" aria-label="Previous slide">
              <i className="bi bi-arrow-right" />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Swiper {...slider} className="swiper author-1-slider">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="author-2">
                  <div className="image-area">
                    <Link legacyBehavior href="/author-details"><a><img src="assets/images/authors/author2-1.jpg" alt="image" /></a></Link>
                    <div className="social-area">
                      <ul>
                        <li>
                          <a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a>
                        </li>
                        <li>
                          <a href="https://www.twitter.com/"><i className="bx bxl-twitter" /></a>
                        </li>
                        <li>
                          <a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="info">
                    <h4><Link legacyBehavior href="/author-details"><a>Dawson Tristan</a></Link></h4>
                    <span>800 Article</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="author-2">
                  <div className="image-area">
                    <Link legacyBehavior href="/author-details"><a><img src="assets/images/authors/author2-2.jpg" alt="image" /></a></Link>
                    <div className="social-area">
                      <ul>
                        <li>
                          <a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a>
                        </li>
                        <li>
                          <a href="https://www.twitter.com/"><i className="bx bxl-twitter" /></a>
                        </li>
                        <li>
                          <a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="info">
                    <h4><Link legacyBehavior href="/author-details"><a>Ericol Patrick</a></Link></h4>
                    <span>587 Article</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="author-2">
                  <div className="image-area">
                    <Link legacyBehavior href="/author-details"><a><img src="assets/images/authors/author2-3.jpg" alt="image" /></a></Link>
                    <div className="social-area">
                      <ul>
                        <li>
                          <a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a>
                        </li>
                        <li>
                          <a href="https://www.twitter.com/"><i className="bx bxl-twitter" /></a>
                        </li>
                        <li>
                          <a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="info">
                    <h4><Link legacyBehavior href="/author-details"><a>Andres Emilion</a></Link></h4>
                    <span>920 Article</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="author-2">
                  <div className="image-area">
                    <Link legacyBehavior href="/author-details"><a><img src="assets/images/authors/author2-4.jpg" alt="image" /></a></Link>
                    <div className="social-area">
                      <ul>
                        <li>
                          <a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a>
                        </li>
                        <li>
                          <a href="https://www.twitter.com/"><i className="bx bxl-twitter" /></a>
                        </li>
                        <li>
                          <a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="info">
                    <h4><Link legacyBehavior href="/author-details"><a>Lukas Marcusa</a></Link></h4>
                    <span>495 Article</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="author-2">
                  <div className="image-area">
                    <Link legacyBehavior href="/author-details"><a><img src="assets/images/authors/author2-5.jpg" alt="image" /></a></Link>
                    <div className="social-area">
                      <ul>
                        <li>
                          <a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a>
                        </li>
                        <li>
                          <a href="https://www.twitter.com/"><i className="bx bxl-twitter" /></a>
                        </li>
                        <li>
                          <a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="info">
                    <h4><Link legacyBehavior href="/author-details"><a>Mateo Danienobi</a></Link></h4>
                    <span>495 Article</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="author-2">
                  <div className="image-area">
                    <Link legacyBehavior href="/author-details"><a><img src="assets/images/authors/author2-6.jpg" alt="image" /></a></Link>
                    <div className="social-area">
                      <ul>
                        <li>
                          <a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a>
                        </li>
                        <li>
                          <a href="https://www.twitter.com/"><i className="bx bxl-twitter" /></a>
                        </li>
                        <li>
                          <a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="info">
                    <h4><Link legacyBehavior href="/author-details"><a>Andres Emilion</a></Link></h4>
                    <span>495 Article</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="author-2">
                  <div className="image-area">
                    <Link legacyBehavior href="/author-details"><a><img src="assets/images/authors/author2-7.jpg" alt="image" /></a></Link>
                    <div className="social-area">
                      <ul>
                        <li>
                          <a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a>
                        </li>
                        <li>
                          <a href="https://www.twitter.com/"><i className="bx bxl-twitter" /></a>
                        </li>
                        <li>
                          <a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="info">
                    <h4><Link legacyBehavior href="/author-details"><a>Archer Enzona</a></Link></h4>
                    <span>495 Article</span>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default AuthorFeature
