import React, { Component } from 'react';
import { Steps, Button, message } from 'antd';

import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
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
    thumbnail: '',
    city: '',
    address: '',
    longitude: '',
    latitude: '',
    previousUse: '',
    owner: '',
    isOwnerLocal: '',
    emptyPeriod: '',
    extraInfo: '',
    preferredUse: '',
    receiveNotifications: '',
    reporterName: '',
    reporterEmail: '',
    reporterAddress: '',
  };

  getStep = current => {
    switch (current) {
      case 0:
        return <FirstStep onCityChange={this.onCityChange} />;
      case 1:
        return <SecondStep />;
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
        <div className={`${styles.action} steps-action`}>
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success('Processing complete!')}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button
              style={{ marginLeft: 8 }}
              onClick={() => this.prev()}
              className={styles.white}
            >
              Previous
            </Button>
          )}
        </div>
      </div>
    );
  }
}

export default Form;
