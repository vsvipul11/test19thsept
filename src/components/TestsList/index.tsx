import React from 'react';
import Link from 'next/link';
import styles from './TestsList.module.css';

interface Test {
  name: string;
  link: string;
}

interface TestsListProps {
  bloodTests: Test[];
  popularTests: Test[];
}

const TestsList: React.FC<TestsListProps> = ({ bloodTests, popularTests }) => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2 className={styles.title}>Blood Tests near me</h2>
        <div className={styles.testGrid}>
          {bloodTests.map((test, index) => (
            <Link key={index} href={test.link} className={styles.testLink}>
              {test.name}
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Popular tests</h2>
        <div className={styles.testGrid}>
          {popularTests.map((test, index) => (
            <Link key={index} href={test.link} className={styles.testLink}>
              {test.name}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TestsList;