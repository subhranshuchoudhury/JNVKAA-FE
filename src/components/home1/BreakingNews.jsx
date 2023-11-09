import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";
function BreakingNews() {
  return (
    <div className="breaking-news">
      <div className="ellipse-1">
        <img src="assets/images/bg/top-ellipse.png" alt="image" />
      </div>
      <div className="ellipse-2">
        <img src="assets/images/bg/top-ellipse.png" alt="image" />
      </div>
      <div className="ellipse-3">
        <img src="assets/images/bg/top-ellipse.png" alt="image" />
      </div>
      <span className="d-lg-block d-none">News Update</span>
      <div className="marquee-text">
        <Marquee pauseOnHover={true}>
          <Link legacyBehavior href="/post-format-no-sidebar-02">
            <a>JNVKAA Alumni Meet-2023 will  held on 25th December,2023</a>
          </Link>
          <i className="bi bi-star-fill" />
          <Link legacyBehavior href="/post-format-no-sidebar-02">
            <a>JNVKAA Alumni Meet-2023 will  held on 25th December,2023</a>
          </Link>
          <i className="bi bi-star-fill" />
          <Link legacyBehavior href="/post-format-no-sidebar-02">
            <a> JNVKAA Alumni Meet-2023 will  held on 25th December,2023</a>
          </Link>
          <i className="bi bi-star-fill" />
        </Marquee>
      </div>
    </div>
  );
}

export default BreakingNews;
