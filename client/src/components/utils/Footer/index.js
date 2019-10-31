import React from 'react';
import { Icon } from 'antd';

import Subscribe from './Subscribe';

import './style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <section className="footer__section">
          <h2 className="footer__heading">About Us</h2>
          <p className="footer__content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            velit ex maxime ipsum amet recusandae Lorem, ipsum dolor.
          </p>
          <Icon type="global" className="footer__icon" />
          <a href="http://www.farnearer.org/" className="footer__link">
            Farnearer.org
          </a>
        </section>
        <section className="footer__section">
          <h2 className="footer__heading">Contact Us</h2>
          <div className="footer__contact">
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
          <div className="footer__sociallinks">
            <Icon type="google" />
            <Icon type="twitter" />
            <Icon type="slack" />
            <Icon type="skype" />
          </div>
        </section>
        <section className="footer__section">
          <h2 className="footer__heading">Join Our Mailing List</h2>
          <Subscribe />
          <p className="footer__content">
            Subscribe to our website and recieve updated news and emails
          </p>
        </section>
      </div>
      <div className="footer__bottom">
        Copyright © 2019 Far Nearer. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
