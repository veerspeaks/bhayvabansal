"use client";
import React from 'react';
import styles from './PhilosophiesPage.module.css';
import Sphere from './Sphere';

function PhilosophiesPage() {
  return (
    <section className={styles.philosophies}>
      <div className={styles.content}>
        <h2>Philosophies</h2>
        <p>
          I believe when people are in ease of mind, they are more creative, more productive, and more connected.
          As a CTO, the most important thing is my team trusts me and <strong><em>never hesitates to approach me</em></strong> even with trivial things. 
          I always keep myself and my team motivated so that they can be at their best.
          I believe in <strong><em>more than just getting things done</em></strong>, I believe in getting things done with <strong><em>aesthetics and with style</em></strong>.
          A task is not good enough unless it looks so <strong><em>&rsquo;killer&rsquo;</em></strong> that you can stare at for hours appreaciating that you and your team is behind this <strong><em>amazing creation</em></strong>.    </p>
        <div style={{ marginTop: '20px' }}></div>
        <p>
          <em style={{ fontSize: 'larger' }}>What&rsquo;s next?</em>
          <span style={{ display: 'block', textAlign: 'left' , marginTop: '10px'}}>
            I am going to <strong><u> hire the person who made this website</u></strong> <br />
            He is also driven by the same passion <br />
            of making <strong><u>&lsquo;killer&rsquo; websites</u></strong> <br/>
            like my team and I do.
          </span>
        </p>
      </div>
      <Sphere
        color="#4335A7" /* Yellow color */
        text1="Chief Technology Officer"
        text2="Persist Ventures"
        expandTrigger={{ start: 0.38, end: 0.65 }}
        initialSize={50}
        zIndex={20}
        maxScale={20}
        textColor="#fafafa"
      />
    </section>
  );
}

export default PhilosophiesPage;