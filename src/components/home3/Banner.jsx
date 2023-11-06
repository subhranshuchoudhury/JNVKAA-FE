import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, EffectFade } from "swiper";
import { useMemo } from "react";
import Link from "next/link";
SwiperCore.use([Navigation, Autoplay, EffectFade]);

function Banner() {
    const slider = useMemo(()=>{
        return {
            slidesPerView: "auto",
		speed: 1500,
		spaceBetween: 30,
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
		loop: true,
		autoplay: true,
        }
    })
  return (
    <div className="banner-section">
  <div className="container-fluid px-0">
    <div className="row g-0">
      <div className="col-xl-8">
        <Swiper {...slider} className="swiper banner-3-slider">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="blog-image-2 style-2">
                <div className="image">
                  <img src="assets/images/banner/banner3-1.jpg" alt="image" />
                </div>
                <div className="content">
                  <h1><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Our Begin Now To Being What You Will Be Hereafter.</a></Link></h1>
                  <ul className="meta"> 
                    <li><Link legacyBehavior href="/author-details"><a><img src="assets/images/icons/user-sm.svg" alt="" />By, Watson Dube</a></Link></li>
                    <li><Link legacyBehavior href="/blog-standard"><a><img src="assets/images/icons/date-sm.svg" alt="" />21 Dec, 2022</a></Link></li>
                    <li><Link legacyBehavior href="/blog-standard"><a><img src="assets/images/icons/comment-sm.svg" alt="" />450 Comment</a></Link></li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="blog-image-2 style-2">
                <div className="image">
                  <img src="assets/images/banner/banner3-2.jpg" alt="image" />
                </div>
                <div className="content">
                  <h2><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Initiate Your Journey to Becoming Your Future Self.</a></Link></h2>
                  <ul className="meta"> 
                    <li><Link legacyBehavior href="/author-details"><a><img src="assets/images/icons/user-sm.svg" alt="" />By, Nick Jon</a></Link></li>
                    <li><Link legacyBehavior href="/blog-standard"><a><img src="assets/images/icons/date-sm.svg" alt="" />21 Dec, 2022</a></Link></li>
                    <li><Link legacyBehavior href="/blog-standard"><a><img src="assets/images/icons/comment-sm.svg" alt="" />450 Comment</a></Link></li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="blog-image-2 style-2">
                <div className="image">
                  <img src="assets/images/banner/banner3-3.jpg" alt="image" />
                </div>
                <div className="content">
                  <h2><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Commence the Path to Your Desired Future Being.</a></Link></h2>
                  <ul className="meta"> 
                    <li><Link legacyBehavior href="/author-details"><a><img src="assets/images/icons/user-sm.svg" alt="" />By, Dani Alves</a></Link></li>
                    <li><Link legacyBehavior href="/blog-standard"><a><img src="assets/images/icons/date-sm.svg" alt="" />21 Dec, 2022</a></Link></li>
                    <li><Link legacyBehavior href="/blog-standard"><a><img src="assets/images/icons/comment-sm.svg" alt="" />450 Comment</a></Link></li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="blog-image-2 style-2">
                <div className="image">
                  <img src="assets/images/banner/banner3-4.jpg" alt="image" />
                </div>
                <div className="content">
                  <h2><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Embark on the Transformation to Your Future Identity.</a></Link></h2>
                  <ul className="meta"> 
                    <li><Link legacyBehavior href="/aupost-format-no-sidebar-02"><a><img src="assets/images/icons/user-sm.svg" alt="" />By, Lucas Mora</a></Link></li>
                    <li><Link legacyBehavior href="/blog-standard"><a><img src="assets/images/icons/date-sm.svg" alt="" />21 Dec, 2022</a></Link></li>
                    <li><Link legacyBehavior href="/blog-standard"><a><img src="assets/images/icons/comment-sm.svg" alt="" />450 Comment</a></Link></li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
      <div className="col-xl-4">
        <div className="banner3-list-wrapper">
          <div className="blog-list-1 style-six">
            <div className="content">
              <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Quisque ut hendrerit leo quisonat scelerisque quam vitae.</a></Link></h6>
              <ul>
                <li><Link legacyBehavior href="/author-details"><a>By, Graham Kiden</a></Link></li>
                <li><Link legacyBehavior href="/blog-standard"><a>09 Dec, 2022</a></Link></li>
              </ul>
            </div>
          </div>
          <div className="blog-list-1 style-six">
            <div className="content">
              <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Pellentesque non mi lorem Morboy maximus lorem odio varius.</a></Link></h6>
              <ul>
                <li><Link legacyBehavior href="/author-details"><a>By, Elliott Jesus</a></Link></li>
                <li><Link legacyBehavior href="/blog-standard"><a>18 Dec, 2022</a></Link></li>
              </ul>
            </div>
          </div>
          <div className="blog-list-1 style-six">
            <div className="content">
              <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>tincidunt quis Fusce finibus lacust nisi, in pharetra elementum.</a></Link></h6>
              <ul>
                <li><Link legacyBehavior href="/author-details"><a>By, Mesiah Gavin</a></Link></li>
                <li><Link legacyBehavior href="/blog-standard"><a>30 Dec, 2022</a></Link></li>
              </ul>
            </div>
          </div>
          <div className="blog-list-1 style-six">
            <div className="content">
              <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Fusce egestas ipsumon scelerisquo libero porttitor accumsan.</a></Link></h6>
              <ul>
                <li><Link legacyBehavior href="/author-details"><a>By, Kevin Judah</a></Link></li>
                <li><Link legacyBehavior href="/blog-standard"><a>01 Jan, 2023</a></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Banner
