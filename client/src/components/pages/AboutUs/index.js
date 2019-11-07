import React from 'react';
import { Navbar } from 'components/utils';

import styles from './about.module.css';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className={styles.heading}>About Us</h1>
        <div className={styles.content}>
          <div>
            <h3 className={styles.title}>Bio</h3>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              animi.
            </p>
          </div>
          <div>
            <h3 className={styles.title}>What does that mean ?</h3>
            <p className={styles.description}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
              iste aperiam accusantium inventore temporibus sequi dolorum saepe
              at neque modi! Quo, laborum accusantium doloremque quia non iusto
              sequi recusandae facilis? Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Expedita atque dignissimos, velit cumque
              adipisci quos culpa perspiciatis quidem, aut, sapiente tempore
              consequuntur placeat. Illum, amet. Animi autem quae distinctio
              sequi! <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              rerum?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
