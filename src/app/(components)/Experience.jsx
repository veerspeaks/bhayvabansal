"use client";
import React, { useEffect, useRef, useState } from 'react';
import styles from './Experience.module.css';
import Sphere from './ExpandableSphere';

function Experience() {
  const [currentYear, setCurrentYear] = useState('2024');
  const sectionsRef = useRef([]);

  const experiences = [
    {
      year: '2024',
      details: [
        {
          title: 'CTO @ Persist Ventures',
          duration: 'Present',
        },
      ],
    },
    {
      year: '2023',
      details: [
        {
          title: 'CTO @ FacesearchAI',
          duration: 'Present',
        },
        {
          title: 'Full Stack Engineer @ HeyDaw Technologies',
          duration: '',
        },
      ],
    },
    {
      year: '2022',
      details: [
        {
          title: 'Software Engineer @ Telaverge Communications',
          duration: '',
        },
      ],
    },
  ];

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentYear(entry.target.getAttribute('data-year'));
        }
      });
    }, options);

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <section className={styles.experience}>
      <div className={styles.yearColumn}>
        <div className={styles.yearDisplay}>{currentYear}</div>
      </div>
      <div className={styles.detailsColumn}>
        {experiences.map((item, index) => (
          <div
            key={item.year}
            data-year={item.year}
            ref={(el) => (sectionsRef.current[index] = el)}
            className={styles.experienceSection}
          >
            {item.details.map((detail, idx) => (
              <div key={idx} className={styles.detail}>
                <h3>{detail.title}</h3>
                {detail.duration && <p>{detail.duration}</p>}
              </div>
            ))}
          </div>
        ))}
      </div>
      
    </section>
  );
}

export default Experience;