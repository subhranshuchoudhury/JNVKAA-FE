import React from "react";
import { authorDetailsData } from "../data/data";
import Link from "next/link";
function AuthorDetails() {
  return (
    <section className="author-section pt-100 pb-100">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-8">
            <div className="author-details">
              <img
                className="image"
                src="assets/images/authors/author-details-img.jpg"
                alt="image"
              />
              <div className="author-info">
                <h2>Carlos Rykergon</h2>
                <ul className="category">
                  <li>
                    <Link legacyBehavior href="/blog-classic">
                      <a>Creative,</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/blog-classic">
                      <a>Lifestyle,</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/blog-classic">
                      <a>Fashion</a>
                    </Link>
                  </li>
                </ul>
                <p>
                  Morbi quis elementum ex, id commodo odio. In maximus, augue
                  euquami vestibulum gomat dictum, lorem nibh faucibus quam.
                </p>
                <ul className="meta-list">
                  <li>
                    <img src="assets/images/icons/total-post.svg" alt="image" />
                    Total Post: <span>209</span>
                  </li>
                  <li>
                    <img src="assets/images/icons/view.svg" alt="image" />
                    Total View: <span>25199</span>
                  </li>
                  <li>
                    <img src="assets/images/icons/like.svg" alt="image" />
                    Like: <span>11957</span>
                  </li>
                </ul>
              </div>
            </div>

            {authorDetailsData.map((item) => {
              const {
                id,
                date_day,
                date_month,
                category,
                author_name,
                title,
                read_time,
                img,
              } = item;
              return (
                <div key={id} className="blog-list-2">
                  <div className="date">
                    <h3>{date_day}</h3>
                    <p>{date_month}</p>
                  </div>
                  <div className="content">
                    <ul>
                      <li>
                        <Link legacyBehavior href="/author-details">
                          <a>By &nbsp;{author_name}</a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/blog-classic">
                          <a>{category}</a>
                        </Link>
                      </li>
                    </ul>
                    <h4>
                      <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a>{title}</a>
                      </Link>
                    </h4>
                    <div className="bottom-area">
                      <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a className=" eg-btn arrow-btn">
                          View Details
                          <i className="bi bi-arrow-right" />
                        </a>
                      </Link>
                      <span>
                        {" "}
                        <svg
                          width={9}
                          height={12}
                          viewBox="0 0 9 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                        </svg>
                        {read_time}
                      </span>
                    </div>
                  </div>
                  <Link legacyBehavior href="/post-format-no-sidebar-02">
                    <a className="image">
                      <img src={img} alt="imgs" />
                    </a>
                  </Link>
                </div>
              );
            })}
            {/* pagiantion */}
            <nav className="mt-60">
              <ul className="pagination-list">
                <li>
                  <a href="#">
                    <i className="bi bi-chevron-left" />
                  </a>
                </li>
                <li>
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#" className="active">
                    2
                  </a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <span />
                </li>
                <li>
                  <a href="#">6</a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-chevron-right" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-4">
            <div className="post-side-bar-1">
              <div className="sidebar-widget-1">
                <h6 className="title">Quick Search</h6>
                <div className="search-box-2">
                  <form>
                    <input type="text" placeholder="Search here..." />
                    <button>
                      <i className="bi bi-search" />
                    </button>
                  </form>
                </div>
              </div>
              <div className="sidebar-widget-1">
                <h6 className="title">Editor Choice</h6>
                <div className="blog-list-1 mb-25">
                  <Link legacyBehavior href="/post-format-no-sidebar-02">
                    <a className="image">
                      <img
                        src="assets/images/blog-list/blog-list1-3.jpg"
                        alt="image"
                      />
                    </a>
                  </Link>
                  <div className="content">
                    <h6>
                      <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a>gravida orci sed jaritob laoreet tellus.</a>
                      </Link>
                    </h6>
                    <ul>
                      <li>
                        <Link legacyBehavior href="/blog-standard">
                          <a>Nov 10, 2022</a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/blog-standard">
                          <a>520 Comment</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="blog-list-1 mb-25">
                  <Link legacyBehavior href="/post-format-no-sidebar-02">
                    <a className="image">
                      <img
                        src="assets/images/blog-list/blog-list1-4.jpg"
                        alt="image"
                      />
                    </a>
                  </Link>
                  <div className="content">
                    <h6>
                      <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a>laoreet tellus Morbi uto dolor mattis.</a>
                      </Link>
                    </h6>
                    <ul>
                      <li>
                        <Link legacyBehavior href="/blog-standard">
                          <a>Nov 01, 2022</a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/blog-standard">
                          <a>854 Comment</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="blog-list-1">
                  <Link legacyBehavior href="/post-format-no-sidebar-02">
                    <a className="image">
                      <img
                        src="assets/images/blog-list/blog-list1-5.jpg"
                        alt="image"
                      />
                    </a>
                  </Link>
                  <div className="content">
                    <h6>
                      <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a>Nam ullamcorper risuso non commodo.</a>
                      </Link>
                    </h6>
                    <ul>
                      <li>
                        <Link legacyBehavior href="/blog-standard">
                          <a>Nov 11, 2022</a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/blog-standard">
                          <a>87 Comment</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="sidebar-widget-1">
                <h6 className="title">Stay Conected</h6>
                <ul className="social-3">
                  <li>
                    <a href="https://www.facebook.com/">
                      <span>
                        <i className="bx bxl-facebook" />
                        Facebook
                      </span>
                      <span>
                        <strong>3.5K</strong>
                        &nbsp;Like
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/">
                      <span>
                        <i className="bx bxl-twitter" />
                        &nbsp;Twitter
                      </span>
                      <span>
                        <strong>60k</strong>
                        &nbsp;Follower
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com/">
                      <span>
                        <i className="bx bxl-pinterest-alt" />
                        &nbsp;Pinterest
                      </span>
                      <span>
                        <strong>25k</strong>
                        &nbsp;Follower
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/">
                      <span>
                        <i className="bx bxl-instagram" />
                        Instagram
                      </span>
                      <span>
                        <strong>75k</strong>
                        Follower
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className="sidebar-shop-card"
                style={{
                  backgroundImage: 'url("assets/images/bg/shop-bg.jpg")',
                }}
              >
                <span>30% Off</span>
                <h3>Apple Macbook </h3>
                <a href="#" className="shop-btn">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AuthorDetails;
