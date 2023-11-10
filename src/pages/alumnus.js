import Link from 'next/link'
import React from 'react'

function Author() {
  return (
    <section className="author-section pt-100 pb-100">
    <div className="container">
      <div className="row gy-2 mb-60">
        <div className="col-lg-8">
          <div className="category-wrap">
            <form>
              <div className="form-inner">
                <select>
                  <option>All Category</option>
                  <option>Sports</option>
                  <option>Lifestyle</option>
                  <option>Travel</option>
                  <option>Fashion</option>
                  <option>World</option>
                </select>
              </div>
              <div className="form-inner">
                <select>
                  <option>Trending</option>
                  <option>Trending 01</option>
                  <option>Trending 02</option>
                  <option>Trending 03</option>
                </select>
              </div>
              <div className="form-inner">
                <select>
                  <option>This Month</option>
                  <option>This Month 01</option>
                  <option>This Month 02</option>
                  <option>This Month 03</option>
                </select>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="search-box">
            <form> 
              <input type="text" placeholder="Search here..." />
              <button><i className="bi bi-search" /></button>
            </form>
          </div>
        </div>
      </div>
      <div className="row g-4 mb-60">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="author-1">
            <div className="author-front">
              <span className="categoty">Life Style</span>
              <Link legacyBehavior href="/author-details">
                <a  className="image">
                <img src="assets/images/authors/author1-1.jpg" alt="image" />
                </a>
              </Link>
              <h4>Mateo Danienobi</h4>
              <ul>
                <li><span>Post</span><span>50</span></li>
                <li><span>Post Views</span><span>1,056</span></li>
                <li><span>Like</span><span>550</span></li>
              </ul>
            </div>
            <div className="author-back">
              <ul className="social-list">
                <li>
                  <a href="https://www.facebook.com/"><span><i className="bx bxl-facebook" />Facebook</span><span><strong>3.5K</strong>
                     &nbsp; Like</span></a>
                </li>
                <li>
                  <a href="https://www.twitter.com/"><span><i className="bx bxl-twitter" />Twitter</span><span><strong>60k</strong>
                  &nbsp; Follower</span></a>
                </li>
                <li>
                  <a href="https://www.pinterest.com/"><span><i className="bx bxl-pinterest-alt" />Pinterest</span><span><strong>25k</strong>
                  &nbsp;Follower</span></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/"><span><i className="bx bxl-instagram" />Instagram</span><span><strong>75k</strong>
                  &nbsp;Follower</span></a>
                </li>
              </ul>
              <Link legacyBehavior href="/author-details"><a  className=" eg-btn arrow-btn four">View Details<i className="bi bi-arrow-right" /></a></Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="author-1">
            <div className="author-front">
              <span className="categoty">Sports</span>
              <Link legacyBehavior href="/author-details">
                <a  className="image">
                <img src="assets/images/authors/author1-2.jpg" alt="image" />
                </a>
              </Link>
              <h4>Cristiano Ronaldo</h4>
              <ul>
                <li><span>Post</span><span>50</span></li>
                <li><span>Post Views</span><span>1,056</span></li>
                <li><span>Like</span><span>550</span></li>
              </ul>
            </div>
            <div className="author-back">
              <ul className="social-list">
                <li>
                  <a href="https://www.facebook.com/"><span><i className="bx bxl-facebook" />Facebook</span><span><strong>3.5K</strong>
                      &nbsp;Like</span></a>
                </li>
                <li>
                  <a href="https://www.twitter.com/"><span><i className="bx bxl-twitter" />Twitter</span><span><strong>60k</strong>
                      &nbsp;Follower</span></a>
                </li>
                <li>
                  <a href="https://www.pinterest.com/"><span><i className="bx bxl-pinterest-alt" />Pinterest</span><span><strong>25k</strong>
                     &nbsp; Follower</span></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/"><span><i className="bx bxl-instagram" />Instagram</span><span><strong>75k</strong>
                      &nbsp;Follower</span></a>
                </li>
              </ul>
              <Link legacyBehavior href="/author-details"><a  className=" eg-btn arrow-btn four">View Details<i className="bi bi-arrow-right" /></a></Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="author-1">
            <div className="author-front">
              <span className="categoty">Fashion</span>
              <Link legacyBehavior href="/author-details">
                <a  className="image">
                <img src="assets/images/authors/author1-3.jpg" alt="image" />
                </a>
              </Link>
              <h4>Archer Enzona</h4>
              <ul>
                <li><span>Post</span><span>50</span></li>
                <li><span>Post Views</span><span>1,056</span></li>
                <li><span>Like</span><span>550</span></li>
              </ul>
            </div>
            <div className="author-back">
              <ul className="social-list">
                <li>
                  <a href="https://www.facebook.com/"><span><i className="bx bxl-facebook" />Facebook</span><span><strong>3.5K</strong>
                      &nbsp;Like</span></a>
                </li>
                <li>
                  <a href="https://www.twitter.com/"><span><i className="bx bxl-twitter" />Twitter</span><span><strong>60k</strong>
                      &nbsp;Follower</span></a>
                </li>
                <li>
                  <a href="https://www.pinterest.com/"><span><i className="bx bxl-pinterest-alt" />Pinterest</span><span><strong>25k</strong>
                      &nbsp;Follower</span></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/"><span><i className="bx bxl-instagram" />Instagram</span><span><strong>75k</strong>
                      &nbsp;Follower</span></a>
                </li>
              </ul>
              <Link legacyBehavior href="/author-details"><a  className=" eg-btn arrow-btn four">View Details<i className="bi bi-arrow-right" /></a></Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="author-1">
            <div className="author-front">
              <span className="categoty">Creative</span>
              <Link legacyBehavior href="/author-details">
                <a  className="image">
                <img src="assets/images/authors/author1-7.jpg" alt="image" />
                </a>
              </Link>
              <h4>Carlos Ryker</h4>
              <ul>
                <li><span>Post</span><span>50</span></li>
                <li><span>Post Views</span><span>1,056</span></li>
                <li><span>Like</span><span>550</span></li>
              </ul>
            </div>
            <div className="author-back">
              <ul className="social-list">
                <li>
                  <a href="https://www.facebook.com/"><span><i className="bx bxl-facebook" />Facebook</span><span><strong>3.5K</strong>
                     &nbsp; Like</span></a>
                </li>
                <li>
                  <a href="https://www.twitter.com/"><span><i className="bx bxl-twitter" />Twitter</span><span><strong>60k</strong>
                      &nbsp;Follower</span></a>
                </li>
                <li>
                  <a href="https://www.pinterest.com/"><span><i className="bx bxl-pinterest-alt" />Pinterest</span><span><strong>25k</strong>
                      &nbsp;Follower</span></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/"><span><i className="bx bxl-instagram" />Instagram</span><span><strong>75k</strong>
                      &nbsp;Follower</span></a>
                </li>
              </ul>
              <Link legacyBehavior href="/author-details"><a  className=" eg-btn arrow-btn four">View Details<i className="bi bi-arrow-right" /></a></Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="author-1">
            <div className="author-front">
              <span className="categoty">Fitness</span>
              <Link legacyBehavior href="/author-details">
                <a  className="image">
                <img src="assets/images/authors/author1-8.jpg" alt="image" />
                </a>
              </Link>
              <h4>Tobias Clayton</h4>
              <ul>
                <li><span>Post</span><span>50</span></li>
                <li><span>Post Views</span><span>1,056</span></li>
                <li><span>Like</span><span>550</span></li>
              </ul>
            </div>
            <div className="author-back">
              <ul className="social-list">
                <li>
                  <a href="https://www.facebook.com/"><span><i className="bx bxl-facebook" />Facebook</span><span><strong>3.5K</strong>
                      &nbsp;Like</span></a>
                </li>
                <li>
                  <a href="https://www.twitter.com/"><span><i className="bx bxl-twitter" />Twitter</span><span><strong>60k</strong>
                      &nbsp;Follower</span></a>
                </li>
                <li>
                  <a href="https://www.pinterest.com/"><span><i className="bx bxl-pinterest-alt" />Pinterest</span><span><strong>25k</strong>
                      &nbsp;Follower</span></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/"><span><i className="bx bxl-instagram" />Instagram</span><span><strong>75k</strong>
                      &nbsp;Follower</span></a>
                </li>
              </ul>
              <Link legacyBehavior href="/author-details"><a  className=" eg-btn arrow-btn four">View Details<i className="bi bi-arrow-right" /></a></Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="author-1">
            <div className="author-front">
              <span className="categoty">Travel</span>
              <Link legacyBehavior href="/author-details">
                <a  className="image">
                <img src="assets/images/authors/author1-9.jpg" alt="image" />
                </a>
              </Link>
              <h4>Emerson Damien</h4>
              <ul>
                <li><span>Post</span><span>50</span></li>
                <li><span>Post Views</span><span>1,056</span></li>
                <li><span>Like</span><span>550</span></li>
              </ul>
            </div>
            <div className="author-back">
              <ul className="social-list">
                <li>
                  <a href="https://www.facebook.com/"><span><i className="bx bxl-facebook" />Facebook</span><span><strong>3.5K</strong>
                      &nbsp;Like</span></a>
                </li>
                <li>
                  <a href="https://www.twitter.com/"><span><i className="bx bxl-twitter" />Twitter</span><span><strong>60k</strong>
                      &nbsp;Follower</span></a>
                </li>
                <li>
                  <a href="https://www.pinterest.com/"><span><i className="bx bxl-pinterest-alt" />Pinterest</span><span><strong>25k</strong>
                      &nbsp;Follower</span></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/"><span><i className="bx bxl-instagram" />Instagram</span><span><strong>75k</strong>
                      &nbsp;Follower</span></a>
                </li>
              </ul>
              <Link legacyBehavior href="/author-details"><a  className=" eg-btn arrow-btn four">View Details<i className="bi bi-arrow-right" /></a></Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="author-1">
            <div className="author-front">
              <span className="categoty">Music</span>
              <Link legacyBehavior href="/author-details">
                <a  className="image">
                <img src="assets/images/authors/author1-10.jpg" alt="image" />
                </a>
              </Link>
              <h4>Zayn Malcolm</h4>
              <ul>
                <li><span>Post</span><span>50</span></li>
                <li><span>Post Views</span><span>1,056</span></li>
                <li><span>Like</span><span>550</span></li>
              </ul>
            </div>
            <div className="author-back">
              <ul className="social-list">
                <li>
                  <a href="https://www.facebook.com/"><span><i className="bx bxl-facebook" />Facebook</span><span><strong>3.5K</strong>
                      &nbsp;Like</span></a>
                </li>
                <li>
                  <a href="https://www.twitter.com/"><span><i className="bx bxl-twitter" />Twitter</span><span><strong>60k</strong>
                      &nbsp;Follower</span></a>
                </li>
                <li>
                  <a href="https://www.pinterest.com/"><span><i className="bx bxl-pinterest-alt" />Pinterest</span><span><strong>25k</strong>
                      &nbsp;Follower</span></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/"><span><i className="bx bxl-instagram" />Instagram</span><span><strong>75k</strong>
                      &nbsp;Follower</span></a>
                </li>
              </ul>
              <Link legacyBehavior href="/author-details"><a  className=" eg-btn arrow-btn four">View Details<i className="bi bi-arrow-right" /></a></Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="author-1">
            <div className="author-front">
              <span className="categoty">Gaming</span>
              <Link legacyBehavior href="/author-details">
                <a  className="image">
                <img src="assets/images/authors/author1-11.jpg" alt="image" />
                </a>
              </Link>
              <h4>Kayson Bodhi</h4>
              <ul>
                <li><span>Post</span><span>50</span></li>
                <li><span>Post Views</span><span>1,056</span></li>
                <li><span>Like</span><span>550</span></li>
              </ul>
            </div>
            <div className="author-back">
              <ul className="social-list">
                <li>
                  <a href="https://www.facebook.com/"><span><i className="bx bxl-facebook" />Facebook</span><span><strong>3.5K</strong>
                      &nbsp;Like</span></a>
                </li>
                <li>
                  <a href="https://www.twitter.com/"><span><i className="bx bxl-twitter" />Twitter</span><span><strong>60k</strong>
                      &nbsp;Follower</span></a>
                </li>
                <li>
                  <a href="https://www.pinterest.com/"><span><i className="bx bxl-pinterest-alt" />Pinterest</span><span><strong>25k</strong>
                      &nbsp;Follower</span></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/"><span><i className="bx bxl-instagram" />Instagram</span><span><strong>75k</strong>
                      &nbsp;Follower</span></a>
                </li>
              </ul>
              <Link legacyBehavior href="/author-details"><a  className=" eg-btn arrow-btn four">View Details<i className="bi bi-arrow-right" /></a></Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="author-1">
            <div className="author-front">
              <span className="categoty">Adventure</span>
              <Link legacyBehavior href="/author-details">
                <a  className="image">
                <img src="assets/images/authors/author1-12.jpg" alt="image" />
                </a>
              </Link>
              <h4>Cohen Brian</h4>
              <ul>
                <li><span>Post</span><span>50</span></li>
                <li><span>Post Views</span><span>1,056</span></li>
                <li><span>Like</span><span>550</span></li>
              </ul>
            </div>
            <div className="author-back">
              <ul className="social-list">
                <li>
                  <a href="https://www.facebook.com/"><span><i className="bx bxl-facebook" />Facebook</span><span><strong>3.5K</strong>
                      &nbsp;Like</span></a>
                </li>
                <li>
                  <a href="https://www.twitter.com/"><span><i className="bx bxl-twitter" />Twitter</span><span><strong>60k</strong>
                      &nbsp;Follower</span></a>
                </li>
                <li>
                  <a href="https://www.pinterest.com/"><span><i className="bx bxl-pinterest-alt" />Pinterest</span><span><strong>25k</strong>
                      &nbsp;Follower</span></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/"><span><i className="bx bxl-instagram" />Instagram</span><span><strong>75k</strong>
                      &nbsp;Follower</span></a>
                </li>
              </ul>
              <Link legacyBehavior href="/author-details"><a  className=" eg-btn arrow-btn four">View Details<i className="bi bi-arrow-right" /></a></Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="author-1">
            <div className="author-front">
              <span className="categoty">Men’s Style</span>
              <Link legacyBehavior href="/author-details">
                <a  className="image">
                <img src="assets/images/authors/author1-13.jpg" alt="image" />
                </a>
              </Link>
              <h4>Zander Khalil</h4>
              <ul>
                <li><span>Post</span><span>50</span></li>
                <li><span>Post Views</span><span>1,056</span></li>
                <li><span>Like</span><span>550</span></li>
              </ul>
            </div>
            <div className="author-back">
              <ul className="social-list">
                <li>
                  <a href="https://www.facebook.com/"><span><i className="bx bxl-facebook" />Facebook</span><span><strong>3.5K</strong>
                      &nbsp;Like</span></a>
                </li>
                <li>
                  <a href="https://www.twitter.com/"><span><i className="bx bxl-twitter" />Twitter</span><span><strong>60k</strong>
                      &nbsp;Follower</span></a>
                </li>
                <li>
                  <a href="https://www.pinterest.com/"><span><i className="bx bxl-pinterest-alt" />Pinterest</span><span><strong>25k</strong>
                      &nbsp;Follower</span></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/"><span><i className="bx bxl-instagram" />Instagram</span><span><strong>75k</strong>
                      &nbsp;Follower</span></a>
                </li>
              </ul>
              <Link legacyBehavior href="/author-details"><a  className=" eg-btn arrow-btn four">View Details<i className="bi bi-arrow-right" /></a></Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="author-1">
            <div className="author-front">
              <span className="categoty">Life Style</span>
              <Link legacyBehavior href="/author-details">
                <a  className="image">
                <img src="assets/images/authors/author1-14.jpg" alt="image" />
                </a>
              </Link>
              <h4>Daxton Derek</h4>
              <ul>
                <li><span>Post</span><span>50</span></li>
                <li><span>Post Views</span><span>1,056</span></li>
                <li><span>Like</span><span>550</span></li>
              </ul>
            </div>
            <div className="author-back">
              <ul className="social-list">
                <li>
                  <a href="https://www.facebook.com/"><span><i className="bx bxl-facebook" />Facebook</span><span><strong>3.5K</strong>
                      &nbsp;Like</span></a>
                </li>
                <li>
                  <a href="https://www.twitter.com/"><span><i className="bx bxl-twitter" />Twitter</span><span><strong>60k</strong>
                      &nbsp;Follower</span></a>
                </li>
                <li>
                  <a href="https://www.pinterest.com/"><span><i className="bx bxl-pinterest-alt" />Pinterest</span><span><strong>25k</strong>
                      &nbsp;Follower</span></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/"><span><i className="bx bxl-instagram" />Instagram</span><span><strong>75k</strong>
                      &nbsp;Follower</span></a>
                </li>
              </ul>
              <Link legacyBehavior href="/author-details"><a  className=" eg-btn arrow-btn four">View Details<i className="bi bi-arrow-right" /></a></Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="author-1">
            <div className="author-front">
              <span className="categoty">Creative</span>
              <Link legacyBehavior href="/author-details">
                <a  className="image">
                <img src="assets/images/authors/author1-15.jpg" alt="image" />
                </a>
              </Link>
              <h4>Martin Jensen</h4>
              <ul>
                <li><span>Post</span><span>50</span></li>
                <li><span>Post Views</span><span>1,056</span></li>
                <li><span>Like</span><span>550</span></li>
              </ul>
            </div>
            <div className="author-back">
              <ul className="social-list">
                <li>
                  <a href="https://www.facebook.com/"><span><i className="bx bxl-facebook" />Facebook</span><span><strong>3.5K</strong>
                      &nbsp;Like</span></a>
                </li>
                <li>
                  <a href="https://www.twitter.com/"><span><i className="bx bxl-twitter" />Twitter</span><span><strong>60k</strong>
                      &nbsp;Follower</span></a>
                </li>
                <li>
                  <a href="https://www.pinterest.com/"><span><i className="bx bxl-pinterest-alt" />Pinterest</span><span><strong>25k</strong>
                      &nbsp;Follower</span></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/"><span><i className="bx bxl-instagram" />Instagram</span><span><strong>75k</strong>
                      &nbsp;Follower</span></a>
                </li>
              </ul>
              <Link legacyBehavior href="/author-details"><a  className=" eg-btn arrow-btn four">View Details<i className="bi bi-arrow-right" /></a></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row text-center justify-content-center">
        <div className="col-md-6">
          <button className="eg-btn btn--primary btn--lg">Load More</button>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Author
