import Link from 'next/link'
import React, { useState } from 'react'
import ModalVideo from 'react-modal-video';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function RecentVideo() {
    const [isOpen, setOpen] = useState(false);
    const slideSetting = {
        arrows: true,
		autoplay: false,
		autoplaySpeed: 3000,
		slidesToShow: 4,
		slidesToScroll: 1,
		vertical: true,
		dots: false,
		focusOnSelect: true,
		verticalSwiping: true,
		responsive: [
			{
				breakpoint: 992,
				slidesToShow: 4,
				settings: {
					vertical: true,
				}
			},
			{
				breakpoint: 768,
				settings: {
					vertical: true,
					slidesToShow: 3,

				}
			},
			{
				breakpoint: 580,
				settings: {
					vertical: true,
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 380,
				settings: {
					vertical: true,
					slidesToShow: 2,
				}
			}
		]
    }
  return (
    <div className="video-section section-wrap" style={{backgroundImage: 'url("assets/images/bg/section-bg.png")'}}>
  <div className="row">
    <div className="col-md-7">
      <div className="section-title-3  mb-40">
        <img src="assets/images/icons/sec-title-vector.svg" alt="image" />
        <h2>Recent Video</h2>
      </div>
      <div className="blog-video-grid">
        <div className="video-player">
          <div onClick={()=>setOpen(true)} className="play-icon">
            <i className="bi bi-play-fill" />
          </div>
          <div onClick={()=>setOpen(true)}>
            <img src="assets/images/bg/video-bg.jpg" alt="image" />
          </div>
        </div>
        <h3><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Initiate Your Journey to Becoming Who You Aspire to Be.</a></Link></h3>
      </div>
    </div>
    <div className="col-lg-5">
      <div className="section-title-3 mb-40">
        <img src="assets/images/icons/sec-title-vector.svg" alt="image" />
        <h2>Watch Next</h2>
      </div>
      <Slider {...slideSetting} className="slider-g video-list-slider thumb-image  mb-lg-0 mb-4">
        <div className="thumbnail-image">
          <div className="blog-video-list">
            <div onClick={()=>setOpen(true)} className="image">
              <div className="overlay">
                <i className="bi bi-play-fill" />
              </div>
              <img src="assets/images/blog-video/video-list1-1.jpg" alt="image" />
            </div>
            <div className="content">
              <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Ouregin now tobeing what youn will beingi forest
                  prioty.</a></Link></h6>
              <ul>
                <li><Link legacyBehavior href="/blog-standard"><a>Nov 08, 2022</a></Link></li>
                <li><Link legacyBehavior href="/blog-standard"><a>390 Comment</a></Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="thumbnail-image">
          <div className="blog-video-list">
            <div onClick={()=>setOpen(true)} className="image">
              <div className="overlay">
                <i className="bi bi-play-fill" />
              </div>
              <img src="assets/images/blog-video/video-list1-2.jpg" alt="image" />
            </div>
            <div className="content">
              <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Phasellus sollicitudin nulla euismt volutpat
                  ligula neculas.</a></Link></h6>
              <ul>
                <li><Link legacyBehavior href="/blog-standard"><a>Nov 08, 2022</a></Link></li>
                <li><Link legacyBehavior href="/blog-standard"><a>390 Comment</a></Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="thumbnail-image">
          <div className="blog-video-list">
            <div onClick={()=>setOpen(true)} className="image">
              <div className="overlay">
                <i className="bi bi-play-fill" />
              </div>
              <img src="assets/images/blog-video/video-list1-3.jpg" alt="image" />
            </div>
            <div className="content">
              <h6><Link legacyBehavior href="post-format-no-sidebar-02"><a>Duis interdum consectetur Aliqut sapien vel
                  suscipit.</a></Link></h6>
              <ul>
                <li><Link legacyBehavior href="blog-standard"><a>Nov 08, 2022</a></Link></li>
                <li><Link legacyBehavior href="blog-standard"><a>390 Comment</a></Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="thumbnail-image">
          <div className="blog-video-list">
            <div onClick={()=>setOpen(true)} className="image">
              <div className="overlay">
                <i className="bi bi-play-fill" />
              </div>
              <img src="assets/images/blog-video/video-list1-4.jpg" alt="image" />
            </div>
            <div className="content">
              <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>eleifend felis lectus posuere laci tristique
                  sapienato.</a></Link></h6>
              <ul>
                <li><Link legacyBehavior href="/blog-standard"><a>Nov 08, 2022</a></Link></li>
                <li><Link legacyBehavior href="/blog-standard"><a>390 Comment</a></Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="thumbnail-image">
          <div className="blog-video-list">
            <div onClick={()=>setOpen(true)} className="image">
              <div className="overlay">
                <i className="bi bi-play-fill" />
              </div>
              <img src="assets/images/blog-video/video-list1-1.jpg" alt="image" />
            </div>
            <div className="content">
              <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>gravida orci sed jaritob laorei tellus furthure
                  gone.</a></Link></h6>
              <ul>
                <li><Link legacyBehavior href="/blog-standard"><a>Nov 08, 2022</a></Link></li>
                <li><Link legacyBehavior href="/blog-standard"><a>390 Comment</a></Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="thumbnail-image">
          <div className="blog-video-list">
            <div onClick={()=>setOpen(true)} className="image">
              <div className="overlay">
                <i className="bi bi-play-fill" />
              </div>
              <img src="assets/images/blog-video/video-list1-2.jpg" alt="image" />
            </div>
            <div className="content">
              <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>gravida orci sed jaritob laorei tellus furthure
                  gone.</a></Link></h6>
              <ul>
                <li><Link legacyBehavior href="/blog-standard"><a>Nov 08, 2022</a></Link></li>
                <li><Link legacyBehavior href="/blog-standard"><a>390 Comment</a></Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="thumbnail-image">
          <div className="blog-video-list">
            <div onClick={()=>setOpen(true)} className="image">
              <div className="overlay">
                <i className="bi bi-play-fill" />
              </div>
              <img src="assets/images/blog-video/video-list1-3.jpg" alt="image" />
            </div>
            <div className="content">
              <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>gravida orci sed jaritob laorei tellus furthure
                  gone.</a></Link></h6>
              <ul>
                <li><Link legacyBehavior href="/blog-standard"><a>Nov 08, 2022</a></Link></li>
                <li><Link legacyBehavior href="/blog-standard"><a>390 Comment</a></Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="thumbnail-image">
          <div className="blog-video-list">
            <div onClick={()=>setOpen(true)} className="image">
              <div className="overlay">
                <i className="bi bi-play-fill" />
              </div>
              <img src="assets/images/blog-video/video-list1-4.jpg" alt="image" />
            </div>
            <div className="content">
              <h6><Link legacyBehavioLink legacyBehavior href="/post-format-no-sidebar-02"><a>gravida orci sed jaritob laorei tellus furthure
                  gone.</a></Link></h6>
              <ul>
                <li><Link legacyBehavioLink legacyBehavior href="/blog-standard"><a>Nov 08, 2022</a></Link></li>
                <li><Link legacyBehavioLink legacyBehavior href="/blog-standard"><a>390 Comment</a></Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="thumbnail-image">
          <div className="blog-video-list">
            <div onClick={()=>setOpen(true)} className="image">
              <div className="overlay">
                <i className="bi bi-play-fill" />
              </div>
              <img src="assets/images/blog-video/video-list1-1.jpg" alt="image" />
            </div>
            <div className="content">
              <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>gravida orci sed jaritob laorei tellus furthure
                  gone.</a></Link></h6>
              <ul>
                <li><Link legacyBehavior href="/blog-standard"><a>Nov 08, 2022</a></Link></li>
                <li><Link legacyBehavior href="/blog-standard"><a>390 Comment</a></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  </div>
  <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)} 
    />
</div>

  )
}

export default RecentVideo
