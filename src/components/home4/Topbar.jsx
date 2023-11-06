import Link from "next/link";
import React from "react";

function Topbar() {
  return (
    <div className="topbar d-lg-none d-flex">
      <Link legacyBehavior href="/">
        <a className="logo">
          <img src="assets/images/logo/logo-4.svg" alt="image" />
        </a>
      </Link>
      <div className="sidebar-icons">
        <div className="sidebar-button mobile-menu-btn2">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
