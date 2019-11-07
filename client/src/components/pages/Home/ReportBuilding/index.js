import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as geocoder from 'esri-leaflet-geocoder';

import Map from './Map';
import Form from './Form';
import styles from './report.module.css';

class ReportBuilding extends Component {
  state = {
    markerCoordinates: undefined,
    address: undefined,
  };

  handleCityClick = ({ latlng }) => {
    geocoder
      .geocodeService()
      .reverse()
      .latlng(latlng)
      .run((error, result) => {
        if (error) {
          this.setState({
            markerCoordinates: undefined,
            address: undefined,
          });
          return;
        }

        this.setState({
          markerCoordinates: latlng,
          address: result.address.Match_addr,
        });
      });
  };

  handleAddressChange = address => {
    this.setState({ address });
  };

  render() {
    const { city } = this.props;
    const { markerCoordinates, address } = this.state;
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
          <Map
            city={city}
            onCityClick={this.handleCityClick}
            address={address}
            markerCoordinates={markerCoordinates}
          />
          <Form onCityChange={this.onCityChange} />
        </div>
      </section>
    );
  }
}

ReportBuilding.propTypes = {
  city: PropTypes.string.isRequired,
};

export default ReportBuilding;
