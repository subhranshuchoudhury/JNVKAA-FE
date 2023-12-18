import Link from 'next/link'
import React from 'react'
import officialData from "../data/officials/officials.json"
function Officials() {

    const searchAlumni = (e) => {
        e.preventDefault();
        console.log(e.target.value);
    }
    return (
        <section className="author-section pt-100 pb-100">
            <div className="container">
                {/* <div className="row gy-2 mb-60">

                    <div className="col-lg-4">
                        <div className="search-box" style={{
                            borderRadius: "5px",
                        }}>
                            <div className='category-wrap'>

                                <form>
                                    <select>
                                        <option>All Category</option>
                                        <option>Name</option>
                                        <option>Batch</option>
                                        <option>Location</option>
                                        <option>Blood Group</option>
                                    </select>
                                    <button onClick={(e) => e.preventDefault()}><i className="bi bi-funnel-fill" /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="search-box" style={{
                            backgroundColor: "#EEEEEE",
                            borderRadius: "23px",
                        }} >
                            <form>
                                <input type="text" placeholder="Search here..." />
                                <button><i className="bi bi-search" /></button>
                            </form>
                        </div>
                    </div>
                </div> */}
                <div className="row g-4 mb-60">

                    {
                        officialData.map((alumnus, index) => <div className="col-lg-3 col-md-6 col-sm-6">
                            <div key={index} className="author-1">
                                <div className="author-front">
                                    <span className="categoty">{alumnus?.position}</span>
                                    {/* <Link legacyBehavior href="/author-details"> */}
                                    <a className="image">
                                        <img src={"https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?rs=1&pid=ImgDetMain"} alt="image" />
                                    </a>
                                    {/* </Link> */}
                                    <h4>{alumnus?.name}</h4>
                                    <ul>
                                        <li><span>Mobile</span><span>{alumnus?.mobile}</span></li>
                                        {/* <li><span>Mail</span><span>{alumnus?.gmail}</span></li> */}
                                    </ul>
                                </div>
                                <div className="author-back">
                                    <ul className="social-list">

                                        {/* {
                                            alumnus?.socials?.map((social, index) => {
                                                return <li key={index}>
                                                    <a href={social?.link}><span><i className={social?.icon} />{social?.name}</span><span><strong>{social?.count}</strong>
                                                        &nbsp;</span></a>
                                                </li>
                                            })
                                        } */}

                                        <li>
                                            <a href={`mailto:${alumnus?.gmail}`}><span><i className={"bx bi-envelope"} />{alumnus?.gmail}</span><span><strong>Mail</strong>
                                                &nbsp;</span></a>
                                        </li>

                                        <li>
                                            <a href={`callto:${alumnus?.mobile}`}><span><i className={"bx bi-phone"} />{alumnus?.mobile}</span><span><strong>Call</strong>
                                                &nbsp;</span></a>
                                        </li>


                                    </ul>
                                    {/* <Link legacyBehavior href="/author-details"><a className=" eg-btn arrow-btn four">View Details<i className="bi bi-arrow-right" /></a></Link> */}
                                </div>
                            </div>
                        </div>)
                    }


                </div>
                {/* <div className="row text-center justify-content-center">
                    <div className="col-md-6">
                        <button className="eg-btn btn--primary btn--lg">Load more</button>
                    </div>
                </div> */}
            </div>
        </section>

    )
}

export default Officials
