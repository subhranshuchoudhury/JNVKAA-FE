import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { GLOBAL_URL, searchAlumniByParameter } from '@/utils/fetch';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import { ThemeContext, darkTheme } from '@/components/ThemeContext';
function Author() {
    const router = useRouter();
    const { theme } = useContext(ThemeContext);
    const searchAlumni = async (value) => {



        let finalValue = value;
        setLoading(true);
        // if (SearchParameter === "bloodgroup") {
        //     if (finalValue.includes("+")) {
        //         finalValue = finalValue.replace("+", "%2B")
        //     }
        // }
        console.log(finalValue)
        const response = await searchAlumniByParameter("name", finalValue)
        setLoading(false);


        if (response?.status !== 200) {
            toast.error("Something went wrong");

        }

        if (response?.status === 200) {
            setAlumnusData(response?.data);

        }




        setLoading(false);

    }

    // const [Skip, setSkip] = useState(0);
    const [AlumnusData, setAlumnusData] = useState([]);
    const [Loading, setLoading] = useState(true)
    // const [SearchParameter, setSearchParameter] = useState("name");
    // const [searchValue, setSearchValue] = useState("");
    useEffect(() => {
        // getAlumnusAllData(0)
        if (router.query?.name) {
            setLoading(true);
            // setSearchValue(router.query?.name)
            searchAlumni(router.query?.name)
            console.log(router.query?.name)
        }
    }, [router.query?.name])



    // const getAlumnusAllData = async (skip) => {

    //     const response = await getAlumniProfiles(skip);

    //     setLoading(false);

    //     if (response?.status !== 200) return; // error handle

    //     if (response?.data?.length === 0) {
    //         toast.error("No more data to load");
    //         return;
    //     }

    //     setAlumnusData([...AlumnusData, ...response?.data]);
    //     setSkip(skip);
    //     console.log(response?.data);

    // }
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
                                    <select defaultValue={SearchParameter} onChange={(e) => {
                                        console.log(e.target.value);
                                        setSearchParameter(e.target.value?.toLocaleLowerCase());
                                    }}>
                                        <option value={"name"}>Name</option>
                                        <option value={"graduationyear"}>Batch</option>
                                        <option value={"schoolno"}>School No</option>
                                        <option value={"address"}>Address</option>
                                        <option value={"bloodgroup"}>Blood Group</option>
                                    </select>
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
                                <input name='searchValue' onChange={(e) => setSearchValue(e.target.value)} value={searchValue || ""} type="text" placeholder={`Search alumni by ${SearchParameter}...`} />
                                <button onClick={(e) => {
                                    e.preventDefault();
                                    searchAlumni(searchValue);
                                }}><i className="bi bi-search" /></button>
                            </form>
                        </div>
                    </div>
                </div> */}
                <div className="row g-4 mb-60">
                    {
                        Loading && <div className="text-center">
                            <div className="spinner-border" style={{ width: "3rem", height: " 3rem" }} role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    }
                    {
                        AlumnusData?.length > 0 && AlumnusData.map((alumnus, index) => <div key={index} className="col-lg-3 col-md-6 col-sm-6">
                            <div className={`author-1 ${theme === "dark" ? darkTheme : ""}`}>
                                <div className="author-front">
                                    <span className="categoty">{alumnus?.profileDetails?.graduationYear}</span>
                                    <Link legacyBehavior href={`/profile/member/${alumnus?._id}`}>
                                        <a className="image">
                                            {
                                                alumnus?.mobile ? <img src={alumnus?.profileDetails?.profileImage ? `${GLOBAL_URL + "/api/user/post/image/" + alumnus?.profileDetails?.profileImage}` : "/assets/images/dummy/avatar/user.jpg"} alt="image" /> : <img style={{
                                                    filter: "blur(5px)"
                                                }} src={alumnus?.profileDetails?.profileImage ? `${GLOBAL_URL + "/api/user/post/image/" + alumnus?.profileDetails?.profileImage}` : "/assets/images/dummy/avatar/user.jpg"} alt="image" />
                                            }

                                        </a>
                                    </Link>
                                    <h4 className={`${theme === "dark" ? "text-light" : ""}`}>{alumnus?.name}</h4>
                                    <ul>
                                        <li><span className={`${theme === "dark" ? "text-light" : ""}`}>Mobile</span><span  className={`${theme === "dark" ? "text-light" : ""}`} style={!alumnus?.mobile ? {
                                            filter: "blur(4px)"
                                        } : {
                                            filter: "blur(0px)"
                                        }}>{alumnus?.mobile || "1234567890"}</span></li>
                                        <li><span className={`${theme === "dark" ? "text-light" : ""}`}>School No</span><span className={`${theme === "dark" ? "text-light" : ""}`}>{alumnus?.profileDetails?.schoolNo}</span></li>
                                    </ul>
                                </div>
                                <div className={`author-back ${theme === "dark" ? darkTheme : ""}`}>
                                    <ul className="social-list">

                                        {
                                            alumnus?.socials?.map((social, index) => {
                                                return <li key={index}>
                                                    <a href={social?.link} className={`${theme === "dark" ? "text-light text-hover" : ""}`}><span><i className={social?.icon} />{social?.name}</span><span><strong>{social?.count}</strong>
                                                        &nbsp;</span></a>
                                                </li>
                                            })
                                        }


                                    </ul>
                                    {
                                        alumnus?.mobile ? <Link legacyBehavior href={`/profile/member/${alumnus?._id}`}><a className={`eg-btn arrow-btn four ${theme === "dark" ? "text-light" : ""}`}>View Details<i className="bi bi-arrow-right" /></a></Link> : <Link legacyBehavior href="/membership/offer/free-trials"><a className="eg-btn arrow-btn four">Activate Membership<i className="bi bi-arrow-right" /></a></Link>
                                    }

                                </div>
                            </div>
                        </div>)
                    }

                    {
                        !Loading && AlumnusData?.length === 0 && <div className="text-center">
                            <h4 className={`${theme === "dark" ? "text-light" : ""}`}>No Alumni found for "{router?.query?.name}"</h4>
                        </div>
                    }


                </div>
                {/* <div className="row text-center justify-content-center">
                    <div className="col-md-6">
                        <button onClick={() => getAlumnusAllData(Skip + 16)} className="eg-btn btn--primary btn--lg">

                            {
                                Loading ? <><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    Loading...</> : "Load More"
                            }
                        </button>
                    </div>
                </div> */}
            </div>
        </section>

    )
}

export default Author
