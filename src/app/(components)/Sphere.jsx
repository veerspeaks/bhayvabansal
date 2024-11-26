"use client";
import React, { useState, useEffect } from 'react';
import styles from './Sphere.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';

function Sphere({ color, text1, text2, expandTrigger, onExpandComplete, textColor, zIndex, initialSize, maxScale = 100 }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [scaleFactor, setScaleFactor] = useState(1);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const viewportSize = Math.max(window.innerWidth, window.innerHeight);
    setScaleFactor(viewportSize / initialSize);
  }, [initialSize]);

  const scale = useTransform(
    scrollYProgress,
    [expandTrigger.start, expandTrigger.end],
    [1, Math.min(scaleFactor, maxScale)]
  );

  useEffect(() => {
    const handleScrollChange = (value) => {
      if (value >= expandTrigger.end && !isExpanded) {
        setIsExpanded(true);
        onExpandComplete && onExpandComplete();
      } else if (value < expandTrigger.start && isExpanded) {
        setIsExpanded(false);
      }
    };

    scrollYProgress.onChange(handleScrollChange);

    return () => {
      scrollYProgress.clearListeners();
    };
  }, [scrollYProgress, expandTrigger, isExpanded, onExpandComplete]);

  return (
    <motion.div
      className={styles.sphere}
      style={{
        backgroundColor: color,
        scale,
        zIndex,
        display: isExpanded ? 'none' : 'flex' // Remove from document flow when expanded
      }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      {!isExpanded && (
        <div className={styles.rotatingText}>
          <span className={styles.text1} style={{ color: textColor }}>{text1}</span>
          <span className={styles.text2} style={{ color: textColor }}>{text2}</span>
        </div>
      )}
    </motion.div>
  );
}

export default Sphere;