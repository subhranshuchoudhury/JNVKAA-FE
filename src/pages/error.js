import Link from "next/link";
import React from "react";

export default function error() {
  return (
    <section className="error-banner">
      <div className="error-banner-content">
        <h1>404</h1>
        <h2>Error page</h2>
        <p>
          Sorry, The page you are looking for was removed, renamed or might
          never existed
        </p>
        <Link legacyBehavior href="/">
          <a className="eg-btn btn--primary btn--lg">
            <i className="bi bi-house-door" />
            Back to home
          </a>
        </Link>
      </div>
    </section>
  );
}
