"use client";
import React from 'react';
import styles from './LandingPage.module.css';
import Sphere from './Sphere';

function LandingPage() {
  return (
    <section className={styles.landing}>
      <div className={styles.content}>
        <h1>Bhavya Bansal</h1>
        <p>/ AI developer</p>
        <p>/ Full Stack Engineer</p>
      </div>
      <Sphere
        color="#78B3CE"
        text1="Chief Technology Officer"
        text2="Persist Ventures"
        expandTrigger={{ start: 0.1, end: 0.2 }}
        textColor="#ffffff"
        initialSize={50}
        zIndex={5}
      />
    </section>
  );
}

export default LandingPage;