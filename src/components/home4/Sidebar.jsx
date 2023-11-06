import Link from "next/link";
import React from "react";

function Sidebar() {
  return (
    <div className="sidebar">
      <Link legacyBehavior href="/">
        <a className="logo">
        <img src="assets/images/logo/logo-4.svg" alt="image" />
        </a>
      </Link>
      <div className="sidebar-icons">
        <div className="sidebar-button mobile-menu-btn">
          <span />
          <span />
          <span />
        </div>
        <a className="search-btn">
          <i className="bi bi-search" />
        </a>
      </div>
      <ul className="social-1">
        <li>
          <a href="https://www.instagram.com/">
            <i className="bx bxl-instagram" />
            1.9K
          </a>
        </li>
        <li>
          <a href="https://www.pinterest.com/">
            <i className="bx bxl-pinterest-alt" />
            2.1K
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com/">
            <i className="bx bxl-twitter" />
            3.5K
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/">
            <i className="bx bxl-facebook" />
            6.5K
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
