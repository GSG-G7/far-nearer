import React, { Component } from 'react';
import axios from 'axios';
import { notification } from 'antd';

import { Navbar } from 'components/utils';
import MapComponent from './Map';
import TableInfo from './Table';

import styles from './view.module.css';

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
      if (data && data[0].latitude && data[0].longitude)
        this.setState({ buildingInfo: data });
    } catch (err) {
      openNotificationWithIcon('error', 'Something went wrong !! Try again');
    }
  }

  render() {
    const { buildingInfo } = this.state;
    return (
      <>
        <Navbar />
        <div className="container" id="view">
          <div className={styles.view}>
            <h1 className={styles.heading}>View Buildings</h1>
            <p className={styles.content}>
              These buildings have been reported as empty or at risk by the
              community. Some may be in the process of verification.
            </p>
          </div>
          <MapComponent buildingInfo={buildingInfo} />
          <div className={styles.table}>
            <TableInfo buildingInfo={buildingInfo} />
          </div>
        </div>
      </>
    );
  }
}

export default viewBuildings;
