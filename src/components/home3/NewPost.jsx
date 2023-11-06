import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, EffectFade } from "swiper";
import { useMemo } from "react";
import Link from "next/link";
SwiperCore.use([Navigation, Autoplay, EffectFade]);

function NewPost() {
    const slider = useMemo(()=>{
        return {
            slidesPerView: "auto",
		speed: 1200,
		spaceBetween: 20,
		loop: true,
		roundLengths: true,
		navigation: {
			nextEl: ".trending-news-next",
			prevEl: ".trending-news-prev",
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
				slidesPerView: 5
			}
		}
        }
    })
  return (
    <div className="new-post-section">
    <div className="container">
      <div className="row justify-content-center mb-40">
        <div className="col-lg-10">
          <div className="section-title-4 style-2 mb-0 text-center">
            <h3>What’s <span>New</span></h3>
            <img src="assets/images/icons/title-arrow.svg" alt="image" />
          </div>
        </div>
      </div>
    </div>
    <div className="new-post-wrap" style={{background: 'linear-gradient(180deg, rgba(23, 23, 23, 0) 0%, #171717 92.71%) ,url("assets/images/bg/new-post-bg.jpg")'}}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Swiper {...slider} className="swiper new-post-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="blog-transparent mb-30">
                    <div className="content">
                      <div className="author">
                        <img src="assets/images/authors/new-author1.jpg" alt="image" />
                        <div className="desig">
                          <h6><Link legacyBehavior href="/author-details"><a>Alisson</a></Link></h6>
                          <Link legacyBehavior href="/blog-standard"><a  className="date">05 January, 2021</a></Link>
                        </div>
                      </div>
                      <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Analyzing and on Improving Your Blog's Perform.</a></Link></h4>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="blog-transparent mb-30">
                    <div className="content">
                      <div className="author">
                        <img src="assets/images/authors/new-author2.jpg" alt="image" />
                        <div className="desig">
                          <h6><Link legacyBehavior href="/author-details"><a>Martinez</a></Link></h6>
                          <Link legacyBehavior href="/blog-standard"><a className="date">05 January, 2021</a></Link>
                        </div>
                      </div>
                      <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Creating a Consistent Blogs Branding for Your.</a></Link></h4>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="blog-transparent mb-30">
                    <div className="content">
                      <div className="author">
                        <img src="assets/images/authors/new-author3.jpg" alt="image" />
                        <div className="desig">
                          <h6><Link legacyBehavior href="/author-details"><a>Alves</a></Link></h6>
                          <Link legacyBehavior href="/blog-standard"><a className="date">05 January, 2021</a></Link>
                        </div>
                      </div>
                      <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Insider Access Privaan Tours of Food and  Wine.</a></Link></h4>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="blog-transparent mb-30">
                    <div className="content">
                      <div className="author">
                        <img src="assets/images/authors/new-author4.jpg" alt="image" />
                        <div className="desig">
                          <h6><Link legacyBehavior href="/author-details"><a>Alex</a></Link></h6>
                          <Link legacyBehavior href="/blog-standard"><a className="date">05 January, 2021</a></Link>
                        </div>
                      </div>
                      <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Adventure Tours Cultural on Family Friendly Tours.</a></Link></h4>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="blog-transparent mb-30">
                    <div className="content">
                      <div className="author">
                        <img src="assets/images/authors/new-author5.jpg" alt="image" />
                        <div className="desig">
                          <h6><Link legacyBehavior href="/author-details"><a>Thiago</a></Link></h6>
                          <Link legacyBehavior href="/blog-standard"><a className="date">05 January, 2021</a></Link>
                        </div>
                      </div>
                      <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Fusce egestas Dapsumon on accumst scelerisqu.</a></Link></h4>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="blog-transparent mb-30">
                    <div className="content">
                      <div className="author">
                        <img src="assets/images/authors/new-author4.jpg" alt="image" />
                        <div className="desig">
                          <h6><Link legacyBehavior href="/author-details"><a>Alex</a></Link></h6>
                          <Link legacyBehavior href="/blog-standard"><a className="date">05 January, 2021</a></Link>
                        </div>
                      </div>
                      <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Adventure Tours Cultural on Family Friendly Tours.</a></Link></h4>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default NewPost
