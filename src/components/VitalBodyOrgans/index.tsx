import React from 'react';
import styles from './VitalBodyOrgans.module.css';

interface Organ {
  name: string;
  icon: string;
}

interface VitalBodyOrgansProps {
  title: string;
  description: string;
  organs: Organ[];
  buttonText: string;
}

const VitalBodyOrgans: React.FC<VitalBodyOrgansProps> = ({ title, description, organs, buttonText }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <button className={styles.button}>{buttonText}</button>
      </div>
      <div className={styles.organsGrid}>
        {organs.map((organ, index) => (
          <div key={index} className={styles.organItem}>
            <img src={organ.icon} alt={organ.name} className={styles.organIcon} />
            <p className={styles.organName}>{organ.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VitalBodyOrgans;