import Link from 'next/link'
import React from 'react'
import alumnusData from "../data/alumnus/alumnus.json"
function Author() {
  return (
    <section className="author-section pt-100 pb-100">
      <div className="container">
        <div className="row gy-2 mb-60">
          <div className="">
            <div className="category-wrap">
              <form>
                <div className="form-inner">
                  <select>
                    <option>All Category</option>
                    <option>Name</option>
                    <option>Batch</option>
                    <option>Location</option>
                    <option>Blood Group</option>


                  </select>
                </div>
                {/* <div className="form-inner">
                  <select>
                    <option>Trending</option>
                    <option>Trending 01</option>
                    <option>Trending 02</option>
                    <option>Trending 03</option>
                  </select>
                </div> */}
                {/* <div className="form-inner">
                  <select>
                    <option>This Month</option>
                    <option>This Month 01</option>
                    <option>This Month 02</option>
                    <option>This Month 03</option>
                  </select>
                </div> */}
                <div className="col-lg-4">
                  <div className="search-box">
                    <form>
                      <input type="text" placeholder="Search here..." />
                      <button><i className="bi bi-search" /></button>
                    </form>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* <div className="col-lg-4">
            <div className="search-box">
              <form>
                <input type="text" placeholder="Search here..." />
                <button><i className="bi bi-search" /></button>
              </form>
            </div>
          </div> */}
        </div>
        <div className="row g-4 mb-60">

          {
            alumnusData.map((alumnus, index) => <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="author-1">
                <div className="author-front">
                  <span className="categoty">{alumnus?.batch}</span>
                  <Link legacyBehavior href="/author-details">
                    <a className="image">
                      <img src={alumnus?.image} alt="image" />
                    </a>
                  </Link>
                  <h4>{alumnus?.name}</h4>
                  <ul>
                    <li><span>Mobile</span><span>{alumnus?.mobile}</span></li>
                    <li><span>School No</span><span>{alumnus?.schoolno}</span></li>
                  </ul>
                </div>
                <div className="author-back">
                  <ul className="social-list">

                    {
                      alumnus?.socials?.map((social, index) => {
                        return <li key={index}>
                          <a href={social?.link}><span><i className={social?.icon} />{social?.name}</span><span><strong>{social?.count}</strong>
                            &nbsp;</span></a>
                        </li>
                      })
                    }


                  </ul>
                  <Link legacyBehavior href="/author-details"><a className=" eg-btn arrow-btn four">View Details<i className="bi bi-arrow-right" /></a></Link>
                </div>
              </div>
            </div>)
          }


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