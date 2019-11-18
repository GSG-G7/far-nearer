import React, { Component } from 'react';
import { Steps, notification } from 'antd';
import PropTypes from 'prop-types';
import axios from 'axios';

import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import styles from './form.module.css';

const { Step } = Steps;

const steps = [
  {
    title: 'Empty Building',
  },
  {
    title: 'Extra Information',
  },
  {
    title: 'Personal Information',
  },
];

class Form extends Component {
  state = {
    current: 0,
    stepOneValues: {
      city: '',
      location: 'gaza',
      knownAddress: '',
      previousUse: '',
      owner: 'N/A',
      isOwnerLocal: '',
    },
    stepTwoValues: {
      emptyPeriod: '',
      extraInfo: '',
      preferredUse: '',
      thumbnail: '',
    },
    stepThreeValues: {
      reporterName: '',
      reporterEmail: '',
      reporterAddress: '',
      receiveNotifications: false,
      shareData: false,
    },
    loading: false,
    iconLoading: false,
  };

  enterLoading = () => {
    this.setState({ loading: true });
  };

  getStepOneValues = values => {
    const { stepOneValues } = this.state;
    this.setState({
      stepOneValues: {
        ...stepOneValues,
        ...values,
      },
    });
  };

  getStepTwoValues = values => {
    const { stepTwoValues } = this.state;
    this.setState({
      stepTwoValues: {
        ...stepTwoValues,
        ...values,
      },
    });
  };

  getStepThreeValues = values => {
    const { stepThreeValues } = this.state;
    this.setState({
      stepThreeValues: {
        ...stepThreeValues,
        ...values,
      },
    });
  };

  handleConfirm = values => {
    const { stepThreeValues } = this.state;
    this.setState(
      {
        stepThreeValues: {
          ...stepThreeValues,
          ...values,
        },
      },
      () => this.sendData(),
    );
  };

  sendData = async () => {
    const openNotificationWithIcon = (type, message) => {
      notification[type]({
        message,
        duration: 3,
      });
    };
    const {
      stepOneValues,
      stepTwoValues: { emptyPeriod, extraInfo, preferredUse, thumbnail },
      stepThreeValues,
    } = this.state;

    const { longitude, latitude, redirectToView } = this.props;

    const formData = new FormData();
    const building = {
      ...stepOneValues,
      longitude,
      latitude,
      emptyPeriod,
      extraInfo,
      preferredUse,
      ...stepThreeValues,
    };

    formData.append('data', JSON.stringify(building));
    if (thumbnail && thumbnail[0])
      formData.append('thumbnail', thumbnail[0].originFileObj);

    const config = { headers: { 'Content-Type': 'multipart/form-data' } };
    try {
      const { data } = await axios.post(
        '/api/v1/report-building',
        formData,
        config,
      );
      if (data.statusCode === 201) {
        openNotificationWithIcon(
          'success',
          'Great !! You added the empty building successfully',
        );
        redirectToView();
      } else if (data.statusCode === 400) {
        openNotificationWithIcon('error', data.error);
      } else if (data.statusCode === 409) {
        openNotificationWithIcon('info', 'The building is already exist');
      }
    } catch (err) {
      this.setState({ loading: false });
      openNotificationWithIcon('error', 'Something went wrong !! Try again');
    }
  };

  getStep = current => {
    const {
      stepOneValues,
      stepTwoValues,
      stepThreeValues,
      loading,
    } = this.state;

    const { city, location, onCityChange } = this.props;

    switch (current) {
      case 0:
        return (
          <FirstStep
            stepOneValues={stepOneValues}
            city={city}
            location={location}
            onCityChange={onCityChange}
            submittedValues={this.getStepOneValues}
            handleNext={() => this.next()}
          />
        );
      case 1:
        return (
          <SecondStep
            stepTwoValues={stepTwoValues}
            submittedValues={this.getStepTwoValues}
            handleNext={() => this.next()}
            handleBack={() => this.prev()}
          />
        );
      case 2:
        return (
          <ThirdStep
            stepThreeValues={stepThreeValues}
            submittedValues={this.getStepThreeValues}
            handleBack={() => this.prev()}
            handleConfirm={this.handleConfirm}
            enterLoading={this.enterLoading}
            loading={loading}
          />
        );
      default:
        return <FirstStep />;
    }
  };

  next() {
    let { current } = { ...this.state };
    current += 1;
    this.setState({ current });
  }

  prev() {
    let { current } = { ...this.state };
    current -= 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    return (
      <div className={styles.form}>
        <Steps current={current} className={styles.steps}>
          {steps.map(item => (
            <Step key={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{this.getStep(current)}</div>
      </div>
    );
  }
}

Form.propTypes = {
  city: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  onCityChange: PropTypes.func.isRequired,
  redirectToView: PropTypes.func.isRequired,
  longitude: PropTypes.number.isRequired,
  latitude: PropTypes.number.isRequired,
};

export default Form;
