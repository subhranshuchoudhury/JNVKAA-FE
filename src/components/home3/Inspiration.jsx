import Link from 'next/link'
import React from 'react'

function Inspiration() {
  return (
    <div className="inspiration-section pt-120 pb-120">
    <div className="container">
      <div className="row align-items-center mb-50 gy-4">
        <div className="col-lg-5">
          <div className="section-title-4 mb-0">
            <h3>Inspiration <span>Article</span></h3>
            <img src="assets/images/icons/title-arrow.svg" alt="image" />
          </div>
        </div>
        <div className="col-lg-7 d-flex justify-content-lg-end">
          <ul className="nav nav-tabs nav-style-3" role="tablist">
            <li className="nav-item" role="presentation">
              <a className="nav-link active" data-bs-toggle="tab" href="#tab-1" aria-selected="true" role="tab" tabIndex={-1}>All</a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" data-bs-toggle="tab" href="#tab-2" aria-selected="false" role="tab" tabIndex={-1}>Creative</a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" data-bs-toggle="tab" href="#tab-3" aria-selected="false" role="tab" tabIndex={-1}>Lifestyle</a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" data-bs-toggle="tab" href="#tab-4" aria-selected="false" role="tab" tabIndex={-1}>Fashion</a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" data-bs-toggle="tab" href="#tab-5" aria-selected="false" role="tab" tabIndex={-1}>Fitness</a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" data-bs-toggle="tab" href="#tab-6" aria-selected="false" role="tab" tabIndex={-1}>Fitness</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div id="myTabContent" className="tab-content">
            <div className="tab-pane fade active show" id="tab-1" role="tabpanel">
              <div className="row gy-3">
                <div className="col-xl-8 col-lg-7">
                  <div className="blog-image-3 mb-30" style={{background: 'linear-gradient(rgba(23, 23, 23,0.6),rgba(23, 23, 23,0.6)), url("assets/images/blog-image/inspire-1.jpg")', width: '100%'}}>
                    <div className="content">
                      <h3><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Roaming Around the World Around the World in 80 Days.</a></Link></h3>
                      <ul className="meta"> 
                        <li><Link legacyBehavior href="/author-details"><a><img src="assets/images/icons/user-sm.svg" alt="" />By, Watson Dube</a></Link></li>
                        <li><Link legacyBehavior href="/blog-standard"><a><img src="assets/images/icons/date-sm.svg" alt="" />21 Dec, 2022</a></Link></li>
                        <li><Link legacyBehavior href="/blog-standard"><a><img src="assets/images/icons/comment-sm.svg" alt="" />450 Comment</a></Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog-list-6 mb-30">
                  <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                      <img src="assets/images/blog-list/inspire-2.jpg" alt="image" />
                        </a>
                    </Link>
                    <div className="content">
                      <ul>
                        <li><Link legacyBehavior href="/author-details"><a>By Miles Jaxon</a></Link></li>
                        <li><Link legacyBehavior href="/blog-standard"><a>11 jan, 2023</a></Link></li>
                      </ul>
                      <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>The Best Day Trips from Activity Experience Cultural.</a></Link></h4>
                      <div className="button-area d-flex justify-content-between">
                        <Link legacyBehavior href="/blog-classic"><a  className=" eg-btn arrow-btn style-2">View Post<i className="bi bi-arrow-right" /></a></Link>
                        <span>
                          <svg viewBox="0 0 11 14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.15888 13.1844C8.73336 10.6029 8.07416 7.35423 5.59136 5.46029C5.58991 5.45922 5.58846 5.45788 5.5873 5.45708L5.59803 5.48172L5.59629 5.5002C6.08003 6.68033 6.01217 7.97589 5.41793 9.08745L4.99915 9.87117L4.87068 9.00522C4.78338 8.41784 4.54354 7.85751 4.17407 7.3778H4.11578L4.08503 7.29744C4.08938 8.19499 3.88464 9.07915 3.48297 9.91322C2.95602 11.0047 3.03345 12.2633 3.69033 13.2806L4.14362 13.9829L3.3281 13.6647C1.98331 13.1399 0.908237 12.1291 0.378384 10.8914C-0.215271 9.50931 -0.105357 7.90679 0.672747 6.6056C1.07847 5.92875 1.36269 5.21012 1.51784 4.46926L1.66952 3.74314L2.0564 4.39079C2.24113 4.69961 2.37715 5.03388 2.46154 5.38503L2.47024 5.39333L2.47923 5.44958L2.48765 5.44717C3.64654 4.02518 4.34083 2.25579 4.44204 0.464176L4.46814 0L4.88982 0.253917C6.61075 1.28967 7.80589 2.95139 8.17508 4.81853L8.18349 4.85684L8.18784 4.86273L8.20669 4.83809C8.54398 4.42668 8.72204 3.93732 8.72204 3.42226V2.62461L9.2432 3.26048C10.4549 4.73845 11.0761 6.57185 10.9926 8.42319C10.8899 10.6024 9.6031 12.5151 7.5501 13.5514L6.66121 14L7.15888 13.1844Z">
                            </path>
                          </svg>
                          5 Min Read
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="blog-list-6">
                  <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                      <img src="assets/images/blog-list/inspire-3.jpg" alt="image" />
                        </a>
                    </Link>
                    <div className="content">
                      <ul>
                       <li><Link legacyBehavior href="/author-details"><a>By Martinez</a></Link></li>
                        <li><Link legacyBehavior href="/blog-gallery"><a>03 jan, 2023</a></Link></li>
                      </ul>
                      <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Riskort Taker's Retreaton Survival Stories andose Escapade.</a></Link></h4>
                      <div className="button-area d-flex justify-content-between">
                        <Link legacyBehavior href="/blog-classic"><a  className=" eg-btn arrow-btn style-2">View Post<i className="bi bi-arrow-right" /></a></Link>
                        <span>
                          <svg viewBox="0 0 11 14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.15888 13.1844C8.73336 10.6029 8.07416 7.35423 5.59136 5.46029C5.58991 5.45922 5.58846 5.45788 5.5873 5.45708L5.59803 5.48172L5.59629 5.5002C6.08003 6.68033 6.01217 7.97589 5.41793 9.08745L4.99915 9.87117L4.87068 9.00522C4.78338 8.41784 4.54354 7.85751 4.17407 7.3778H4.11578L4.08503 7.29744C4.08938 8.19499 3.88464 9.07915 3.48297 9.91322C2.95602 11.0047 3.03345 12.2633 3.69033 13.2806L4.14362 13.9829L3.3281 13.6647C1.98331 13.1399 0.908237 12.1291 0.378384 10.8914C-0.215271 9.50931 -0.105357 7.90679 0.672747 6.6056C1.07847 5.92875 1.36269 5.21012 1.51784 4.46926L1.66952 3.74314L2.0564 4.39079C2.24113 4.69961 2.37715 5.03388 2.46154 5.38503L2.47024 5.39333L2.47923 5.44958L2.48765 5.44717C3.64654 4.02518 4.34083 2.25579 4.44204 0.464176L4.46814 0L4.88982 0.253917C6.61075 1.28967 7.80589 2.95139 8.17508 4.81853L8.18349 4.85684L8.18784 4.86273L8.20669 4.83809C8.54398 4.42668 8.72204 3.93732 8.72204 3.42226V2.62461L9.2432 3.26048C10.4549 4.73845 11.0761 6.57185 10.9926 8.42319C10.8899 10.6024 9.6031 12.5151 7.5501 13.5514L6.66121 14L7.15888 13.1844Z">
                            </path>
                          </svg>
                          5 Min Read
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-5">
                  <div className="blog-img-list">
                    <div className="blog-image-4 mb-30 img-adjust" style={{background: 'linear-gradient(rgba(23, 23, 23,0.7),rgba(23, 23, 23,0.7)), url("assets/images/blog-image/inspire-4.jpg")', width: '100%'}}>
                      <div className="content">
                        <ul className="meta"> 
                          <li><Link legacyBehavior href="/blog-standard"><a>11 jan, 2023</a></Link></li>
                        </ul>
                        <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>5 Ways to Boost Your Blog and tourism Traffic rules.</a></Link></h5>
                      </div>
                    </div>
                    <div className="blog-list-7">
                      <Link legacyBehavior href="/blog-standard" >
                        <a className="date">
                        <h3>15</h3>
                        <p>November</p>
                        </a>
                      </Link>
                      <div className="content">
                        <ul>
                          <li>By, <Link legacyBehavior href="/author-details"><a>Miles Jaxon</a></Link></li>
                        </ul>
                         <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>vestibulum ligula sodalesoi Morbi iaculis laoreet.</a></Link></h5>
                      </div>
                    </div>
                    <div className="blog-list-7">
                      <Link legacyBehavior href="/blog-standard" >
                        <a className="date">
                         <h3>02</h3>
                        <p>November</p>
                        </a>
                      </Link>
                      <div className="content">
                        <ul>
                          <li>By, <Link legacyBehavior href="/author-details"><a>Tristan</a></Link></li>
                        </ul>
                       <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>That Adventurer's Journal Nature's Nomad.</a></Link></h5>
                      </div>
                    </div>
                    <div className="blog-list-7">
                      <Link legacyBehavior href="/blog-standard">
                        <a className="date">
                        <h3>28</h3>
                        <p>November</p>
                        </a>
                      </Link>
                      <div className="content">
                        <ul>
                          <li>By, <Link legacyBehavior href="/author-details"><a>Tristan</a></Link></li>
                        </ul>
                        <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Beyond then Wanderlust Wildern Horizon.</a></Link></h5>
                      </div>
                    </div>
                    <div className="blog-list-7">
                      <Link legacyBehavior href="/blog-standard">
                        <a className="date">
                        <h3>15</h3>
                        <p>December</p>
                        </a>
                      </Link>
                      <div className="content">
                        <ul>
                           <li>By, <Link legacyBehavior href="/author-details"><a>Timothyn</a></Link></li>
                        </ul>
                        <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>The Importance Blogging Quality Content. </a></Link></h5>
                      </div>
                    </div>
                    <div className="blog-list-7">
                      <Link legacyBehavior href="/blog-standard">
                        <a className="date">
                        <h3>03</h3>
                        <p>December</p>
                        </a>
                      </Link>
                      <div className="content">
                        <ul>
                          <li>By, <Link legacyBehavior href="/author-details"><a>Braxton’nt</a></Link></li>
                        </ul>
                        <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>The Role of Social Media travel Blogging.</a></Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="tab-2" role="tabpanel">
              <div className="row gy-3">
                <div className="col-xl-8 col-lg-7">
                  <div className="blog-image-3 mb-30" style={{background: 'linear-gradient(rgba(23, 23, 23,0.6),rgba(23, 23, 23,0.6)), url("assets/images/blog-image/inspire-1.jpg")', width: '100%'}}>
                    <div className="content">
                      <h3><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Roaming Around the World Around the World in 80 Days.</a></Link></h3>
                      <ul className="meta"> 
                        <li><Link legacyBehavior href="/author-details"><a><img src="assets/images/icons/user-sm.svg" alt="" />By, Watson Dube</a></Link></li>
                        <li><Link legacyBehavior href="/blog-standard"><a><img src="assets/images/icons/date-sm.svg" alt="" />21 Dec, 2022</a></Link></li>
                        <li><Link legacyBehavior href="/blog-standard"><a><img src="assets/images/icons/comment-sm.svg" alt="" />450 Comment</a></Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog-list-6 mb-30">
                    <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                      <img src="assets/images/blog-list/inspire-2.jpg" alt="image" />
                        </a>
                    </Link>
                    <div className="content">
                      <ul>
                        <li><Link legacyBehavior href="/author-details"><a>By Miles Jaxon</a></Link></li>
                        <li><Link legacyBehavior href="/blog-standard"><a>11 jan, 2023</a></Link></li>
                      </ul>
                      <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>The Best Day Trips from Activity Experience Cultural.</a></Link></h4>
                      <div className="button-area d-flex justify-content-between">
                        <Link legacyBehavior href="/blog-classic"><a  className=" eg-btn arrow-btn style-2">View Post<i className="bi bi-arrow-right" /></a></Link>
                        <span>
                          <svg viewBox="0 0 11 14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.15888 13.1844C8.73336 10.6029 8.07416 7.35423 5.59136 5.46029C5.58991 5.45922 5.58846 5.45788 5.5873 5.45708L5.59803 5.48172L5.59629 5.5002C6.08003 6.68033 6.01217 7.97589 5.41793 9.08745L4.99915 9.87117L4.87068 9.00522C4.78338 8.41784 4.54354 7.85751 4.17407 7.3778H4.11578L4.08503 7.29744C4.08938 8.19499 3.88464 9.07915 3.48297 9.91322C2.95602 11.0047 3.03345 12.2633 3.69033 13.2806L4.14362 13.9829L3.3281 13.6647C1.98331 13.1399 0.908237 12.1291 0.378384 10.8914C-0.215271 9.50931 -0.105357 7.90679 0.672747 6.6056C1.07847 5.92875 1.36269 5.21012 1.51784 4.46926L1.66952 3.74314L2.0564 4.39079C2.24113 4.69961 2.37715 5.03388 2.46154 5.38503L2.47024 5.39333L2.47923 5.44958L2.48765 5.44717C3.64654 4.02518 4.34083 2.25579 4.44204 0.464176L4.46814 0L4.88982 0.253917C6.61075 1.28967 7.80589 2.95139 8.17508 4.81853L8.18349 4.85684L8.18784 4.86273L8.20669 4.83809C8.54398 4.42668 8.72204 3.93732 8.72204 3.42226V2.62461L9.2432 3.26048C10.4549 4.73845 11.0761 6.57185 10.9926 8.42319C10.8899 10.6024 9.6031 12.5151 7.5501 13.5514L6.66121 14L7.15888 13.1844Z">
                            </path>
                          </svg>
                          5 Min Read
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="blog-list-6">
                    <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                      <img src="assets/images/blog-list/inspire-3.jpg" alt="image" />
                        </a>
                    </Link>
                    <div className="content">
                      <ul>
                       <li><Link legacyBehavior href="/author-details"><a>By Martinez</a></Link></li>
                        <li><Link legacyBehavior href="/blog-gallery"><a>03 jan, 2023</a></Link></li>
                      </ul>
                      <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Riskort Taker's Retreaton Survival Stories andose Escapade.</a></Link></h4>
                      <div className="button-area d-flex justify-content-between">
                        <Link legacyBehavior href="/blog-classic"><a  className=" eg-btn arrow-btn style-2">View Post<i className="bi bi-arrow-right" /></a></Link>
                        <span>
                          <svg viewBox="0 0 11 14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.15888 13.1844C8.73336 10.6029 8.07416 7.35423 5.59136 5.46029C5.58991 5.45922 5.58846 5.45788 5.5873 5.45708L5.59803 5.48172L5.59629 5.5002C6.08003 6.68033 6.01217 7.97589 5.41793 9.08745L4.99915 9.87117L4.87068 9.00522C4.78338 8.41784 4.54354 7.85751 4.17407 7.3778H4.11578L4.08503 7.29744C4.08938 8.19499 3.88464 9.07915 3.48297 9.91322C2.95602 11.0047 3.03345 12.2633 3.69033 13.2806L4.14362 13.9829L3.3281 13.6647C1.98331 13.1399 0.908237 12.1291 0.378384 10.8914C-0.215271 9.50931 -0.105357 7.90679 0.672747 6.6056C1.07847 5.92875 1.36269 5.21012 1.51784 4.46926L1.66952 3.74314L2.0564 4.39079C2.24113 4.69961 2.37715 5.03388 2.46154 5.38503L2.47024 5.39333L2.47923 5.44958L2.48765 5.44717C3.64654 4.02518 4.34083 2.25579 4.44204 0.464176L4.46814 0L4.88982 0.253917C6.61075 1.28967 7.80589 2.95139 8.17508 4.81853L8.18349 4.85684L8.18784 4.86273L8.20669 4.83809C8.54398 4.42668 8.72204 3.93732 8.72204 3.42226V2.62461L9.2432 3.26048C10.4549 4.73845 11.0761 6.57185 10.9926 8.42319C10.8899 10.6024 9.6031 12.5151 7.5501 13.5514L6.66121 14L7.15888 13.1844Z">
                            </path>
                          </svg>
                          5 Min Read
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-5">
                  <div className="blog-img-list">
                    <div className="blog-image-4 mb-30 img-adjust" style={{background: 'linear-gradient(rgba(23, 23, 23,0.7),rgba(23, 23, 23,0.7)), url("assets/images/blog-image/inspire-4.jpg")', width: '100%'}}>
                      <div className="content">
                        <ul className="meta"> 
                          <li><Link legacyBehavior href="/blog-standard"><a>11 jan, 2023</a></Link></li>
                        </ul>
                        <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>5 Ways to Boost Your Blog and tourism Traffic rules.</a></Link></h5>
                      </div>
                    </div>
                    <div className="blog-list-7">
                      <div className="date">
                        <h3>15</h3>
                        <p>November</p>
                      </div>
                      <div className="content">
                        <ul>
                          <li>By, <Link legacyBehavior href="/author-details"><a>Miles Jaxon</a></Link></li>
                        </ul>
                        <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>vestibulum ligula sodalesoi Morbi iaculis laoreet.</a></Link></h5>
                      </div>
                    </div>
                    <div className="blog-list-7">
                      <div className="date">
                        <h3>02</h3>
                        <p>November</p>
                      </div>
                      <div className="content">
                        <ul>
                          <li>By, <Link legacyBehavior href="/author-details"><a>Tristan</a></Link></li>
                        </ul>
                       <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>That Adventurer's Journal Nature's Nomad.</a></Link></h5>
                      </div>
                    </div>
                    <div className="blog-list-7">
                      <div className="date">
                        <h3>28</h3>
                        <p>November</p>
                      </div>
                      <div className="content">
                        <ul>
                          <li>By, <Link legacyBehavior href="/author-details"><a>Tristan</a></Link></li>
                        </ul>
                        <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Beyond then Wanderlust Wildern Horizon.</a></Link></h5>
                      </div>
                    </div>
                    <div className="blog-list-7">
                      <div className="date">
                        <h3>15</h3>
                        <p>December</p>
                      </div>
                      <div className="content">
                        <ul>
                           <li>By, <Link legacyBehavior href="/author-details"><a>Timothyn</a></Link></li>
                        </ul>
                        <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>The Importance Blogging Quality Content. </a></Link></h5>
                      </div>
                    </div>
                    <div className="blog-list-7">
                      <div className="date">
                        <h3>03</h3>
                        <p>December</p>
                      </div>
                      <div className="content">
                        <ul>
                          <li>By, <Link legacyBehavior href="/author-details"><a>Braxton’nt</a></Link></li>
                        </ul>
                        <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>The Role of Social Media travel Blogging.</a></Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="tab-3" role="tabpanel">
              <div className="row gy-3">
                <div className="col-xl-8 col-lg-7">
                  <div className="blog-image-3 mb-30" style={{background: 'linear-gradient(rgba(23, 23, 23,0.6),rgba(23, 23, 23,0.6)), url("assets/images/blog-image/inspire-1.jpg")', width: '100%'}}>
                    <div className="content">
                      <h3><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Roaming Around the World Around the World in 80 Days.</a></Link></h3>
                      <ul className="meta"> 
                        <li><Link legacyBehavior href="/author-details"><a><img src="assets/images/icons/user-sm.svg" alt="" />By, Watson Dube</a></Link></li>
                        <li><Link legacyBehavior href="/blog-standard"><a><img src="assets/images/icons/date-sm.svg" alt="" />21 Dec, 2022</a></Link></li>
                        <li><Link legacyBehavior href="/blog-standard"><a><img src="assets/images/icons/comment-sm.svg" alt="" />450 Comment</a></Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog-list-6 mb-30">
                  <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                      <img src="assets/images/blog-list/inspire-2.jpg" alt="image" />
                        </a>
                    </Link>
                    <div className="content">
                      <ul>
                        <li><Link legacyBehavior href="/author-details"><a>By Miles Jaxon</a></Link></li>
                        <li><Link legacyBehavior href="/blog-standard"><a>11 jan, 2023</a></Link></li>
                      </ul>
                      <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>The Best Day Trips from Activity Experience Cultural.</a></Link></h4>
                      <div className="button-area d-flex justify-content-between">
                        <Link legacyBehavior href="/blog-classic"><a  className=" eg-btn arrow-btn style-2">View Post<i className="bi bi-arrow-right" /></a></Link>
                        <span>
                          <svg viewBox="0 0 11 14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.15888 13.1844C8.73336 10.6029 8.07416 7.35423 5.59136 5.46029C5.58991 5.45922 5.58846 5.45788 5.5873 5.45708L5.59803 5.48172L5.59629 5.5002C6.08003 6.68033 6.01217 7.97589 5.41793 9.08745L4.99915 9.87117L4.87068 9.00522C4.78338 8.41784 4.54354 7.85751 4.17407 7.3778H4.11578L4.08503 7.29744C4.08938 8.19499 3.88464 9.07915 3.48297 9.91322C2.95602 11.0047 3.03345 12.2633 3.69033 13.2806L4.14362 13.9829L3.3281 13.6647C1.98331 13.1399 0.908237 12.1291 0.378384 10.8914C-0.215271 9.50931 -0.105357 7.90679 0.672747 6.6056C1.07847 5.92875 1.36269 5.21012 1.51784 4.46926L1.66952 3.74314L2.0564 4.39079C2.24113 4.69961 2.37715 5.03388 2.46154 5.38503L2.47024 5.39333L2.47923 5.44958L2.48765 5.44717C3.64654 4.02518 4.34083 2.25579 4.44204 0.464176L4.46814 0L4.88982 0.253917C6.61075 1.28967 7.80589 2.95139 8.17508 4.81853L8.18349 4.85684L8.18784 4.86273L8.20669 4.83809C8.54398 4.42668 8.72204 3.93732 8.72204 3.42226V2.62461L9.2432 3.26048C10.4549 4.73845 11.0761 6.57185 10.9926 8.42319C10.8899 10.6024 9.6031 12.5151 7.5501 13.5514L6.66121 14L7.15888 13.1844Z">
                            </path>
                          </svg>
                          5 Min Read
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="blog-list-6">
                  <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                      <img src="assets/images/blog-list/inspire-3.jpg" alt="image" />
                        </a>
                    </Link>
                    <div className="content">
                      <ul>
                       <li><Link legacyBehavior href="/author-details"><a>By Martinez</a></Link></li>
                        <li><Link legacyBehavior href="/blog-gallery"><a>03 jan, 2023</a></Link></li>
                      </ul>
                      <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Riskort Taker's Retreaton Survival Stories andose Escapade.</a></Link></h4>
                      <div className="button-area d-flex justify-content-between">
                        <Link legacyBehavior href="/blog-classic"><a  className=" eg-btn arrow-btn style-2">View Post<i className="bi bi-arrow-right" /></a></Link>
                        <span>
                          <svg viewBox="0 0 11 14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.15888 13.1844C8.73336 10.6029 8.07416 7.35423 5.59136 5.46029C5.58991 5.45922 5.58846 5.45788 5.5873 5.45708L5.59803 5.48172L5.59629 5.5002C6.08003 6.68033 6.01217 7.97589 5.41793 9.08745L4.99915 9.87117L4.87068 9.00522C4.78338 8.41784 4.54354 7.85751 4.17407 7.3778H4.11578L4.08503 7.29744C4.08938 8.19499 3.88464 9.07915 3.48297 9.91322C2.95602 11.0047 3.03345 12.2633 3.69033 13.2806L4.14362 13.9829L3.3281 13.6647C1.98331 13.1399 0.908237 12.1291 0.378384 10.8914C-0.215271 9.50931 -0.105357 7.90679 0.672747 6.6056C1.07847 5.92875 1.36269 5.21012 1.51784 4.46926L1.66952 3.74314L2.0564 4.39079C2.24113 4.69961 2.37715 5.03388 2.46154 5.38503L2.47024 5.39333L2.47923 5.44958L2.48765 5.44717C3.64654 4.02518 4.34083 2.25579 4.44204 0.464176L4.46814 0L4.88982 0.253917C6.61075 1.28967 7.80589 2.95139 8.17508 4.81853L8.18349 4.85684L8.18784 4.86273L8.20669 4.83809C8.54398 4.42668 8.72204 3.93732 8.72204 3.42226V2.62461L9.2432 3.26048C10.4549 4.73845 11.0761 6.57185 10.9926 8.42319C10.8899 10.6024 9.6031 12.5151 7.5501 13.5514L6.66121 14L7.15888 13.1844Z">
                            </path>
                          </svg>
                          5 Min Read
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-5">
                  <div className="blog-img-list">
                    <div className="blog-image-4 mb-30 img-adjust" style={{background: 'linear-gradient(rgba(23, 23, 23,0.7),rgba(23, 23, 23,0.7)), url("assets/images/blog-image/inspire-4.jpg")', width: '100%'}}>
                      <div className="content">
                        <ul className="meta"> 
                          <li><Link legacyBehavior href="/blog-standard"><a>11 jan, 2023</a></Link></li>
                        </ul>
                        <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>5 Ways to Boost Your Blog and tourism Traffic rules.</a></Link></h5>
                      </div>
                    </div>
                    <div className="blog-list-7">
                      <div className="date">
                        <h3>15</h3>
                        <p>November</p>
                      </div>
                      <div className="content">
                        <ul>
                          <li>By, <Link legacyBehavior href="/author-details"><a>Miles Jaxon</a></Link></li>
                        </ul>
                         <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>vestibulum ligula sodalesoi Morbi iaculis laoreet.</a></Link></h5>
                      </div>
                    </div>
                    <div className="blog-list-7">
                      <div className="date">
                        <h3>02</h3>
                        <p>November</p>
                      </div>
                      <div className="content">
                        <ul>
                          <li>By, <Link legacyBehavior href="/author-details"><a>Tristan</a></Link></li>
                        </ul>
                        <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>That Adventurer's Journal Nature's Nomad.</a></Link></h5>
                      </div>
                    </div>
                    <div className="blog-list-7">
                      <div className="date">
                        <h3>28</h3>
                        <p>November</p>
                      </div>
                      <div className="content">
                        <ul>
                          <li>By, <Link legacyBehavior href="/author-details"><a>Tristan</a></Link></li>
                        </ul>
                        <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Beyond then Wanderlust Wildern Horizon.</a></Link></h5>
                      </div>
                    </div>
                    <div className="blog-list-7">
                      <div className="date">
                        <h3>15</h3>
                        <p>December</p>
                      </div>
                      <div className="content">
                        <ul>
                           <li>By, <Link legacyBehavior href="/author-details"><a>Timothyn</a></Link></li>
                        </ul>
                        <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>The Importance Blogging Quality Content. </a></Link></h5>
                      </div>
                    </div>
                    <div className="blog-list-7">
                      <div className="date">
                        <h3>03</h3>
                        <p>December</p>
                      </div>
                      <div className="content">
                        <ul>
                          <li>By, <Link legacyBehavior href="/author-details"><a>Braxton’nt</a></Link></li>
                        </ul>
                        <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>The Role of Social Media travel Blogging.</a></Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="tab-4" role="tabpanel">
              <div className="row gy-3">
                <div className="col-xl-8 col-lg-7">
                  <div className="blog-image-3 mb-30" style={{background: 'linear-gradient(rgba(23, 23, 23,0.6),rgba(23, 23, 23,0.6)), url("assets/images/blog-image/inspire-1.jpg")', width: '100%'}}>
                    <div className="content">
                      <h3><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Roaming Around the World Around the World in 80 Days.</a></Link></h3>
                      <ul className="meta"> 
                        <li><Link legacyBehavior href="/author-details"><a><img src="assets/images/icons/user-sm.svg" alt="" />By, Watson Dube</a></Link></li>
                        <li><Link legacyBehavior href="/blog-standard"><a><img src="assets/images/icons/date-sm.svg" alt="" />21 Dec, 2022</a></Link></li>
                        <li><Link legacyBehavior href="/blog-standard"><a><img src="assets/images/icons/comment-sm.svg" alt="" />450 Comment</a></Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog-list-6 mb-30">
                  <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                      <img src="assets/images/blog-list/inspire-2.jpg" alt="image" />
                        </a>
                    </Link>
                    <div className="content">
                      <ul>
                        <li><Link legacyBehavior href="/author-details"><a>By Miles Jaxon</a></Link></li>
                        <li><Link legacyBehavior href="/blog-standard"><a>11 jan, 2023</a></Link></li>
                      </ul>
                      <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>The Best Day Trips from Activity Experience Cultural.</a></Link></h4>
                      <div className="button-area d-flex justify-content-between">
                        <Link legacyBehavior href="/blog-classic"><a  className=" eg-btn arrow-btn style-2">View Post<i className="bi bi-arrow-right" /></a></Link>
                        <span>
                          <svg viewBox="0 0 11 14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.15888 13.1844C8.73336 10.6029 8.07416 7.35423 5.59136 5.46029C5.58991 5.45922 5.58846 5.45788 5.5873 5.45708L5.59803 5.48172L5.59629 5.5002C6.08003 6.68033 6.01217 7.97589 5.41793 9.08745L4.99915 9.87117L4.87068 9.00522C4.78338 8.41784 4.54354 7.85751 4.17407 7.3778H4.11578L4.08503 7.29744C4.08938 8.19499 3.88464 9.07915 3.48297 9.91322C2.95602 11.0047 3.03345 12.2633 3.69033 13.2806L4.14362 13.9829L3.3281 13.6647C1.98331 13.1399 0.908237 12.1291 0.378384 10.8914C-0.215271 9.50931 -0.105357 7.90679 0.672747 6.6056C1.07847 5.92875 1.36269 5.21012 1.51784 4.46926L1.66952 3.74314L2.0564 4.39079C2.24113 4.69961 2.37715 5.03388 2.46154 5.38503L2.47024 5.39333L2.47923 5.44958L2.48765 5.44717C3.64654 4.02518 4.34083 2.25579 4.44204 0.464176L4.46814 0L4.88982 0.253917C6.61075 1.28967 7.80589 2.95139 8.17508 4.81853L8.18349 4.85684L8.18784 4.86273L8.20669 4.83809C8.54398 4.42668 8.72204 3.93732 8.72204 3.42226V2.62461L9.2432 3.26048C10.4549 4.73845 11.0761 6.57185 10.9926 8.42319C10.8899 10.6024 9.6031 12.5151 7.5501 13.5514L6.66121 14L7.15888 13.1844Z">
                            </path>
                          </svg>
                          5 Min Read
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="blog-list-6">
                  <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                      <img src="assets/images/blog-list/inspire-3.jpg" alt="image" />
                        </a>
                    </Link>
                    <div className="content">
                      <ul>
                       <li><Link legacyBehavior href="/author-details"><a>By Martinez</a></Link></li>
                        <li><Link legacyBehavior href="/blog-gallery"><a>03 jan, 2023</a></Link></li>
                      </ul>
                      <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Riskort Taker's Retreaton Survival Stories andose Escapade.</a></Link></h4>
                      <div className="button-area d-flex justify-content-between">
                        <Link legacyBehavior href="/blog-classic"><a  className=" eg-btn arrow-btn style-2">View Post<i className="bi bi-arrow-right" /></a></Link>
                        <span>
                          <svg viewBox="0 0 11 14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.15888 13.1844C8.73336 10.6029 8.07416 7.35423 5.59136 5.46029C5.58991 5.45922 5.58846 5.45788 5.5873 5.45708L5.59803 5.48172L5.59629 5.5002C6.08003 6.68033 6.01217 7.97589 5.41793 9.08745L4.99915 9.87117L4.87068 9.00522C4.78338 8.41784 4.54354 7.85751 4.17407 7.3778H4.11578L4.08503 7.29744C4.08938 8.19499 3.88464 9.07915 3.48297 9.91322C2.95602 11.0047 3.03345 12.2633 3.69033 13.2806L4.14362 13.9829L3.3281 13.6647C1.98331 13.1399 0.908237 12.1291 0.378384 10.8914C-0.215271 9.50931 -0.105357 7.90679 0.672747 6.6056C1.07847 5.92875 1.36269 5.21012 1.51784 4.46926L1.66952 3.74314L2.0564 4.39079C2.24113 4.69961 2.37715 5.03388 2.46154 5.38503L2.47024 5.39333L2.47923 5.44958L2.48765 5.44717C3.64654 4.02518 4.34083 2.25579 4.44204 0.464176L4.46814 0L4.88982 0.253917C6.61075 1.28967 7.80589 2.95139 8.17508 4.81853L8.18349 4.85684L8.18784 4.86273L8.20669 4.83809C8.54398 4.42668 8.72204 3.93732 8.72204 3.42226V2.62461L9.2432 3.26048C10.4549 4.73845 11.0761 6.57185 10.9926 8.42319C10.8899 10.6024 9.6031 12.5151 7.5501 13.5514L6.66121 14L7.15888 13.1844Z">
                            </path>
                          </svg>
                          5 Min Read
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-5">
                  <div className="blog-img-list">
                    <div className="blog-image-4 mb-30 img-adjust" style={{background: 'linear-gradient(rgba(23, 23, 23,0.7),rgba(23, 23, 23,0.7)), url("assets/images/blog-image/inspire-4.jpg")', width: '100%'}}>
                      <div className="content">
                        <ul className="meta"> 
                          <li><Link legacyBehavior href="/blog-standard"><a>11 jan, 2023</a></Link></li>
                        </ul>
                        <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>5 Ways to Boost Your Blog and tourism Traffic rules.</a></Link></h5>
                      </div>
                    </div>
                    <div className="blog-list-7">
                      <div className="date">
                        <h3>15</h3>
                        <p>November</p>
                      </div>
                      <div className="content">
                        <ul>
                          <li>By, <Link legacyBehavior href="/author-details"><a>Miles Jaxon</a></Link></li>
                        </ul>
                         <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>vestibulum ligula sodalesoi Morbi iaculis laoreet.</a></Link></h5>
                      </div>
                    </div>
                    <div className="blog-list-7">
                      <div className="date">
                        <h3>02</h3>
                        <p>November</p>
                      </div>
                      <div className="content">
                        <ul>
                          <li>By, <Link legacyBehavior href="/author-details"><a>Tristan</a></Link></li>
                        </ul>
                       <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>That Adventurer's Journal Nature's Nomad.</a></Link></h5>
                      </div>
                    </div>
                    <div className="blog-list-7">
                      <div className="date">
                        <h3>28</h3>
                        <p>November</p>
                      </div>
                      <div className="content">
                        <ul>
                          <li>By, <Link legacyBehavior href="/author-details"><a>Tristan</a></Link></li>
                        </ul>
                        <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Beyond then Wanderlust Wildern Horizon.</a></Link></h5>
                      </div>
                    </div>
                    <div className="blog-list-7">
                      <div className="date">
                        <h3>15</h3>
                        <p>December</p>
                      </div>
                      <div className="content">
                        <ul>
                          <li>By, <Link legacyBehavior href="/author-details"><a>Timothyn</a></Link></li>
                        </ul>
                        <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>The Importance Blogging Quality Content. </a></Link></h5>
                      </div>
                    </div>
                    <div className="blog-list-7">
                      <div className="date">
                        <h3>03</h3>
                        <p>December</p>
                      </div>
                      <div className="content">
                        <ul>
                          <li>By, <Link legacyBehavior href="/author-details"><a>Braxton’nt</a></Link></li>
                        </ul>
                        <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>The Role of Social Media travel Blogging.</a></Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="tab-5" role="tabpanel">
              <div className="row gy-3">
                <div className="col-xl-8 col-lg-7">
                  <div className="blog-image-3 mb-30" style={{background: 'linear-gradient(rgba(23, 23, 23,0.6),rgba(23, 23, 23,0.6)), url("assets/images/blog-image/inspire-1.jpg")', width: '100%'}}>
                    <div className="content">
                      <h3><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Roaming Around the World Around the World in 80 Days.</a></Link></h3>
                      <ul className="meta"> 
                        <li><Link legacyBehavior href="/author-details"><a><img src="assets/images/icons/user-sm.svg" alt="" />By, Watson Dube</a></Link></li>
                        <li><Link legacyBehavior href="/blog-standard"><a><img src="assets/images/icons/date-sm.svg" alt="" />21 Dec, 2022</a></Link></li>
                        <li><Link legacyBehavior href="/blog-standard"><a><img src="assets/images/icons/comment-sm.svg" alt="" />450 Comment</a></Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog-list-6 mb-30">
                  <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                      <img src="assets/images/blog-list/inspire-2.jpg" alt="image" />
                        </a>
                    </Link>
                    <div className="content">
                      <ul>
                        <li><Link legacyBehavior href="/author-details"><a>By Miles Jaxon</a></Link></li>
                        <li><Link legacyBehavior href="/blog-standard"><a>11 jan, 2023</a></Link></li>
                      </ul>
                      <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>The Best Day Trips from Activity Experience Cultural.</a></Link></h4>
                      <div className="button-area d-flex justify-content-between">
                        <Link legacyBehavior href="/blog-classic"><a  className=" eg-btn arrow-btn style-2">View Post<i className="bi bi-arrow-right" /></a></Link>
                        <span>
                          <svg viewBox="0 0 11 14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.15888 13.1844C8.73336 10.6029 8.07416 7.35423 5.59136 5.46029C5.58991 5.45922 5.58846 5.45788 5.5873 5.45708L5.59803 5.48172L5.59629 5.5002C6.08003 6.68033 6.01217 7.97589 5.41793 9.08745L4.99915 9.87117L4.87068 9.00522C4.78338 8.41784 4.54354 7.85751 4.17407 7.3778H4.11578L4.08503 7.29744C4.08938 8.19499 3.88464 9.07915 3.48297 9.91322C2.95602 11.0047 3.03345 12.2633 3.69033 13.2806L4.14362 13.9829L3.3281 13.6647C1.98331 13.1399 0.908237 12.1291 0.378384 10.8914C-0.215271 9.50931 -0.105357 7.90679 0.672747 6.6056C1.07847 5.92875 1.36269 5.21012 1.51784 4.46926L1.66952 3.74314L2.0564 4.39079C2.24113 4.69961 2.37715 5.03388 2.46154 5.38503L2.47024 5.39333L2.47923 5.44958L2.48765 5.44717C3.64654 4.02518 4.34083 2.25579 4.44204 0.464176L4.46814 0L4.88982 0.253917C6.61075 1.28967 7.80589 2.95139 8.17508 4.81853L8.18349 4.85684L8.18784 4.86273L8.20669 4.83809C8.54398 4.42668 8.72204 3.93732 8.72204 3.42226V2.62461L9.2432 3.26048C10.4549 4.73845 11.0761 6.57185 10.9926 8.42319C10.8899 10.6024 9.6031 12.5151 7.5501 13.5514L6.66121 14L7.15888 13.1844Z">
                            </path>
                          </svg>
                          5 Min Read
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="blog-list-6">
                  <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                      <img src="assets/images/blog-list/inspire-3.jpg" alt="image" />
                        </a>
                    </Link>
                    <div className="content">
                      <ul>
                        <li><Link legacyBehavior href="/author-details"><a>By Martinez</a></Link></li>
                        <li><Link legacyBehavior href="/blog-gallery"><a>03 jan, 2023</a></Link></li>
                      </ul>
                      <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Riskort Taker's Retreaton Survival Stories andose Escapade.</a></Link></h4>
                      <div className="button-area d-flex justify-content-between">
                        <Link legacyBehavior href="/blog-classic"><a  className=" eg-btn arrow-btn style-2">View Post<i className="bi bi-arrow-right" /></a></Link>
                        <span>
                          <svg viewBox="0 0 11 14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.15888 13.1844C8.73336 10.6029 8.07416 7.35423 5.59136 5.46029C5.58991 5.45922 5.58846 5.45788 5.5873 5.45708L5.59803 5.48172L5.59629 5.5002C6.08003 6.68033 6.01217 7.97589 5.41793 9.08745L4.99915 9.87117L4.87068 9.00522C4.78338 8.41784 4.54354 7.85751 4.17407 7.3778H4.11578L4.08503 7.29744C4.08938 8.19499 3.88464 9.07915 3.48297 9.91322C2.95602 11.0047 3.03345 12.2633 3.69033 13.2806L4.14362 13.9829L3.3281 13.6647C1.98331 13.1399 0.908237 12.1291 0.378384 10.8914C-0.215271 9.50931 -0.105357 7.90679 0.672747 6.6056C1.07847 5.92875 1.36269 5.21012 1.51784 4.46926L1.66952 3.74314L2.0564 4.39079C2.24113 4.69961 2.37715 5.03388 2.46154 5.38503L2.47024 5.39333L2.47923 5.44958L2.48765 5.44717C3.64654 4.02518 4.34083 2.25579 4.44204 0.464176L4.46814 0L4.88982 0.253917C6.61075 1.28967 7.80589 2.95139 8.17508 4.81853L8.18349 4.85684L8.18784 4.86273L8.20669 4.83809C8.54398 4.42668 8.72204 3.93732 8.72204 3.42226V2.62461L9.2432 3.26048C10.4549 4.73845 11.0761 6.57185 10.9926 8.42319C10.8899 10.6024 9.6031 12.5151 7.5501 13.5514L6.66121 14L7.15888 13.1844Z">
                            </path>
                          </svg>
                          5 Min Read
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-5">
                  <div className="blog-img-list">
                    <div className="blog-image-4 mb-30 img-adjust" style={{background: 'linear-gradient(rgba(23, 23, 23,0.7),rgba(23, 23, 23,0.7)), url("assets/images/blog-image/inspire-4.jpg")', width: '100%'}}>
                      <div className="content">
                        <ul className="meta"> 
                          <li><Link legacyBehavior href="/blog-standard"><a>11 jan, 2023</a></Link></li>
                        </ul>
                        <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>5 Ways to Boost Your Blog and tourism Traffic rules.</a></Link></h5>
                      </div>
                    </div>
                    <div className="blog-list-7">
                      <div className="date">
                        <h3>15</h3>
                        <p>November</p>
                      </div>
                      <div className="content">
                        <ul>
                          <li>By, <Link legacyBehavior href="/author-details"><a>Miles Jaxon</a></Link></li>
                        </ul>
                         <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>vestibulum ligula sodalesoi Morbi iaculis laoreet.</a></Link></h5>
                      </div>
                    </div>
                    <div className="blog-list-7">
                      <div className="date">
                        <h3>02</h3>
                        <p>November</p>
                      </div>
                      <div className="content">
                        <ul>
                          <li>By, <Link legacyBehavior href="/author-details"><a>Tristan</a></Link></li>
                        </ul>
                       <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>That Adventurer's Journal Nature's Nomad.</a></Link></h5>
                      </div>
                    </div>
                    <div className="blog-list-7">
                      <div className="date">
                        <h3>28</h3>
                        <p>November</p>
                      </div>
                      <div className="content">
                        <ul>
                          <li>By, <Link legacyBehavior href="/author-details"><a>Tristan</a></Link></li>
                        </ul>
                        <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Beyond then Wanderlust Wildern Horizon.</a></Link></h5>
                      </div>
                    </div>
                    <div className="blog-list-7">
                      <div className="date">
                        <h3>15</h3>
                        <p>December</p>
                      </div>
                      <div className="content">
                        <ul>
                           <li>By, <Link legacyBehavior href="/author-details"><a>Timothyn</a></Link></li>
                        </ul>
                        <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>The Importance Blogging Quality Content. </a></Link></h5>
                      </div>
                    </div>
                    <div className="blog-list-7">
                      <div className="date">
                        <h3>03</h3>
                        <p>December</p>
                      </div>
                      <div className="content">
                        <ul>
                          <li>By, <Link legacyBehavior href="/author-details"><a>Braxton’nt</a></Link></li>
                        </ul>
                        <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>The Role of Social Media travel Blogging.</a></Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="tab-6" role="tabpanel">
              <div className="row gy-3">
                <div className="col-xl-8 col-lg-7">
                  <div className="blog-image-3 mb-30" style={{background: 'linear-gradient(rgba(23, 23, 23,0.6),rgba(23, 23, 23,0.6)), url("assets/images/blog-image/inspire-1.jpg")', width: '100%'}}>
                    <div className="content">
                      <h3><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Roaming Around the World Around the World in 80 Days.</a></Link></h3>
                      <ul className="meta"> 
                        <li><Link legacyBehavior href="/author-details"><a><img src="assets/images/icons/user-sm.svg" alt="" />By, Watson Dube</a></Link></li>
                        <li><Link legacyBehavior href="/blog-standard"><a><img src="assets/images/icons/date-sm.svg" alt="" />21 Dec, 2022</a></Link></li>
                        <li><Link legacyBehavior href="/blog-standard"><a><img src="assets/images/icons/comment-sm.svg" alt="" />450 Comment</a></Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog-list-6 mb-30">
                  <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                      <img src="assets/images/blog-list/inspire-2.jpg" alt="image" />
                        </a>
                    </Link>
                    <div className="content">
                      <ul>
                        <li><Link legacyBehavior href="/author-details"><a>By Miles Jaxon</a></Link></li>
                        <li><Link legacyBehavior href="/blog-standard"><a>11 jan, 2023</a></Link></li>
                      </ul>
                      <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>The Best Day Trips from Activity Experience Cultural.</a></Link></h4>
                      <div className="button-area d-flex justify-content-between">
                        <Link legacyBehavior href="/blog-classic"><a  className=" eg-btn arrow-btn style-2">View Post<i className="bi bi-arrow-right" /></a></Link>
                        <span>
                          <svg viewBox="0 0 11 14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.15888 13.1844C8.73336 10.6029 8.07416 7.35423 5.59136 5.46029C5.58991 5.45922 5.58846 5.45788 5.5873 5.45708L5.59803 5.48172L5.59629 5.5002C6.08003 6.68033 6.01217 7.97589 5.41793 9.08745L4.99915 9.87117L4.87068 9.00522C4.78338 8.41784 4.54354 7.85751 4.17407 7.3778H4.11578L4.08503 7.29744C4.08938 8.19499 3.88464 9.07915 3.48297 9.91322C2.95602 11.0047 3.03345 12.2633 3.69033 13.2806L4.14362 13.9829L3.3281 13.6647C1.98331 13.1399 0.908237 12.1291 0.378384 10.8914C-0.215271 9.50931 -0.105357 7.90679 0.672747 6.6056C1.07847 5.92875 1.36269 5.21012 1.51784 4.46926L1.66952 3.74314L2.0564 4.39079C2.24113 4.69961 2.37715 5.03388 2.46154 5.38503L2.47024 5.39333L2.47923 5.44958L2.48765 5.44717C3.64654 4.02518 4.34083 2.25579 4.44204 0.464176L4.46814 0L4.88982 0.253917C6.61075 1.28967 7.80589 2.95139 8.17508 4.81853L8.18349 4.85684L8.18784 4.86273L8.20669 4.83809C8.54398 4.42668 8.72204 3.93732 8.72204 3.42226V2.62461L9.2432 3.26048C10.4549 4.73845 11.0761 6.57185 10.9926 8.42319C10.8899 10.6024 9.6031 12.5151 7.5501 13.5514L6.66121 14L7.15888 13.1844Z">
                            </path>
                          </svg>
                          5 Min Read
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="blog-list-6">
                  <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                      <img src="assets/images/blog-list/inspire-3.jpg" alt="image" />
                        </a>
                    </Link>
                    <div className="content">
                      <ul>
                       <li><Link legacyBehavior href="/author-details"><a>By Martinez</a></Link></li>
                        <li><Link legacyBehavior href="/blog-gallery"><a>03 jan, 2023</a></Link></li>
                      </ul>
                      <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Riskort Taker's Retreaton Survival Stories andose Escapade.</a></Link></h4>
                      <div className="button-area d-flex justify-content-between">
                        <Link legacyBehavior href="/blog-classic"><a  className=" eg-btn arrow-btn style-2">View Post<i className="bi bi-arrow-right" /></a></Link>
                        <span>
                          <svg viewBox="0 0 11 14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.15888 13.1844C8.73336 10.6029 8.07416 7.35423 5.59136 5.46029C5.58991 5.45922 5.58846 5.45788 5.5873 5.45708L5.59803 5.48172L5.59629 5.5002C6.08003 6.68033 6.01217 7.97589 5.41793 9.08745L4.99915 9.87117L4.87068 9.00522C4.78338 8.41784 4.54354 7.85751 4.17407 7.3778H4.11578L4.08503 7.29744C4.08938 8.19499 3.88464 9.07915 3.48297 9.91322C2.95602 11.0047 3.03345 12.2633 3.69033 13.2806L4.14362 13.9829L3.3281 13.6647C1.98331 13.1399 0.908237 12.1291 0.378384 10.8914C-0.215271 9.50931 -0.105357 7.90679 0.672747 6.6056C1.07847 5.92875 1.36269 5.21012 1.51784 4.46926L1.66952 3.74314L2.0564 4.39079C2.24113 4.69961 2.37715 5.03388 2.46154 5.38503L2.47024 5.39333L2.47923 5.44958L2.48765 5.44717C3.64654 4.02518 4.34083 2.25579 4.44204 0.464176L4.46814 0L4.88982 0.253917C6.61075 1.28967 7.80589 2.95139 8.17508 4.81853L8.18349 4.85684L8.18784 4.86273L8.20669 4.83809C8.54398 4.42668 8.72204 3.93732 8.72204 3.42226V2.62461L9.2432 3.26048C10.4549 4.73845 11.0761 6.57185 10.9926 8.42319C10.8899 10.6024 9.6031 12.5151 7.5501 13.5514L6.66121 14L7.15888 13.1844Z">
                            </path>
                          </svg>
                          5 Min Read
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-5">
                  <div className="blog-img-list">
                    <div className="blog-image-4 mb-30 img-adjust" style={{background: 'linear-gradient(rgba(23, 23, 23,0.7),rgba(23, 23, 23,0.7)), url("assets/images/blog-image/inspire-4.jpg")', width: '100%'}}>
                      <div className="content">
                        <ul className="meta"> 
                          <li><Link legacyBehavior href="/blog-standard"><a>11 jan, 2023</a></Link></li>
                        </ul>
                        <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>5 Ways to Boost Your Blog and tourism Traffic rules.</a></Link></h5>
                      </div>
                    </div>
                    <div className="blog-list-7">
                      <div className="date">
                        <h3>15</h3>
                        <p>November</p>
                      </div>
                      <div className="content">
                        <ul>
                          <li>By, <Link legacyBehavior href="/author-details"><a>Miles Jaxon</a></Link></li>
                        </ul>
                         <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>vestibulum ligula sodalesoi Morbi iaculis laoreet.</a></Link></h5>
                      </div>
                    </div>
                    <div className="blog-list-7">
                      <div className="date">
                        <h3>02</h3>
                        <p>November</p>
                      </div>
                      <div className="content">
                        <ul>
                          <li>By, <Link legacyBehavior href="/author-details"><a>Tristan</a></Link></li>
                        </ul>
                       <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>That Adventurer's Journal Nature's Nomad.</a></Link></h5>
                      </div>
                    </div>
                    <div className="blog-list-7">
                      <div className="date">
                        <h3>28</h3>
                        <p>November</p>
                      </div>
                      <div className="content">
                        <ul>
                          <li>By, <Link legacyBehavior href="/author-details"><a>Tristan</a></Link></li>
                        </ul>
                        <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Beyond then Wanderlust Wildern Horizon.</a></Link></h5>
                      </div>
                    </div>
                    <div className="blog-list-7">
                      <div className="date">
                        <h3>15</h3>
                        <p>December</p>
                      </div>
                      <div className="content">
                        <ul>
                           <li>By, <Link legacyBehavior href="/author-details"><a>Timothyn</a></Link></li>
                        </ul>
                        <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>The Importance Blogging Quality Content. </a></Link></h5>
                      </div>
                    </div>
                    <div className="blog-list-7">
                      <div className="date">
                        <h3>03</h3>
                        <p>December</p>
                      </div>
                      <div className="content">
                        <ul>
                          <li>By, <Link legacyBehavior href="/author-details"><a>Braxton’nt</a></Link></li>
                        </ul>
                        <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>The Role of Social Media travel Blogging.</a></Link></h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Inspiration
