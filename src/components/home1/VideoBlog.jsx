import React, { useEffect, useState } from "react";
import Link from "next/link";
import ModalVideo from 'react-modal-video';
import { GLOBAL_URL } from "@/utils/fetch";

function VideoBlog() {
  const [isOpen, setOpen] = useState(false);
  const [YoutubeVideos, setYoutubeVideos] = useState([])
  const [currentYTID, setCurrentYTID] = useState(null)

  const getYoutubePosts = async () => {
    try {
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      const response = await fetch(GLOBAL_URL + "/api/post/youtube", requestOptions)
      const data = await response.json()
      console.log("YT Data", data)
      setYoutubeVideos(data)
    } catch (error) {

      console.log("YT Error", error)

    }
  }

  useEffect(() => {
    getYoutubePosts()
  }, [])

  return (
    <section className="video-blog pt-100">
      <section className="video-blog pt-100">
        <div className="container">
          <div className="row align-items-center g-4 mb-40">
            <div className="col-md-9">
              <div className="section-title-1">
                <h2>Featured Video</h2>
                <div className="subtitle">
                  <svg width={11} height={14} viewBox="0 0 11 14" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.15888 13.1844C8.73336 10.6029 8.07416 7.35423 5.59136 5.46029C5.58991 5.45922 5.58846 5.45788 5.5873 5.45708L5.59803 5.48172L5.59629 5.5002C6.08003 6.68033 6.01217 7.97589 5.41793 9.08745L4.99915 9.87117L4.87068 9.00522C4.78338 8.41784 4.54354 7.85751 4.17407 7.3778H4.11578L4.08503 7.29744C4.08938 8.19499 3.88464 9.07915 3.48297 9.91322C2.95602 11.0047 3.03345 12.2633 3.69033 13.2806L4.14362 13.9829L3.3281 13.6647C1.98331 13.1399 0.908237 12.1291 0.378384 10.8914C-0.215271 9.50931 -0.105357 7.90679 0.672747 6.6056C1.07847 5.92875 1.36269 5.21012 1.51784 4.46926L1.66952 3.74314L2.0564 4.39079C2.24113 4.69961 2.37715 5.03388 2.46154 5.38503L2.47024 5.39333L2.47923 5.44958L2.48765 5.44717C3.64654 4.02518 4.34083 2.25579 4.44204 0.464176L4.46814 0L4.88982 0.253917C6.61075 1.28967 7.80589 2.95139 8.17508 4.81853L8.18349 4.85684L8.18784 4.86273L8.20669 4.83809C8.54398 4.42668 8.72204 3.93732 8.72204 3.42226V2.62461L9.2432 3.26048C10.4549 4.73845 11.0761 6.57185 10.9926 8.42319C10.8899 10.6024 9.6031 12.5151 7.5501 13.5514L6.66121 14L7.15888 13.1844Z" />
                  </svg>
                  <span>&nbsp;Video Post</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex justify-content-md-end">
              <Link legacyBehavior href="/video-blog"><a className=" eg-btn arrow-btn-2">Explore All<i className="bi bi-arrow-right" /></a></Link>
            </div>
          </div>
          <div className="row mb-60 gy-5">
            <div className="col-lg-7">
              {/* Starting */}

              {
                YoutubeVideos?.length === 3 && <div className="blog-video-1">
                  <div className="video position-relative">
                    <div className="video-play">
                      <div data-fancybox="popup-youtube" onClick={() => {
                        setCurrentYTID(YoutubeVideos?.[0]?.link)
                        setOpen(true)
                      }}><i className="bx bx-play" /></div>
                    </div>
                    <img src={`https://img.youtube.com/vi/${YoutubeVideos?.[0]?.link}/0.jpg`} alt="yt_thumbnail" />
                  </div>
                  <div className="content">
                    <ul>
                      <li>
                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.15888 13.1844C8.73336 10.6029 8.07416 7.35423 5.59136 5.46029C5.58991 5.45922 5.58846 5.45788 5.5873 5.45708L5.59803 5.48172L5.59629 5.5002C6.08003 6.68033 6.01217 7.97589 5.41793 9.08745L4.99915 9.87117L4.87068 9.00522C4.78338 8.41784 4.54354 7.85751 4.17407 7.3778H4.11578L4.08503 7.29744C4.08938 8.19499 3.88464 9.07915 3.48297 9.91322C2.95602 11.0047 3.03345 12.2633 3.69033 13.2806L4.14362 13.9829L3.3281 13.6647C1.98331 13.1399 0.908237 12.1291 0.378384 10.8914C-0.215271 9.50931 -0.105357 7.90679 0.672747 6.6056C1.07847 5.92875 1.36269 5.21012 1.51784 4.46926L1.66952 3.74314L2.0564 4.39079C2.24113 4.69961 2.37715 5.03388 2.46154 5.38503L2.47024 5.39333L2.47923 5.44958L2.48765 5.44717C3.64654 4.02518 4.34083 2.25579 4.44204 0.464176L4.46814 0L4.88982 0.253917C6.61075 1.28967 7.80589 2.95139 8.17508 4.81853L8.18349 4.85684L8.18784 4.86273L8.20669 4.83809C8.54398 4.42668 8.72204 3.93732 8.72204 3.42226V2.62461L9.2432 3.26048C10.4549 4.73845 11.0761 6.57185 10.9926 8.42319C10.8899 10.6024 9.6031 12.5151 7.5501 13.5514L6.66121 14L7.15888 13.1844Z" />
                        </svg>{YoutubeVideos?.[0]?.views} View
                      </li>
                    </ul>
                    <h3><Link legacyBehavior href="/"><a>{YoutubeVideos?.[0]?.title}</a></Link>
                    </h3>
                    <p>{YoutubeVideos?.[0]?.description}</p>
                    <div className="video-author">
                      <Link legacyBehavior href="/author-details"><a>By Admin</a></Link>
                      <Link legacyBehavior href="/blog-standard"><a>{new Date(YoutubeVideos?.[0]?.date).toLocaleString()}</a></Link>
                    </div>
                  </div>
                </div>
              }
            </div>
            {
              YoutubeVideos?.length === 3 && <div className="col-lg-5">
                <div className="video-sidebar">
                  <div className="blog-video-2">
                    <div className="video position-relative">
                      <div className="video-play sibling-2">
                        <div onClick={() => {
                          setCurrentYTID(YoutubeVideos?.[1]?.link)
                          setOpen(true)
                        }} data-fancybox="popup-youtube" ><i className="bx bx-play" /></div>
                      </div>

                      <img src={`https://img.youtube.com/vi/${YoutubeVideos?.[1]?.link}/0.jpg`} alt="yt_thumbnail" />

                    </div>
                    <div className="content">
                      <ul>
                        <li><Link legacyBehavior href="/author-details"><a>By Admin</a></Link></li>
                        <li><Link legacyBehavior href="/blog-standard"><a>{new Date(YoutubeVideos?.[1]?.date).toLocaleString()}</a></Link></li>
                      </ul>
                      <h3><Link legacyBehavior href="/"><a>{YoutubeVideos?.[1]?.title}</a></Link>
                      </h3>
                    </div>
                    <div className="bottom-area">
                      <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                      </svg>{YoutubeVideos?.[1]?.views} View</span>
                      <Link legacyBehavior href="/"><a className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>

                    </div>
                  </div>
                  <div className="blog-video-2">
                    <div className="video position-relative">
                      <div className="video-play sibling-2">
                        <div onClick={() => {
                          setCurrentYTID(YoutubeVideos?.[2]?.link)
                          setOpen(true)
                        }} data-fancybox="popup-youtube"><i className="bx bx-play" /></div>
                      </div>
                      <img src={`https://img.youtube.com/vi/${YoutubeVideos?.[2]?.link}/0.jpg`} alt="yt_thumbnail" />


                    </div>
                    <div className="content">
                      <ul>
                        <li><Link legacyBehavior href="/author-details"><a>By Admin</a></Link></li>
                        <li><Link legacyBehavior href="/blog-standard"><a>{new Date(YoutubeVideos?.[2]?.date).toLocaleString()}</a></Link></li>

                      </ul>
                      <h3><Link legacyBehavior href="/"><a>{YoutubeVideos?.[2]?.title}</a></Link>
                      </h3>
                    </div>
                    <div className="bottom-area">
                      <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                      </svg>{YoutubeVideos?.[2]?.views} View</span>
                      <Link legacyBehavior href="/"><a className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>

                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </section>

      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId={currentYTID}
        onClose={() => setOpen(false)}
      />
    </section>
  );
}

export default VideoBlog;
