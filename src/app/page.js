"use client";
import React from 'react';
import LandingPage from './(components)/LandingPage';
import AboutPage from './(components)/AboutPage';
import PhilosophiesPage from './(components)/PhilosophiesPage';
import Footer from './(components)/Footer';
import Experience from './(components)/Experience';


export default function Home() {
  return (
    <>
      <LandingPage />
      
      <AboutPage />
      
      <PhilosophiesPage />
      <Experience />
      <Footer />
      
    </>
  );
}
