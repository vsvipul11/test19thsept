import React, { useState } from 'react';
import styles from './TestimonialCarousel.module.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: string;
  content: string;
  author: string;
  location: string;
  avatar: string;
}

interface TestimonialCarouselProps {
  title: string;
  testimonials: Testimonial[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ title, testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.carouselContainer}>
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`${styles.testimonialCard} ${
              index === currentIndex ? styles.active : ''
            }`}
          >
            <p className={styles.testimonialContent}>{testimonial.content}</p>
            <div className={styles.authorInfo}>
              <img
                src={testimonial.avatar}
                alt={testimonial.author}
                className={styles.avatar}
              />
              <div>
                <p className={styles.authorName}>{testimonial.author}</p>
                <p className={styles.authorLocation}>{testimonial.location}</p>
              </div>
            </div>
          </div>
        ))}
        <button className={`${styles.navButton} ${styles.prevButton}`} onClick={goToPrevious}>
          <ChevronLeft size={24} />
        </button>
        <button className={`${styles.navButton} ${styles.nextButton}`} onClick={goToNext}>
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;