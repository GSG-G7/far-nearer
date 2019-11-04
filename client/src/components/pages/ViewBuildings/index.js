import React, { Component } from 'react';

import { Navbar } from 'components/utils';
import styles from './view.module.css';

class viewBuildings extends Component {
  state = {};

  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <div className={styles.view}>
            <h1 className={styles.heading}>Empty Buildings Location</h1>
            <p className={styles.content}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Temporibus, aliquam!
            </p>
          </div>
          <div className="map">
            <h1>Working On Map</h1>
          </div>
          <div className="table">
            <h1>Working On Table</h1>
          </div>
        </div>
      </>
    );
  }
}

export default viewBuildings;
