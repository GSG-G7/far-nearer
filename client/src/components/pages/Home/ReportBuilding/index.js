import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as geocoder from 'esri-leaflet-geocoder';

import Map from './Map';
import Form from './Form';
import styles from './report.module.css';

class ReportBuilding extends Component {
  handleCityClick = ({ latlng }) => {
    const { handleAddressChange } = this.props;

    geocoder
      .geocodeService()
      .reverse()
      .latlng(latlng)
      .run((error, result) => {
        if (error) {
          handleAddressChange(undefined, undefined);
          return;
        }
        handleAddressChange(latlng, result.address.Match_addr);
      });
  };

  render() {
    const { city, onCityChange, markerCoordinates, address } = this.props;
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
            <Form city={city} address={address} onCityChange={onCityChange} />
          </div>
        </div>
      </section>
    );
  }
}

ReportBuilding.propTypes = {
  city: PropTypes.string.isRequired,
  markerCoordinates: PropTypes.objectOf(PropTypes.string).isRequired,
  address: PropTypes.string.isRequired,
  onCityChange: PropTypes.func.isRequired,
  handleAddressChange: PropTypes.func.isRequired,
};

export default ReportBuilding;
