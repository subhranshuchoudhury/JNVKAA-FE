import Link from 'next/link'
import React, { useContext } from 'react'
import officialData from "../data/officials/officials.json"
import Image from 'next/image';
import { ThemeContext } from '@/components/ThemeContext';
function Officials() {

    const { theme } = useContext(ThemeContext);

    const searchAlumni = (e) => {
        e.preventDefault();
        console.log(e.target.value);
    }
    return (
        <section className="author-section pt-100 pb-100">
            <div className="container">
                <div className="row g-4 mb-60">

                    {
                        officialData.map((alumnus, index) => <div className="col-lg-3 col-md-6 col-sm-6">
                            <div key={index} className={`author-1 ${theme === "dark" ? "bg-dark" : ""}`}>
                                <div className="author-front">
                                    <span className="categoty">{alumnus?.position}</span>
                                    {/* <Link legacyBehavior href="/author-details"> */}
                                    <a className="image">
                                        <Image width={85} height={85} style={{
                                            objectPosition: 'center'
                                        }} src={alumnus?.image} alt="profile image" />
                                    </a>
                                    {/* </Link> */}
                                    <h4 className={`${theme === "dark" ? "text-light" : ""}`}>{alumnus?.name}</h4>
                                    <ul>
                                        <li className={`${theme === "dark" ? "text-light" : ""}`}><span className={`${theme === "dark" ? "text-light" : ""}`}>Mobile</span><span>{alumnus?.mobile}</span></li>
                                        {/* <li><span>Mail</span><span>{alumnus?.gmail}</span></li> */}
                                    </ul>
                                </div>
                                <div className={`author-back ${theme === "dark" ? "bg-dark" : ""}`}>
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
                                            <a href={`mailto:${alumnus?.gmail}`}><span className={`${theme === "dark" ? "text-light" : ""}`}><i className={"bx bi-envelope"} />{alumnus?.gmail}</span><span><strong className={`${theme === "dark" ? "text-light" : ""}`}>Mail</strong>
                                                &nbsp;</span></a>
                                        </li>

                                        <li>
                                            <a href={`callto:${alumnus?.mobile}`}><span className={`${theme === "dark" ? "text-light" : ""}`}><i className={"bx bi-phone"} />{alumnus?.mobile}</span><span><strong className={`${theme === "dark" ? "text-light" : ""}`}>Call</strong>
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
