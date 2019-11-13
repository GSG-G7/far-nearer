import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import About from './About';
import ReportBuilding from './ReportBuilding';
import { Navbar } from '../../utils';

class Home extends Component {
  state = {
    city: 'Morecambe',
    address: '',
    longitude: 0,
    latitude: 0,
  };

  redirectToView = () => {
    const { history } = this.props;
    if (history) history.push('/view-buildings');
  };

  handleAddressChange = (markerCoordinates, address) => {
    if (markerCoordinates && address) {
      const { lat: latitude, lng: longitude } = markerCoordinates;
      this.setState({ latitude, longitude, address });
    }
  };

  handleCityChange = ({ key }) => {
    if (+key) {
      const city = +key === 1 ? 'Morecambe' : 'Hastings';
      this.setState({ city });
    }
  };

  render() {
    const { city, latitude, longitude, address } = this.state;

    return (
      <>
        <Navbar transparent />
        <Header onCityChange={this.handleCityChange} />
        <About />
        <ReportBuilding
          longitude={longitude}
          latitude={latitude}
          redirectToView={this.redirectToView}
          city={city}
          address={address}
          markerCoordinates={{ lat: latitude, lng: longitude }}
          onCityChange={this.handleCityChange}
          handleAddressChange={this.handleAddressChange}
        />
      </>
    );
  }
}

Home.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Home;
