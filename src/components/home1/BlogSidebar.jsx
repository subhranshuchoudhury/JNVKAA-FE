import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, EffectFade } from "swiper";
import { useEffect, useMemo, useState, useContext } from "react";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import Socials from "../../data/topbar/social.json";
import { GLOBAL_URL, postSupport } from "@/utils/fetch";
import Image from "next/image";
import { ThemeContext, darkTheme } from "../ThemeContext";
SwiperCore.use([Navigation, Autoplay, EffectFade]);

function BlogSidebar() {
  const [isOpen, setOpen] = useState(false);
  const [YTvideoID, setYTvideoID] = useState("");
  const [Loading, setLoading] = useState(true);
  const [YoutubeResponse, setYoutubeResponse] = useState([]);
  const [RecentEvents, setRecentEvents] = useState([]);
  const [AlumniMeet, setAlumniMeet] = useState([]);
  const { theme } = useContext(ThemeContext);

  const sendResponseOnMail = async (isAttending) => {
    e.preventDefault();

    const userProfile = JSON.parse(localStorage.getItem("userData") || "{}");

    const postData = {
      name: userProfile?.name,
      email: "",
      subject: "Alumni meet response",
      message: `Hello, I am ${userProfile?.name} and I am ${
        isAttending ? "attending" : "not attending"
      } the alumni meet <br> Mobile: ${userProfile?.mobile}.
        `,
    };
    const sendingMailToast = toast.loading("Sending your response...");
    const response = await postSupport(postData);
    toast.dismiss(sendingMailToast);
    if (response?.status === 200) {
      toast.success("Responded successfully");
    } else {
      toast.error("Respond not sent");
    }
  };

  const slider = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 10000000, // seconds
        disableOnInteraction: true,
      },
      navigation: {
        nextEl: ".blog-multi-next",
        prevEl: ".blog-multi-prev",
      },
    };
  }, []);

  useEffect(() => {
    getConcurrent();
  }, []);

  // concurrent request javascript

  const getConcurrent = async () => {
    setLoading(true);
    const endpoints = [
      "/api/post/youtube?limit=6",
      "/api/alumni-meet?limit=6",
      "/api/event?limit=6",
    ];
    Promise.allSettled(
      endpoints.map((url) =>
        fetch(GLOBAL_URL + url).then((response) =>
          response.ok
            ? response.json()
            : Promise.reject(new Error("Failed to load"))
        )
      )
    ).then((results) => {
      results.forEach((result, index) => {
        if (result.status === "fulfilled") {
          console.log(`Response from ${endpoints[index]}:`, result.value);
          if (index === 0) {
            setYoutubeResponse(result.value);
          } else if (index === 1) {
            setAlumniMeet(result.value);
          } else {
            setRecentEvents(result.value);
          }
        } else {
          console.error(`Error from ${endpoints[index]}:`, result.reason);
        }
      });
      setLoading(false);
    });
  };
  return (
    <div className="blog-list-slider-section">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-8 posittion-relative">
            <div className="slider-arrows arrow-style-1 sibling-three text-center d-flex flex-row justify-content-center align-items-center gap-4">
              <div
                className="blog-multi-next swiper-next-arrow"
                tabIndex={0}
                role="button"
                aria-label="Next slide"
              >
                <i
                  className={`bi bi-arrow-left ${
                    theme === "dark"
                      ? "bg-transparent text-light border border-white rounded-circle background-hover"
                      : ""
                  }`}
                />
              </div>
              <div
                className="blog-multi-prev swiper-prev-arrow"
                tabIndex={0}
                role="button"
                aria-label="Previous slide"
              >
                <i
                  className={`bi bi-arrow-right ${
                    theme === "dark"
                      ? "bg-transparent text-light border border-white rounded-circle background-hover"
                      : ""
                  }`}
                />
              </div>
            </div>
            <Swiper {...slider} className="swiper blog-multi-list-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="section-title-1 mb-40">
                    <h2 className={`${theme === "dark" ? "text-light" : ""}`}>
                      Recent Events
                    </h2>
                    {Loading && (
                      <div
                        className={`spinner-border text-${
                          theme === "dark" ? "light" : "primary"
                        } m-2`}
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    )}

                    <div className="subtitle">
                      <svg
                        width={11}
                        height={14}
                        viewBox="0 0 11 14"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`${theme === "dark" ? "svg-fill" : ""}`}
                      >
                        <path d="M7.15888 13.1844C8.73336 10.6029 8.07416 7.35423 5.59136 5.46029C5.58991 5.45922 5.58846 5.45788 5.5873 5.45708L5.59803 5.48172L5.59629 5.5002C6.08003 6.68033 6.01217 7.97589 5.41793 9.08745L4.99915 9.87117L4.87068 9.00522C4.78338 8.41784 4.54354 7.85751 4.17407 7.3778H4.11578L4.08503 7.29744C4.08938 8.19499 3.88464 9.07915 3.48297 9.91322C2.95602 11.0047 3.03345 12.2633 3.69033 13.2806L4.14362 13.9829L3.3281 13.6647C1.98331 13.1399 0.908237 12.1291 0.378384 10.8914C-0.215271 9.50931 -0.105357 7.90679 0.672747 6.6056C1.07847 5.92875 1.36269 5.21012 1.51784 4.46926L1.66952 3.74314L2.0564 4.39079C2.24113 4.69961 2.37715 5.03388 2.46154 5.38503L2.47024 5.39333L2.47923 5.44958L2.48765 5.44717C3.64654 4.02518 4.34083 2.25579 4.44204 0.464176L4.46814 0L4.88982 0.253917C6.61075 1.28967 7.80589 2.95139 8.17508 4.81853L8.18349 4.85684L8.18784 4.86273L8.20669 4.83809C8.54398 4.42668 8.72204 3.93732 8.72204 3.42226V2.62461L9.2432 3.26048C10.4549 4.73845 11.0761 6.57185 10.9926 8.42319C10.8899 10.6024 9.6031 12.5151 7.5501 13.5514L6.66121 14L7.15888 13.1844Z" />
                      </svg>
                      <span
                        className={`${theme === "dark" ? "text-light" : ""}`}
                      >
                        &nbsp;Events
                      </span>
                    </div>
                  </div>
                  <div className="search-area">
                    <span
                      className={`tag-name ${
                        theme === "dark" ? darkTheme : ""
                      }`}
                    >
                      Events
                    </span>
                    <div className="search-form">
                      {/* <form>
                        <i className="bi bi-search" />
                        <input type="text" placeholder="Search" />
                      </form> */}
                    </div>
                  </div>
                  {/* blog-list */}
                  {RecentEvents?.length > 0 &&
                    RecentEvents.map((item, index) => (
                      <div key={index} className="blog-list-2">
                        <div
                          className={`date ${
                            theme === "dark" ? "circle-color" : ""
                          }`}
                        >
                          <h3
                            className={`${
                              theme === "dark" ? "text-light" : ""
                            }`}
                          >
                            {new Date(item?.date).getUTCDate()}
                          </h3>
                          <p>
                            {new Date(item?.date).toLocaleString("default", {
                              month: "long",
                            })}
                          </p>
                        </div>
                        <div className="content">
                          <ul>
                            <li>
                              <Link
                                legacyBehavior
                                href={`/events/id/${item?._id}`}
                              >
                                <a
                                  className={`${
                                    theme === "dark"
                                      ? "text-light text-hover"
                                      : ""
                                  }`}
                                >
                                  By Moderator
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link
                                legacyBehavior
                                href={`/events/id/${item?._id}`}
                              >
                                <a
                                  className={`${
                                    theme === "dark"
                                      ? "text-light text-hover"
                                      : ""
                                  }`}
                                >
                                  {new Date(item?.created_at).toLocaleString()}
                                </a>
                              </Link>
                            </li>
                          </ul>
                          <h4>
                            <Link
                              legacyBehavior
                              href={`/events/id/${item?._id}`}
                            >
                              <a
                                className={`${
                                  theme === "dark"
                                    ? "text-light text-hover"
                                    : ""
                                }`}
                              >
                                {item?.name}
                              </a>
                            </Link>
                          </h4>
                          <div className="bottom-area">
                            <Link
                              legacyBehavior
                              href={`/events/id/${item?._id}`}
                            >
                              <a
                                className={`eg-btn arrow-btn ${
                                  theme === "dark" ? "text-light" : ""
                                }`}
                              >
                                View Event
                                <i className="bi bi-arrow-right" />
                              </a>
                            </Link>
                            <span>
                              <svg
                                width={20}
                                height={20}
                                viewBox="0 0 1024 1024"
                                xmlns="http://www.w3.org/2000/svg"
                                fill={`${
                                  theme === "dark" ? "#fff" : "#000000"
                                }`}
                              >
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g
                                  id="SVGRepo_tracerCarrier"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                  <path
                                    fill={`${
                                      theme === "dark" ? "#fff" : "#000000"
                                    }`}
                                    d="M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
                                  ></path>
                                  <path
                                    fill={`${
                                      theme === "dark" ? "#fff" : "#000000"
                                    }`}
                                    d="M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256zm345.6 192L960 960H672v-64H352v64H64l102.4-256h691.2zm-68.928 0H235.328l-76.8 192h706.944l-76.8-192z"
                                  ></path>
                                </g>
                              </svg>{" "}
                              {item?.location}
                            </span>
                          </div>
                        </div>
                        <Link legacyBehavior href={`/events/id/${item?._id}`}>
                          <a className="image">
                            {item?.image ? (
                              <Image
                                height={100}
                                width={200}
                                style={{
                                  objectPosition: "center",
                                  objectFit: "cover",
                                }}
                                src={
                                  GLOBAL_URL +
                                  "/api/user/post/image/" +
                                  item?.image
                                }
                                alt="alumni meet image"
                              />
                            ) : (
                              <img
                                src="https://thumbs.dreamstime.com/b/people-meeting-together-outdoor-friends-gathering-vector-illustration-concept-friend-meetup-celebration-collab-collaboration-197968976.jpg"
                                alt=""
                              />
                            )}
                          </a>
                        </Link>
                      </div>
                    ))}
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <div className="section-title-1 mb-40">
                    <h2 className={`${theme === "dark" ? "text-light" : ""}`}>
                      Youtube Videos
                    </h2>
                    <div className="subtitle">
                      <svg
                        width={11}
                        height={14}
                        viewBox="0 0 11 14"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`${theme === "dark" ? "svg-fill" : ""}`}
                      >
                        <path d="M7.15888 13.1844C8.73336 10.6029 8.07416 7.35423 5.59136 5.46029C5.58991 5.45922 5.58846 5.45788 5.5873 5.45708L5.59803 5.48172L5.59629 5.5002C6.08003 6.68033 6.01217 7.97589 5.41793 9.08745L4.99915 9.87117L4.87068 9.00522C4.78338 8.41784 4.54354 7.85751 4.17407 7.3778H4.11578L4.08503 7.29744C4.08938 8.19499 3.88464 9.07915 3.48297 9.91322C2.95602 11.0047 3.03345 12.2633 3.69033 13.2806L4.14362 13.9829L3.3281 13.6647C1.98331 13.1399 0.908237 12.1291 0.378384 10.8914C-0.215271 9.50931 -0.105357 7.90679 0.672747 6.6056C1.07847 5.92875 1.36269 5.21012 1.51784 4.46926L1.66952 3.74314L2.0564 4.39079C2.24113 4.69961 2.37715 5.03388 2.46154 5.38503L2.47024 5.39333L2.47923 5.44958L2.48765 5.44717C3.64654 4.02518 4.34083 2.25579 4.44204 0.464176L4.46814 0L4.88982 0.253917C6.61075 1.28967 7.80589 2.95139 8.17508 4.81853L8.18349 4.85684L8.18784 4.86273L8.20669 4.83809C8.54398 4.42668 8.72204 3.93732 8.72204 3.42226V2.62461L9.2432 3.26048C10.4549 4.73845 11.0761 6.57185 10.9926 8.42319C10.8899 10.6024 9.6031 12.5151 7.5501 13.5514L6.66121 14L7.15888 13.1844Z" />
                      </svg>
                      <span
                        className={`${theme === "dark" ? "text-light" : ""}`}
                      >
                        &nbsp;Emerging Talents
                      </span>
                    </div>
                  </div>
                  <div className="search-area">
                    <span
                      className={`tag-name ${
                        theme === "dark" ? darkTheme : ""
                      }`}
                    >
                      Youtube
                    </span>
                    <div className="search-form">
                      {/* <form action="/search" method="get">
                        <i className="bi bi-search"></i>
                        <input type="text" placeholder="Search" name="title" />
                      </form> */}
                    </div>
                  </div>

                  {YoutubeResponse?.length > 0 &&
                    YoutubeResponse.map((item, index) => (
                      <div key={index} className="blog-list-2">
                        <div
                          className={`date ${
                            theme === "dark" && "circle-color"
                          }`}
                        >
                          <h3
                            className={`${
                              theme === "dark" ? "text-light" : ""
                            }`}
                          >
                            {new Date(item?.date).getDay()}
                          </h3>
                          <p>
                            {new Date(item?.date).toLocaleString("default", {
                              month: "long",
                            })}
                          </p>
                        </div>
                        <div className="content">
                          <ul>
                            <li>
                              <Link legacyBehavior href="/">
                                <a
                                  className={`${
                                    theme === "dark"
                                      ? "text-light text-hover"
                                      : ""
                                  }`}
                                >
                                  By Moderator
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link
                                legacyBehavior
                                href={"/posts/youtube/id/" + item?._id}
                              >
                                <a
                                  className={`${
                                    theme === "dark"
                                      ? "text-light text-hover"
                                      : ""
                                  }`}
                                >
                                  Youtube
                                </a>
                              </Link>
                            </li>
                          </ul>
                          <h4>
                            <Link
                              legacyBehavior
                              href={"/posts/youtube/id/" + item?._id}
                            >
                              <a
                                className={`${
                                  theme === "dark"
                                    ? "text-light text-hover"
                                    : ""
                                }`}
                              >
                                {item?.title}
                              </a>
                            </Link>
                          </h4>
                          <div className="bottom-area">
                            <Link
                              legacyBehavior
                              href={"/posts/youtube/id/" + item?._id}
                            >
                              <a
                                className={`eg-btn arrow-btn ${
                                  theme === "dark" ? "text-light" : ""
                                }`}
                              >
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
                                className={`${
                                  theme === "dark" ? "svg-fill" : ""
                                }`}
                              >
                                <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                              </svg>
                              Video
                            </span>
                          </div>
                        </div>
                        <div className="image">
                          <div className="video position-relative">
                            <div className="video-play sibling-2">
                              <div
                                onClick={() => {
                                  setYTvideoID(item?.link);
                                  setOpen(true);
                                }}
                                data-fancybox="popup-youtube"
                              >
                                <i className="bx bx-play" />
                              </div>
                            </div>
                            <img
                              src={`https://img.youtube.com/vi/${item?.link}/0.jpg`}
                              alt="image"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <div className="section-title-1 mb-40">
                    <h2 className={`${theme === "dark" ? "text-light" : ""}`}>
                      Alumni Meets
                    </h2>
                    <div className="subtitle">
                      <svg
                        width={11}
                        height={14}
                        viewBox="0 0 11 14"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`${theme === "dark" ? "svg-fill" : ""}`}
                      >
                        <path d="M7.15888 13.1844C8.73336 10.6029 8.07416 7.35423 5.59136 5.46029C5.58991 5.45922 5.58846 5.45788 5.5873 5.45708L5.59803 5.48172L5.59629 5.5002C6.08003 6.68033 6.01217 7.97589 5.41793 9.08745L4.99915 9.87117L4.87068 9.00522C4.78338 8.41784 4.54354 7.85751 4.17407 7.3778H4.11578L4.08503 7.29744C4.08938 8.19499 3.88464 9.07915 3.48297 9.91322C2.95602 11.0047 3.03345 12.2633 3.69033 13.2806L4.14362 13.9829L3.3281 13.6647C1.98331 13.1399 0.908237 12.1291 0.378384 10.8914C-0.215271 9.50931 -0.105357 7.90679 0.672747 6.6056C1.07847 5.92875 1.36269 5.21012 1.51784 4.46926L1.66952 3.74314L2.0564 4.39079C2.24113 4.69961 2.37715 5.03388 2.46154 5.38503L2.47024 5.39333L2.47923 5.44958L2.48765 5.44717C3.64654 4.02518 4.34083 2.25579 4.44204 0.464176L4.46814 0L4.88982 0.253917C6.61075 1.28967 7.80589 2.95139 8.17508 4.81853L8.18349 4.85684L8.18784 4.86273L8.20669 4.83809C8.54398 4.42668 8.72204 3.93732 8.72204 3.42226V2.62461L9.2432 3.26048C10.4549 4.73845 11.0761 6.57185 10.9926 8.42319C10.8899 10.6024 9.6031 12.5151 7.5501 13.5514L6.66121 14L7.15888 13.1844Z" />
                      </svg>
                      <span
                        className={`${theme === "dark" ? "text-light" : ""}`}
                      >
                        &nbsp;Alumni get-together
                      </span>
                    </div>
                  </div>
                  <div className="search-area">
                    <span
                      className={`tag-name ${
                        theme === "dark" ? darkTheme : ""
                      }`}
                    >
                      Events
                    </span>
                    <div className="search-form">
                      {/* <form>
                        <i className="bi bi-search" />
                        <input type="text" placeholder="Search" />
                      </form> */}
                    </div>
                  </div>
                  {/* blog-list */}
                  {AlumniMeet?.length > 0 &&
                    AlumniMeet.map((item, index) => (
                      <div key={index} className="blog-list-2">
                        <div
                          className={`date ${
                            theme === "dark" ? "circle-color" : ""
                          }`}
                        >
                          <h3
                            className={`${
                              theme === "dark" ? "text-light" : ""
                            }`}
                          >
                            {new Date(item?.date).getDate()}
                          </h3>
                          <p>
                            {new Date(item?.date).toLocaleString("default", {
                              month: "long",
                            })}
                          </p>
                        </div>
                        <div className="content">
                          <ul>
                            <li>
                              <Link
                                legacyBehavior
                                href={`/posts/alumni/alumni-meet/id/${item?._id}`}
                              >
                                <a
                                  className={`${
                                    theme === "dark"
                                      ? "text-light text-hover"
                                      : ""
                                  }`}
                                >
                                  By Moderator
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link
                                legacyBehavior
                                href={`/posts/alumni/alumni-meet/id/${item?._id}`}
                              >
                                <a
                                  className={`${
                                    theme === "dark"
                                      ? "text-light text-hover"
                                      : ""
                                  }`}
                                >
                                  {new Date(item?.created_at).toLocaleString()}
                                </a>
                              </Link>
                            </li>
                          </ul>
                          <h4>
                            <Link
                              legacyBehavior
                              href={`/posts/alumni/alumni-meet/id/${item?._id}`}
                            >
                              <a
                                className={`${
                                  theme === "dark"
                                    ? "text-light text-hover"
                                    : ""
                                }`}
                              >
                                {item?.title}
                              </a>
                            </Link>
                          </h4>
                          <div className="bottom-area">
                            <Link
                              legacyBehavior
                              href={`/posts/alumni/alumni-meet/id/${item?._id}`}
                            >
                              <a
                                className={`eg-btn arrow-btn ${
                                  theme === "dark" ? "text-light" : ""
                                }`}
                              >
                                View Event
                                <i className="bi bi-arrow-right" />
                              </a>
                            </Link>
                            <span>
                              <svg
                                width={20}
                                height={20}
                                viewBox="0 0 1024 1024"
                                xmlns="http://www.w3.org/2000/svg"
                                fill={`${
                                  theme === "dark" ? "#fff" : "#000000"
                                }`}
                              >
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g
                                  id="SVGRepo_tracerCarrier"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                  <path
                                    fill={`${
                                      theme === "dark" ? "#fff" : "#000000"
                                    }`}
                                    d="M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
                                  ></path>
                                  <path
                                    fill={`${
                                      theme === "dark" ? "#fff" : "#000000"
                                    }`}
                                    d="M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256zm345.6 192L960 960H672v-64H352v64H64l102.4-256h691.2zm-68.928 0H235.328l-76.8 192h706.944l-76.8-192z"
                                  ></path>
                                </g>
                              </svg>{" "}
                              {item?.location}
                            </span>
                          </div>
                        </div>
                        <Link
                          legacyBehavior
                          href={`/posts/alumni/alumni-meet/id/${item?._id}`}
                        >
                          <a className="image">
                            {item?.image ? (
                              <img
                                width={200}
                                src={
                                  GLOBAL_URL +
                                  "/api/user/post/image/" +
                                  item?.image
                                }
                                alt="alumni meet image"
                              />
                            ) : (
                              <img
                                src="https://thumbs.dreamstime.com/b/people-meeting-together-outdoor-friends-gathering-vector-illustration-concept-friend-meetup-celebration-collab-collaboration-197968976.jpg"
                                alt=""
                              />
                            )}
                          </a>
                        </Link>
                      </div>
                    ))}
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
          <div className="col-lg-4">
            <div className="post-side-bar-1">
              <div className="sidebar-widget-1">
                <h6 className={`title ${theme === "dark" ? "text-light" : ""}`}>
                  Upcoming Events
                </h6>
                <div className="blog-list-1 mb-25">
                  <Link legacyBehavior href="/">
                    <a className="image">
                      {" "}
                      <img
                        src="/assets/images/events/web-push-notifications-small.jpg"
                        alt="image"
                      />
                    </a>
                  </Link>
                  <div className="content">
                    <h6>
                      <Link legacyBehavior href="/">
                        <a
                          className={`${
                            theme === "dark" ? "text-light text-hover" : ""
                          }`}
                        >
                          Alumni Meet 2024 will be on 22nd Dec 2024
                        </a>
                      </Link>
                    </h6>
                    <ul>
                      <li>
                        <Link legacyBehavior href="/">
                          <a
                            className={`${
                              theme === "dark" ? "text-light text-hover" : ""
                            }`}
                          >
                            Nov 06, 2024
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/">
                          <a
                            className={`${
                              theme === "dark" ? "text-light text-hover" : ""
                            }`}
                          >
                            Important
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <p>Are you attending ?</p>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-start",
                    flexDirection: "row",
                    gap: 20,
                  }}
                >
                  <button
                    style={{
                      padding: 5,
                      backgroundColor: "honeydew",
                      borderRadius: 5,
                    }}
                  >
                    Yes
                  </button>
                  <button
                    style={{
                      padding: 5,
                      backgroundColor: "bisque",
                      borderRadius: 5,
                    }}
                  >
                    No
                  </button>
                </div> */}
              </div>
              <div className="sidebar-widget-1">
                <h6 className={`title ${theme === "dark" ? "text-light" : ""}`}>
                  Stay Connected
                </h6>
                <ul className="social-3">
                  {Socials.map((item, index) => (
                    <li key={index}>
                      <a href={item?.link}>
                        <span
                          className={`${theme === "dark" ? "text-light" : ""}`}
                        >
                          <i
                            className={`${item?.icon} ${
                              theme === "dark" ? "text-light" : ""
                            }`}
                          />
                          {item?.platform}
                        </span>
                        <span>
                          <strong
                            className={`${
                              theme === "dark" ? "text-light" : ""
                            }`}
                          >
                            VISIT
                          </strong>
                          &nbsp;
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="sidebar-shop-card"
                style={{
                  backgroundImage:
                    'url("https://img.freepik.com/free-vector/internet-forum-vector-illustration-communication-concept_6280-512.jpg?w=740")',
                }}
              >
                {/* 380 x 399 */}
                <span>Unlock premium features</span>
                <h3 style={{ color: "black" }}>Activate Membership</h3>
                <a href="/membership/offer/free-trials" className="shop-btn">
                  Click Here
                </a>
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
    </div>
  );
}

export default BlogSidebar;
