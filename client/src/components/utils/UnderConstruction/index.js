import React from 'react';
import styles from './underconstruction.module.css';

const UnderConstruction = () => {
  return (
    <div className={styles.underconstruct}>
      <h2 className={styles.heading}>this page is under construction</h2>
      <p className={styles.text}>
        Our developers are currently working on this page
      </p>
    </div>
  );
};

export default UnderConstruction;
