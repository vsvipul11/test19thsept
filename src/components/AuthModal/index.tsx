'use client'

import React, { useState } from 'react';
import styles from './AuthModal.module.css';
import OTPVerification from '../OTPVerification';
import Image from 'next/image';

interface AuthModalProps {
  onClose: () => void;
  onLogin: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ onClose, onLogin }) => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [isOTPSent, setIsOTPSent] = useState<boolean>(false);

  const handleGetOTP = async (): Promise<void> => {
    try {
      const response = await fetch('https://cadabamsapi.exar.ai/api/v1/user/auth/get-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobile: phoneNumber }),
      });

      if (response.ok) {
        setIsOTPSent(true);
      } else {
        console.error('Failed to send OTP');
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  return (
    <div className={styles.authModalOverlay}>
      <div className={styles.authModalContent}>
        <div className={styles.banner}>
          <Image src="/api/placeholder/400/320" alt="Lab technician" width={150} height={150} className={styles.bannerImage} />
          <div className={styles.bannerText}>
            <p><span className={styles.icon}>🏆</span> In-house labs NABL certified</p>
            <p><span className={styles.icon}>🕒</span> 60 mins collection 6 AM - 10 PM</p>
          </div>
        </div>
        
        <h2 className={styles.title}>Sign in to continue</h2>
        <p className={styles.subtitle}>This is to verify your mobile number.</p>
        
        {!isOTPSent ? (
          <>
            <div className={styles.inputContainer}>
              <span className={styles.countryCode}>+91</span>
              <input
                type="tel"
                placeholder="Enter mobile number"
                value={phoneNumber}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value)}
                className={styles.input}
              />
            </div>
            <button onClick={handleGetOTP} className={styles.getOtpButton}>Get OTP</button>
          </>
        ) : (
          <OTPVerification phoneNumber={phoneNumber} onLogin={onLogin} />
        )}
        
        <p className={styles.disclaimer}>
          We will send order updates on this number via WhatsApp.<br />
          By continuing you accept our <a href="#" className={styles.link}>T&C</a> and <a href="#" className={styles.link}>Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;