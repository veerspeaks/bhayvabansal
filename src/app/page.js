"use client";
import React, { useState, useEffect } from 'react';
import LandingPage from './(components)/LandingPage';
import AboutPage from './(components)/AboutPage';
import PhilosophiesPage from './(components)/PhilosophiesPage';
import Footer from './(components)/Footer';
import Experience from './(components)/Experience';
import LoadingScreen from './(components)/LoadingScreen';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Match this duration with the animation duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <>
          <LandingPage />
          <AboutPage />
          <PhilosophiesPage />
          <Experience />
          <Footer />
        </>
      )}
    </>
  );
}
