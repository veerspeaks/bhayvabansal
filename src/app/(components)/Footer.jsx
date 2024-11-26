"use client";
import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.content}>
        <h2>Contact Me</h2>
        <p>
          If you want to reach me out with ideas, projects, or just want to say hi, you can reach me on
        </p>
        <div style={{ marginTop: '20px', marginBottom: '100px'}}></div>
        <div className={styles.images}>
          <Link href="https://www.linkedin.com/in/bhavya-bansal98/?originalSubdomain=in">
          <Image src={"/images/linkedin.png"} alt="LinkedIn Icon" width={100} height={100} />
          </Link>
          <Link href="https://github.com/bhavya-sharma-2000">
          <Image src={"/images/github.png"} alt="GitHub Icon" width={100} height={100} />
          </Link>
        </div>
      </div>
      
    </section>
  );
}

export default Footer;
