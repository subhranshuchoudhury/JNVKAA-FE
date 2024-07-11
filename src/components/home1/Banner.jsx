// VISITED: SUBHRANSHU CHOUDHURY

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, EffectFade } from "swiper";
import { useMemo , useContext } from "react";
import Link from "next/link";
import carouselData from '@/data/carousel/carousel.json'
import Image from "next/image";
import { ThemeContext } from "../ThemeContext";

SwiperCore.use([Navigation, Autoplay, EffectFade]);

function Banner() {
  const { theme } = useContext(ThemeContext);
  const slider = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1400,
      spaceBetween: 20,
      loop: true,

      autoplay: {
        delay: 1000, // Autoplay duration in milliseconds
      },
      navigation: {
        nextEl: ".banner1-next",
        prevEl: ".banner1-prev",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        386: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 3.3,
          centeredSlides: true,
        },
        1400: {
          slidesPerView: 3.7,
          centeredSlides: true,
        },
        1600: {
          slidesPerView: 4.4,
          centeredSlides: true,
        }
      }
    };
  }, []);
  return (
    <section className="banner-section-1">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 mb-30">
            <div id="myTabContent" className="tab-content">
              <div className="tab-pane fade active show" id="tab-one" role="tabpanel">
                <Swiper {...slider} className="swiper banner-1-slider">
                  <div className="swiper-wrapper">
                    {
                      carouselData?.map((post, index) => {
                        return <SwiperSlide key={index} className="swiper-slide">
                          <div className="blog-grid-3">
                            <Link legacyBehavior href="/"><a className="eg-badge badge--red">{post?.badge}</a></Link>
                            <a className="image">
                              {post?.image && <Image style={{
                                objectFit: "cover"
                              }} fill src={post?.image} alt="image" />}
                            </a>
                          </div>
                        </SwiperSlide>
                      })
                    }
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
          <div className="col-12 text-center d-flex align-items-center justify-content-center gap-5">
            <div className={`banner1-prev swiper-prev-arrow ${theme === "dark" ? "border border-white rounded-circle" : ""}`} tabIndex={0} role="button" aria-label="Previous slide">
              <i className={`bi bi-arrow-left ${theme === "dark" ? "text-light" : ""}`} />
            </div>
            <ul className="nav nav-tabs nav-style-1 justify-content-center" role="tablist">
              <li className="nav-item" role="presentation">
                <p className={`${theme === "dark" ? "text-light" : "text-primary"}`} style={{
                  fontSize: '15px', fontWeight: 'bold', color: 'black',margin: "1rem 0"
                }}>JNVKAA</p>
              </li>

            </ul>
            <div className={`banner1-next swiper-next-arrow ${theme === "dark" ? "border border-white rounded-circle" : ""}`} tabIndex={0} role="button" aria-label="Next slide">
              <i className={`bi bi-arrow-right ${theme === "dark" ? "text-light" : ""}`} />
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Banner;
