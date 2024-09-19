import React from 'react';
import Image from 'next/image';
import styles from './Card.module.css';

interface CardProps {
  title: string;
  originalPrice: number;
  discountedPrice: number;
  discount: string;
  parameters: number;
  reportDate: string;
}

const Card: React.FC<CardProps> = ({
  title,
  originalPrice,
  discountedPrice,
  discount,
  parameters,
  reportDate,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.checkup}>Checkup</span>
        <span className={styles.discount}>{discount}</span>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.pricing}>
        <span className={styles.originalPrice}>₹{originalPrice}</span>
        <span className={styles.discountedPrice}>₹ {discountedPrice}</span>
      </div>
      <div className={styles.details}>
        <div className={styles.detailItem}>
          <Image src="/dna-icon.svg" alt="Parameters" width={20} height={20} />
          <span>{parameters} parameters included</span>
        </div>
        <div className={styles.detailItem}>
          <Image src="/calendar-icon.svg" alt="Report Date" width={20} height={20} />
          <span>Reports by {reportDate}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button className={styles.viewDetails}>View Details</button>
        <button className={styles.addToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;