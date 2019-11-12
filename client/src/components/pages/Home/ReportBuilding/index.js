import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { notification } from 'antd';
import * as geocoder from 'esri-leaflet-geocoder';

import Map from './Map';
import Form from './Form';
import styles from './report.module.css';

class ReportBuilding extends Component {
  handleCityClick = ({ latlng }) => {
    const { handleAddressChange } = this.props;
    const openNotificationWithIcon = (type, message) => {
      notification[type]({
        message,
        duration: 3,
      });
    };

    geocoder
      .geocodeService()
      .reverse()
      .latlng(latlng)
      .run((error, result) => {
        if (error) {
          handleAddressChange(undefined, undefined);
          openNotificationWithIcon(
            'error',
            'Something went wrong !! Check your connection and try again',
          );
          return;
        }
        handleAddressChange(latlng, result.address.Match_addr);
      });
  };

  render() {
    const {
      city,
      onCityChange,
      markerCoordinates,
      address,
      longitude,
      redirectToView,
      latitude,
    } = this.props;
    return (
      <section id="sharingBuildings" className={styles.report}>
        <div className={`${styles.container} container`}>
          <header className={styles.header}>
            <h1 className={styles.title}>Share an empty building</h1>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              consequat convallis in venenatis quam phasellus pharetra, viverra
              ante. Sollicitudin orci, ac velit ultricies.
            </p>
          </header>
          <div className={styles['form--container']}>
            <Map
              city={city}
              onCityClick={this.handleCityClick}
              address={address}
              markerCoordinates={markerCoordinates}
            />
            <Form
              city={city}
              address={address}
              onCityChange={onCityChange}
              longitude={longitude}
              latitude={latitude}
              redirectToView={redirectToView}
            />
          </div>
        </div>
      </section>
    );
  }
}

ReportBuilding.propTypes = {
  city: PropTypes.string.isRequired,
  markerCoordinates: PropTypes.objectOf(PropTypes.number).isRequired,
  address: PropTypes.string.isRequired,
  onCityChange: PropTypes.func.isRequired,
  redirectToView: PropTypes.func.isRequired,
  handleAddressChange: PropTypes.func.isRequired,
  longitude: PropTypes.number.isRequired,
  latitude: PropTypes.number.isRequired,
};

export default ReportBuilding;
