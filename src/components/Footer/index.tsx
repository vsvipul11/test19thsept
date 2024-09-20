import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <Image src="/logo.png" alt="Cadabams Health Labs" width={200} height={50} />
          <div className={styles.socialIcons}>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Image src="/instagram-icon.png" alt="Instagram" width={24} height={24} />
            </Link>
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Image src="/facebook-icon.png" alt="Facebook" width={24} height={24} />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Image src="/linkedin-icon.png" alt="LinkedIn" width={24} height={24} />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Image src="/twitter-icon.png" alt="Twitter" width={24} height={24} />
            </Link>
          </div>
          <div className={styles.appStores}>
            <Link href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
              <Image src="/app-store.png" alt="Download on the App Store" width={120} height={40} />
            </Link>
            <Link href="https://play.google.com" target="_blank" rel="noopener noreferrer">
              <Image src="/google-play.png" alt="Get it on Google Play" width={135} height={40} />
            </Link>
          </div>
        </div>

        <div className={styles.linksSection}>
          <div className={styles.column}>
            <h3>Company</h3>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/blog">Blogs</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/nabl">NABL Data</Link></li>
              <li><Link href="/disclosure">Responsible Disclosure</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3>Partners</h3>
            <ul>
              <li><Link href="/for-doctors">For Doctors</Link></li>
              <li><Link href="/for-corporates">For Corporates</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3>Lab tests across Bangalore</h3>
            <ul>
              <li><Link href="/lab-test-indiranagar">Lab test in Indiranagar</Link></li>
              <li><Link href="/lab-test-koramangala">Lab test in Koramangala</Link></li>
              <li><Link href="/lab-test-jayanagar">Lab test in Jayanagar</Link></li>
              <li><Link href="/lab-test-whitefield">Lab test in Whitefield</Link></li>
              <li><Link href="/lab-test-marathahalli">Lab test in Marathahalli</Link></li>
              <li><Link href="/lab-test-electronic-city">Lab test in Electronic City</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3>Health checkups across Bangalore</h3>
            <ul>
              <li><Link href="/health-checkup-indiranagar">Health Checkup in Indiranagar</Link></li>
              <li><Link href="/health-checkup-koramangala">Health Checkup in Koramangala</Link></li>
              <li><Link href="/health-checkup-jayanagar">Health Checkup in Jayanagar</Link></li>
              <li><Link href="/health-checkup-whitefield">Health Checkup in Whitefield</Link></li>
              <li><Link href="/health-checkup-marathahalli">Health Checkup in Marathahalli</Link></li>
              <li><Link href="/health-checkup-electronic-city">Health Checkup in Electronic City</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>© 2024 Cadabams Healthcare Pvt. Ltd. All rights reserved</p>
        <div>
          <Link href="/terms">TERMS</Link> | <Link href="/privacy">PRIVACY POLICY</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;