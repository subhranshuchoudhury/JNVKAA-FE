import Link from "next/link";
import React from "react";

function Topbar() {
  return (
    <div className="topbar-1 d-lg-flex d-none">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="date">
          <div className="header-logo">
            <Link legacyBehavior href="/">
              <a>
                <img
                  width={55}
                  alt="image"
                  className="img-fluid"
                  src="assets/images/logo/jnvkaa-logo2.png"
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="header-logo">
          <Link legacyBehavior href="/">
            <img
              width={190}
              alt="image"
              className="img-fluid"
              src="assets/images/logo/jnvkaa-logo-cie.jpeg"
            />
          </Link>
        </div>
        <ul className="social-1"></ul>
      </div>
    </div>
  );
}

export default Topbar;
