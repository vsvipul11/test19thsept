import React from 'react';
import Image from 'next/image';
import styles from './Features.module.css';

interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesProps {
  features: FeatureItem[];
}

const Features: React.FC<FeaturesProps> = ({ features }) => {
  return (
    <section className={styles.features}>
      {features.map((feature, index) => (
        <div key={index} className={styles.featureItem}>
          <div className={styles.iconWrapper}>
            <Image src={feature.icon} alt={feature.title} width={40} height={40} />
          </div>
          <h3 className={styles.featureTitle}>{feature.title}</h3>
          <p className={styles.featureDescription}>{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;