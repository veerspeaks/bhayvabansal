"use client"; // Marks this as a client-side component
import React, { useState} from 'react';
import styles from './AboutPage.module.css';
import Sphere from './Sphere';
import ExpandableSphere from './ExpandableSphere';

function AboutPage() { 
    // State to track which sphere is currently expanded (null means none are expanded)
    const [expandedSphere, setExpandedSphere] = useState(null);

    // Handler for sphere clicks - toggles expansion state
    // If clicked sphere is already expanded, it collapses (null)
    // If different sphere is clicked, it expands and others collapse
    const handleSphereClick = (sphere) => {
      setExpandedSphere(expandedSphere === sphere ? null : sphere);
    };

  return (
    // Main container for the about section
    <section className={styles.about}>
      {/* Content container for text and spheres */}
      <div className={styles.content}>
        {/* Header section */}
        <h2>About Me</h2>
        <p>
          In the world of disrupting technologies, I am keen to keep myself updated, to learn new things and to implement them.And I am always looking out for new talents who shares the same passion for technology to guide them.
        </p>
        
        {/* Container for all interactive spheres */}
        <div className={styles.spheresContainer}>
          {/* Top Skills Sphere */}
          <ExpandableSphere
            color="#FFF6E9"  // Sphere background color
            text1="Top Skills"  // Sphere title
            onClick={() => handleSphereClick('skills')}  // Click handler
            isExpanded={expandedSphere === 'skills'}  // Is this sphere expanded?
            anyExpanded={expandedSphere !== null}  // Is any sphere expanded?
            details={[  // Content shown when expanded
              'Prompt Engineering',
              'ChatGPT',
              'Natural Language Processing (NLP)',
            ]}
          />

          {/* Certifications Sphere - Similar structure to Top Skills */}
          <ExpandableSphere
            color="#FFF6E9"
            text1="Certifications"
            onClick={() => handleSphereClick('certifications')}
            isExpanded={expandedSphere === 'certifications'}
            anyExpanded={expandedSphere !== null}
            details={[
              
              'Python for Data Science AI & Development',
              'Data Visualization with Python',
              
            ]}
          />

          {/* Experience Sphere - Similar structure */}
          <ExpandableSphere
            color="#FFF6E9"
            text1="Experience"
            onClick={() => handleSphereClick('experience')}
            isExpanded={expandedSphere === 'experience'}
            anyExpanded={expandedSphere !== null}
            details={[
              'CTO @Persist Ventures',
              'CTO @FacesearchAI',
              

            ]}
          />

          {/* Education Sphere - Similar structure */}
          <ExpandableSphere
            color="#FFF6E9"
            text1="Education"
            onClick={() => handleSphereClick('education')}
            isExpanded={expandedSphere === 'education'}
            anyExpanded={expandedSphere !== null}
            details={[
              'B.Tech',
              'Dr. A.P.J. Abdul Kalam Technical University',
              
            ]}
          />
        </div>
      </div>

      {/* Additional decorative sphere */}
      <Sphere
        color="#FBF8EF"
        text1="Chief Technology Officer"
        text2="Persist Ventures"
        expandTrigger={{ start: 0.3, end: 0.38 }}
        initialSize={50}
        anyExpanded={expandedSphere !== null}
        zIndex={20}
        maxScale={50}
      />
    </section>
  );
}

export default AboutPage;