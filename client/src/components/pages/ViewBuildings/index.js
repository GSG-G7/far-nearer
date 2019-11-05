import React, { Component } from 'react';
import axios from 'axios';

import { Navbar } from 'components/utils';
import styles from './view.module.css';
import TableInfo from './Table';

class viewBuildings extends Component {
  state = { buildingInfo: [] };

  async componentDidMount() {
    try {
      const {
        data: { data },
      } = await axios.get('/api/v1//empty-buildings');
      this.setState({ buildingInfo: data });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { buildingInfo } = this.state;
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
          <div className="map" />
          <div className="table">
            <TableInfo buildingInfo={buildingInfo} />
          </div>
        </div>
      </>
    );
  }
}

export default viewBuildings;
