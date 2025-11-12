import { useState, useEffect, useCallback } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import styles from "./TestimonialSlider.module.css";

const testimonials = [
  {
    id: 1,
    name: "Garreth Smith",
    role: "UI DESIGNER",
    company: "TechCorp",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    rating: 5,
    number: "66",
  },
  {
    id: 2,
    name: "Garreth Smith",
    role: "WEB DEVELOPER",
    company: "InnovateX",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    rating: 5,
    number: "66",
  },
  {
    id: 3,
    name: "Garreth Smith",
    role: "SYSTEM ANALYST",
    company: "Digital Dynamics",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    rating: 5,
    number: "62",
  },
  {
    id: 4,
    name: "Garreth Smith",
    role: "MARKETING HEAD",
    company: "Creative Labs",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    rating: 5,
    number: "63",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Handle responsive slides
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(3);
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= testimonials.length - slidesToShow + 1
        ? 0
        : nextIndex;
    });
  }, [slidesToShow]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const prevSlideIndex = prevIndex - 1;
      return prevSlideIndex < 0
        ? testimonials.length - slidesToShow
        : prevSlideIndex;
    });
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    let intervalId: number;
    if (isAutoPlaying && testimonials.length > slidesToShow) {
      intervalId = setInterval(nextSlide, 4000);
    }
    return () => clearInterval(intervalId);
  }, [isAutoPlaying, nextSlide, slidesToShow]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section className={styles.testimonialSection}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our satisfied customer says</h2>
          <p className={styles.sectionDescription}>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in
          </p>
        </div>

        {/* Slider Container */}
        <div
          className={styles.sliderContainer}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.sliderWrapper}>
            <div
              className={styles.sliderTrack}
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / slidesToShow)
                }%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className={styles.slide}>
                  <div className={styles.testimonialCard}>
                    {/* Quote Icon */}
                    <div className={styles.quoteIcon}>
                      <FaQuoteRight />
                    </div>

                    {/* Testimonial Number */}
                    <div className={styles.testimonialNumber}>
                      {testimonial.number}
                    </div>

                    {/* Divider */}
                    <div className={styles.divider}></div>

                    {/* Testimonial Text */}
                    <p className={styles.testimonialText}>{testimonial.text}</p>

                    {/* Customer Info */}
                    <div className={styles.customerInfo}>
                      <div className={styles.customerImage}>
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className={styles.avatar}
                        />
                      </div>
                      <div className={styles.customerDetails}>
                        <h4 className={styles.customerName}>
                          {testimonial.name}
                        </h4>
                        <p className={styles.customerRole}>
                          {testimonial.role}
                        </p>

                        {/* Rating Stars */}
                        <div className={styles.rating}>
                          {[...Array(5)].map((_, index) => (
                            <AiFillStar key={index} className={styles.star} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {testimonials.length > slidesToShow && (
            <>
              <button
                onClick={prevSlide}
                className={styles.navButton}
                aria-label="Previous testimonial"
              >
                <FiChevronLeft />
              </button>

              <button
                onClick={nextSlide}
                className={`${styles.navButton} ${styles.nextButton}`}
                aria-label="Next testimonial"
              >
                <FiChevronRight />
              </button>
            </>
          )}

          {/* Dots Indicator */}
          {testimonials.length > slidesToShow && (
            <div className={styles.dotsContainer}>
              {Array.from({
                length: testimonials.length - slidesToShow + 1,
              }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`${styles.dot} ${
                    currentIndex === index ? styles.activeDot : ""
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Number Indicators */}
        <div className={styles.numberIndicators}>
          {["62", "63", "64", "65", "66"].map((number, index) => (
            <span key={index} className={styles.number}>
              {number}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
