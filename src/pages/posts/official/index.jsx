import { GLOBAL_URL, getOfficialPosts } from "@/utils/fetch";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import socialHandles from '@/data/topbar/social.json'
import { ThemeContext } from "@/components/ThemeContext";
import Image from "next/image";
function OfficialPosts() {

    const [PostData, setPostData] = useState([])
    const [IsLoading, setIsLoading] = useState(true)
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        getPostsAsync();
    }, [])



    const getPostsAsync = async () => {
        setIsLoading(true);
        const response = await getOfficialPosts();

        if (response.status === 200) {
            console.log(response.data);
            setPostData(response.data);
        } else {
            toast.error("Error fetching posts");
        }

        setIsLoading(false);
    }
    return (
        <>
            <section className="blog-classic mt-50 pt-100 pb-100">
                <div className="container">
                    <div className="row gy-5">
                        <h6 className={`title ${theme === "dark" ? "text-light" : ""}`}>Official Posts</h6>

                        {
                            IsLoading && <div className="text-center">
                                <div className={`spinner-border text-${theme === "dark" ? "light" : "primary"}`} role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        }
                        <div className={`search-box-2 ${theme === "dark" ? "bg-light" : ""}`}>
                            <form>
                                <input type="text" placeholder="Search here..." />
                                <button><i className="bi bi-search" /></button>
                            </form>
                        </div>

                        <div className="col-lg-8">
                            <div className="row g-4">


                                {
                                    PostData && PostData.map((post, index) => {
                                        return <div key={post._id} className="col-md-6">
                                            <div className="blog-grid-1">
                                                {/* <span className="eg-badge badge--white">Plant</span> */}

                                                {
                                                    post?.imageLink ? <Link legacyBehavior href={`/posts/official/id/${post._id}`}>
                                                        <a className="image">
                                                            <Image src={`
                                                            ${post?.imageLink?.includes("http") 
                                                            || post?.imageLink?.includes("https")
                                                            ? post?.imageLink :
                                                            `${GLOBAL_URL}/api/user/post/image/${post?.imageLink}`}`} alt="image"
                                                                height={300}
                                                                width={300}
                                                                loading="lazy"
                                                             />
                                                        </a>
                                                    </Link> : <Link legacyBehavior href={`/posts/official/id/${post._id}`}>
                                                        <a className="image">
                                                            <Image src={`/assets/images/alumnus/no-image-post-alumni.jpg`} alt="image"
                                                            height={300}
                                                            width={300}
                                                            loading="lazy"
                                                            />
                                                        </a>
                                                    </Link>
                                                }

                                                <div className="content">
                                                    <ul>
                                                        <li><Link legacyBehavior href={`/profile/member/${post?.author?.id}`}><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>{post?.author?.name?.split(" ")?.[0]}</a></Link></li>
                                                        <li><Link legacyBehavior href="/blog-standard"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>{new Date(post?.date).toLocaleString()}</a></Link></li>
                                                        <li className={`${theme === "dark" ? "text-light" : ""}`}>{post?.views} Views</li>
                                                    </ul>
                                                    <h4><Link legacyBehavior href={`/posts/official/id/${post._id}`}><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>{post?.title}.</a></Link></h4>
                                                    <div className="bottom-area">
                                                        <Link legacyBehavior href={`/posts/official/id/${post._id}`}><a className={`eg-btn arrow-btn ${theme === "dark" ? "text-light" : ""}`}>View Details<i className="bi bi-arrow-right" /></a></Link>
                                                        <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                                                        </svg>2 Min Read</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }



                            </div>
                            {/* pagiantion */}
                            {/* <nav className="mt-60">
                                <ul className="pagination-list">
                                    <li><a href="#"><i className="bi bi-chevron-left" /></a></li>
                                    <li><a href="#">1</a></li>
                                    <li><a href="#" className="active">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#"><i className="bi bi-chevron-right" /></a></li>
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
                                            <button><i className="bi bi-search" /></button>
                                        </form>
                                    </div>
                                </div> */}
                                {/* categories */}
                                {/* <div className="sidebar-widget-1">
                                    <h6 className="title">Categories</h6>
                                    <ul className="category-list">

                                        {
                                            categoriesPost?.map((category, index) => {
                                                return <li key={index}><Link legacyBehavior href="/posts/official">
                                                    <a>
                                                        <span><svg width={13} height={13} viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12.8721 5.95703C12.8603 5.90264 12.82 5.85279 12.7443 5.846C11.9819 5.78708 11.2172 5.67832 10.4856 5.45173C9.91505 5.27726 9.3208 5.15037 9.18585 4.49326C9.07694 3.9653 9.4155 3.65034 9.71618 3.26741C9.72328 3.25834 9.72565 3.24701 9.72328 3.23795C9.77773 3.18584 9.70197 3.0884 9.63568 3.13145C9.00828 3.52345 8.35957 3.96984 7.66114 3.40336C7.20183 3.03175 7.12844 2.52873 6.98639 2.0121C6.81355 1.39125 6.75673 0.756796 6.66677 0.124611C6.6644 0.108749 6.65493 0.0974198 6.64309 0.0883562C6.64309 -0.0136091 6.47263 -0.036268 6.45132 0.0679632C6.27849 0.849697 6.13643 1.64049 5.89968 2.40637C5.69607 3.06121 5.48062 3.89506 4.59752 3.87014C3.89199 3.85201 3.6505 3.44415 3.16279 3.07481C3.0302 2.97511 2.85264 3.13372 2.97338 3.25608C3.30721 3.5937 3.61736 3.87693 3.65524 4.3709C3.68838 4.80595 3.42322 5.22741 3.05861 5.48799C2.63482 5.79162 1.93639 6.025 1.39896 5.96835C0.994105 5.9253 0.582151 5.92304 0.174931 5.96835C-0.052354 5.99328 -0.0641918 6.30824 0.174931 6.31504C0.598724 6.32637 1.02725 6.3377 1.45104 6.32637C1.80381 6.3173 2.34361 6.37395 2.6585 6.53936C2.73663 6.58015 2.81002 6.63453 2.87868 6.69118C3.15095 6.90417 3.41848 7.13982 3.57237 7.44345C4.05772 8.40646 3.22908 9.06357 2.64192 9.72295C2.53538 9.84304 2.71295 10.0175 2.82423 9.89742C3.14858 9.55074 3.47767 9.09076 3.94881 8.93668C4.43653 8.77807 5.00948 8.84378 5.42853 9.13834C5.5043 9.19273 5.57532 9.25164 5.62978 9.32641C5.68897 9.40572 5.72448 9.49636 5.76236 9.58699C5.89968 9.93141 6.02042 10.2713 6.09382 10.6338C6.24061 11.3612 6.29269 12.1021 6.35425 12.8386C6.37082 13.0515 6.71885 13.0561 6.70465 12.8386C6.6644 12.1135 6.71175 11.3838 6.86564 10.6724C7.029 9.92008 7.06925 9.01825 8.06126 8.88683C8.70286 8.80072 9.16217 9.1678 9.62858 9.52355C9.73038 9.60059 9.85113 9.48729 9.77537 9.38986C9.79904 9.35587 9.80378 9.30829 9.76826 9.2675C9.35631 8.80299 8.92778 8.33622 9.09351 7.68364C9.27344 6.96988 9.97424 6.76142 10.6348 6.58468C11.3616 6.38755 12.1169 6.30144 12.865 6.21987C13.0426 6.20174 13.045 5.97968 12.8721 5.95703Z" />
                                                        </svg>{category?.name}</span> <span>Show</span>
                                                    </a>
                                                </Link></li>
                                            })
                                        }



                                    </ul>
                                </div> */}
                                {/* <div className="sidebar-widget-1">
                                    <h6 className="title">Popular Post</h6>
                                    <div className="blog-list-1 mb-25">
                                        <Link legacyBehavior href="/">
                                            <a className="image">
                                                <img src="/assets/images/blog-list/blog-list1-3.jpg" alt="image" />
                                            </a>
                                        </Link>
                                        <div className="content">
                                            <h6><Link legacyBehavior href="/"><a>gravida orci sed jaritob laoreet tellus.</a></Link></h6>
                                            <ul>
                                                <li><Link legacyBehavior href="/blog-standard"><a>Nov 10, 2022</a></Link></li>
                                                <li><Link legacyBehavior href="/blog-standard"><a>500 Comment</a></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="blog-list-1 mb-25">
                                        <a className="image">
                                            <img src="/assets/images/blog-list/blog-list1-4.jpg" alt="image" />
                                        </a>
                                        <div className="content">
                                            <h6><Link legacyBehavior href="/"><a>laoreet tellus Morbi uto dolor mattis.</a></Link></h6>
                                            <ul>
                                                <li><Link legacyBehavior href="/blog-standard"><a>Nov 10, 2022</a></Link></li>
                                                <li><Link legacyBehavior href="/blog-standard"><a>890 Comment</a></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="blog-list-1">
                                        <a className="image">
                                            <img src="/assets/images/blog-list/blog-list1-5.jpg" alt="image" />
                                        </a>
                                        <div className="content">
                                            <h6><Link legacyBehavior href="/"><a>Nam ullamcorper risuso non commodo.</a></Link></h6>
                                            <ul>
                                                <li><Link legacyBehavior href="/blog-standard"><a>Nov 10, 2022</a></Link></li>
                                                <li><Link legacyBehavior href="/blog-standard"><a>3.5k Comment</a></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div className="sidebar-widget-1">
                                    <h6 className="title">Tag List</h6>
                                    <ul className="tag-list">
                                        <li><Link legacyBehavior href="/blog-classic"><a>Creative</a></Link></li>
                                        <li><Link legacyBehavior href="/blog-classic"><a>Men Fashion </a></Link></li>
                                        <li><Link legacyBehavior href="/blog-classic"><a>Creative Design</a></Link></li>
                                        <li><Link legacyBehavior href="/blog-classic"><a>Travel Adventure</a></Link></li>
                                        <li><Link legacyBehavior href="/blog-classic"><a>Gaming</a></Link></li>
                                        <li><Link legacyBehavior href="/blog-classic"><a>Art Plants</a></Link></li>
                                        <li><Link legacyBehavior href="/blog-classic"><a>Archiecture</a></Link></li>
                                        <li><Link legacyBehavior href="/blog-classic"><a>Women Fashion</a></Link></li>
                                        <li><Link legacyBehavior href="/blog-classic"><a>Sports</a></Link></li>
                                    </ul>
                                </div> */}
                                <div className="sidebar-widget-1">
                                    <h6 className={`title ${theme === "dark" ? "text-light" : ""}`}>Stay Connected</h6>
                                    <ul className="social-4">
                                        {
                                            socialHandles?.map((social, index) => {
                                                return <li key={index}>
                                                    <a href={social?.link}><i className={social?.icon} /></a>
                                                </li>
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="sidebar-shop-card" style={{ backgroundImage: 'url("https://img.freepik.com/free-vector/internet-forum-vector-illustration-communication-concept_6280-512.jpg?w=740")' }}>
                                    <span>Unlock premium features</span>
                                    <h3 style={{
                                        color: 'black'
                                    }}>Activate Membership</h3>
                                    <a href="/membership/offer/free-trials" className="shop-btn">Click Here</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>

    );
}

export default OfficialPosts;
