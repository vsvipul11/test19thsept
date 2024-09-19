// Hero.js
'use client'

import Image from 'next/image'
import styles from './Hero.module.css'
import { Search, Clock } from 'lucide-react'

export default function Hero({
  title = "Need a Dengue test?",
  subtitle = "CHOOSE THE FASTEST LAB",
  buttonText = "Find a Lab",
  imageSrc = "/hero-img.jpg"
}) {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.subtitle}>{subtitle}</h2>
          <div className={styles.searchContainer}>
            <div className={styles.searchBar}>
              <Search size={20} className={styles.searchIcon} />
              <input type="text" placeholder="Search for tests or checkups" />
            </div>
            <button className={styles.searchButton}>{buttonText}</button>
          </div>
          <div className={styles.infoBox}>
            <div className={styles.infoItem}>
              <Clock size={24} className={styles.infoIcon} />
              <div className={styles.infoText}>
                <span>Reports in</span>
                <strong>6 HOURS</strong>
              </div>
            </div>
            <div className={styles.infoItem}>
              <Image src="/lab-icon.svg" alt="Lab" width={24} height={24} />
              <div className={styles.infoText}>
                <span>Certified</span>
                <strong>LABS</strong>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src={imageSrc}
            alt="Medical professional"
            width={500}
            height={500}
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
  )
}


