import React, { Component } from 'react';
import axios from 'axios';
import { notification } from 'antd';

import { Navbar } from 'components/utils';

import styles from './view.module.css';
import MapComponent from './Map';

class viewBuildings extends Component {
  state = { buildingInfo: [] };

  async componentDidMount() {
    const openNotificationWithIcon = (type, message) => {
      notification[type]({
        message,
        duration: 2,
      });
    };
    try {
      const {
        data: { data },
      } = await axios.get('/api/v1/empty-buildings');
      if (data) this.setState({ buildingInfo: data });
      else throw new Error();
    } catch (err) {
      openNotificationWithIcon('error', 'Something went wrong !! Try again');
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
          <div>
            <MapComponent buildingInfo={buildingInfo} />
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
