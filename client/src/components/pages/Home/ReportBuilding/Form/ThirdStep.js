import React from 'react';
import { Form as FormAnt, Checkbox, Input, Button } from 'antd';
import PropTypes from 'prop-types';

import styles from './form.module.css';

const ThirdStep = props => {
  const {
    submittedValues,
    handleBack,
    form: { getFieldDecorator, validateFields, getFieldsValue },
  } = props;

  const handleSubmit = e => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        submittedValues(values);
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
                message: 'Please add your name',
              },
            ],
          })(<Input placeholder="Write your name" />)}
        </FormAnt.Item>
        <FormAnt.Item label="Email">
          {getFieldDecorator('reporterEmail', {
            rules: [
              {
                required: true,
                message: 'Please add your email',
              },
            ],
          })(<Input placeholder="Write your email" />)}
        </FormAnt.Item>
        <FormAnt.Item label="Post code">
          {getFieldDecorator('reporterAddress', {
            rules: [
              {
                required: true,
                message: 'Please add your post code',
              },
            ],
          })(<Input placeholder="Write your post code" />)}
        </FormAnt.Item>
        <FormAnt.Item>
          <Checkbox value="share data">I agree to sharing this data</Checkbox>
          <br />
          <Checkbox value="receive updates">
            I would like to receive updates
          </Checkbox>
        </FormAnt.Item>
        <FormAnt.Item>
          <Button
            htmlType="submit"
            className={`${styles.white} ${styles['ml-0']}`}
            onClick={storeValues}
          >
            Previous
          </Button>
          <Button type="primary" htmlType="submit" onClick={handleSubmit}>
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
};

const WrappedStep = FormAnt.create({ name: 'validate_other' })(ThirdStep);

export default WrappedStep;
