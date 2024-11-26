"use client";

import React, { useEffect, useState } from 'react';
import styles from './LoadingScreen.module.css';

const LoadingScreen = ({ onComplete }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      onComplete();
    }, 3000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`${styles.loadingContainer} ${isAnimating ? styles.animate : ''}`}>
      <div className={styles.ball}></div>
    </div>
  );
};

export default LoadingScreen;