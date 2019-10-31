import React from 'react';
import { Button, Icon } from 'antd';

import './style.css';

const PageNotFound = () => {
  return (
    <div className="error-page">
      <div className="error-page__content">
        <h1 className="error-page__heading status">404</h1>
        <h2 className="error-page__heading ">Page not found</h2>
        <Button className="btn" type="primary">
          <Icon type="left" />
          Back Home
        </Button>
      </div>
      <img src="" alt="404 Error" className="error-page__img" />
    </div>
  );
};

export default PageNotFound;
