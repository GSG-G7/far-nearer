import React from 'react';
import { Form as FormAnt, Checkbox, Input, Button } from 'antd';
import PropTypes from 'prop-types';

import styles from './form.module.css';

const ThirdStep = props => {
  const {
    submittedValues,
    handleBack,
    handleConfirm,
    stepThreeValues: {
      reporterName,
      reporterEmail,
      reporterAddress,
      receiveNotifications,
      shareData,
    },
    form: { getFieldDecorator, validateFields, getFieldsValue },
    enterLoading,
    loading,
  } = props;

  const handleSubmit = e => {
    e.preventDefault();
    validateFields((err, values) => {
      enterLoading();
      if (!err) {
        handleConfirm(values);
      }
    });
  };

  const storeValues = () => {
    const values = getFieldsValue();
    submittedValues(values);
    handleBack();
  };

  return (
    <FormAnt onSubmit={handleSubmit} layout="vertical">
      <>
        <FormAnt.Item label="Name">
          {getFieldDecorator('reporterName', {
            rules: [
              {
                required: true,
                message: 'This field is required',
              },
            ],
            initialValue: reporterName,
          })(<Input placeholder="Write your name" />)}
        </FormAnt.Item>
        <FormAnt.Item label="Email">
          {getFieldDecorator('reporterEmail', {
            rules: [
              {
                required: true,
                message: 'Please enter a valid email',
                type: 'email',
              },
            ],
            initialValue: reporterEmail,
          })(<Input placeholder="Write your email" />)}
        </FormAnt.Item>
        <FormAnt.Item label="Address">
          {getFieldDecorator('reporterAddress', {
            rules: [
              {
                required: true,
                message: 'This field is required',
              },
            ],
            initialValue: reporterAddress,
          })(<Input placeholder="Write your address" />)}
        </FormAnt.Item>
        <FormAnt.Item>
          {getFieldDecorator('shareData', {
            rules: [
              {
                required: true,
                message: 'You must agree to share your data with us',
              },
            ],
            initialValue: shareData,
            valuePropName: 'checked',
          })(<Checkbox>I agree to sharing this data</Checkbox>)}
        </FormAnt.Item>
        <FormAnt.Item>
          {getFieldDecorator('receiveNotifications', {
            initialValue: receiveNotifications,
            valuePropName: 'checked',
          })(<Checkbox>I would like to receive updates</Checkbox>)}
        </FormAnt.Item>
        <FormAnt.Item>
          <Button
            htmlType="submit"
            className={`prevButton ${styles.white} ${styles['ml-0']}`}
            onClick={storeValues}
            size="large"
          >
            Previous
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            onClick={handleSubmit}
            className="nextButton"
            size="laenterLoadingrge"
            loading={loading}
          >
            Submit
          </Button>
        </FormAnt.Item>
      </>
    </FormAnt>
  );
};

ThirdStep.propTypes = {
  form: PropTypes.objectOf(PropTypes.any).isRequired,
  submittedValues: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleConfirm: PropTypes.func.isRequired,
  enterLoading: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  stepThreeValues: PropTypes.objectOf(PropTypes.any).isRequired,
};

const WrappedStep = FormAnt.create({ name: 'validate_other' })(ThirdStep);

export default WrappedStep;
