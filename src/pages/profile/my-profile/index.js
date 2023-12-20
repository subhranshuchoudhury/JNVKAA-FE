import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { GLOBAL_URL, getAlumniProfileByID } from '@/utils/fetch';
import Link from 'next/link';
export default function page() {

    const router = useRouter()
    const [Loading, setLoading] = useState(true);
    const [MemberData, setMemberData] = useState([]);
    const [toggleMap, settoggleMap] = useState(false)
    const ID = router.query.id;
    useEffect(() => {
        if (ID) {
            loadMemberData(ID);
        }
    }, [ID])

    const loadMemberData = async (ID) => {

        const res = await getAlumniProfileByID(ID);
        if (res.status === 200) {

            setMemberData(res?.data);
        }
        console.log(res);
        setLoading(false);
    }

    return <section className="author-section pt-100 pb-100">

        {
            Loading && <div class="text-center"><div class="spinner-border text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
                <span class="visually-hidden">Loading...</span>
            </div></div>
        }

        {
            !Loading && MemberData && <div className="container">
                <div className="row gy-5">
                    <div className="col-lg-8">
                        <div className="author-details">
                            <img
                                className="image"
                                style={
                                    MemberData?.mobile ? { filter: "blur(0px)" } : { filter: "blur(5px)" }
                                }
                                src={`${GLOBAL_URL + "/api/user/post/image/" + MemberData?.profileDetails?.profileImage}` ?? "https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg"}
                                alt="image"

                            />
                            <div className="author-info">
                                <h2>{MemberData?.name}</h2>
                                <ul className="category">
                                    <li>
                                        <p>Batch: {MemberData.profileDetails?.graduationYear}</p>
                                    </li>
                                    <li>
                                        <p>School No: {MemberData.profileDetails?.schoolNo}</p>
                                    </li>

                                </ul>
                                <p>
                                    {MemberData?.profileDetails?.about}
                                </p>


                                <ul className="meta-list" style={MemberData?.mobile ? { filter: "blur(0px)" } : {
                                    filter: "blur(4px)"
                                }}>
                                    {
                                        MemberData?.profileDetails.location && <li>
                                            <img src="/assets/images/icons/view.svg" alt="image" />
                                            Location:<span onClick={() => settoggleMap(!toggleMap)} className='text-primary'>View</span>
                                        </li>
                                    }
                                    <li>
                                        <img src="/assets/images/icons/view.svg" alt="image" />
                                        Mobile: <span>{MemberData?.mobile || "123456789"}</span>
                                    </li>

                                    <li>
                                        <img src="/assets/images/icons/view.svg" alt="image" />
                                        Email: <span>{MemberData?.profileDetails?.mailId || "..."}</span>
                                    </li>

                                    {
                                        MemberData?.profileDetails?.dob && <li>
                                            <img src="/assets/images/icons/view.svg" alt="image" />
                                            DOB: <span>{new Date(MemberData?.profileDetails?.dob).toLocaleDateString()}</span>
                                        </li>
                                    }


                                    <li>
                                        <img src="/assets/images/icons/view.svg" alt="image" />
                                        Profession: <span>{MemberData?.profileDetails?.profession || "..."}</span>
                                    </li>
                                    <li>
                                        <img src="/assets/images/icons/view.svg" alt="image" />
                                        Blood Group: <span>{MemberData?.profileDetails?.bloodGroup || "..."}</span>
                                    </li>

                                </ul>


                            </div>
                        </div>
                        {

                            MemberData?.profileDetails?.location && toggleMap && <>
                                <h2>Last Location</h2>
                                <iframe src={`https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d17807.039960760754!2d${MemberData?.profileDetails?.location?.split("-")?.[1]}!3d${MemberData?.profileDetails?.location?.split("-")?.[0]}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1702899473454!5m2!1sen!2sin`} width="400" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </>
                        }

                        <p>This will add in future updates.</p>
                        {/* {authorDetailsData.map((item) => {
                            const {
                                id,
                                date_day,
                                date_month,
                                category,
                                author_name,
                                title,
                                read_time,
                                img,
                            } = item;
                            return (
                                <div key={id} className="blog-list-2">
                                    <div className="date">
                                        <h3>{date_day}</h3>
                                        <p>{date_month}</p>
                                    </div>
                                    <div className="content">
                                        <ul>
                                            <li>
                                                <Link legacyBehavior href="/author-details">
                                                    <a>By &nbsp;{author_name}</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="/blog-classic">
                                                    <a>{category}</a>
                                                </Link>
                                            </li>
                                        </ul>
                                        <h4>
                                            <Link legacyBehavior href="/">
                                                <a>{title}</a>
                                            </Link>
                                        </h4>
                                        <div className="bottom-area">
                                            <Link legacyBehavior href="/">
                                                <a className=" eg-btn arrow-btn">
                                                    View Details
                                                    <i className="bi bi-arrow-right" />
                                                </a>
                                            </Link>
                                            <span>
                                                {" "}
                                                <svg
                                                    width={9}
                                                    height={12}
                                                    viewBox="0 0 9 12"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                                                </svg>
                                                {read_time}
                                            </span>
                                        </div>
                                    </div>
                                    <Link legacyBehavior href="/">
                                        <a className="image">
                                            <img src={img} alt="imgs" />
                                        </a>
                                    </Link>
                                </div>
                            );
                        })} */}
                        {/* pagiantion */}
                        {/* <nav className="mt-60">
                            <ul className="pagination-list">
                                <li>
                                    <a href="#">
                                        <i className="bi bi-chevron-left" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">1</a>
                                </li>
                                <li>
                                    <a href="#" className="active">
                                        2
                                    </a>
                                </li>
                                <li>
                                    <a href="#">3</a>
                                </li>
                                <li>
                                    <span />
                                </li>
                                <li>
                                    <a href="#">6</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="bi bi-chevron-right" />
                                    </a>
                                </li>
                            </ul>
                        </nav> */}
                    </div>
                    <div className="col-lg-4">
                        <div className="post-side-bar-1">
                            {/* <div className="sidebar-widget-1">
                                <h6 className="title">Quick Search</h6>
                                <div className="search-box-2">
                                    <form>
                                        <input type="text" placeholder="Search here..." />
                                        <button>
                                            <i className="bi bi-search" />
                                        </button>
                                    </form>
                                </div>
                            </div> */}
                            {/* <div className="sidebar-widget-1"> 
                                 <h6 className="title">Editor Choice</h6>
                                <div className="blog-list-1 mb-25">
                                    <Link legacyBehavior href="/">
                                        <a className="image">
                                            <img
                                                src="/assets/images/blog-list/blog-list1-3.jpg"
                                                alt="image"
                                            />
                                        </a>
                                    </Link>
                                    <div className="content">
                                        <h6>
                                            <Link legacyBehavior href="/">
                                                <a>gravida orci sed jaritob laoreet tellus.</a>
                                            </Link>
                                        </h6>
                                        <ul>
                                            <li>
                                                <Link legacyBehavior href="/blog-standard">
                                                    <a>Nov 10, 2022</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="/blog-standard">
                                                    <a>520 Comment</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="blog-list-1 mb-25">
                                    <Link legacyBehavior href="/">
                                        <a className="image">
                                            <img
                                                src="/assets/images/blog-list/blog-list1-4.jpg"
                                                alt="image"
                                            />
                                        </a>
                                    </Link>
                                    <div className="content">
                                        <h6>
                                            <Link legacyBehavior href="/">
                                                <a>laoreet tellus Morbi uto dolor mattis.</a>
                                            </Link>
                                        </h6>
                                        <ul>
                                            <li>
                                                <Link legacyBehavior href="/blog-standard">
                                                    <a>Nov 01, 2022</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="/blog-standard">
                                                    <a>854 Comment</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="blog-list-1">
                                    <Link legacyBehavior href="/">
                                        <a className="image">
                                            <img
                                                src="/assets/images/blog-list/blog-list1-5.jpg"
                                                alt="image"
                                            />
                                        </a>
                                    </Link>
                                    <div className="content">
                                        <h6>
                                            <Link legacyBehavior href="/">
                                                <a>Nam ullamcorper risuso non commodo.</a>
                                            </Link>
                                        </h6>
                                        <ul>
                                            <li>
                                                <Link legacyBehavior href="/blog-standard">
                                                    <a>Nov 11, 2022</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="/blog-standard">
                                                    <a>87 Comment</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            {/* </div> */}
                            <div className="sidebar-widget-1">
                                <h6 className="title">Stay Connected</h6>
                                <ul style={MemberData?.mobile ? { filter: "blur(0px)" } : {
                                    filter: "blur(3px)"
                                }} className="social-3">
                                    <li >
                                        <a href={MemberData?.profileDetails?.facebook || ""}>
                                            <span>
                                                <i className="bx bxl-facebook" />
                                                Facebook
                                            </span>
                                            <span>
                                                <strong>Add Friend</strong>

                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={MemberData?.profileDetails?.linkedin || ""}>
                                            <span>
                                                <i className="bx bxl-linkedin" />
                                                &nbsp;LinkedIn
                                            </span>
                                            <span>
                                                <strong>Follow</strong>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <span>
                                                <i className="bx bxl-whatsapp" />
                                                &nbsp;Whatsapp
                                            </span>
                                            <span>
                                                <strong>{MemberData?.profileDetails?.whatsappNo || "N/A"}</strong>

                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/">
                                            <span>
                                                <i className="bx bxl-instagram" />
                                                Instagram
                                            </span>
                                            <span>
                                                <strong>Follow</strong>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="sidebar-shop-card"
                                style={{
                                    backgroundImage: 'url("https://img.freepik.com/free-vector/internet-forum-vector-illustration-communication-concept_6280-512.jpg?w=740")',
                                }}
                            >
                                <span>Early Bird</span>
                                <h3 style={{ color: 'black' }}>Buy Membership </h3>
                                <a href="#" className="shop-btn">
                                    Buy Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }

    </section>

}