import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import ReportBuilding from './ReportBuilding';
import { Navbar } from '../../utils';

class Home extends Component {
  state = {
    city: 'Morecambe',
    location: '',
    longitude: 0,
    latitude: 0,
  };

  redirectToView = () => {
    const { history } = this.props;
    if (history) history.push('/view-buildings');
  };

  handleLocationChange = (markerCoordinates, location) => {
    if (markerCoordinates && location) {
      const { lat: latitude, lng: longitude } = markerCoordinates;
      this.setState({ latitude, longitude, location });
    }
  };

  handleCityChange = ({ key }) => {
    if (+key) {
      const city = +key === 1 ? 'Morecambe' : 'Hastings';
      this.setState({ city });
    }
  };

  render() {
    const { city, latitude, longitude, location } = this.state;

    return (
      <>
        <Navbar transparent />
        <Header onCityChange={this.handleCityChange} />
        <ReportBuilding
          longitude={longitude}
          latitude={latitude}
          redirectToView={this.redirectToView}
          city={city}
          location={location}
          markerCoordinates={{ lat: latitude, lng: longitude }}
          onCityChange={this.handleCityChange}
          handleLocationChange={this.handleLocationChange}
        />
      </>
    );
  }
}

Home.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Home;
