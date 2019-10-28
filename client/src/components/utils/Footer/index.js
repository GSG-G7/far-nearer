import React from 'react';
import { Button, Input, Icon } from 'antd';

import './style.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            velit ex maxime ipsum amet recusandae mollitia neque nisi aperiam
            vel!
          </p>
          <Icon type="global" />
          <a href="http://www.farneaer.org">Farnearer.org</a>
        </div>
        <div className="footer__content">
          <h2>Contact Us</h2>
          <Icon type="mail" />
        </div>
        <div className="footer__content">
          <h2>Join Our Mailing List</h2>
          <Input size="large" placeholder="Type your Email" />
          <Button>Subscribe</Button>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            aliquam.
          </p>
        </div>
      </div>
      <div className="footer__bottom">
        Copyright © {new Date().getFullYear()} Far Nearer. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
