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

    // Fallback image handler
    const handleImageError = (e) => {
        e.target.src = "/assets/images/alumnus/no-image-post-alumni.jpg";
    }

    return (
        <section className="blog-classic mt-50 pt-100 pb-100">
            <div className="container">
                <div className="row gy-5">
                    <h6 className={`title ${theme === "dark" ? "text-light" : ""}`}>Official Posts</h6>

                    {IsLoading && (
                        <div className="text-center">
                            <div className={`spinner-border text-${theme === "dark" ? "light" : "primary"}`} role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    )}
                    
                    <div className={`search-box-2 ${theme === "dark" ? "bg-light" : ""}`}>
                        <form>
                            <input type="text" placeholder="Search here..." />
                            <button><i className="bi bi-search" /></button>
                        </form>
                    </div>

                    <div className="col-lg-8">
                        <div className="row g-4">
                            {PostData && PostData.map((post) => (
                                <div key={post._id} className="col-md-6">
                                    <div className="blog-grid-1">
                                        <Link legacyBehavior href={`/posts/official/id/${post._id}`}>
                                            <a className="image">
                                                <Image 
                                                    src={
                                                        post?.imageLink 
                                                        ? (post.imageLink.startsWith("http") || post.imageLink.startsWith("https")
                                                            ? post.imageLink
                                                            : `${GLOBAL_URL}/api/user/post/image/${post.imageLink}`)
                                                        : "/assets/images/alumnus/no-image-post-alumni.jpg"
                                                    }
                                                    alt={post?.title || "Blog post image"}
                                                    height={300}
                                                    width={300}
                                                    loading="lazy"
                                                    fetchPriority="high"
                                                    unoptimized={true}
                                                    onError={handleImageError}
                                                />
                                            </a>
                                        </Link>

                                        <div className="content">
                                            <ul>
                                                <li>
                                                    <Link legacyBehavior href={`/profile/member/${post?.author?.id}`}>
                                                        <a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>
                                                            {post?.author?.name?.split(" ")?.[0]}
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link legacyBehavior href="/blog-standard">
                                                        <a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>
                                                            {new Date(post?.date).toLocaleString()}
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li className={`${theme === "dark" ? "text-light" : ""}`}>
                                                    {post?.views} Views
                                                </li>
                                            </ul>
                                            <h4>
                                                <Link legacyBehavior href={`/posts/official/id/${post._id}`}>
                                                    <a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>
                                                        {post?.title}.
                                                    </a>
                                                </Link>
                                            </h4>
                                            <div className="bottom-area">
                                                <Link legacyBehavior href={`/posts/official/id/${post._id}`}>
                                                    <a className={`eg-btn arrow-btn ${theme === "dark" ? "text-light" : ""}`}>
                                                        View Details<i className="bi bi-arrow-right" />
                                                    </a>
                                                </Link>
                                                <span>
                                                    <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                                                        {/* SVG path remains unchanged */}
                                                    </svg>
                                                    2 Min Read
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="post-side-bar-1">
                            <div className="sidebar-widget-1">
                                <h6 className={`title ${theme === "dark" ? "text-light" : ""}`}>Stay Connected</h6>
                                <ul className="social-4">
                                    {socialHandles?.map((social, index) => (
                                        <li key={index}>
                                            <a href={social?.link}><i className={social?.icon} /></a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="sidebar-shop-card" style={{ backgroundImage: 'url("https://img.freepik.com/free-vector/internet-forum-vector-illustration-communication-concept_6280-512.jpg?w=740")' }}>
                                <span>Unlock premium features</span>
                                <h3 style={{ color: 'black' }}>Activate Membership</h3>
                                <a href="/membership/offer/free-trials" className="shop-btn">Click Here</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OfficialPosts;