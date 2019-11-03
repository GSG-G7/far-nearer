import React from 'react';
import { Navbar, Footer } from '../../utils';

import './style.css';

const About = () => {
  return (
    <div className="about">
      {/* <Navbar transparent={false} /> */}
      <div className="container">
        <h1 className="about__heading">About Us</h1>
        <div className="about__content">
          <div className="about__bio">
            <h3 className="content__title">Bio</h3>
            <p className="content__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              animi.
            </p>
          </div>
          <div className="about__description">
            <h3 className="content__title">What does that mean ?</h3>
            <p className="content__description">
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
      <Footer />
    </div>
  );
};

export default About;
