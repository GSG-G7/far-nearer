import React, { Component } from 'react';
import { Steps } from 'antd';
import PropTypes from 'prop-types';

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
      address: '',
      previousUse: '',
      owner: '',
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
      receiveNotifications: '',
    },
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
      stepOneValues: {
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

  getStep = current => {
    const { stepOneValues, stepTwoValues, stepThreeValues } = this.state;
    const { city, address, onCityChange } = this.props;
    switch (current) {
      case 0:
        return (
          <FirstStep
            {...stepOneValues}
            city={city}
            address={address}
            onCityChange={onCityChange}
            submittedValues={this.getStepOneValues}
            handleNext={() => this.next()}
          />
        );
      case 1:
        return (
          <SecondStep
            {...stepTwoValues}
            submittedValues={this.getStepTwoValues}
            handleNext={() => this.next()}
            handleBack={() => this.prev()}
          />
        );
      case 2:
        return (
          <ThirdStep
            {...stepThreeValues}
            submittedValues={this.getStepThreeValues}
            handleBack={() => this.prev()}
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
        {/* <div className={`${styles.action} steps-action`}>
          
        </div> */}
      </div>
    );
  }
}

Form.propTypes = {
  city: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  onCityChange: PropTypes.func.isRequired,
};

export default Form;
