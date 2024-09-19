import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './HealthMonitoring.module.css';
import Card from '../Card';

interface CardProps {
  title: string;
  originalPrice: number;
  discountedPrice: number;
  discount: string;
  parameters: number;
  reportDate: string;
  cardTitle: string;
  cardDescription: string;
  cardTrustedBy: string;
}

interface HealthMonitoringProps {
  title: string;
  description: string;
  trustedBy: string;
  imageSrc: string;
  cards: CardProps[];
}

const HealthMonitoring: React.FC<HealthMonitoringProps> = ({
  title,
  description,
  trustedBy,
  imageSrc,
  cards,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (cards.length === 0) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [cards.length]);

  if (cards.length === 0) {
    return null; // Or return a placeholder component
  }

  const activeCard = cards[activeIndex];

  return (
    <section className={styles.healthMonitoring}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.cardContainer}>
            <Card {...activeCard} />
          </div>
          <div className={styles.info}>
            <h2 className={styles.title}>{activeCard.cardTitle || title}</h2>
            <p className={styles.description}>{activeCard.cardDescription || description}</p>
            <div className={styles.trusted}>
              <Image src="/trust-icon.svg" alt="Trusted" width={24} height={24} />
              <span>Trusted by {activeCard.cardTrustedBy || trustedBy}</span>
            </div>
          </div>
        </div>
        {cards.length > 1 && (
          <div className={styles.pagination}>
            {cards.map((_, index) => (
              <span
                key={index}
                className={`${styles.dot} ${index === activeIndex ? styles.active : ''}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HealthMonitoring;