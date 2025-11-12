import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { motion } from "motion/react";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";
// @ts-ignore
import "swiper/css/effect-fade";
import styles from "./HeroSwiper.module.css";

import slide1 from "../../assets/hero/hero1.jpg";
import slide2 from "../../assets/hero/hero2.jpg";
import slide3 from "../../assets/hero/hero3.jpg";

const HeroSwiper: React.FC = () => {
  const slides = [
    {
      id: 1,
      image: slide1,
      title: "100% FRESH & ORGANIC FOODS",
      subtitle: "WE DELIVER ORGANIC VEGETABLES & FRUITS",
      buttonText: "View Details",
    },
    {
      id: 2,
      image: slide2,
      title: "HEALTHY LIVING STARTS HERE",
      subtitle: "FRESH FROM FARM TO YOUR DOORSTEP",
      buttonText: "Shop Now",
    },
    {
      id: 3,
      image: slide3,
      title: "NATURAL & NUTRITIOUS",
      subtitle: "PURE ORGANIC GOODNESS FOR YOUR FAMILY",
      buttonText: "Discover More",
    },
  ];

  return (
    <section className={styles.hero}>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: `.${styles.swiperPagination}`,
          bulletClass: styles.bullet,
          bulletActiveClass: styles.bulletActive,
        }}
        navigation={{
          nextEl: `.${styles.swiperButtonNext}`,
          prevEl: `.${styles.swiperButtonPrev}`,
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        className={styles.swiper}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className={styles.slide}>
            <div
              className={styles.slideBg}
              style={{ backgroundImage: `url(${slide.image})` }}
            />

            {/* Overlay */}
            <div className={styles.overlay}></div>

            {/* Content */}
            <div className="container">
              <div className={styles.content}>
                <motion.div
                  className={styles.textContent}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <h1 className={styles.title}>{slide.title}</h1>
                  <p className={styles.subtitle}>{slide.subtitle}</p>
                  <motion.button
                    className={`btn btn-primary ${styles.ctaButton}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {slide.buttonText}
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <div className={styles.swiperPagination}></div>

      {/* Custom Navigation Arrows */}
      <div className={styles.swiperButtonPrev}></div>
      <div className={styles.swiperButtonNext}></div>
    </section>
  );
};

export default HeroSwiper;
