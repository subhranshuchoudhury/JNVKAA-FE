import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getAdminYoutubePostById, isValidateInputID } from '@/utils/fetch';
import Link from 'next/link';
import Socials from '@/data/topbar/social.json';
import ModalVideo from 'react-modal-video';
export default function page() {

    const router = useRouter()
    const [Loading, setLoading] = useState(true);
    const [EventData, setEventData] = useState([]);
    const [isOpen, setOpen] = useState(false);
    const [YTvideoID, setYTvideoID] = useState("");
    const ID = router.query.id;
    useEffect(() => {
        if (ID) {
            loadEvents(ID);
        }
    }, [ID])

    const loadEvents = async (ID) => {
        if (isValidateInputID(ID)) {

            const res = await getAdminYoutubePostById(ID);
            setEventData(res?.data);
            setLoading(false);
        }

    }

    return <>
        {
            Loading && EventData.length > 0 ? <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div> : <section className="post-gallery-details style-6 mt-100">
                <div className="container">
                    <div className="post-gallery-content">
                        <div className="row">
                            <div className="col-12">
                                <div className="post-gallery-title">
                                    <span className="eg-badge2 badge--red">{new Date(EventData?.date).toDateString()}</span>
                                    <h2>{EventData?.title}</h2>
                                </div>
                                <div className="post-gallery-author-meta">
                                    <div className="author-area">
                                        <div className="author-img">
                                            <img src="/assets/images/dummy/avatar/user.jpg" alt="" />
                                        </div>
                                        <div className="author-content">
                                            <p>By, Moderator</p>
                                        </div>
                                    </div>
                                    <div className="post-meta">
                                        <ul>
                                            <li>
                                                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8 0C3.60594 0 0 3.60594 0 8C0 12.3941 3.60594 16 8 16C12.3941 16 16 12.3941 16 8C16 3.60594 12.3941 0 8 0ZM11.646 3.69106C11.8291 3.508 12.1259 3.508 12.3089 3.69106C12.492 3.87413 12.492 4.17091 12.3089 4.35397C12.1259 4.53703 11.8291 4.53703 11.646 4.35397C11.463 4.17091 11.463 3.87413 11.646 3.69106ZM7.53125 2.375C7.53125 2.11591 7.74091 1.90625 8 1.90625C8.25909 1.90625 8.46875 2.11591 8.46875 2.375V3.3125C8.46875 3.57159 8.25909 3.78125 8 3.78125C7.74091 3.78125 7.53125 3.57159 7.53125 3.3125V2.375ZM2.375 8.46875C2.11591 8.46875 1.90625 8.25909 1.90625 8C1.90625 7.74091 2.11591 7.53125 2.375 7.53125H3.3125C3.57159 7.53125 3.78125 7.74091 3.78125 8C3.78125 8.25909 3.57159 8.46875 3.3125 8.46875H2.375ZM4.35397 12.3089C4.17091 12.492 3.87413 12.492 3.69106 12.3089C3.508 12.1259 3.508 11.8291 3.69106 11.646C3.87413 11.4629 4.17091 11.4629 4.35397 11.646C4.53703 11.8291 4.53703 12.1259 4.35397 12.3089ZM4.35397 4.35397C4.17091 4.53703 3.87413 4.53703 3.69106 4.35397C3.508 4.17091 3.508 3.87413 3.69106 3.69106C3.87413 3.508 4.17091 3.508 4.35397 3.69106C4.53703 3.87413 4.53703 4.17091 4.35397 4.35397ZM8.46875 13.625C8.46875 13.8841 8.25909 14.0938 8 14.0938C7.74091 14.0938 7.53125 13.8841 7.53125 13.625V12.6875C7.53125 12.4284 7.74091 12.2188 8 12.2188C8.25909 12.2188 8.46875 12.4284 8.46875 12.6875V13.625ZM11.1439 11.1439C10.9608 11.327 10.6642 11.327 10.4811 11.1439L7.66856 8.33141C7.58069 8.24353 7.53125 8.1245 7.53125 8V5.1875C7.53125 4.92841 7.74091 4.71875 8 4.71875C8.25909 4.71875 8.46875 4.92841 8.46875 5.1875V7.80591L11.1439 10.4811C11.327 10.6642 11.327 10.9608 11.1439 11.1439ZM12.3089 12.3089C12.1259 12.492 11.8291 12.492 11.646 12.3089C11.463 12.1259 11.463 11.8291 11.646 11.646C11.8291 11.4629 12.1259 11.4629 12.3089 11.646C12.492 11.8291 12.492 12.1259 12.3089 12.3089ZM14.0938 8C14.0938 8.25909 13.8841 8.46875 13.625 8.46875H12.6875C12.4284 8.46875 12.2188 8.25909 12.2188 8C12.2188 7.74091 12.4284 7.53125 12.6875 7.53125H13.625C13.8841 7.53125 14.0938 7.74091 14.0938 8Z" />
                                                </svg>{new Date(EventData?.date).toLocaleString()}
                                            </li>
                                            <li>
                                                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.15888 13.1844C8.73336 10.6029 8.07416 7.35423 5.59136 5.46029C5.58991 5.45922 5.58846 5.45788 5.5873 5.45708L5.59803 5.48172L5.59629 5.5002C6.08003 6.68033 6.01217 7.97589 5.41793 9.08745L4.99915 9.87117L4.87068 9.00522C4.78338 8.41784 4.54354 7.85751 4.17407 7.3778H4.11578L4.08503 7.29744C4.08938 8.19499 3.88464 9.07915 3.48297 9.91322C2.95602 11.0047 3.03345 12.2633 3.69033 13.2806L4.14362 13.9829L3.3281 13.6647C1.98331 13.1399 0.908237 12.1291 0.378384 10.8914C-0.215271 9.50931 -0.105357 7.90679 0.672747 6.6056C1.07847 5.92875 1.36269 5.21012 1.51784 4.46926L1.66952 3.74314L2.0564 4.39079C2.24113 4.69961 2.37715 5.03388 2.46154 5.38503L2.47024 5.39333L2.47923 5.44958L2.48765 5.44717C3.64654 4.02518 4.34083 2.25579 4.44204 0.464176L4.46814 0L4.88982 0.253917C6.61075 1.28967 7.80589 2.95139 8.17508 4.81853L8.18349 4.85684L8.18784 4.86273L8.20669 4.83809C8.54398 4.42668 8.72204 3.93732 8.72204 3.42226V2.62461L9.2432 3.26048C10.4549 4.73845 11.0761 6.57185 10.9926 8.42319C10.8899 10.6024 9.6031 12.5151 7.5501 13.5514L6.66121 14L7.15888 13.1844Z" />
                                                </svg>{EventData?.views} Views
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="sidebar-thumb">
                                    <div className="image text-center">
                                        <div className="video position-relative">
                                            <div className="video-play sibling-2">
                                                <div onClick={() => {
                                                    setYTvideoID(EventData?.link)
                                                    setOpen(true);
                                                }} data-fancybox="popup-youtube"><i className="bx bx-play" /></div>
                                            </div>
                                            <img width={700} src={`https://img.youtube.com/vi/${EventData?.link}/0.jpg`} alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center g-4">
                            <div className="col-lg-8">

                                <blockquote className="text-center">
                                    <p className="blockquote-text">{EventData?.description}</p>
                                    <h3 className="blockquote-author">Youtube</h3>
                                </blockquote>

                            </div>
                        </div>
                        <div className="post-tags-social">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-10">
                                    <div className="tags">
                                        <ul>
                                            <li><Link legacyBehavior href={`https://www.youtube.com/watch?v=${EventData?.link}`}><a> <span>#</span>Play On Youtube</a></Link></li>
                                            <li><Link legacyBehavior href={`/posts/youtube/id/${EventData?._id}`}><a> <span>#</span>{EventData
                                                ?.views} Views</a></Link></li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-10">
                                    <div className="social">
                                        <p>Social Handles</p>
                                        <ul>

                                            {
                                                Socials.map((item, idx) => (
                                                    <li key={idx}><a href={item?.link}><i className={item?.icon} /></a></li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ModalVideo
                    channel="youtube"
                    youtube={{ mute: 0, autoplay: 0 }}
                    isOpen={isOpen}
                    videoId={YTvideoID}
                    onClose={() => setOpen(false)}
                />
            </section>
        }
    </>
}
