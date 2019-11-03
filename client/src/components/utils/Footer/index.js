import React from 'react';
import { Icon } from 'antd';

import Subscribe from './Subscribe';

import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <section className={styles.section}>
          <h2 className={styles.heading}>About Us</h2>
          <p className={styles.content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            velit ex maxime ipsum amet recusandae Lorem, ipsum dolor.
          </p>
          <Icon type="global" className={styles.icon} />
          <a href="http://www.farnearer.org/" className={styles.link}>
            Farnearer.org
          </a>
        </section>
        <section className={styles.section}>
          <h2 className={styles.heading}>Contact Us</h2>
          <div className={styles.contact}>
            <p>
              <Icon type="environment" /> <span>London, UK</span>
            </p>
            <p>
              <Icon type="phone" /> <span>+44 01 2345 6789</span>
            </p>
            <p>
              <Icon type="mail" /> <span>example@example.com</span>
            </p>
          </div>
          <div className={styles.sociallinks}>
            <Icon type="google" />
            <Icon type="twitter" />
            <Icon type="slack" />
            <Icon type="skype" />
          </div>
        </section>
        <section className={styles.section}>
          <h2 className={styles.heading}>Join Our Mailing List</h2>
          <Subscribe />
          <p className={styles.content}>
            Subscribe to our website and recieve updated news and emails
          </p>
        </section>
      </div>
      <div className={styles.bottom}>
        Copyright © 2019 Far Nearer. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
