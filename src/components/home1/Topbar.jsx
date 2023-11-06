import Link from "next/link";
import React from "react";

function Topbar() {
  return (
    <div className="topbar-1 d-lg-flex d-none">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="date">
          Novembar 30, 2022 <span>28°C</span>
        </div>
        <div className="header-logo">
          <Link legacyBehavior href="/">
            <a>
              {/* <img
                alt="image"
                className="img-fluid"
                src="assets/images/logo/logo-1.svg"
              /> */}
             
            </a>
          </Link>
        </div>
        <ul className="social-1"></ul>
      </div>
    </div>
  );
}

export default Topbar;
