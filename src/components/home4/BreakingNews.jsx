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
      <span className="d-lg-block d-none">Breaking News</span>
      <div className="marquee-text">
        <Marquee pauseOnHover={true}>
          <Link legacyBehavior href="/post-format-no-sidebar-02">
            <a>Read article moreni urbano thona goblin</a>
          </Link>
          <i className="bi bi-star-fill" />
          <Link legacyBehavior href="/post-format-no-sidebar-02">
            <a>Gain your knowledge faster and moreathi</a>
          </Link>
          <i className="bi bi-star-fill" />
          <Link legacyBehavior href="/post-format-no-sidebar-02">
            <a>Make your brain sharper grow better option</a>
          </Link>
          <i className="bi bi-star-fill" />
        </Marquee>
      </div>
    </div>
  );
}

export default BreakingNews;
