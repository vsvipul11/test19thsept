import React from 'react';
import styles from './MostBookedCheckups.module.css';
import { ChevronRight } from 'lucide-react';

interface Checkup {
  title: string;
  icon: string;
  color: string;
}

interface MostBookedCheckupsProps {
  title: string;
  description: string;
  checkups: Checkup[];
  viewAllText: string;
}

const MostBookedCheckups: React.FC<MostBookedCheckupsProps> = ({
  title,
  description,
  checkups,
  viewAllText,
}) => {
  return (
    <section className={styles.mostBookedCheckups}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
          <button className={styles.viewAllButton}>{viewAllText}</button>
        </div>
        <div className={styles.checkupsGrid}>
          {checkups.map((checkup, index) => (
            <div
              key={index}
              className={`${styles.checkupCard} ${styles[`checkupColor${index + 1}`]}`}
            >
              <div className={styles.checkupContent}>
                <img src={checkup.icon} alt={checkup.title} className={styles.checkupIcon} />
                <span className={styles.checkupTitle}>{checkup.title}</span>
              </div>
              <ChevronRight className={styles.chevronIcon} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MostBookedCheckups;