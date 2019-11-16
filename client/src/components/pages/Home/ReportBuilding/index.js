import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        if (error)
          openNotificationWithIcon(
            'error',
            'Something went wrong !! Check your connection and try again',
          );
        else handleAddressChange(latlng, result.address.Match_addr);
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
            <h1 className={styles.title}>Report a building</h1>
            <p className={styles.description}>
              We wanted to make it easier to report empty and at risk buildings
              in your community. Who Owns Your Neighbourhood is a way to report,
              view and investigate empty and at risk buildings. Once you have
              reported a building, this information is made available to
              community groups who might be interested in buying the property
              and opening it up for the community. We are piloting this project
              in partnership with community groups in Morecambe and Hastings.
              <Link className={styles.readmore} to="/about">
                ... read more
              </Link>
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
