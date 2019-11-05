import React, { Component } from 'react';
import axios from 'axios';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { notification } from 'antd';

import { Navbar } from 'components/utils';

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
      if (data) this.setState({ buildingInfo: data });
      else throw new Error();
    } catch (err) {
      openNotificationWithIcon('error', 'Something went wrong !! Try again');
    }
  }

  markerBuild = () => {
    const { buildingInfo } = this.state;
    const positions = buildingInfo.map(building => {
      const {
        id,
        thumbnail,
        city,
        address,
        previousUse,
        owner,
        emptyPeriod,
      } = building;
      const { longitude, latitude } = building;
      const position = [latitude, longitude];
      return {
        position,
        id,
        thumbnail,
        city,
        address,
        previousUse,
        owner,
        emptyPeriod,
      };
    });
    const markers = positions.map(element => {
      const {
        id,
        position,
        thumbnail,
        city,
        address,
        previousUse,
        owner,
        emptyPeriod,
      } = element;
      return (
        <Marker position={position} key={id}>
          <Popup>
            <img
              src={thumbnail}
              alt="buildingImage"
              className={styles.building__img}
            />
            <h2 className={styles.building__city}>{city}</h2>
            <h4>
              <span className={styles.building__title}>Address:</span> {address}
            </h4>
            <h4>
              <span className={styles.building__title}>Previous Use:</span>
              {previousUse}
            </h4>
            <h4>
              <span className={styles.building__title}>Owner: </span> {owner}
            </h4>
            <h4>
              <span className={styles.building__title}>Empty Period: </span>
              {emptyPeriod}
            </h4>
          </Popup>
        </Marker>
      );
    });
    return markers;
  };

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
            <Map
              center={[51.509865, -0.118092]}
              zoom={13}
              className={styles.map}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
                url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}"
                id="mapbox.streets"
                accessToken="pk.eyJ1IjoiZmFkeW1hemVuIiwiYSI6ImNrMXRxY3JjZDBpMGYzbXF5YmV0c2g5a24ifQ.C6ZZQF61IMwDVQmu7Xxpzg"
              />
              {buildingInfo.length ? this.markerBuild() : null}
            </Map>
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
