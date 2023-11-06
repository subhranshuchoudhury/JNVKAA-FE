import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, EffectFade } from "swiper";
import { useMemo } from "react";
import Link from "next/link";
SwiperCore.use([Navigation, Autoplay, EffectFade]);


function TrandingNews() {
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
				slidesPerView: 4
			}
		}
        }
    },[])
  return (
    <div className="trending-news-section pb-120">
  <div className="container">
    <div className="row align-items-center mb-40">
      <div className="col-lg-9">
        <div className="section-title-4 mb-0">
          <h3>Trending <span>News</span></h3>
          <img src="assets/images/icons/title-arrow.svg" alt="image" />
        </div>
      </div>
      <div className="col-lg-3 d-flex justify-content-end">
        <div className="slider-arrows arrow-style-new text-center d-lg-flex d-none flex-row justify-content-end align-items-center gap-4">
          <div className="trending-news-prev swiper-prev-arrow" tabIndex={0} role="button" aria-label="Previous slide">
            <i className="bi bi-arrow-left" />
          </div>
          <div className="trending-news-next swiper-next-arrow" tabIndex={0} role="button" aria-label="Next slide">
            <i className="bi bi-arrow-right" />
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <Swiper {...slider} className="swiper trending-news-slider">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="blog-grid-8">
                <Link legacyBehavior href="/blog-classic" >
                  <a className="image"><span className="category">City Tour</span>
                  <img src="assets/images/blog-grid/trending1.jpg" alt="image" /></a>
                </Link>
                <div className="content">
                  <ul>
                    <li>By <Link legacyBehavior href="/author-details"><a><span>Brookson</span></a></Link></li>
                    <li><Link legacyBehavior href="/blog-standard"><a>15 Jan, 2023</a></Link></li>
                  </ul>
                  <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>That Power of Networking in the Industry.</a></Link></h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="blog-image-5" style={{backgroundImage: 'url("assets/images/blog-grid/trending-3.jpg")'}}>
                <Link legacyBehavior href="/blog-classic"><a  className="category">Experiential</a></Link>
                <div className="content">
                  <ul>
                    <li>By <Link legacyBehavior href="/author-details"><a><span>Nicholas</span></a></Link></li>
                    <li><Link legacyBehavior href="/blog-standard"><a>08 Jan, 2023</a></Link></li>
                  </ul>
                  <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Content for Your Blogs Creating Compell.</a></Link></h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="blog-grid-8">
                <Link legacyBehavior href="/blog-classic">
                  <a  className="image"><span className="category">River Cruise</span>
                  <img src="assets/images/blog-grid/trending2.jpg" alt="image" /></a>
                </Link>
                <div className="content">
                  <ul>
                    <li>By <Link legacyBehavior href="/author-details"><a><span>Harrison</span></a></Link></li>
                    <li><Link legacyBehavior href="/blog-standard"><a>22 Nov, 2023</a></Link></li>
                  </ul>
                  <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Building an Engaged Your Blog Audience for.</a></Link></h5>
                </div>
              </div>
            </SwiperSlide>  
            <SwiperSlide className="swiper-slide">
              <div className="blog-image-5" style={{backgroundImage: 'url("assets/images/blog-grid/trending-4.png")'}}>
                <Link legacyBehavior href="/blog-classic"><a  className="category">Adventure</a></Link>
                <div className="content">
                  <ul>
                    <li>By <Link legacyBehavior href="/author-details"><a>Braydenl</a></Link></li>
                    <li><Link legacyBehavior href="/blog-standard"><a>11 Nov, 2023</a></Link></li>
                  </ul>
                  <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>The Best fol Blog Tools and Platforms.</a></Link></h5>
                </div>
              </div>
            </SwiperSlide>  
            <SwiperSlide className="swiper-slide">
              <div className="blog-grid-8">
                <Link legacyBehavior href="/blog-classic">
                  <a className="image"><span className="category">Food</span>
                  <img src="assets/images/blog-grid/trending5.jpg" alt="image" /></a>
                </Link>
                <div className="content">
                  <ul>
                    <li>By <Link legacyBehavior href="/author-details"><a><span>Michel</span></a></Link></li>
                    <li><Link legacyBehavior href="/blog-standard"><a>22 Nov, 2023</a></Link></li>
                  </ul>
                  <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Building an Engaged Your Blog Audience for.</a></Link></h5>
                </div>
              </div>
            </SwiperSlide>   
            <SwiperSlide className="swiper-slide">
              <div className="blog-image-5" style={{backgroundImage: 'url("assets/images/blog-grid/trending-6.jpg")'}}>
                <Link legacyBehavior href="/blog-classic" ><a className="category">Fitness</a></Link>
                <div className="content">
                  <ul>
                    <li>By <Link legacyBehavior href="/author-details"><a>Braydenl</a></Link></li>
                    <li><Link legacyBehavior href="/blog-standard"><a>11 Nov, 2023</a></Link></li>
                  </ul>
                  <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>The Best fol Blog Tools and Platforms.</a></Link></h5>
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

export default TrandingNews
