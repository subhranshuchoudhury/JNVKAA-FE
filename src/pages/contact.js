import React from "react";

function contact() {
  return (
    <section className="contact-section pt-100 pb-100">
      <div className="container">
        <div className="row gy-4 justify-cotnent-center align-items-center">
          <div className="col-lg-5 pe-lg-5 pe-0">
            <div className="contact-box">
              <div className="title">
                <h3>Contact Us</h3>
                <p>
                  Morbi quis elementum ex, id commodo odio. In maximus, augue
                  europea vestibulum gomat.{" "}
                </p>
              </div>
              <div className="left-social">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/">
                      <i className="bx bxl-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/">
                      <i className="bx bxl-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com/">
                      <i className="bx bxl-pinterest-alt" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/">
                      <i className="bx bxl-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="informations">
                <div className="single-info">
                  <div className="icon">
                    <i className="bi bi-telephone-fill" />
                  </div>
                  <div className="info">
                    <a href="tel:05661111985">+880 566 1111 985</a>
                    <a href="tel:06571111576">+880 657 1111 576</a>
                  </div>
                </div>
                <div className="single-info">
                  <div className="icon">
                    <i className="bi bi-envelope" />
                  </div>
                  <div className="info">
                    <a href="mailto: info@example.com">info@example.com</a>
                    <a href="mailto: info@support.com">info@support.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="form-title">
              <h2>Have Any Questions</h2>
            </div>
            <form className="contact-form">
              <div className="row">
                <div className="col-12">
                  <div className="form-inner">
                    <input type="text" placeholder="Enter Your Name" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-inner">
                    <input type="email" placeholder="Enter your email" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-inner">
                    <input type="text" placeholder="Enter Your Subject" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-inner">
                    <textarea
                      rows={5}
                      placeholder="Enter Your Messege"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <button type="submit" className="eg-btn btn--primary btn--lg">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default contact;
