import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

import errorImg from '../../../assets/robot-error-codes.png';
import './style.css';

const PageNotFound = () => {
  return (
    <div className="error-page">
      <div className="error-page__content">
        <h1 className="error-page__heading status">404</h1>
        <h2 className="error-page__heading ">Page not found</h2>
        <Link to="/">
          <Button type="primary">Back Home</Button>
        </Link>
      </div>
      <img src={errorImg} alt="404 Error" className="error-page__img" />
    </div>
  );
};

export default PageNotFound;
