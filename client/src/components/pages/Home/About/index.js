import React from 'react';
import { Link } from 'react-router-dom';

import styles from './about.module.css';

const About = () => {
  return (
    <section className={`${styles.about} container`}>
      <h1 className={styles.title}>About the project</h1>
      <p className={styles.description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s. It has survived not only five centuries, but also
        the leap into electronic typesetting, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum &emsp;
        <Link className={styles.readmore} to="/about">
          ...more
        </Link>
      </p>
    </section>
  );
};

export default About;
