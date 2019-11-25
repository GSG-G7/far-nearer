import React from 'react';
import { Icon } from 'antd';

import Subscribe from './Subscribe';

import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={`${styles.footer} footer-controller`}>
      <div className={`${styles.container} container`}>
        <section className={styles.section}>
          <h2 className={styles.heading}>About Us</h2>
          <p className={styles.content}>
            Who Owns My Neighbourhood is an independent website built by the
            Community Interest Company Far Nearer. We wanted to make it easier
            to report empty and at risk buildings in your community.
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
          <p>Subscribe to our website and recieve updated news and emails</p>
        </section>
      </div>
      <div className={styles.bottom}>
        Copyright © 2019 Far Nearer. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
