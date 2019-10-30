import React from 'react';
import PropTypes from 'prop-types';
import { Spin, Icon } from 'antd';

import 'antd/dist/antd.css';
import './style.css';

const Loading = ({ className = '' }) => {
  const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
  return (
    <div className={`load-Com ${className}`}>
      <Spin className="span-icon" indicator={antIcon} />
    </div>
  );
};

Loading.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Loading;
