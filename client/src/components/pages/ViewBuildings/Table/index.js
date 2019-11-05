import React, { Component } from 'react';
import { Table } from 'antd';
import PropTypes from 'prop-types';

class TableInfo extends Component {
  state = { filteredInfo: {} };

  handleChange = (pagination, filters) => {
    this.setState({
      filteredInfo: filters,
    });
  };

  render() {
    const { filteredInfo = {} } = this.state;
    const { buildingInfo } = this.props;
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
        onFilter: (value, record) => {
          return record.previousUse.includes(value);
        },
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
      <Table
        columns={columns}
        dataSource={buildingInfo}
        onChange={this.handleChange}
        rowKey={record => record.id}
      />
    );
  }
}

TableInfo.propTypes = {
  buildingInfo: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};
export default TableInfo;