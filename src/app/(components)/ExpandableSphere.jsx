"use client";
import React, { useEffect, useState } from 'react';
import styles from './ExpandableSphere.module.css';
import { motion } from 'framer-motion';

function ExpandableSphere({ color, text1, onClick, isExpanded, details, anyExpanded }) {
  // State to track the position of each sphere
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Default positions for spheres when none are expanded
    const positions = [
      { x: 120, y: 60 },  // top left sphere position
      { x: 500, y: 120 },  // top right sphere position
      { x: 150, y: 320 },  // bottom left sphere position
      { x: 400, y: 350 },  // bottom right sphere position
    ];
    
    // Assign fixed positions based on sphere content to maintain consistency
    let index;
    switch(text1) {
      case "Top Skills": index = 0; break;      // Will go to top left
      case "Certifications": index = 1; break;  // Will go to top right
      case "Experience": index = 2; break;      // Will go to bottom left
      case "Education": index = 3; break;       // Will go to bottom right
      default: index = 0;
    }

    if (isExpanded) {
      // When sphere is expanded, move it to center of container
      setPosition({ x: 250, y: 100 }); // Container center coordinates
    } else {
      // Positions for non-expanded spheres when one sphere is expanded
      const cornerPositions = anyExpanded ? {
        0: { x: 100, y: 80 },   // Minimized top left position
        1: { x: 700, y: 80 },   // Minimized top right position
        2: { x: 100, y: 420 },  // Minimized bottom left position
        3: { x: 700, y: 420 },  // Minimized bottom right position
      } : positions;

      // Add slight randomness to positions for organic feel
      const randomOffset = 20; // Maximum random movement in pixels
      const basePosition = cornerPositions[index];
      const randomX = basePosition.x + (Math.random() - 0.5) * randomOffset;
      const randomY = basePosition.y + (Math.random() - 0.5) * randomOffset;
      
      setPosition({ x: randomX, y: randomY });
    }
  }, [text1, isExpanded, anyExpanded]); // Recalculate positions when these props change

  return (
    <motion.div
      className={styles.expandableSphere}
      style={{ 
        backgroundColor: color,
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: isExpanded ? 'translate(-50%, -50%)' : 'none', // Centers expanded sphere
        borderRadius: '50%', // Makes div circular
      }}
      whileHover={{ 
        scale: isExpanded ? 1 : 1.1, // Hover effect only when not expanded
        boxShadow: '0 8px 20px rgba(0,0,0,0.2)', // Enhanced shadow on hover
      }}
      onClick={onClick}
      animate={{ 
        // Size animations based on state
        width: isExpanded ? '350px' : anyExpanded ? '100px' : '180px', // Normal -> 180px, Minimized -> 100px, Expanded -> 350px
        height: isExpanded ? '350px' : anyExpanded ? '100px' : '180px',
        zIndex: isExpanded ? 10 : 1, // Brings expanded sphere to front
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300, // Controls bounce stiffness
        damping: 30,    // Controls bounce dampening
        bounce: 0.25    // Controls bounce intensity
      }}
    >
      {/* Content container for expanded state */}
      <motion.div
        className={styles.content}
        initial={{ opacity: 0 }}
        animate={{ opacity: isExpanded ? 1 : 0 }} // Fade in/out content
        transition={{ duration: 0.5 }}
      >
        {/* Details shown only in expanded state */}
        {isExpanded && (
          <div className={styles.details}>
            {details.map((detail, index) => (
              <p key={index}>{detail}</p>
            ))}
          </div>
        )}
      </motion.div>
      {/* Title text container */}
      <div 
        className={styles.text} 
        style={{ 
          opacity: isExpanded ? 0 : 1, // Hide text when expanded
          fontSize: anyExpanded ? '0.8em' : '1em' // Smaller text when others are expanded
        }}
      >
        <span className={`${styles.text1} ${anyExpanded ? styles.smallText : ''}`}>
          {text1}
        </span>
      </div>
    </motion.div>
  );
}

export default ExpandableSphere;