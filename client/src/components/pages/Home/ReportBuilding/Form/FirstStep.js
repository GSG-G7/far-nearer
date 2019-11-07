import React from 'react';
import { Form as FormAnt, Radio, Select, Checkbox, Input } from 'antd';
import PropTypes from 'prop-types';

import styles from './form.module.css';

const { Option } = Select;

const FirstStep = props => {
  const { form, onCityChange } = props;
  const handleSubmit = e => {
    e.preventDefault();
  };
  const { getFieldDecorator } = form;

  return (
    <FormAnt onSubmit={handleSubmit} layout="vertical">
      <>
        <FormAnt.Item
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}
          label="Choose a City:"
          className={styles.cityItem}
        >
          {getFieldDecorator('radio-group')(
            <Radio.Group onChange={onCityChange}>
              <Radio value="Morecambe">Morecambe</Radio>
              <Radio value="Hastings">Hastings</Radio>
            </Radio.Group>,
          )}
        </FormAnt.Item>
        <FormAnt.Item label="Address">
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: 'Please pin on the map the address',
              },
            ],
          })(<Input disabled placeholder="Click on map to have address" />)}
        </FormAnt.Item>
        <FormAnt.Item label="Previous use " hasFeedback>
          {getFieldDecorator('select', {
            rules: [{ required: true, message: 'Please select previous use ' }],
          })(
            <Select placeholder="Previous use">
              <Option value="Residential building">Residential building</Option>
              <Option value="Retail building">Retail building</Option>
              <Option value="Office building">Office building</Option>
              <Option value="community building">community building</Option>
              <Option value="Others">Others</Option>
            </Select>,
          )}
        </FormAnt.Item>
        <FormAnt.Item label="Owner">
          <Input placeholder="Please input the owner" />
          <Checkbox value="Don’t know">Don’t know</Checkbox>
        </FormAnt.Item>

        <FormAnt.Item label="Are they local ?">
          {getFieldDecorator('radio-group')(
            <Radio.Group>
              <Radio value="Yes">Yes</Radio>
              <Radio value="No">No</Radio>
              <Radio value="Don’t know">Don’t know</Radio>
            </Radio.Group>,
          )}
        </FormAnt.Item>
      </>
    </FormAnt>
  );
};

FirstStep.propTypes = {
  form: PropTypes.objectOf(PropTypes.any).isRequired,
  onCityChange: PropTypes.func.isRequired,
};

const WrappedStep = FormAnt.create({ name: 'validate_other' })(FirstStep);

export default WrappedStep;
