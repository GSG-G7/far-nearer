import React, { Component, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import { Navbar, Loading } from '../../utils';

const ReportBuilding = lazy(() => import('./ReportBuilding'));

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
        <Suspense fallback={<Loading />}>
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
        </Suspense>
      </>
    );
  }
}

Home.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Home;
