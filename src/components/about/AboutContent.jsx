import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, EffectFade } from "swiper";
import { useMemo } from "react";
import { ThemeContext } from '../ThemeContext';
SwiperCore.use([Navigation, Autoplay, EffectFade]);
function AboutContent() {

    const { theme } = useContext(ThemeContext);

    const slide = useMemo(() => {
        return {
            slidesPerView: "auto",
            speed: 1500,
            spaceBetween: 20,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: true
            },
            navigation: {
                nextEl: ".about-us-next",
                prevEl: ".about-us-prev",
            },
        }
    })
    return (
        <section className="about-us mb-100">
            <div className="container">
                <div className="about-us-head">
                    <div className="section-title-1">
                        <div className="subtitle">
                            <svg width={11} height={14} viewBox="0 0 11 14" xmlns="http://www.w3.org/2000/svg" className={`${theme === "dark" ? "svg-fill" : ""}`}>
                                <path d="M7.15888 13.1844C8.73336 10.6029 8.07416 7.35423 5.59136 5.46029C5.58991 5.45922 5.58846 5.45788 5.5873 5.45708L5.59803 5.48172L5.59629 5.5002C6.08003 6.68033 6.01217 7.97589 5.41793 9.08745L4.99915 9.87117L4.87068 9.00522C4.78338 8.41784 4.54354 7.85751 4.17407 7.3778H4.11578L4.08503 7.29744C4.08938 8.19499 3.88464 9.07915 3.48297 9.91322C2.95602 11.0047 3.03345 12.2633 3.69033 13.2806L4.14362 13.9829L3.3281 13.6647C1.98331 13.1399 0.908237 12.1291 0.378384 10.8914C-0.215271 9.50931 -0.105357 7.90679 0.672747 6.6056C1.07847 5.92875 1.36269 5.21012 1.51784 4.46926L1.66952 3.74314L2.0564 4.39079C2.24113 4.69961 2.37715 5.03388 2.46154 5.38503L2.47024 5.39333L2.47923 5.44958L2.48765 5.44717C3.64654 4.02518 4.34083 2.25579 4.44204 0.464176L4.46814 0L4.88982 0.253917C6.61075 1.28967 7.80589 2.95139 8.17508 4.81853L8.18349 4.85684L8.18784 4.86273L8.20669 4.83809C8.54398 4.42668 8.72204 3.93732 8.72204 3.42226V2.62461L9.2432 3.26048C10.4549 4.73845 11.0761 6.57185 10.9926 8.42319C10.8899 10.6024 9.6031 12.5151 7.5501 13.5514L6.66121 14L7.15888 13.1844Z" />
                            </svg>
                            <span className={`${theme === "dark" ? "text-light" : ""}`}>&nbsp; Alumni Association</span>
                        </div>

                    </div>

                </div>
                <div className="about-us-wrapper">
                    <div className="row gy-4">

                        <div className="col-lg-6">
                            <div className="about-us-left">
                                <h2 className={`${theme === "dark" ? "text-light" : ""}`}>Mission Statement</h2>
                                <p className={`${theme === "dark" ? "text-light" : ""}`}>JNV Kendrapara Alumni Association (JNVKAA) is dedicated to cultivating enduring bonds among alumni and current students of JNVs, promoting their mutual growth, and contributing proactively towards the advancement of educational, cultural, and societal initiatives.
                                    We aim to uphold the values instilled by our Alma Mater, encouraging collaborative efforts, extending support to JNV aspirants, and enhancing the educational landscape while nurturing a spirit of unity, compassion, and lifelong learning among our members and the wider community.</p>
                                <img src={`/assets/images/about/right_image${theme === "dark" ? "_dark" : ""}.jpeg`} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-us-left">
                                <h2 className={`${theme === "dark" ? "text-light" : ""}`}>Vision Statement</h2>
                                <p className={`${theme === "dark" ? "text-light" : ""}`}>To foster a thriving and supportive community of Jawahar Navodaya Vidyalaya Kendrapara alumni committed to empowering educational excellence, social engagement, and holistic growth.</p>
                                <img src={`/assets/images/about/left_image${theme === "dark" ? "_dark" : ""}.jpeg`} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >

    )
}

export default AboutContent
