import React, { Component } from 'react';
import { Table } from 'antd';
import axios from 'axios';

import { Navbar } from 'components/utils';
import styles from './view.module.css';

class viewBuildings extends Component {
  state = { buildingInfo: [], filteredInfo: [] };

  async componentDidMount() {
    try {
      const {
        data: { data },
      } = await axios.get('/api/v1//empty-buildings');
      this.setState({ buildingInfo: data });
    } catch (error) {
      console.log(error);
    }
  }

  handleChange = (pagination, filters) => {
    this.setState({
      filteredInfo: filters,
    });
  };

  render() {
    let { filteredInfo } = this.state;
    const { buildingInfo } = this.state;
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        filters: [
          { text: 'Morecambe', value: 'Morecambe' },
          { text: 'Hastings', value: 'Hastings' },
        ],
        filteredValue: filteredInfo.address || null,
        onFilter: (value, record) => record.address.includes(value),
      },
      {
        title: 'Previous use',
        dataIndex: 'previousUse',
        key: 'previousUse',
        filters: [
          { text: 'Residential building', value: 'Residential building' },
          { text: 'Retail building', value: 'Retail building' },
          { text: 'Office building', value: 'Office building' },
          { text: 'Community building', value: 'Community building' },
        ],
        filteredValue: filteredInfo.previousUse || null,
        onFilter: (value, record) => record.previousUse.includes(value),
      },
      {
        title: 'Owner',
        dataIndex: 'owner',
        key: 'owner',
      },
      {
        title: 'Empty period',
        dataIndex: 'emptyPeriod',
        key: 'emptyPeriod',
      },
    ];

    return (
      <>
        <Navbar />
        <div className="container">
          <div className={styles.view}>
            <h1 className={styles.heading}>Empty Buildings Location</h1>
            <p className={styles.content}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Temporibus, aliquam!
            </p>
          </div>
          <div className="map" />
          <div className="table">
            <Table
              columns={columns}
              dataSource={buildingInfo}
              onChange={this.handleChange}
              rowKey={record => record.id}
            />
          </div>
        </div>
      </>
    );
  }
}

export default viewBuildings;
