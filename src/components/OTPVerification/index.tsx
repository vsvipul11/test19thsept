'use client'

import React, { useState, useEffect } from 'react';
import styles from './OTPVerification.module.css';

interface OTPVerificationProps {
  phoneNumber: string;
  onLogin: () => void;
}

const OTPVerification: React.FC<OTPVerificationProps> = ({ phoneNumber, onLogin }) => {
  const [otp, setOTP] = useState<string>('');
  const [timer, setTimer] = useState<number>(30);
  const [canResend, setCanResend] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timer > 0 && !canResend) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [timer, canResend]);

  const handleVerifyOTP = async (): Promise<void> => {
    try {
      const response = await fetch('http://13.233.99.54:4000/api/v1/user/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobile: phoneNumber, otp }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.isNewUser) {
          await handleSignup();
        } else {
          await handleSignin();
        }
        onLogin();
      } else {
        console.error('Failed to verify OTP');
        // Here you might want to show an error message to the user
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      // Here you might want to show an error message to the user
    }
  };

  const handleSignup = async (): Promise<void> => {
    try {
      const response = await fetch('http://13.233.99.54:4000/api/v1/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobile: phoneNumber, name: 'New User' }), // You may want to add a name input field
      });

      if (!response.ok) {
        console.error('Failed to sign up');
        // Here you might want to show an error message to the user
      }
    } catch (error) {
      console.error('Error signing up:', error);
      // Here you might want to show an error message to the user
    }
  };

  const handleSignin = async (): Promise<void> => {
    try {
      const response = await fetch('http://13.233.99.54:4000/api/v1/user/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobile: phoneNumber }),
      });

      if (!response.ok) {
        console.error('Failed to sign in');
        // Here you might want to show an error message to the user
      }
    } catch (error) {
      console.error('Error signing in:', error);
      // Here you might want to show an error message to the user
    }
  };

  const handleResendOTP = async (): Promise<void> => {
    try {
      const response = await fetch('http://13.233.99.54:4000/api/v1/user/get-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobile: phoneNumber }),
      });

      if (response.ok) {
        setTimer(30);
        setCanResend(false);
      } else {
        console.error('Failed to resend OTP');
        // Here you might want to show an error message to the user
      }
    } catch (error) {
      console.error('Error resending OTP:', error);
      // Here you might want to show an error message to the user
    }
  };

  return (
    <div className={styles.otpVerification}>
      <p className={styles.instruction}>
        Enter the 6-digit code sent to {phoneNumber}
      </p>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOTP(e.target.value)}
        className={styles.input}
        maxLength={6}
      />
      <button onClick={handleVerifyOTP} className={styles.verifyButton}>
        Verify OTP
      </button>
      <p className={styles.resendText}>
        {canResend ? (
          <>
            Didn't receive OTP?{' '}
            <button onClick={handleResendOTP} className={styles.resendButton}>
              Resend OTP
            </button>
          </>
        ) : (
          `Resend OTP in ${timer} seconds`
        )}
      </p>
    </div>
  );
};

export default OTPVerification;