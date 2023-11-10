import Link from "next/link";
import React from "react";
import social from "../../data/topbar/social.json";
function Topbar() {
  return (
    <div className="topbar-1 d-lg-flex d-none">
      <div className="container d-flex justify-content-between align-items-center">
        <div style={{
          color: 'black'
        }} className="date">
          Novembar 30, 2022 <span>29°C</span>
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
          {
            social.map((item, index) => {
              return <li key={index}>
                <a href="https://www.instagram.com/jnvkaa">
                  <i className={item?.icon} />
                  {item?.count}
                </a>
              </li>
            })
          }

        </ul>
      </div>
    </div>
  );
}

export default Topbar;
