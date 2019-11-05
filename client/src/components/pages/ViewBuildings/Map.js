import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import PropTypes from 'prop-types';

import styles from './view.module.css';

const MapComponent = props => {
  const { buildingInfo } = props;
  const markerBuild = () => {
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
  return (
    <Map center={[51.509865, -0.118092]} zoom={13} className={styles.map}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
        url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}"
        id="mapbox.streets"
        accessToken="pk.eyJ1IjoiZmFkeW1hemVuIiwiYSI6ImNrMXRxY3JjZDBpMGYzbXF5YmV0c2g5a24ifQ.C6ZZQF61IMwDVQmu7Xxpzg"
      />
      {buildingInfo.length ? markerBuild() : null}
    </Map>
  );
};

MapComponent.propTypes = {
  buildingInfo: PropTypes.objectOf().isRequired,
};

export default MapComponent;
