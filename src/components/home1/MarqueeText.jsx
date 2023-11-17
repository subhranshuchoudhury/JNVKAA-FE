import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";
function MarqueeText() {
  return (
    <section className="marquee-section">
      <div className="container-fluid">
        <div className="breaking-news mb-0">
          <div className="ellipse-1">
            <img src="/assets/images/bg/top-ellipse.png" alt="image" />
          </div>
          <div className="ellipse-2">
            <img src="/assets/images/bg/top-ellipse.png" alt="image" />
          </div>
          <div className="ellipse-3">
            <img src="/assets/images/bg/top-ellipse.png" alt="image" />
          </div>
          <h4 className="marquee-text2">
            <Marquee pauseOnHover={true}>
              <Link legacyBehavior href="/post-format-no-sidebar-02">
                <a> Read article moreni urbano thona goblin</a>
              </Link>
              <img src="/assets/images/icons/start-2.svg" alt="image" />
              <Link legacyBehavior href="/post-format-no-sidebar-02">
                <a> Gain your knowledge faster and moreathi</a>
              </Link>
              <img src="/assets/images/icons/start-2.svg" alt="image" />
              <Link legacyBehavior href="/post-format-no-sidebar-02">
                <a> Make your brain sharper grow better option</a>
              </Link>
              <img src="/assets/images/icons/start-2.svg" alt="image" />
              <Link legacyBehavior href="/post-format-no-sidebar-02">
                <a> Read article moreni urbano thona goblin</a>
              </Link>
              <img src="/assets/images/icons/start-2.svg" alt="image" />
              <Link legacyBehavior href="/post-format-no-sidebar-02">
                <a> Gain your knowledge faster and moreathi</a>
              </Link>
              <img src="/assets/images/icons/start-2.svg" alt="image" />
              <Link legacyBehavior href="/post-format-no-sidebar-02">
                <a> Make your brain sharper grow better option</a>
              </Link>
              <img src="/assets/images/icons/start-2.svg" alt="image" />
            </Marquee>
          </h4>
        </div>
      </div>
    </section>
  );
}

export default MarqueeText;
