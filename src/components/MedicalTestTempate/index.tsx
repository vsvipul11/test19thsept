import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ChevronRight, ChevronDown, Clock, AlertCircle, CheckCircle, Plus } from 'lucide-react';
import styles from './MedicalTestTemplate.module.css';
import Navbar from '../Navbar';

interface MedicalTestTemplateProps {
  title: string;
  price: number;
  discountedPrice: number;
  discount: string;
  peopleBooked: number;
  reportsWithin: string;
  parameters: number;
  requisites: string[];
  measures: string;
  identifies: string;
  description: string;
  testInfo: string;
  testPreparation: string;
  whyThisTest: string;
  faqs: Array<{ question: string; answer: string }>;
}

const MedicalTestTemplate: React.FC<MedicalTestTemplateProps> = ({
  title,
  price,
  discountedPrice,
  discount,
  peopleBooked,
  reportsWithin,
  parameters,
  requisites,
  measures,
  identifies,
  description,
  testInfo,
  testPreparation,
  whyThisTest,
  faqs,
}) => {
  const [activeSection, setActiveSection] = useState('about');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const sectionRefs = {
    about: useRef<HTMLDivElement>(null),
    parameters: useRef<HTMLDivElement>(null),
    preparation: useRef<HTMLDivElement>(null),
    why: useRef<HTMLDivElement>(null),
    faqs: useRef<HTMLDivElement>(null),
  };

  const navRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    sectionRefs[section as keyof typeof sectionRefs].current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for the sticky header

      Object.entries(sectionRefs).forEach(([key, ref]) => {
        if (ref.current && scrollPosition >= ref.current.offsetTop) {
          setActiveSection(key);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.container}>
    
      <div className={styles.banner}>
        <div className={styles.bannerContent}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.pricing}>
            <span className={styles.originalPrice}>₹{price}</span>
            <span className={styles.discountedPrice}>₹{discountedPrice}</span>
            <span className={styles.discount}>{discount} off</span>
          </div>
          <p className={styles.peopleBooked}>{peopleBooked}K people booked this test</p>
          <button className={styles.ctaButton}>
            Add to Cart <ChevronRight size={20} />
          </button>
          <div className={styles.offers}>
            <div className={styles.offer}>
              <Image src="/senior-icon.png" alt="Senior" width={24} height={24} />
              <span>SENIOR</span>
              <span>FLAT 10% OFF FOR SENIOR CITIZENS.</span>
              <Image src="/info-icon.png" alt="Info" width={16} height={16} />
            </div>
            <div className={styles.offer}>
              <Image src="/family-icon.png" alt="Family" width={24} height={24} />
              <span>FAMILY</span>
              <span>ADD A FAMILY MEMBER</span>
            </div>
          </div>
        </div>
        <div className={styles.bannerImage}>
          <Image src="/person-image.jpg" alt="Person" width={200} height={200} />
        </div>
      </div>

      <div className={styles.infoCards}>
        <div className={styles.infoCard}>
          <h3>Reports by</h3>
          <p>{reportsWithin}</p>
        </div>
        <div className={styles.infoCard}>
          <h3>Tests included</h3>
          <p>{parameters} <ChevronDown size={16} /></p>
        </div>
        <div className={styles.infoCard}>
          <h3>Requisites</h3>
          <div className={styles.requisites}>
            {requisites.map((req, index) => (
              <span key={index} className={styles.requisite}>
                <Image src={`/${req.toLowerCase().replace(' ', '-')}-icon.png`} alt={req} width={16} height={16} />
                {req}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.infoCards}>
        <div className={styles.infoCard}>
          <h3>Measures</h3>
          <p>{measures}</p>
        </div>
        <div className={styles.infoCard}>
          <h3>Identifies</h3>
          <p>{identifies}</p>
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statValue}>60</span>
          <span className={styles.statLabel}>Mins Home Collection</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statValue}>1M</span>
          <span className={styles.statLabel}>Happy Customers</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statValue}>4.9</span>
          <span className={styles.statLabel}>Google Rating</span>
        </div>
        <div className={styles.stat}>
          <Image src="/certified-labs-icon.png" alt="Certified Labs" width={24} height={24} />
          <span className={styles.statLabel}>Certified Labs</span>
        </div>
      </div>

      <nav ref={navRef} className={styles.nav}>
        {Object.keys(sectionRefs).map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={activeSection === section ? styles.active : ''}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </nav>

      <section id="about" ref={sectionRefs.about} className={styles.section}>
        <h2>What is a {title}?</h2>
        <p>{description}</p>
      </section>

      <section id="parameters" ref={sectionRefs.parameters} className={styles.section}>
        <h2>{title} Parameters</h2>
        <ul>
          {testInfo.split('\n').map((info, index) => (
            <li key={index}>{info}</li>
          ))}
        </ul>
      </section>

      <section id="preparation" ref={sectionRefs.preparation} className={styles.section}>
        <h2>Test Preparation</h2>
        <p>{testPreparation}</p>
      </section>

      <section id="why" ref={sectionRefs.why} className={styles.section}>
        <h2>Why Take the {title}?</h2>
        <p>{whyThisTest}</p>
      </section>

      <section id="faqs" ref={sectionRefs.faqs} className={styles.section}>
        <h2>FAQs on {title} in Mumbai</h2>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faq}>
            <button
              className={styles.faqQuestion}
              onClick={() => setActiveFaq(activeFaq === index ? null : index)}
            >
              {faq.question}
              <Plus
                className={`${styles.faqIcon} ${activeFaq === index ? styles.rotate : ''}`}
              />
            </button>
            {activeFaq === index && (
              <div className={styles.faqAnswer}>
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default MedicalTestTemplate;