import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';

function TopArticle() {
    const sliderForRef = useRef(null);
    const sliderNavRef = useRef(null);
  
    const slickNavSettings = {
      slidesToShow: 6,
      slidesToScroll: 1,
      vertical: true,
      dots: false,
      focusOnSelect: true,
      autoplay: true,
		autoplaySpeed: 2500,
      verticalSwiping: true,
      asNavFor: sliderForRef.current,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 380,
          settings: {
            slidesToShow: 4,
          },
        },
      ],
    };
  
    const slickSettings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: sliderNavRef.current,
    };
    return (

        <div className="top-article-section pt-120 pb-120">
  <div className="row mb-40">
    <div className="col-8">
      <div className="section-title-3">
        <img src="assets/images/icons/sec-title-vector.svg" alt="image" />
        <h2>Top Article</h2>
      </div>
    </div>
    <div className="col-4">
    </div>
  </div>
  <div className="row gy-5">
    <div className="col-lg-4">
      <div className="blog-grid-4 style-3">
        <Link legacyBehavior href="/post-format-no-sidebar-02">
            <a  className="image">
          <img src="assets/images/article/article4-1.jpg" alt="image" />
            </a>
        </Link>
        <div className="content">
          <ul>
            <li><Link legacyBehavior href="/author-details"><a>By Jace Emmett</a></Link></li>
            <li><a href="#">Nov 15, 2022</a></li>
            <li><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></li>
          </ul>
          <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Sed lectus duitotan tristiqu eitati eleifend blandit
              necol.</a></Link></h4>
          <p>Aliquam erat volutpat. Ut scelerisque elementum nisi, anedoi fermentumon odiona
            gouvikoi tincidunt vel. Proin velit estear elementum sed hendrerit dordin cadovia.
          </p>
        </div>
      </div>
    </div>
    <div className="col-xl-8 col-lg-8">
      <div className="vehicle-detail-banner banner-content clearfix">
      <div className="banner-slider">
        <Slider {...slickNavSettings} ref={sliderNavRef} className="slider-g slider-nav thumb-image blog-list-wrapper mb-lg-0 mb-4">
  <div className="thumbnail-image">
    <div className="blog-list-3 style-2">
      <ul>
        <li><Link legacyBehavior href="/author-details"><a>By Ashton Rhett</a></Link></li>
        <li><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></li>
      </ul>
      <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Gravida orci sed jarito laorenoba tellusfur
          outha.</a></Link></h6>
    </div>
  </div>
  <div className="thumbnail-image">
    <div className="blog-list-3 style-2">
      <ul>
        <li><Link legacyBehavior href="/author-details"><a>By Bentley Carlos</a></Link></li>
        <li><Link legacyBehavior href="/blog-classic"><a>Plant</a></Link></li>
      </ul>
      <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>ornare varius Nullam sapien risus accumsan
          quis.</a></Link></h6>
    </div>
  </div>
  <div className="thumbnail-image">
    <div className="blog-list-3 style-2">
      <ul>
        <li><Link legacyBehavior href="/author-details"><a>By Ryker Adriel</a></Link></li>
        <li><Link legacyBehavior href="/blog-classic"><a>Photography</a></Link></li>
      </ul>
      <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>elitquis metus Nam vitae exsemon Proin
          fermentum.</a></Link></h6>
    </div>
  </div>
  <div className="thumbnail-image">
    <div className="blog-list-3 style-2">
      <ul>
        <li><Link legacyBehavior href="/author-details"><a>By Graham Kaiden</a></Link></li>
        <li><Link legacyBehavior href="/blog-classic"><a>Lifestyle</a></Link></li>
      </ul>
      <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>laoreet, exdolor condi mentumani turpis
          hendrerit sapien.</a></Link></h6>
    </div>
  </div>
  <div className="thumbnail-image">
    <div className="blog-list-3 style-2">
      <ul>
        <li><Link legacyBehavior href="/author-details"><a>By Maxwell Juan</a></Link></li>
        <li><Link legacyBehavior href="/blog-classic"><a>Travel</a></Link></li>
      </ul>
      <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>porttitor suscipit euelitor Inviverra
          pellentesqu nisleu.</a></Link></h6>
    </div>
  </div>
  <div className="thumbnail-image">
    <div className="blog-list-3 style-2">
      <ul>
        <li><Link legacyBehavior href="/author-details"><a>By Bentley Carlos</a></Link></li>
        <li><Link legacyBehavior href="/blog-classic"><a>Gaming</a></Link></li>
      </ul>
      <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>ornare varius Nullam sapien risus accumsan
          quis.</a></Link></h6>
    </div>
  </div>
  <div className="thumbnail-image">
    <div className="blog-list-3 style-2">
      <ul>
        <li><Link legacyBehavior href="/author-details"><a>By Graham Kaiden</a></Link></li>
        <li><Link legacyBehavior href="/blog-classic"><a>Plant</a></Link></li>
      </ul>
      <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>laoreet, exdolor condi mentumani turpis
          hendrerit sapien.</a></Link></h6>
    </div>
  </div>
  <div className="thumbnail-image">
    <div className="blog-list-3 style-2">
      <ul>
        <li><Link legacyBehavior href="/author-details"><a>By Maxwell Juan</a></Link></li>
        <li><Link legacyBehavior href="/blog-classic"><a>Fasion</a></Link></li>
      </ul>
      <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>porttitor suscipit euelitor Inviverra
          pellentesqu nisleu.</a></Link></h6>
    </div>
  </div>
  <div className="thumbnail-image">
    <div className="blog-list-3 style-2">
      <ul>
        <li><Link legacyBehavior href="/author-details"><a>By Bentley Carlos</a></Link></li>
        <li><Link legacyBehavior href="/blog-classic"><a>Sports</a></Link></li>
      </ul>
      <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>ornare varius Nullam sapien risus accumsan
          quis.</a></Link></h6>
    </div>
  </div>
</Slider>

<Slider {...slickSettings} ref={sliderForRef} className="slider-g slider-for">
  <div className="slider-banner-image">
    <div className="date">
      <h4>03</h4>
      <span>August</span>
    </div>
    <Link legacyBehavior href="/post-format-no-sidebar-02">
      <a><img src="assets/images/blog-grid/article4-2.jpg" alt="" /></a>  
    </Link>
  </div>
  <div className="slider-banner-image">
    <div className="date">
      <h4>19</h4>
      <span>August</span>
    </div>
    <Link legacyBehavior href="/post-format-no-sidebar-02">
      <a><img src="assets/images/blog-grid/article4-3.jpg" alt="" /></a>
    </Link>
  </div>
  <div className="slider-banner-image">
    <div className="date">
      <h4>18</h4>
      <span>August</span>
    </div>
    <Link legacyBehavior href="/post-format-no-sidebar-02">
      <a><img src="assets/images/blog-grid/article4-4.jpg" alt="" /></a>
    </Link>
  </div>
  <div className="slider-banner-image">
    <div className="date">
      <h4>16</h4>
      <span>August</span>
    </div>
    <Link legacyBehavior href="/post-format-no-sidebar-02">
        <a>
      <img src="assets/images/blog-grid/article4-5.jpg" alt="" />
        </a>
    </Link>
  </div>
  <div className="slider-banner-image">
    <div className="date">
      <h4>15</h4>
      <span>August</span>
    </div>
    <Link legacyBehavior href="/post-format-no-sidebar-02">
        <a>
      <img src="assets/images/blog-grid/article4-6.jpg" alt="" />
        </a>
    </Link>
  </div>
  <div className="slider-banner-image">
    <div className="date">
      <h4>14</h4>
      <span>August</span>
    </div>
    <Link legacyBehavior href="/post-format-no-sidebar-02">
        <a>
      <img src="assets/images/blog-grid/article4-7.jpg" alt="" />
        </a>
    </Link>
  </div>
  <div className="slider-banner-image">
    <div className="date">
      <h4>13</h4>
      <span>August</span>
    </div>
    <Link legacyBehavior href="/post-format-no-sidebar-02">
        <a>
      <img src="assets/images/blog-grid/article4-3.jpg" alt="" />
        </a>
    </Link>
  </div>
</Slider>

        </div>
      </div>
    </div>
  </div>
</div>

    );
  }
  
  export default TopArticle;
  