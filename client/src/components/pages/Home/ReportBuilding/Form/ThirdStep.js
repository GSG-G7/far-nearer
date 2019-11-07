import React from 'react';
import { Form as FormAnt, Checkbox, Input } from 'antd';
import PropTypes from 'prop-types';

import styles from './form.module.css';

const ThirdStep = props => {
  const { form, onCityChange } = props;
  const handleSubmit = e => {
    e.preventDefault();
  };
  const { getFieldDecorator } = form;

  return (
    <FormAnt onSubmit={handleSubmit} layout="vertical">
      <>
        <FormAnt.Item label="Name">
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: 'Please add your name',
              },
            ],
          })(<Input placeholder="Write your name" />)}
        </FormAnt.Item>
        <FormAnt.Item label="Email">
          {getFieldDecorator('email', {
            rules: [
              {
                required: true,
                message: 'Please add your email',
              },
            ],
          })(<Input placeholder="Write your email" />)}
        </FormAnt.Item>
        <FormAnt.Item label="Post code">
          {getFieldDecorator('postCode', {
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
      </>
    </FormAnt>
  );
};

ThirdStep.propTypes = {
  form: PropTypes.objectOf(PropTypes.any).isRequired,
  onCityChange: PropTypes.func.isRequired,
};

const WrappedStep = FormAnt.create({ name: 'validate_other' })(ThirdStep);

export default WrappedStep;
