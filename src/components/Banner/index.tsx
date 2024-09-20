import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './BannerCarousel.module.css';

interface BannerItem {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageSrc: string;
}

interface BannerCarouselProps {
  banners: BannerItem[];
}

const BannerCarousel: React.FC<BannerCarouselProps> = ({ banners }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [banners.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
  };

  return (
    <div className={styles.carouselContainer}>
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`${styles.bannerSlide} ${
            index === currentIndex ? styles.active : ''
          }`}
          style={{
            backgroundImage: `url(${banner.imageSrc})`,
          }}
        >
          <div className={styles.bannerContent}>
            <div className={styles.bannerText}>
              <h2 className={styles.bannerTitle}>{banner.title}</h2>
              <p className={styles.bannerDescription}>{banner.description}</p>
              <a href={banner.buttonLink} className={styles.bannerButton}>
                {banner.buttonText}
              </a>
            </div>
          </div>
        </div>
      ))}
      <button onClick={goToPrevious} className={`${styles.carouselButton} ${styles.prevButton}`}>
        <ChevronLeft size={24} />
      </button>
      <button onClick={goToNext} className={`${styles.carouselButton} ${styles.nextButton}`}>
        <ChevronRight size={24} />
      </button>
      <div className={styles.indicators}>
        {banners.map((_, index) => (
          <div
            key={index}
            className={`${styles.indicator} ${
              index === currentIndex ? styles.activeIndicator : ''
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;