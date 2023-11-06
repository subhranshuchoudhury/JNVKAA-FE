import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, EffectFade } from "swiper";
import { useMemo } from "react";
import Link from "next/link";
SwiperCore.use([Navigation, Autoplay, EffectFade]);

function TrandingArticle() {
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
				spaceBetween: 10,
			},
			386: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			576: {
				slidesPerView: 1
			},
			768: {
				slidesPerView: 2
			},
			992: {
				slidesPerView: 2
			},
			1200: {
				slidesPerView: 2
			},
			1400: {
				slidesPerView: 3
			},
			1500: {
				slidesPerView: 3
			},
		}
        }
    })
  return (
    <div className="home-two-trending-post">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-12 mb-40">
        <div className="section-title-2 three">
          <div className="titel text-center">
            <h4>Trending Article</h4>
            <div className="dash" />
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <Swiper {...slider} className="swiper trending-article2">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="trending-article-card-2">
                <div className="article-img">
                  <Link legacyBehavior href="/post-format-no-sidebar-02"><a><img src="assets/images/article/article2-1.png" alt="" /></a></Link>
                </div>
                <div className="article-content">
                  <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Namen necless mattis quam Integer quis est viverra ant interdum
                      tortor non.</a></Link></h5>
                  <div className="publish-date">
                    <Link legacyBehavior href="/blog-standard"><a>30 November, 2022</a></Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="trending-article-card-2">
                <div className="article-img">
                  <Link legacyBehavior href="/post-format-no-sidebar-02"><a><img src="assets/images/article/article2-2.png" alt="" /></a></Link>
                </div>
                <div className="article-content">
                  <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Praesent rutrum dignissime tristique Sed hendrer itema Gortor
                      quam eget.</a></Link></h5>
                  <div className="publish-date">
                    <Link legacyBehavior href="/blog-standard"><a>21 November, 2022</a></Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="trending-article-card-2">
                <div className="article-img">
                  <Link legacyBehavior href="post-format-no-sidebar-02"><a><img src="assets/images/article/article2-3.png" alt="" /></a></Link>
                </div>
                <div className="article-content">
                  <h5><Link legacyBehavior href="post-format-no-sidebar-02"><a>Sed pretium dolor velnisidoi volutpat veldatet commodo turpis
                      efficitur Praes.</a></Link></h5>
                  <div className="publish-date">
                    <Link legacyBehavior href="blog-standard"><a>05 November, 2022</a></Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="trending-article-card-2">
                <div className="article-img">
                  <Link legacyBehavior href="/post-format-no-sidebar-02"><a><img src="assets/images/article/article2-4.png" alt="" /></a></Link>
                </div>
                <div className="article-content">
                  <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Sed pretium dolor velnisidoi volutpat veldatet commodo turpis
                      efficitur Praes.</a></Link></h5>
                  <div className="publish-date">
                    <Link legacyBehavior href="/blog-standard"><a>05 November, 2022</a></Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="trending-article-card-2">
                <div className="article-img">
                  <Link legacyBehavior href="/post-format-no-sidebar-02"><a><img src="assets/images/article/article2-5.png" alt="" /></a></Link>
                </div>
                <div className="article-content">
                  <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Sed pretium dolor velnisidoi volutpat veldatet commodo turpis
                      efficitur Praes.</a></Link></h5>
                  <div className="publish-date">
                    <Link legacyBehavior href="/blog-standard"><a>05 November, 2022</a></Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="trending-article-card-2">
                <div className="article-img">
                  <Link legacyBehavior href="/post-format-no-sidebar-02"><a><img src="assets/images/article/article2-6.png" alt="" /></a></Link>
                </div>
                <div className="article-content">
                  <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Sed pretium dolor velnisidoi volutpat veldatet commodo turpis
                      efficitur Praes.</a></Link></h5>
                  <div className="publish-date">
                    <Link legacyBehavior href="/blog-standard"><a>05 November, 2022</a></Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  </div>
</div>

  )
}

export default TrandingArticle
