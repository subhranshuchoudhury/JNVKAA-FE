import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, EffectFade } from "swiper";
import { useMemo } from "react";
SwiperCore.use([Navigation, Autoplay, EffectFade]);
function AboutContent() {
    const slide = useMemo(()=>{
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
            <svg width={11} height={14} viewBox="0 0 11 14" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.15888 13.1844C8.73336 10.6029 8.07416 7.35423 5.59136 5.46029C5.58991 5.45922 5.58846 5.45788 5.5873 5.45708L5.59803 5.48172L5.59629 5.5002C6.08003 6.68033 6.01217 7.97589 5.41793 9.08745L4.99915 9.87117L4.87068 9.00522C4.78338 8.41784 4.54354 7.85751 4.17407 7.3778H4.11578L4.08503 7.29744C4.08938 8.19499 3.88464 9.07915 3.48297 9.91322C2.95602 11.0047 3.03345 12.2633 3.69033 13.2806L4.14362 13.9829L3.3281 13.6647C1.98331 13.1399 0.908237 12.1291 0.378384 10.8914C-0.215271 9.50931 -0.105357 7.90679 0.672747 6.6056C1.07847 5.92875 1.36269 5.21012 1.51784 4.46926L1.66952 3.74314L2.0564 4.39079C2.24113 4.69961 2.37715 5.03388 2.46154 5.38503L2.47024 5.39333L2.47923 5.44958L2.48765 5.44717C3.64654 4.02518 4.34083 2.25579 4.44204 0.464176L4.46814 0L4.88982 0.253917C6.61075 1.28967 7.80589 2.95139 8.17508 4.81853L8.18349 4.85684L8.18784 4.86273L8.20669 4.83809C8.54398 4.42668 8.72204 3.93732 8.72204 3.42226V2.62461L9.2432 3.26048C10.4549 4.73845 11.0761 6.57185 10.9926 8.42319C10.8899 10.6024 9.6031 12.5151 7.5501 13.5514L6.66121 14L7.15888 13.1844Z" />
            </svg>
            <span>&nbsp;Who We Are</span>
            </div>
            <h2>Unleashing Creativity: A Glimpse of our work's in the World</h2>
        </div>
        </div>
        <div className="about-us-wrapper">
        <div className="row gy-4">
            <div className="col-lg-6">
            <div className="about-us-left">
                <p>vestibulum gomat dictum, lorem nibh faucibus quam, non mattis dutoma augue ac quam. Donec placeratena nibh ac turpis cursus, ut blandit ante ullamcorper. Pellentesque lorem nisl, vehiculalut quis libero in, dignissimi fringilla odio. Vivamus congue commodo euismod. Integer ac purusantut aliquam, dapibus ipsum vel, accumsan massa. Proin imperdiet, lectusont nonprotai convallis pretium, justo dui rhoncus nunc, non vestibulum urna augue sed libero. andt Mauris sed sagittis dolor. Suspendisse europeana tincidunt purus, tristique rhoncu.</p>
                <img src="assets/images/about/about-left-img.jpg" alt="" />
            </div>
            </div>
            <div className="col-lg-6">
            <div className="about-us-right">
                <div className="about-us-right-img">
                <Swiper {...slide} className="swiper about-us-slider">
                    <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                        <img src="assets/images/about/about-right-img1.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="assets/images/about/about-right-img2.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="assets/images/about/about-right-img3.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src="assets/images/about/about-right-img4.jpg" alt="" />
                    </SwiperSlide>
                    </div>
                </Swiper>
                <div className="about-us-slider-btn" style={{cursor:"pointer"}}>
                    <div className="about-us-prev" >
                    <i className="bi bi-arrow-left" />
                    </div>
                    <div className="about-us-next">
                    <i className="bi bi-arrow-right" />
                    </div>
                </div>
                </div>
                <div className="counter-area">
                <div className="row g-lg-0 gy-4">
                    <div className="col-lg-3 col-sm-3 col-6 d-flex jusify-content-sm-start justify-content-center">
                    <div className="single-counter">
                        <div className="icon">
                        <img src="assets/images/about/about-counter-icon1.svg" alt="" />
                        </div>
                        <div className="content">
                        <div className="number">
                            <h3 className="counter2">10.39</h3>
                            <h3>k</h3>
                        </div>
                        <p>Perfect Posts</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-sm-3 col-6 d-flex jusify-content-sm-start justify-content-center">
                    <div className="single-counter">
                        <div className="icon">
                        <img src="assets/images/about/about-counter-icon2.svg" alt="" />
                        </div>
                        <div className="content">
                        <div className="number">
                            <h3 className="counter2">19</h3>
                            <h3>k</h3>
                        </div>
                        <p>Social Shares</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-sm-3 col-6 d-flex jusify-content-sm-start justify-content-center">
                    <div className="single-counter">
                        <div className="icon">
                        <img src="assets/images/about/about-counter-icon3.svg" alt="" />
                        </div>
                        <div className="content">
                        <div className="number">
                            <h3 className="counter2">320</h3>
                        </div>
                        <p>Super Authors</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-sm-3 col-6 d-flex jusify-content-sm-start justify-content-center">
                    <div className="single-counter">
                        <div className="icon">
                        <img src="assets/images/about/about-counter-icon4.svg" alt="" />
                        </div>
                        <div className="content">
                        <div className="number">
                            <h3 className="counter2">25.7</h3>
                            <h3 className>k</h3>
                        </div>
                        <p>Daily Visitors</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>

  )
}

export default AboutContent
