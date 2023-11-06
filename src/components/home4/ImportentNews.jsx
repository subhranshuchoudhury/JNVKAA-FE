import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, EffectFade } from "swiper";
import { useMemo } from "react";
import Link from "next/link";
SwiperCore.use([Navigation, Autoplay, EffectFade]);

function ImportentNews() {
    const slider = useMemo(()=>{
        return {
            slidesPerView: "auto",
		speed: 1200,
		spaceBetween: 20,
		// autoplay: true,
		loop: true,
		roundLengths: true,
		navigation: {
			nextEl: ".important-next",
			prevEl: ".important-prev",
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
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3
			},
		}
        }
})
  return (
    <div className="important-news-section pt-120">
    <div className="row">
        <div className="col-lg-9">
        <div className="row mb-40">
            <div className="col-8">
            <div className="section-title-3">
                <img src="assets/images/icons/sec-title-vector.svg" alt="image" />
                <h2>Don't Miss</h2>
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
            <div className="col-12">
            <Swiper {...slider} className="swiper important-news-slider">
                <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                    <div className="blog-card">
                    <div className="blog-grid-7 blog-card-front">
                        <Link legacyBehavior href="/blog-classic"><a  className="cat">Creative</a></Link>
                        <div className="author">
                        <img src="assets/images/authors/author3-1.jpg" alt="image" />
                        <div className="desig">
                            <h6><Link legacyBehavior href="/author-details"><a>Posted by, Alen Jodge</a></Link></h6>
                            <Link legacyBehavior href="/blog-standard"><a  className="date">05 January, 2021</a></Link>
                        </div>
                        </div>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>The Ultimate Guide to Boosting Your Productivity</a></Link></h4>
                        <p>Aptent taciti sociosqu ad litora torquent pugonu
                        himenaeos. Praesent nec neque at dolor titonag
                        venenatis consectetur eu quis ex.</p>
                        <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn-2 four">View
                        Details<i className="bi bi-arrow-right" /></a></Link>
                    </div>
                    <div className="blog-card-back">
                        <div className="blog-card-back-img">
                        <Link legacyBehavior href="/post-format-no-sidebar-02">
                            <a><img src="assets/images/blog-grid/don't-miss-1.jpg" alt="" /></a>
                        </Link>
                        </div>
                        <div className="blog-card-back-content">
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>The Ultimate Guide to Boosting Your Productivity</a></Link></h4>
                        <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn-2 four">View
                            Details<i className="bi bi-arrow-right" /></a></Link>
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="blog-card">
                    <div className="blog-grid-7 blog-card-front">
                        <Link legacyBehavior href="/blog-classic"><a  className="cat">Travel</a></Link>
                        <div className="author">
                        <img src="assets/images/authors/author1-1.jpg" alt="image" />
                        <div className="desig">
                            <h6><Link legacyBehavior href="/author-details"><a>Posted by, Jon Maley</a></Link></h6>
                            <Link legacyBehavior href="/blog-standard"><a  className="date">05 January, 2021</a></Link>
                        </div>
                        </div>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>The Importance of Setting Goals &amp; How to Achieve Them</a></Link></h4>
                        <p>Aptent taciti sociosqu ad litora torquent pugonu
                        himenaeos. Praesent nec neque at dolor titonag
                        venenatis consectetur eu quis ex.</p>
                        <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn-2 four">View
                        Details<i className="bi bi-arrow-right" /></a></Link>
                    </div>
                    <div className="blog-card-back">
                        <div className="blog-card-back-img">
                        <Link legacyBehavior href="/post-format-no-sidebar-02">
                            <a><img src="assets/images/blog-grid/don't-miss-2.jpg" alt="" /></a>
                        </Link>
                        </div>
                        <div className="blog-card-back-content">
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>The Importance of Setting Goals and How to Achieve Them</a></Link></h4>
                        <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn-2 four">View
                            Details<i className="bi bi-arrow-right" /></a></Link>
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="blog-card">
                    <div className="blog-grid-7 blog-card-front">
                        <Link legacyBehavior href="/blog-classic"><a  className="cat">Fashion</a></Link>
                        <div className="author">
                        <img src="assets/images/authors/author4-1.jpg" alt="image" />
                        <div className="desig">
                            <h6><Link legacyBehavior href="/author-details"><a>Posted by, Alen Wakker</a></Link></h6>
                            <Link legacyBehavior href="/blog-standard"><a className="date">05 January, 2021</a></Link>
                        </div>
                        </div>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Unlocking Your Creativity: Techniques and Exercises.</a></Link></h4>
                        <p>Aptent taciti sociosqu ad litora torquent pugonu
                        himenaeos. Praesent nec neque at dolor titonag
                        venenatis consectetur eu quis ex.</p>
                        <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn-2 four">View
                        Details<i className="bi bi-arrow-right" /></a></Link>
                    </div>
                    <div className="blog-card-back">
                        <div className="blog-card-back-img">
                        <Link legacyBehavior href="/post-format-no-sidebar-02">
                            <a><img src="assets/images/blog-grid/don't-miss-3.jpg" alt="" /></a>
                        </Link>
                        </div>
                        <div className="blog-card-back-content">
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Unlocking Your Creativity: Techniques and Exercises.</a></Link></h4>
                        <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn-2 four">View
                            Details<i className="bi bi-arrow-right" /></a></Link>
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="blog-card">
                    <div className="blog-grid-7 blog-card-front">
                        <Link legacyBehavior href="/blog-classic"><a className="cat">Photography</a></Link>
                        <div className="author">
                        <img src="assets/images/authors/author4-2.jpg" alt="image" />
                        <div className="desig">
                            <h6><Link legacyBehavior href="/author-details"><a>Posted by, Mateo Danienobi</a></Link></h6>
                            <Link legacyBehavior href="/blog-standard"><a  className="date">05 January, 2021</a></Link>
                        </div>
                        </div>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Building Stronger Relationships for Better Communication.</a></Link></h4>
                        <p>Aptent taciti sociosqu ad litora torquent pugonu
                        himenaeos. Praesent nec neque at dolor titonag
                        venenatis consectetur eu quis ex.</p>
                        <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn-2 four">View
                        Details<i className="bi bi-arrow-right" /></a></Link>
                    </div>
                    <div className="blog-card-back">
                        <div className="blog-card-back-img">
                        <Link legacyBehavior href="/post-format-no-sidebar-02">
                            <a><img src="assets/images/blog-grid/don't-miss-4.jpg" alt="" /></a>
                        </Link>
                        </div>
                        <div className="blog-card-back-content">
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Building Stronger Relationships for Better Communication.</a></Link></h4>
                        <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn-2 four">View
                            Details<i className="bi bi-arrow-right" /></a></Link>
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="blog-card">
                    <div className="blog-grid-7 blog-card-front">
                        <Link legacyBehavior href="/blog-classic"><a  className="cat">Party</a></Link>
                        <div className="author">
                        <img src="assets/images/authors/author4-3.jpg" alt="image" />
                        <div className="desig">
                            <h6><Link legacyBehavior href="/author-details"><a>Posted by, Andres Emilion</a></Link></h6>
                            <Link legacyBehavior href="/blog-standard"><a  className="date">05 January, 2021</a></Link>
                        </div>
                        </div>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Emotional Intelligence: Enhancing Your Social Skills.</a></Link></h4>
                        <p>Aptent taciti sociosqu ad litora torquent pugonu
                        himenaeos. Praesent nec neque at dolor titonag
                        venenatis consectetur eu quis ex.</p>
                        <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn-2 four">View
                        Details<i className="bi bi-arrow-right" /></a></Link>
                    </div>
                    <div className="blog-card-back">
                        <div className="blog-card-back-img">
                        <Link legacyBehavior href="/post-format-no-sidebar-02">
                            <a><img src="assets/images/blog-grid/don't-miss-5.jpg" alt="" /></a>
                        </Link>
                        </div>
                        <div className="blog-card-back-content">
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Navigating the World of Personal Finance: A Beginner's Guide.</a></Link></h4>
                        <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn-2 four">View
                            Details<i className="bi bi-arrow-right" /></a></Link>
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
                <dSwiperSlideiv className="swiper-slide">
                    <div className="blog-card">
                    <div className="blog-grid-7 blog-card-front">
                        <Link legacyBehavior href="/blog-classic"><a  className="cat">Lifestyle</a></Link>
                        <div className="author">
                        <img src="assets/images/authors/author4-4.jpg" alt="image" />
                        <div className="desig">
                            <h6><Link legacyBehavior href="/author-details"><a>Posted by, Archer Enzona</a></Link></h6>
                            <Link legacyBehavior href="/blog-standard"><a  className="date">05 January, 2021</a></Link>
                        </div>
                        </div>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Cultivating Inner Peace and Happiness.</a></Link></h4>
                        <p>Aptent taciti sociosqu ad litora torquent pugonu
                        himenaeos. Praesent nec neque at dolor titonag
                        venenatis consectetur eu quis ex.</p>
                        <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn-2 four">View
                        Details<i className="bi bi-arrow-right" /></a></Link>
                    </div>
                    <div className="blog-card-back">
                        <div className="blog-card-back-img">
                        <Link legacyBehavior href="/post-format-no-sidebar-02">
                            <a><img src="assets/images/blog-grid/don't-miss-6.jpg" alt="" /></a>
                        </Link>
                        </div>
                        <div className="blog-card-back-content">
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>The Power of Mindfulness: Cultivating Inner Peace and Happiness.</a></Link></h4>
                        <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn-2 four">View
                            Details<i className="bi bi-arrow-right" /></a></Link>
                        </div>
                    </div>
                    </div>
                </dSwiperSlideiv>
                </div>
            </Swiper>
            </div>
        </div>
        </div>
        <div className="col-lg-3">
        <div className="sidebar-card" style={{backgroundImage: 'url("assets/images/bg/sidebar-bg.png")'}}>
            <div className="title">
            <h5>Trending Now</h5>
            </div>
            <div className="blog-list-1 style-four">
            <div className="content">
                <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Aenean vehicula aliquet tincid consequat Duis.</a></Link>
                </h6>
                <ul>
                <li><Link legacyBehavior href="/blog-standard"><a>Nov 08, 2022</a></Link></li>
                <li><Link legacyBehavior href="/blog-standard"><a>390 Comment</a></Link></li>
                </ul>
            </div>
            </div>
            <div className="blog-list-1 style-four">
            <div className="content">
                <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>libero sapien interdum diamon et consequat erat.</a></Link>
                </h6>
                <ul>
                <li><Link legacyBehavior href="/blog-standard"><a>Nov 08, 2022</a></Link></li>
                <li><Link legacyBehavior href="/blog-standard"><a>390 Comment</a></Link></li>
                </ul>
            </div>
            </div>
            <div className="blog-list-1 style-four">
            <div className="content">
                <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Quisque quis felis nec tortorat ultrices
                    imperdiet.</a></Link></h6>
                <ul>
                <li><Link legacyBehavior href="/blog-standard"><a>Nov 08, 2022</a></Link></li>
                <li><Link legacyBehavior href="/blog-standard"><a>390 Comment</a></Link></li>
                </ul>
            </div>
            </div>
            <div className="blog-list-1 style-four pb-0">
            <div className="content">
                <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>gravida orci sedat jarito laorei tellusfur Offen
                    gone.</a></Link></h6>
                <ul>
                <li><Link legacyBehavior href="/blog-standard"><a>Nov 08, 2022</a></Link></li>
                <li><Link legacyBehavior href="/blog-standard"><a>390 Comment</a></Link></li>
                </ul>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>

  )
}

export default ImportentNews
