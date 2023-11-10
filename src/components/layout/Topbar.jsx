import Link from "next/link";
import React from "react";

function Topbar() {
  return (
    <div className="topbar-1 d-lg-flex d-none">
      <div className="container d-flex justify-content-between align-items-center">
        <div style={{
          color: 'black'
        }} className="date">
          Novembar 30, 2022 <span>28°C</span>
        </div>
        <div className="header-logo">
          <Link legacyBehavior href="/">
            <a>
              <img
                alt="image"
                className="img-fluid"
                width={200}
                src="assets/images/logo/jnvkaa-logo-cie.jpeg"
              />
              {/* <h3 style={{
                color: "black",
                fontFamily: "sans-serif",
              }}>JNVKAA</h3> */}
            </a>
          </Link>
        </div>
        <ul className="social-1">
          <li>
            <a href="https://www.facebook.com/">
              <i className="bx bxl-facebook" />
              6.5K
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/">
              <i className="bx bxl-twitter" />
              3.5K
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.com/">
              <i className="bx bxl-pinterest-alt" />
              2.1K
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <i className="bx bxl-instagram" />
              1.9K
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Topbar;
