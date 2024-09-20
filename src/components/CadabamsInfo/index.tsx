import React from 'react';
import styles from './CadabamsInfo.module.css';

const CadabamsInfo: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Cadabams Labs: Who Are We</h2>
      <p className={styles.description}>
        Welcome to Cadabams Labs! Experience the convenience of a high-quality diagnostic laboratory, within the comfort of your home. We provide laboratory services that bring cutting-edge diagnostics right to your doorstep, ensuring you have easy access to essential healthcare solutions. We are your trusted partners, backed by certifications, ensuring top-notch accuracy and quality. With a track record of exceeding 1,000,000 tests, our credibility is trusted by healthcare professionals. So, get ready to embrace the luxury of premium diagnostics without stepping out of the comfort of your home - because your well-being deserves nothing but the best.
      </p>

      <h3 className={styles.subtitle}>Steps to Book a Test/ Health Package</h3>
      <p className={styles.description}>
        Say goodbye to long queues and hello to hassle-free blood sample collection from our pathology lab right at your doorstep. Here's a straightforward step-by-step guide: • Visit www.orangehealth.in or use the Cadabams Lab Test At Home app. • Provide your details through the platform. • Skilled, trained, and vaccinated eMedics will reach you within 60 minutes or as per your chosen time slot. • Collected samples will be sent straight to our accredited pathology laboratory for testing. • Expect your test reports via WhatsApp & Email within 6 hours, based on the tests done. • You can also conveniently access your reports on our app for easy reference.
      </p>

      <h3 className={styles.subtitle}>Frequently Asked Questions</h3>
      <div className={styles.faqContainer}>
        {[
          {
            question: "Why should you choose Cadabams Labs over other pathology labs?",
            answer: "Cadabams Labs stands out as the fastest diagnostic lab in town. From rapid at-home testing to expert eMedics, we blend cutting-edge diagnostics with comfort. With lab approval, we're your trusted path to accurate results. Experience health on your terms!"
          },
          {
            question: "How does home collection within 60 minutes work?",
            answer: "We guarantee home pathology services within just 60 minutes from order placement in Bangalore, Delhi, Gurugram, Noida, Hyderabad, Faridabad, and Mumbai. Our skilled, vaccinated eMedics, following your chosen schedule, will arrive at your door. Your sample will be carefully handled, maintained at the right temperature, and transported to our lab. And rest assured, the results will reach you with even greater speed!"
          },
          {
            question: "How are reports delivered?",
            answer: "You will receive your reports via WhatsApp within 6 hours for most tests with our diagnostic laboratory. Additionally, you can access and view the reports on our app at any time."
          },
          {
            question: "What are the modes of payment available for booking?",
            answer: "We offer a range of convenient payment options for our home pathology services. These include UPI, Mastercard, Visa card, Debit cards, and Credit card options. The choice is yours!"
          },
          {
            question: "Can I cancel a test booking?",
            answer: "For any queries about canceling a test booking, just chat with us via WhatsApp at 9008111144. We're here to help, and we'll get back to you in a flash!"
          },
          {
            question: "Can I reschedule a booked test?",
            answer: "If the need to reschedule a booked test arises or if you're seeking answers on our diagnostic lab services, simply chat with us via WhatsApp at 9008111144. Our team is primed to swiftly address your queries and provide the support you seek."
          }
        ].map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <h4 className={styles.question}>{faq.question}</h4>
            <p className={styles.answer}>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CadabamsInfo;