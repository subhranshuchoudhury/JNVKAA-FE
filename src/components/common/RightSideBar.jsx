import Link from "next/link";
import React from "react";

function RightSideBar({ state, dispatch }) {
  const handleRightSidebarToggle = () =>
    dispatch({ type: "TOGGLE_RIGHT_SIDEBAR" });
  return (
    <div
      className={`sidebar-area ${
        state.isRightSidebarOpen ? "show-sidebar" : ""
      }`}
    >
      <div className="menu-toggle-wrap">
        <div className="sidebar-top-area d-flex justify-content-end align-items-center">
          <div className="cross-icon" onClick={handleRightSidebarToggle}>
            <i className="bx bx-x" />
          </div>
        </div>
        <div className="sidebar-body">
          <div className="sidebar-widget mb-40">
            <h4 className="footer-title mb-4">Most Recent Article</h4>
            <div className="blog-list-5 mb-25">
              <Link legacyBehavior href="/post-format-no-sidebar-02">
                <a className="image">
                  <img
                    src="assets/images/blog-list/blog-list1-1.jpg"
                    alt="image"
                  />
                </a>
              </Link>
              <div className="content">
                <h6>
                  <Link legacyBehavior href="/post-format-no-sidebar-02">
                   <a> Our Begin Now To Being What You Will Be.</a>
                  </Link>
                </h6>
                <ul>
                  <li>
                    <Link legacyBehavior href="/blog-standard"><a>Nov 02, 2022</a></Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/blog-standard"><a>520 Comment</a></Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="blog-list-5 mb-25">
              <Link legacyBehavior href="/post-format-no-sidebar-02">
                <a  className="image">
                <img
                  src="assets/images/blog-list/blog-list1-3.jpg"
                  alt="image"
                />
                </a>
              </Link>
              <div className="content">
                <h6>
                  <Link legacyBehavior href="/post-format-no-sidebar-02">
                    <a>Start now to become what you will be.</a>
                  </Link>
                </h6>
                <ul>
                  <li>
                    <Link legacyBehavior href="/blog-standard"><a>Nov 02, 2022</a></Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/blog-standard"><a>520 Comment</a></Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="blog-list-5">
              <Link legacyBehavior href="/post-format-no-sidebar-02">
                <a  className="image">
                <img
                  src="assets/images/blog-list/blog-list1-2.jpg"
                  alt="image"
                />
                </a>
              </Link>
              <div className="content">
                <h6>
                  <Link legacyBehavior href="/post-format-no-sidebar-02">
                    <a>Fire up Now With What exactly You Are Going to Be.</a>
                  </Link>
                </h6>
                <ul>
                  <li>
                    <Link legacyBehavior href="/blog-standard"><a>Nov 11, 2022</a></Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/blog-standard"><a>454 Comment</a></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="sidebar-widget mb-40">
            <div className="swiper category-sidebar-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="category-1">
                    <Link legacyBehavior href="/blog-classic">
                      <a  className="image">
                      <img
                        src="assets/images/category/cate1-1.jpg"
                        alt="image"
                      />
                      </a>
                    </Link>
                    <div className="content">
                      <h4>
                        <Link legacyBehavior href="/blog-classic">Business</Link>
                      </h4>
                      <ul>
                        <li>800 Article</li>
                        <li>3.9k View</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="category-1">
                    <Link legacyBehavior href="/blog-classic">
                      <a  className="image">
                      <img
                        src="assets/images/category/cate1-2.jpg"
                        alt="image"
                      />
                      </a>
                    </Link>
                    <div className="content">
                      <h4>
                        <Link legacyBehavior href="/blog-classic"><a>Life Style</a></Link>
                      </h4>
                      <ul>
                        <li>700 Article</li>
                        <li>1.6k View</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="category-1">
                    <Link legacyBehavior href="/blog-classic">
                      <a  className="image">
                      <img
                        src="assets/images/category/cate1-3.jpg"
                        alt="image"
                      />
                      </a>
                    </Link>
                    <div className="content">
                      <h4>
                        <Link legacyBehavior href="/blog-classic"><a>Fashion</a></Link>
                      </h4>
                      <ul>
                        <li>680 Article</li>
                        <li>2.8k View</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="category-1">
                    <Link legacyBehavior href="/blog-classic">
                      <a  className="image">
                      <img
                        src="assets/images/category/cate1-4.jpg"
                        alt="image"
                      />
                      </a>
                    </Link>
                    <div className="content">
                      <h4>
                        <Link legacyBehavior href="/blog-classic"><a>Travel</a></Link>
                      </h4>
                      <ul>
                        <li>900 Article</li>
                        <li>6.2k View</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="category-1">
                    <Link legacyBehavior href="/blog-classic">
                      <a  className="image">
                      <img
                        src="assets/images/category/cate1-5.jpg"
                        alt="image"
                      />
                      </a>
                    </Link>
                    <div className="content">
                      <h4>
                        <Link legacyBehavior href="/blog-classic"><a>Creative</a></Link>
                      </h4>
                      <ul>
                        <li>800 Article</li>
                        <li>3.9k View</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar-widget">
            <h4 className="footer-title mb-4">Subscribe Newsletter</h4>
            <form className="newsletter-from">
              <div className="inner-form">
                <input type="email" placeholder="Enter Your Email..." />
                <button type="submit">
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.6686 7.48076L0.811792 0.623786C0.575226 0.51636 0.292947 0.580359 0.12838 0.783782C-0.0373304 0.987206 -0.0430445 1.27634 0.114666 1.48548L5.00026 7.99961L0.114666 14.5137C-0.0430445 14.7229 -0.0373304 15.0131 0.127237 15.2154C0.238091 15.3537 0.403802 15.428 0.571797 15.428C0.652938 15.428 0.734079 15.4109 0.810649 15.3754L15.6674 8.51845C15.8709 8.42474 16 8.22246 16 7.99961C16 7.77675 15.8708 7.57447 15.6686 7.48076Z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSideBar;
