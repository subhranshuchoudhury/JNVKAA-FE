import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { GLOBAL_URL, getTeachersProfiles, searchAlumniByParameter } from '@/utils/fetch';
import toast from 'react-hot-toast';
import { ThemeContext } from '@/components/ThemeContext';
function TeachersPage() {


    const { theme } = useContext(ThemeContext);

    // const searchAlumni = async (value) => {

    //     let finalValue = value;
    //     setLoading(true);
    //     if (SearchParameter === "bloodgroup") {
    //         if (finalValue.includes("+")) {
    //             finalValue = finalValue.replace("+", "%2B")
    //         }
    //     }
    //     console.log(finalValue)
    //     const response = await searchAlumniByParameter(SearchParameter, finalValue)
    //     setLoading(false);


    //     if (response?.status !== 200) {
    //         toast.error("Something went wrong");
    //         return;
    //     }

    //     if (response?.status === 200) {
    //         if (response?.data?.length === 0) {
    //             toast.error("No data found");
    //             return;
    //         }
    //         setAlumnusData(response?.data);
    //         return;
    //     }



    // }

    // const [Skip, setSkip] = useState(0);
    const [AlumnusData, setAlumnusData] = useState([]);
    // const [SearchParameter, setSearchParameter] = useState("name");
    // const [searchValue, setSearchValue] = useState("");
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        getAlumnusAllData(0)
    }, [])

    const getAlumnusAllData = async (skip) => {

        const response = await getTeachersProfiles(skip);

        setLoading(false);

        if (response?.status !== 200) return; // error handle

        if (response?.data?.length === 0) {
            toast.error("No more data to load");
            return;
        }

        setAlumnusData([...AlumnusData, ...response?.data]);
        // setSkip(skip);
        console.log(response?.data);

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
                            <div className={`author-1 ${theme === "dark" ? "bg-dark" : ""}`}>
                                <div className="author-front">
                                    <span className="categoty">{alumnus?.profileDetails?.joiningYear}{alumnus?.profileDetails?.leavingYear && " - " + alumnus?.profileDetails?.leavingYear}</span>
                                    <Link legacyBehavior href={``}>
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
                                        <li><span className={`${theme === "dark" ? "text-light" : ""}`}>Mobile</span><span className={`${theme === "dark" ? "text-light" : ""}`} style={!alumnus?.mobile ? {
                                            filter: "blur(4px)"
                                        } : {
                                            filter: "blur(0px)"
                                        }}>{alumnus?.mobile || "1234567890"}</span></li>
                                        <li><span className={`${theme === "dark" ? "text-light" : ""}`}>Designation</span><span className={`${theme === "dark" ? "text-light" : ""}`}>{alumnus?.profileDetails?.designation}</span></li>
                                    </ul>
                                </div>
                                <div className={`author-back ${theme === "dark" ? "bg-dark" : ""}`}>
                                    <ul className="social-list">

                                        {
                                            alumnus?.socials?.map((social, index) => {
                                                return <li key={index}>
                                                    <a href={social?.link} className={`${theme === "dark" ? "text-light text-hover" : ""}`}><span className={`${theme === "dark" ? "text-light" : ""}`}><i className={social?.icon} />{social?.name}</span><span><strong className={`${theme === "dark" ? "text-light" : ""}`}>{social?.count}</strong>
                                                        &nbsp;</span></a>
                                                </li>
                                            })
                                        }


                                    </ul>
                                    {
                                        alumnus?.mobile ? <Link legacyBehavior href={``}>
                                            <ul>

                                                <li className={`${theme === "dark" ? "text-light" : ""}`}><span>Joining Year: </span><span className={`text-${theme === "dark" ? "light" : "primary"}`}>{alumnus?.profileDetails?.joiningYear}</span></li>
                                                <li className={`${theme === "dark" ? "text-light" : ""}`}><span>Leaving Year: </span><span className={`text-${theme === "dark" ? "light" : "primary"}`}>{alumnus?.profileDetails?.leavingYear || "N/A"}</span></li>
                                            </ul>
                                        </Link> : <Link legacyBehavior href="/membership/offer/free-trials"><a className={`eg-btn arrow-btn four ${theme === "dark" ? "text-light" : ""}`}>Activate Membership<i className="bi bi-arrow-right" /></a></Link>
                                    }

                                </div>
                            </div>
                        </div>)
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

export default TeachersPage
