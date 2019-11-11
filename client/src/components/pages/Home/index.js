import React, { Component } from 'react';
import { message } from 'antd';
import PropTypes from 'prop-types';

import Header from './Header';
import About from './About';
import ReportBuilding from './ReportBuilding';
import { Navbar } from '../../utils';

class Home extends Component {
  state = {
    city: 'Morecambe',
    address: '',
    longitude: '',
    latitude: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      form: { validateFields },
    } = this.props;
    validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleAddressChange = (markerCoordinates, address) => {
    if (markerCoordinates && address) {
      const { lat: latitude, lng: longitude } = markerCoordinates;
      this.setState({ latitude, longitude, address });
    }
  };

  handleCityChange = ({ key }) => {
    const city = +key === 1 ? 'Morecambe' : 'Hastings';
    this.setState({ city });
    message.success(`${city} selected `);
  };

  render() {
    const { city, latitude, longitude, address } = this.state;
    return (
      <>
        <Navbar transparent />
        <Header onCityChange={this.handleCityChange} />
        <About />
        <ReportBuilding
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
  form: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default Home;
