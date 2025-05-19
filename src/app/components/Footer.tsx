import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import styles from '@/styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.icons}>
        <a
          href="https://github.com/hiroto11111"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/daaaasu8/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <FaInstagram />
        </a>
      </div>
      <p className={styles.copyright}>
        © 2025 MyPortfolio. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;