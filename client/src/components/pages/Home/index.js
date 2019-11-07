import React, { Component } from 'react';
import { message } from 'antd';

import Header from './Header';
import About from './About';
import ReportBuilding from './ReportBuilding';
import { Navbar, Footer } from '../../utils';

class Home extends Component {
  state = {
    city: 'Morecambe',
  };

  handleCityChange = ({ key }) => {
    const city = +key === 1 ? 'Morecambe' : 'Hastings';
    this.setState({ city });
    message.success(`${city} selected `);
  };

  render() {
    const { city } = this.state;
    return (
      <>
        <Navbar transparent />
        <Header onCityChange={this.handleCityChange} />
        <About />
        <ReportBuilding city={city} onCityChange={this.handleCityChange} />
      </>
    );
  }
}

export default Home;
