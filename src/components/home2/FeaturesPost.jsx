import Link from 'next/link'
import React from 'react'

function FeaturesPost() {
  return (
    <section className="featured-post tab-style-1 pt-120 pb-120">
    <div className="container">
      <div className="row align-items-center mb-40">
        <div className="col-lg-6">
          <div className="section-title-2">
            <div className="titel">
              <h4>Featured Posts</h4>
              <div className="dash" />
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-flex justify-content-lg-end">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item" role="presentation">
              <a className="nav-link active" data-bs-toggle="tab" href="#tab-1" aria-selected="true" role="tab" tabIndex={-1}>Travel</a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" data-bs-toggle="tab" href="#tab-2" aria-selected="false" role="tab" tabIndex={-1}>Lifestyle</a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" data-bs-toggle="tab" href="#tab-3" aria-selected="false" role="tab" tabIndex={-1}>Fashion</a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" data-bs-toggle="tab" href="#tab-4" aria-selected="false" role="tab" tabIndex={-1}>Fitness</a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" data-bs-toggle="tab" href="#tab-5" aria-selected="false" role="tab" tabIndex={-1}>Creative</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div id="myTabContent" className="tab-content">
            <div className="tab-pane fade active show" id="tab-1" role="tabpanel">
              <div className="row gy-5">
                <div className="col-xl-5 col-lg-4">
                  <div className="blog-grid-4">
                   <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                            <img src="assets/images/blog-grid/feature1-1.jpg" alt="image" />
                        </a>
                    </Link>
                    <div className="content">
                      <ul>
                        <li><Link legacyBehavior href="/author-details"><a>By Alen Wakker</a></Link></li>
                        <li><Link legacyBehavior href="/blog-standard"><a>Nov 15, 2022</a></Link></li>
                        <li><Link legacyBehavior href="/blog-classic"><a>Event</a></Link></li>
                      </ul>
                      <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Epic Celebrations: Engage in Spectacular Events and Festivities.</a></Link></h4>
                      <p>Aliquam erat volutpat. Ut scelerisque elementum nisi, anedoi fermentumon odiona gouvikoi tincidunt vel. Proin velit estear elementum sed hendrerit dordin cadovia.</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div className="blog-list-3">
                    <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Gravida orci sed jarito laorenoba tellusfur outha.</a></Link></h6>
                    <ul>
                       <li><Link legacyBehavior href="/author-details"><a>By Ashton Rhett</a></Link></li>
                      <li><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></li>
                    </ul>
                  </div>
                  <div className="blog-list-3">
                    <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>ornare varius Nullam sapien risus accumsan quis.</a></Link></h6>
                    <ul>
                      <li><Link legacyBehavior href="/author-details"><a>By Bentley Carlos</a></Link></li>
                      <li><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></li>
                    </ul>
                  </div>
                  <div className="blog-list-3">
                    <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>elitquis metus Nam vitae exsemon Proin fermentum.</a></Link></h6>
                    <ul>
                      <li><Link legacyBehavior href="/author-details"><a>By Ryker Adriel</a></Link></li>
                      <li><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></li>
                    </ul>
                  </div>
                  <div className="blog-list-3">
                    <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>laoreet, exdolor condi mentumani turpis hendrerit sapien.</a></Link></h6>
                    <ul>
                      <li><Link legacyBehavior href="/author-details"><a>By Graham Kaiden</a></Link></li>
                      <li><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></li>
                    </ul>
                  </div>
                  <div className="blog-list-3">
                    <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>porttitor suscipit euelitor Inviverra pellentesqu nisleu.</a></Link></h6>
                    <ul>
                      <li><Link legacyBehavior href="/author-details"><a>By Maxwell Juan</a></Link></li>
                      <li><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></li>
                    </ul>
                  </div>
                  <div className="blog-list-3">
                    <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>ornare varius Nullam sapien risus accumsan quis.</a></Link></h6>
                    <ul>
                      <li><Link legacyBehavior href="/author-details"><a>By Bentley Carlos</a></Link></li>
                      <li><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="blog-grid-4 style-two">
                   <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                            <img src="assets/images/blog-grid/feature1-2.jpg" alt="image" />
                        </a>
                    </Link>
                    <div className="content">
                      <ul>
                        <li><Link legacyBehavior href="/author-details"><a>By Jace Emmett</a></Link></li>
                        <li><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></li>
                      </ul>
                      <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Immerse in Creativity: Exploring Boundless Artistic Endeavors.</a></Link></h5>
                    </div>
                  </div>
                  <div className="blog-grid-4 style-two">
                   <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                            <img src="assets/images/blog-grid/feature1-3.jpg" alt="image" />
                        </a>
                    </Link>
                    <div className="content">
                      <ul>
                        <li><Link legacyBehavior href="/author-details"><a>By Philip Coutinho</a></Link></li>
                        <li><Link legacyBehavior href="/blog-classic"><a>Art</a></Link></li>
                      </ul>
                      <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Canvas Chronicles: Captivating Stories of Artistic Brilliance.</a></Link></h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="tab-2" role="tabpanel">
              <div className="row gy-5">
                <div className="col-xl-5 col-lg-4">
                  <div className="blog-grid-4">
                   <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                            <img src="assets/images/blog-grid/feature1-1.jpg" alt="image" />
                        </a>
                    </Link>
                    <div className="content">
                      <ul>
                        <li><Link legacyBehavior href="/author-details"><a>By Jace Emmett</a></Link></li>
                        <li><Link legacyBehavior href="/blog-standard"><a>Nov 15, 2022</a></Link></li>
                        <li><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></li>
                      </ul>
                      <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Sed lectus duitotan tristiqu eitati eleifend blandit necol.</a></Link></h4>
                      <p>Aliquam erat volutpat. Ut scelerisque elementum nisi, anedoi fermentumon odiona gouvikoi tincidunt vel. Proin velit estear elementum sed hendrerit dordin cadovia.</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div className="blog-list-3">
                    <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Gravida orci sed jarito laorenoba tellusfur outha.</a></Link></h6>
                    <ul>
                       <li><Link legacyBehavior href="/author-details"><a>By Ashton Rhett</a></Link></li>
                      <li><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></li>
                    </ul>
                  </div>
                  <div className="blog-list-3">
                    <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>ornare varius Nullam sapien risus accumsan quis.</a></Link></h6>
                    <ul>
                      <li><Link legacyBehavior href="/author-details"><a>By Bentley Carlos</a></Link></li>
                      <li><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></li>
                    </ul>
                  </div>
                  <div className="blog-list-3">
                    <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>elitquis metus Nam vitae exsemon Proin fermentum.</a></Link></h6>
                    <ul>
                      <li><Link legacyBehavior href="/author-details"><a>By Ryker Adriel</a></Link></li>
                      <li><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></li>
                    </ul>
                  </div>
                  <div className="blog-list-3">
                    <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>laoreet, exdolor condi mentumani turpis hendrerit sapien.</a></Link></h6>
                    <ul>
                      <li><Link legacyBehavior href="/author-details"><a>By Graham Kaiden</a></Link></li>
                      <li><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></li>
                    </ul>
                  </div>
                  <div className="blog-list-3">
                    <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>porttitor suscipit euelitor Inviverra pellentesqu nisleu.</a></Link></h6>
                    <ul>
                      <li><Link legacyBehavior href="/author-details"><a>By Maxwell Juan</a></Link></li>
                      <li><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></li>
                    </ul>
                  </div>
                  <div className="blog-list-3">
                    <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>ornare varius Nullam sapien risus accumsan quis.</a></Link></h6>
                    <ul>
                      <li><Link legacyBehavior href="/author-details"><a>By Bentley Carlos</a></Link></li>
                      <li><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="blog-grid-4 style-two">
                   <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                            <img src="assets/images/blog-grid/feature1-2.jpg" alt="image" />
                        </a>
                    </Link>
                    <div className="content">
                      <ul>
                        <li><Link legacyBehavior href="/author-details"><a>By Jace Emmett</a></Link></li>
                        <li><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></li>
                      </ul>
                      <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Sed lectus duitotan tristiqu eitati eleifend blandit necol.</a></Link></h5>
                    </div>
                  </div>
                  <div className="blog-grid-4 style-two">
                   <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                            <img src="assets/images/blog-grid/feature1-3.jpg" alt="image" />
                        </a>
                    </Link>
                    <div className="content">
                      <ul>
                        <li><Link legacyBehavior href="/author-details"><a>By Jace Emmett</a></Link></li>
                        <li><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></li>
                      </ul>
                      <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Sed lectus duitotan tristiqu eitati eleifend blandit necol.</a></Link></h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="tab-3" role="tabpanel">
              <div className="row gy-5">
                <div className="col-xl-5 col-lg-4">
                  <div className="blog-grid-4">
                   <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                            <img src="assets/images/blog-grid/feature1-1.jpg" alt="image" />
                        </a>
                    </Link>
                    <div className="content">
                      <ul>
                        <li><Link legacyBehavior href="/author-details"><a>By Jace Emmett</a></Link></li>
                        <li><Link legacyBehavior href="/blog-standard"><a>Nov 15, 2022</a></Link></li>
                        <li><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></li>
                      </ul>
                      <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Sed lectus duitotan tristiqu eitati eleifend blandit necol.</a></Link></h4>
                      <p>Aliquam erat volutpat. Ut scelerisque elementum nisi, anedoi fermentumon odiona gouvikoi tincidunt vel. Proin velit estear elementum sed hendrerit dordin cadovia.</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div className="blog-list-3">
                    <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Gravida orci sed jarito laorenoba tellusfur outha.</a></Link></h6>
                    <ul>
                       <li><Link legacyBehavior href="/author-details"><a>By Ashton Rhett</a></Link></li>
                      <li><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></li>
                    </ul>
                  </div>
                  <div className="blog-list-3">
                    <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>ornare varius Nullam sapien risus accumsan quis.</a></Link></h6>
                    <ul>
                      <li><Link legacyBehavior href="/author-details"><a>By Bentley Carlos</a></Link></li>
                      <li><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></li>
                    </ul>
                  </div>
                  <div className="blog-list-3">
                    <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>elitquis metus Nam vitae exsemon Proin fermentum.</a></Link></h6>
                    <ul>
                      <li><Link legacyBehavior href="/author-details"><a>By Ryker Adriel</a></Link></li>
                      <li><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></li>
                    </ul>
                  </div>
                  <div className="blog-list-3">
                    <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>laoreet, exdolor condi mentumani turpis hendrerit sapien.</a></Link></h6>
                    <ul>
                      <li><Link legacyBehavior href="/author-details"><a>By Graham Kaiden</a></Link></li>
                      <li><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></li>
                    </ul>
                  </div>
                  <div className="blog-list-3">
                    <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>porttitor suscipit euelitor Inviverra pellentesqu nisleu.</a></Link></h6>
                    <ul>
                      <li><Link legacyBehavior href="/author-details"><a>By Maxwell Juan</a></Link></li>
                      <li><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></li>
                    </ul>
                  </div>
                  <div className="blog-list-3">
                    <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>ornare varius Nullam sapien risus accumsan quis.</a></Link></h6>
                    <ul>
                      <li><Link legacyBehavior href="/author-details"><a>By Bentley Carlos</a></Link></li>
                      <li><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="blog-grid-4 style-two">
                   <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                            <img src="assets/images/blog-grid/feature1-2.jpg" alt="image" />
                        </a>
                    </Link>
                    <div className="content">
                      <ul>
                        <li><Link legacyBehavior href="/author-details"><a>By Jace Emmett</a></Link></li>
                        <li><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></li>
                      </ul>
                      <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Sed lectus duitotan tristiqu eitati eleifend blandit necol.</a></Link></h5>
                    </div>
                  </div>
                  <div className="blog-grid-4 style-two">
                    <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                            <img src="assets/images/blog-grid/feature1-3.jpg" alt="image" />
                        </a>
                    </Link>
                    <div className="content">
                      <ul>
                        <li><Link legacyBehavior href="/author-details"><a>By Jace Emmett</a></Link></li>
                        <li><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></li>
                      </ul>
                      <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Sed lectus duitotan tristiqu eitati eleifend blandit necol.</a></Link></h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="tab-4" role="tabpanel">
              <div className="row gy-5">
                <div className="col-xl-5 col-lg-4">
                  <div className="blog-grid-4">
                   <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                            <img src="assets/images/blog-grid/feature1-1.jpg" alt="image" />
                        </a>
                    </Link>
                    <div className="content">
                      <ul>
                        <li><Link legacyBehavior href="/author-details"><a>By Jace Emmett</a></Link></li>
                        <li><Link legacyBehavior href="/blog-standard"><a>Nov 15, 2022</a></Link></li>
                        <li><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></li>
                      </ul>
                      <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Sed lectus duitotan tristiqu eitati eleifend blandit necol.</a></Link></h4>
                      <p>Aliquam erat volutpat. Ut scelerisque elementum nisi, anedoi fermentumon odiona gouvikoi tincidunt vel. Proin velit estear elementum sed hendrerit dordin cadovia.</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div className="blog-list-3">
                    <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Gravida orci sed jarito laorenoba tellusfur outha.</a></Link></h6>
                    <ul>
                       <li><Link legacyBehavior href="/author-details"><a>By Ashton Rhett</a></Link></li>
                      <li><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></li>
                    </ul>
                  </div>
                  <div className="blog-list-3">
                    <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>ornare varius Nullam sapien risus accumsan quis.</a></Link></h6>
                    <ul>
                      <li><Link legacyBehavior href="/author-details"><a>By Bentley Carlos</a></Link></li>
                      <li><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></li>
                    </ul>
                  </div>
                  <div className="blog-list-3">
                    <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>elitquis metus Nam vitae exsemon Proin fermentum.</a></Link></h6>
                    <ul>
                      <li><Link legacyBehavior href="/author-details"><a>By Ryker Adriel</a></Link></li>
                      <li><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></li>
                    </ul>
                  </div>
                  <div className="blog-list-3">
                    <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>laoreet, exdolor condi mentumani turpis hendrerit sapien.</a></Link></h6>
                    <ul>
                      <li><Link legacyBehavior href="/author-details"><a>By Graham Kaiden</a></Link></li>
                      <li><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></li>
                    </ul>
                  </div>
                  <div className="blog-list-3">
                    <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>porttitor suscipit euelitor Inviverra pellentesqu nisleu.</a></Link></h6>
                    <ul>
                      <li><Link legacyBehavior href="/author-details"><a>By Maxwell Juan</a></Link></li>
                      <li><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></li>
                    </ul>
                  </div>
                  <div className="blog-list-3">
                    <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>ornare varius Nullam sapien risus accumsan quis.</a></Link></h6>
                    <ul>
                      <li><Link legacyBehavior href="/author-details"><a>By Bentley Carlos</a></Link></li>
                      <li><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="blog-grid-4 style-two">
                   <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                            <img src="assets/images/blog-grid/feature1-2.jpg" alt="image" />
                        </a>
                    </Link>
                    <div className="content">
                      <ul>
                        <li><Link legacyBehavior href="/author-details"><a>By Jace Emmett</a></Link></li>
                        <li><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></li>
                      </ul>
                      <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Sed lectus duitotan tristiqu eitati eleifend blandit necol.</a></Link></h5>
                    </div>
                  </div>
                  <div className="blog-grid-4 style-two">
                   <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                            <img src="assets/images/blog-grid/feature1-3.jpg" alt="image" />
                        </a>
                    </Link>
                    <div className="content">
                      <ul>
                        <li><Link legacyBehavior href="/author-details"><a>By Jace Emmett</a></Link></li>
                        <li><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></li>
                      </ul>
                      <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Sed lectus duitotan tristiqu eitati eleifend blandit necol.</a></Link></h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="tab-5">
              <div className="row gy-5">
                <div className="col-xl-5 col-lg-4">
                  <div className="blog-grid-4">
                   <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                            <img src="assets/images/blog-grid/feature1-1.jpg" alt="image" />
                        </a>
                    </Link>
                    <div className="content">
                      <ul>
                        <li><Link legacyBehavior href="/author-details"><a>By Jace Emmett</a></Link></li>
                        <li><Link legacyBehavior href="/blog-standard"><a>Nov 15, 2022</a></Link></li>
                        <li><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></li>
                      </ul>
                      <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Sed lectus duitotan tristiqu eitati eleifend blandit necol.</a></Link></h4>
                      <p>Aliquam erat volutpat. Ut scelerisque elementum nisi, anedoi fermentumon odiona gouvikoi tincidunt vel. Proin velit estear elementum sed hendrerit dordin cadovia.</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div className="blog-list-3">
                    <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Gravida orci sed jarito laorenoba tellusfur outha.</a></Link></h6>
                    <ul>
                      <li><Link legacyBehavior href="/author-details"><a>By Ashton Rhett</a></Link></li>
                      <li><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></li>
                    </ul>
                  </div>
                  <div className="blog-list-3">
                    <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>ornare varius Nullam sapien risus accumsan quis.</a></Link></h6>
                    <ul>
                      <li><Link legacyBehavior href="/author-details"><a>By Bentley Carlos</a></Link></li>
                      <li><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></li>
                    </ul>
                  </div>
                  <div className="blog-list-3">
                    <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>elitquis metus Nam vitae exsemon Proin fermentum.</a></Link></h6>
                    <ul>
                      <li><Link legacyBehavior href="/author-details"><a>By Ryker Adriel</a></Link></li>
                      <li><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></li>
                    </ul>
                  </div>
                  <div className="blog-list-3">
                    <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>laoreet, exdolor condi mentumani turpis hendrerit sapien.</a></Link></h6>
                    <ul>
                      <li><Link legacyBehavior href="/author-details"><a>By Graham Kaiden</a></Link></li>
                      <li><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></li>
                    </ul>
                  </div>
                  <div className="blog-list-3">
                    <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>porttitor suscipit euelitor Inviverra pellentesqu nisleu.</a></Link></h6>
                    <ul>
                      <li><Link legacyBehavior href="/author-details"><a>By Maxwell Juan</a></Link></li>
                      <li><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></li>
                    </ul>
                  </div>
                  <div className="blog-list-3">
                    <h6><Link legacyBehavior href="/post-format-no-sidebar-02"><a>ornare varius Nullam sapien risus accumsan quis.</a></Link></h6>
                    <ul>
                      <li><Link legacyBehavior href="/author-details"><a>By Bentley Carlos</a></Link></li>
                      <li><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="blog-grid-4 style-two">
                   <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                            <img src="assets/images/blog-grid/feature1-2.jpg" alt="image" />
                        </a>
                    </Link>
                    <div className="content">
                      <ul>
                        <li><Link legacyBehavior href="/author-details"><a>By Jace Emmett</a></Link></li>
                        <li><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></li>
                      </ul>
                      <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Sed lectus duitotan tristiqu eitati eleifend blandit necol.</a></Link></h5>
                    </div>
                  </div>
                  <div className="blog-grid-4 style-two">
                   <Link legacyBehavior href="/post-format-no-sidebar-02">
                        <a  className="image">
                            <img src="assets/images/blog-grid/feature1-3.jpg" alt="image" />
                        </a>
                    </Link>
                    <div className="content">
                      <ul>
                        <li><Link legacyBehavior href="/author-details"><a>By Jace Emmett</a></Link></li>
                        <li><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></li>
                      </ul>
                      <h5><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Sed lectus duitotan tristiqu eitati eleifend blandit necol.</a></Link></h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default FeaturesPost
