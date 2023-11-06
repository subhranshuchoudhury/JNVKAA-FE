import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

function MostPopular() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [progressBars, setProgressBars] = useState([]);
  
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 0,
      vertical: true,
      verticalSwiping: true,
      autoplay: true,
      autoplaySpeed: 3000,
      beforeChange: (current, next) => setActiveIndex(next),
    };
  
    useEffect(() => {
      const generateProgressBars = () => {
        const bars = [];
        for (let i = 0; i < settings.slidesToShow; i++) {
          const progressBar = <div key={`progressBar${i}`} className={`inProgress inProgress${i}`} />;
          bars.push(progressBar);
        }
        setProgressBars(bars);
      };
  
      generateProgressBars();
    }, [settings.slidesToShow]);
  return (
    <div className="home2-populer-post pt-100 pb-100">
    <div className="container">
      <div className="row align-items-center mb-40">
        <div className="col-lg-12">
          <div className="section-title-2">
            <div className="titel">
              <h4>Most Popular</h4>
              <div className="dash" />
            </div>
            <Link legacyBehavior href="/blog-standard"><a  className=" eg-btn arrow-btn-2 two">View Post<i className="bi bi-arrow-right" /></a></Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="sliderContainer">
            <div className="row g-lg-4 gy-5">
              <div className="col-lg-4">
                <div className="progressBarContainer">
                  <div>
                    <div className="popular-post one">
                      <div className="sn">
                        <h4>01.</h4>
                      </div>
                      <div className="post-title">
                        <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Praesent rutrum dignissi meote tristique Sed
                            hendrer.</a></Link></h5>
                      </div>
                    </div>
                    <span data-slick-index={0} className="progressBar" />
                  </div>
                  <div>
                    <div className="popular-post">
                      <div className="sn">
                        <h4>02.</h4>
                      </div>
                      <div className="post-title">
                        <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>eget blandi vitae aliqua tesquon molestie eros
                            Pellen.</a></Link></h5>
                      </div>
                    </div>
                    <span data-slick-index={1} className="progressBar" />
                  </div>
                  <div>
                    <div className="popular-post">
                      <div className="sn">
                        <h4>03.</h4>
                      </div>
                      <div className="post-title">
                        <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>mollis fermentum elemen tumdut Pellent esque
                            aliquam.</a></Link></h5>
                      </div>
                    </div>
                    <span data-slick-index={2} className="progressBar" />
                  </div>
                  <div>
                    <div className="popular-post">
                      <div className="sn">
                        <h4>04.</h4>
                      </div>
                      <div className="post-title">
                        <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Aliquam erat volutpat Crasid blat auctor pulvinar
                            nulla.</a></Link></h5>
                      </div>
                    </div>
                    <span data-slick-index={3} className="progressBar" />
                  </div>
                  <div>
                    <div className="popular-post">
                      <div className="sn">
                        <h4>05.</h4>
                      </div>
                      <div className="post-title">
                        <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>sollicitudin acbiben dume avitae cursus eudui Praesent</a>
                          </Link></h5>
                      </div>
                    </div>
                    <span data-slick-index={4} className="progressBar" />
                  </div>
                  <div>
                    <div className="popular-post">
                      <div className="sn">
                        <h4>06.</h4>
                      </div>
                      <div className="post-title">
                        <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Aliquam eraton volutpat Crastont auctor pulvinar
                            nulla.</a></Link></h5>
                      </div>
                    </div>
                    <span data-slick-index={5} className="progressBar" />
                  </div>
                  <div>
                    <div className="popular-post mb-0">
                      <div className="sn">
                        <h4>07.</h4>
                      </div>
                      <div className="post-title">
                        <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Praesent rutrum dignissi meote tristique Sed
                            hendrer.</a></Link></h5>
                      </div>
                    </div>
                    <span data-slick-index={6} className="progressBar" />
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <Slider {...settings} className="slider single-item">
                  <div className="slider-item">
                    <div className="popular-post-card">
                      <div className="post-img">
                        <img src="assets/images/blog-grid/popular-2-1.png" alt="" />
                        <div className="category">
                          <Link legacyBehavior href="/blog-classic"><a>Fashion</a></Link>
                        </div>
                      </div>
                      <div className="post-content">
                        <div className="publish-date">
                          <Link legacyBehavior href="/blog-standard"><a>Novembar 30, 2022</a></Link>
                        </div>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Praesent rutrum dignissi meote tristique Sed
                            hendrer.</a></Link></h4>
                        <p>Aliquam erat volutpat Ut scelerisque element umet nisi a fermentumon
                          odiona gouvikoi tincidunt velgo Proin velit est elementum sed.</p>
                        <div className="bottom-area">
                          <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn two">View
                            Details<i className="bi bi-arrow-right" /></a></Link>
                          <span><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8 0C3.60594 0 0 3.60594 0 8C0 12.3941 3.60594 16 8 16C12.3941 16 16 12.3941 16 8C16 3.60594 12.3941 0 8 0ZM11.646 3.69106C11.8291 3.508 12.1259 3.508 12.3089 3.69106C12.492 3.87413 12.492 4.17091 12.3089 4.35397C12.1259 4.53703 11.8291 4.53703 11.646 4.35397C11.463 4.17091 11.463 3.87413 11.646 3.69106ZM7.53125 2.375C7.53125 2.11591 7.74091 1.90625 8 1.90625C8.25909 1.90625 8.46875 2.11591 8.46875 2.375V3.3125C8.46875 3.57159 8.25909 3.78125 8 3.78125C7.74091 3.78125 7.53125 3.57159 7.53125 3.3125V2.375ZM2.375 8.46875C2.11591 8.46875 1.90625 8.25909 1.90625 8C1.90625 7.74091 2.11591 7.53125 2.375 7.53125H3.3125C3.57159 7.53125 3.78125 7.74091 3.78125 8C3.78125 8.25909 3.57159 8.46875 3.3125 8.46875H2.375ZM4.35397 12.3089C4.17091 12.492 3.87413 12.492 3.69106 12.3089C3.508 12.1259 3.508 11.8291 3.69106 11.646C3.87413 11.4629 4.17091 11.4629 4.35397 11.646C4.53703 11.8291 4.53703 12.1259 4.35397 12.3089ZM4.35397 4.35397C4.17091 4.53703 3.87413 4.53703 3.69106 4.35397C3.508 4.17091 3.508 3.87413 3.69106 3.69106C3.87413 3.508 4.17091 3.508 4.35397 3.69106C4.53703 3.87413 4.53703 4.17091 4.35397 4.35397ZM8.46875 13.625C8.46875 13.8841 8.25909 14.0938 8 14.0938C7.74091 14.0938 7.53125 13.8841 7.53125 13.625V12.6875C7.53125 12.4284 7.74091 12.2188 8 12.2188C8.25909 12.2188 8.46875 12.4284 8.46875 12.6875V13.625ZM11.1439 11.1439C10.9608 11.327 10.6642 11.327 10.4811 11.1439L7.66856 8.33141C7.58069 8.24353 7.53125 8.1245 7.53125 8V5.1875C7.53125 4.92841 7.74091 4.71875 8 4.71875C8.25909 4.71875 8.46875 4.92841 8.46875 5.1875V7.80591L11.1439 10.4811C11.327 10.6642 11.327 10.9608 11.1439 11.1439ZM12.3089 12.3089C12.1259 12.492 11.8291 12.492 11.646 12.3089C11.463 12.1259 11.463 11.8291 11.646 11.646C11.8291 11.4629 12.1259 11.4629 12.3089 11.646C12.492 11.8291 12.492 12.1259 12.3089 12.3089ZM14.0938 8C14.0938 8.25909 13.8841 8.46875 13.625 8.46875H12.6875C12.4284 8.46875 12.2188 8.25909 12.2188 8C12.2188 7.74091 12.4284 7.53125 12.6875 7.53125H13.625C13.8841 7.53125 14.0938 7.74091 14.0938 8Z">
                              </path>
                            </svg>5 Min reads</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slider-item">
                    <div className="popular-post-card">
                      <div className="post-img">
                        <img src="assets/images/blog-grid/popular-2-2.png" alt="" />
                        <div className="category">
                          <Link legacyBehavior href="/blog-classic"><a>Food</a></Link>
                        </div>
                      </div>
                      <div className="post-content">
                        <div className="publish-date">
                          <Link legacyBehavior href="/blog-standard"><a>Novembar 30, 2022</a></Link>
                        </div>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>eget blandi vitae aliqua tesquon molestie eros
                            Pellen.</a></Link></h4>
                        <p>Aliquam erat volutpat Ut scelerisque element umet nisi a fermentumon
                          odiona gouvikoi tincidunt velgo Proin velit est elementum sed.</p>
                        <div className="bottom-area">
                          <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn two">View
                            Details<i className="bi bi-arrow-right" /></a></Link>
                          <span><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8 0C3.60594 0 0 3.60594 0 8C0 12.3941 3.60594 16 8 16C12.3941 16 16 12.3941 16 8C16 3.60594 12.3941 0 8 0ZM11.646 3.69106C11.8291 3.508 12.1259 3.508 12.3089 3.69106C12.492 3.87413 12.492 4.17091 12.3089 4.35397C12.1259 4.53703 11.8291 4.53703 11.646 4.35397C11.463 4.17091 11.463 3.87413 11.646 3.69106ZM7.53125 2.375C7.53125 2.11591 7.74091 1.90625 8 1.90625C8.25909 1.90625 8.46875 2.11591 8.46875 2.375V3.3125C8.46875 3.57159 8.25909 3.78125 8 3.78125C7.74091 3.78125 7.53125 3.57159 7.53125 3.3125V2.375ZM2.375 8.46875C2.11591 8.46875 1.90625 8.25909 1.90625 8C1.90625 7.74091 2.11591 7.53125 2.375 7.53125H3.3125C3.57159 7.53125 3.78125 7.74091 3.78125 8C3.78125 8.25909 3.57159 8.46875 3.3125 8.46875H2.375ZM4.35397 12.3089C4.17091 12.492 3.87413 12.492 3.69106 12.3089C3.508 12.1259 3.508 11.8291 3.69106 11.646C3.87413 11.4629 4.17091 11.4629 4.35397 11.646C4.53703 11.8291 4.53703 12.1259 4.35397 12.3089ZM4.35397 4.35397C4.17091 4.53703 3.87413 4.53703 3.69106 4.35397C3.508 4.17091 3.508 3.87413 3.69106 3.69106C3.87413 3.508 4.17091 3.508 4.35397 3.69106C4.53703 3.87413 4.53703 4.17091 4.35397 4.35397ZM8.46875 13.625C8.46875 13.8841 8.25909 14.0938 8 14.0938C7.74091 14.0938 7.53125 13.8841 7.53125 13.625V12.6875C7.53125 12.4284 7.74091 12.2188 8 12.2188C8.25909 12.2188 8.46875 12.4284 8.46875 12.6875V13.625ZM11.1439 11.1439C10.9608 11.327 10.6642 11.327 10.4811 11.1439L7.66856 8.33141C7.58069 8.24353 7.53125 8.1245 7.53125 8V5.1875C7.53125 4.92841 7.74091 4.71875 8 4.71875C8.25909 4.71875 8.46875 4.92841 8.46875 5.1875V7.80591L11.1439 10.4811C11.327 10.6642 11.327 10.9608 11.1439 11.1439ZM12.3089 12.3089C12.1259 12.492 11.8291 12.492 11.646 12.3089C11.463 12.1259 11.463 11.8291 11.646 11.646C11.8291 11.4629 12.1259 11.4629 12.3089 11.646C12.492 11.8291 12.492 12.1259 12.3089 12.3089ZM14.0938 8C14.0938 8.25909 13.8841 8.46875 13.625 8.46875H12.6875C12.4284 8.46875 12.2188 8.25909 12.2188 8C12.2188 7.74091 12.4284 7.53125 12.6875 7.53125H13.625C13.8841 7.53125 14.0938 7.74091 14.0938 8Z">
                              </path>
                            </svg>5 Min reads</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slider-item">
                    <div className="popular-post-card">
                      <div className="post-img">
                        <img src="assets/images/blog-grid/popular-2-3.png" alt="" />
                        <div className="category">
                          <Link legacyBehavior href="/blog-classic"><a>Real State</a></Link>
                        </div>
                      </div>
                      <div className="post-content">
                        <div className="publish-date">
                          <Link legacyBehavior href="/blog-standard"><a>Novembar 30, 2022</a></Link>
                        </div>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>mollis fermentum elemen tumdut Pellent esque
                            aliquam.</a></Link></h4>
                        <p>Aliquam erat volutpat Ut scelerisque element umet nisi a fermentumon
                          odiona gouvikoi tincidunt velgo Proin velit est elementum sed.</p>
                        <div className="bottom-area">
                          <Link legacyBehavior href="/post-format-no-sidebar-02"><a  className=" eg-btn arrow-btn two">View
                            Details<i className="bi bi-arrow-right" /></a></Link>
                          <span><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8 0C3.60594 0 0 3.60594 0 8C0 12.3941 3.60594 16 8 16C12.3941 16 16 12.3941 16 8C16 3.60594 12.3941 0 8 0ZM11.646 3.69106C11.8291 3.508 12.1259 3.508 12.3089 3.69106C12.492 3.87413 12.492 4.17091 12.3089 4.35397C12.1259 4.53703 11.8291 4.53703 11.646 4.35397C11.463 4.17091 11.463 3.87413 11.646 3.69106ZM7.53125 2.375C7.53125 2.11591 7.74091 1.90625 8 1.90625C8.25909 1.90625 8.46875 2.11591 8.46875 2.375V3.3125C8.46875 3.57159 8.25909 3.78125 8 3.78125C7.74091 3.78125 7.53125 3.57159 7.53125 3.3125V2.375ZM2.375 8.46875C2.11591 8.46875 1.90625 8.25909 1.90625 8C1.90625 7.74091 2.11591 7.53125 2.375 7.53125H3.3125C3.57159 7.53125 3.78125 7.74091 3.78125 8C3.78125 8.25909 3.57159 8.46875 3.3125 8.46875H2.375ZM4.35397 12.3089C4.17091 12.492 3.87413 12.492 3.69106 12.3089C3.508 12.1259 3.508 11.8291 3.69106 11.646C3.87413 11.4629 4.17091 11.4629 4.35397 11.646C4.53703 11.8291 4.53703 12.1259 4.35397 12.3089ZM4.35397 4.35397C4.17091 4.53703 3.87413 4.53703 3.69106 4.35397C3.508 4.17091 3.508 3.87413 3.69106 3.69106C3.87413 3.508 4.17091 3.508 4.35397 3.69106C4.53703 3.87413 4.53703 4.17091 4.35397 4.35397ZM8.46875 13.625C8.46875 13.8841 8.25909 14.0938 8 14.0938C7.74091 14.0938 7.53125 13.8841 7.53125 13.625V12.6875C7.53125 12.4284 7.74091 12.2188 8 12.2188C8.25909 12.2188 8.46875 12.4284 8.46875 12.6875V13.625ZM11.1439 11.1439C10.9608 11.327 10.6642 11.327 10.4811 11.1439L7.66856 8.33141C7.58069 8.24353 7.53125 8.1245 7.53125 8V5.1875C7.53125 4.92841 7.74091 4.71875 8 4.71875C8.25909 4.71875 8.46875 4.92841 8.46875 5.1875V7.80591L11.1439 10.4811C11.327 10.6642 11.327 10.9608 11.1439 11.1439ZM12.3089 12.3089C12.1259 12.492 11.8291 12.492 11.646 12.3089C11.463 12.1259 11.463 11.8291 11.646 11.646C11.8291 11.4629 12.1259 11.4629 12.3089 11.646C12.492 11.8291 12.492 12.1259 12.3089 12.3089ZM14.0938 8C14.0938 8.25909 13.8841 8.46875 13.625 8.46875H12.6875C12.4284 8.46875 12.2188 8.25909 12.2188 8C12.2188 7.74091 12.4284 7.53125 12.6875 7.53125H13.625C13.8841 7.53125 14.0938 7.74091 14.0938 8Z">
                              </path>
                            </svg>5 Min reads</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slider-item">
                    <div className="popular-post-card">
                      <div className="post-img">
                        <img src="assets/images/blog-grid/popular-2-4.png" alt="" />
                        <div className="category">
                          <Link legacyBehavior href="/blog-classic"><a>Photography</a></Link>
                        </div>
                      </div>
                      <div className="post-content">
                        <div className="publish-date">
                          <Link legacyBehavior href="/blog-standard"><a>Novembar 30, 2022</a></Link>
                        </div>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Aliquam erat volutpat Crasid blat auctor pulvinar
                            nulla.</a></Link></h4>
                        <p>Aliquam erat volutpat Ut scelerisque element umet nisi a fermentumon
                          odiona gouvikoi tincidunt velgo Proin velit est elementum sed.</p>
                        <div className="bottom-area">
                          <Link legacyBehavior href="/post-format-no-sidebar-02" ><a className=" eg-btn arrow-btn two">View
                            Details<i className="bi bi-arrow-right" /></a></Link>
                          <span><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8 0C3.60594 0 0 3.60594 0 8C0 12.3941 3.60594 16 8 16C12.3941 16 16 12.3941 16 8C16 3.60594 12.3941 0 8 0ZM11.646 3.69106C11.8291 3.508 12.1259 3.508 12.3089 3.69106C12.492 3.87413 12.492 4.17091 12.3089 4.35397C12.1259 4.53703 11.8291 4.53703 11.646 4.35397C11.463 4.17091 11.463 3.87413 11.646 3.69106ZM7.53125 2.375C7.53125 2.11591 7.74091 1.90625 8 1.90625C8.25909 1.90625 8.46875 2.11591 8.46875 2.375V3.3125C8.46875 3.57159 8.25909 3.78125 8 3.78125C7.74091 3.78125 7.53125 3.57159 7.53125 3.3125V2.375ZM2.375 8.46875C2.11591 8.46875 1.90625 8.25909 1.90625 8C1.90625 7.74091 2.11591 7.53125 2.375 7.53125H3.3125C3.57159 7.53125 3.78125 7.74091 3.78125 8C3.78125 8.25909 3.57159 8.46875 3.3125 8.46875H2.375ZM4.35397 12.3089C4.17091 12.492 3.87413 12.492 3.69106 12.3089C3.508 12.1259 3.508 11.8291 3.69106 11.646C3.87413 11.4629 4.17091 11.4629 4.35397 11.646C4.53703 11.8291 4.53703 12.1259 4.35397 12.3089ZM4.35397 4.35397C4.17091 4.53703 3.87413 4.53703 3.69106 4.35397C3.508 4.17091 3.508 3.87413 3.69106 3.69106C3.87413 3.508 4.17091 3.508 4.35397 3.69106C4.53703 3.87413 4.53703 4.17091 4.35397 4.35397ZM8.46875 13.625C8.46875 13.8841 8.25909 14.0938 8 14.0938C7.74091 14.0938 7.53125 13.8841 7.53125 13.625V12.6875C7.53125 12.4284 7.74091 12.2188 8 12.2188C8.25909 12.2188 8.46875 12.4284 8.46875 12.6875V13.625ZM11.1439 11.1439C10.9608 11.327 10.6642 11.327 10.4811 11.1439L7.66856 8.33141C7.58069 8.24353 7.53125 8.1245 7.53125 8V5.1875C7.53125 4.92841 7.74091 4.71875 8 4.71875C8.25909 4.71875 8.46875 4.92841 8.46875 5.1875V7.80591L11.1439 10.4811C11.327 10.6642 11.327 10.9608 11.1439 11.1439ZM12.3089 12.3089C12.1259 12.492 11.8291 12.492 11.646 12.3089C11.463 12.1259 11.463 11.8291 11.646 11.646C11.8291 11.4629 12.1259 11.4629 12.3089 11.646C12.492 11.8291 12.492 12.1259 12.3089 12.3089ZM14.0938 8C14.0938 8.25909 13.8841 8.46875 13.625 8.46875H12.6875C12.4284 8.46875 12.2188 8.25909 12.2188 8C12.2188 7.74091 12.4284 7.53125 12.6875 7.53125H13.625C13.8841 7.53125 14.0938 7.74091 14.0938 8Z">
                              </path>
                            </svg>5 Min reads</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slider-item">
                    <div className="popular-post-card">
                      <div className="post-img">
                        <img src="assets/images/blog-grid/popular-2-5.png" alt="" />
                        <div className="category">
                          <Link legacyBehavior href="/blog-classic"><a>Travel</a></Link>
                        </div>
                      </div>
                      <div className="post-content">
                        <div className="publish-date">
                          <Link legacyBehavior href="/blog-standard"><a>Novembar 30, 2022</a></Link>
                        </div>
                        <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>sollicitudin acbiben dume avitae cursus eudui Praesent</a>
                          </Link></h4>
                        <p>Aliquam erat volutpat Ut scelerisque element umet nisi a fermentumon
                          odiona gouvikoi tincidunt velgo Proin velit est elementum sed.</p>
                        <div className="bottom-area">
                          <Link legacyBehavior href="/post-format-no-sidebar-02"><a className=" eg-btn arrow-btn two">View
                            Details<i className="bi bi-arrow-right" /></a></Link>
                          <span><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8 0C3.60594 0 0 3.60594 0 8C0 12.3941 3.60594 16 8 16C12.3941 16 16 12.3941 16 8C16 3.60594 12.3941 0 8 0ZM11.646 3.69106C11.8291 3.508 12.1259 3.508 12.3089 3.69106C12.492 3.87413 12.492 4.17091 12.3089 4.35397C12.1259 4.53703 11.8291 4.53703 11.646 4.35397C11.463 4.17091 11.463 3.87413 11.646 3.69106ZM7.53125 2.375C7.53125 2.11591 7.74091 1.90625 8 1.90625C8.25909 1.90625 8.46875 2.11591 8.46875 2.375V3.3125C8.46875 3.57159 8.25909 3.78125 8 3.78125C7.74091 3.78125 7.53125 3.57159 7.53125 3.3125V2.375ZM2.375 8.46875C2.11591 8.46875 1.90625 8.25909 1.90625 8C1.90625 7.74091 2.11591 7.53125 2.375 7.53125H3.3125C3.57159 7.53125 3.78125 7.74091 3.78125 8C3.78125 8.25909 3.57159 8.46875 3.3125 8.46875H2.375ZM4.35397 12.3089C4.17091 12.492 3.87413 12.492 3.69106 12.3089C3.508 12.1259 3.508 11.8291 3.69106 11.646C3.87413 11.4629 4.17091 11.4629 4.35397 11.646C4.53703 11.8291 4.53703 12.1259 4.35397 12.3089ZM4.35397 4.35397C4.17091 4.53703 3.87413 4.53703 3.69106 4.35397C3.508 4.17091 3.508 3.87413 3.69106 3.69106C3.87413 3.508 4.17091 3.508 4.35397 3.69106C4.53703 3.87413 4.53703 4.17091 4.35397 4.35397ZM8.46875 13.625C8.46875 13.8841 8.25909 14.0938 8 14.0938C7.74091 14.0938 7.53125 13.8841 7.53125 13.625V12.6875C7.53125 12.4284 7.74091 12.2188 8 12.2188C8.25909 12.2188 8.46875 12.4284 8.46875 12.6875V13.625ZM11.1439 11.1439C10.9608 11.327 10.6642 11.327 10.4811 11.1439L7.66856 8.33141C7.58069 8.24353 7.53125 8.1245 7.53125 8V5.1875C7.53125 4.92841 7.74091 4.71875 8 4.71875C8.25909 4.71875 8.46875 4.92841 8.46875 5.1875V7.80591L11.1439 10.4811C11.327 10.6642 11.327 10.9608 11.1439 11.1439ZM12.3089 12.3089C12.1259 12.492 11.8291 12.492 11.646 12.3089C11.463 12.1259 11.463 11.8291 11.646 11.646C11.8291 11.4629 12.1259 11.4629 12.3089 11.646C12.492 11.8291 12.492 12.1259 12.3089 12.3089ZM14.0938 8C14.0938 8.25909 13.8841 8.46875 13.625 8.46875H12.6875C12.4284 8.46875 12.2188 8.25909 12.2188 8C12.2188 7.74091 12.4284 7.53125 12.6875 7.53125H13.625C13.8841 7.53125 14.0938 7.74091 14.0938 8Z">
                              </path>
                            </svg>5 Min reads</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default MostPopular
