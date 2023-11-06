import React from "react";

function NewsLatter() {
  return (
    <section className="newsletter-section-1">
      <div className="paper-fly-icon">
        <img src="assets/images/icons/paper-fly.svg" alt="image" />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10 col-md-10 col-sm-12 text-center">
            <h2>Get the best blog stories into your inbox Connect Us now.</h2>
            <form className="newsletter-from">
              <div className="inner-form">
                <input type="email" placeholder="Enter Your Email..." />
                <button type="submit">
                  Subscribe{" "}
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.6686 7.48076L0.811792 0.623786C0.575226 0.51636 0.292947 0.580359 0.12838 0.783782C-0.0373304 0.987206 -0.0430445 1.27634 0.114666 1.48548L5.00026 7.99961L0.114666 14.5137C-0.0430445 14.7229 -0.0373304 15.0131 0.127237 15.2154C0.238091 15.3537 0.403802 15.428 0.571797 15.428C0.652938 15.428 0.734079 15.4109 0.810649 15.3754L15.6674 8.51845C15.8709 8.42474 16 8.22246 16 7.99961C16 7.77675 15.8708 7.57447 15.6686 7.48076Z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsLatter;
