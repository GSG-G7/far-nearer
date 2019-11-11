import React from 'react';
import { Form as FormAnt, Radio, Select, Checkbox, Input } from 'antd';
import PropTypes from 'prop-types';

import styles from './form.module.css';

const { Option } = Select;

const FirstStep = props => {
  const { form, onCityChange, city, address } = props;
  const handleSubmit = e => {
    e.preventDefault();
  };

  const {
    form: { validateFields },
  } = props;

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
          {getFieldDecorator('city-radio-group', {
            initialValue: 'Morecambe',
            normalize: (value, pv, av) => {
              const key = value === 'Morecambe' ? 1 : 2;
              onCityChange({ key });
              return value;
            },
          })(
            <Radio.Group key="$city" name="city">
              <Radio value="Morecambe">Morecambe</Radio>
              <Radio value="Hastings">Hastings</Radio>
            </Radio.Group>,
          )}
        </FormAnt.Item>
        <FormAnt.Item label="Address">
          {getFieldDecorator('address', {
            rules: [
              {
                required: true,
                message: 'Please pin on the map the address',
              },
            ],
            initialValue: address,
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
              <Option value="community building">Community building</Option>
            </Select>,
          )}
        </FormAnt.Item>

        <FormAnt.Item label="Owner">
          {getFieldDecorator('owner', {
            rules: [
              {
                required: false,
                message: 'Please add the owner',
              },
            ],
          })(<Input placeholder="Please input the owner" />)}
          <Checkbox value="Don’t know">Don’t know</Checkbox>
        </FormAnt.Item>

        <FormAnt.Item label="Are they local ?">
          {getFieldDecorator('owner-radio-group')(
            <Radio.Group key="$owner.local" name="owner-local">
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
  city: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  onCityChange: PropTypes.func.isRequired,
};

const WrappedStep = FormAnt.create({ name: 'validate_other' })(FirstStep);

export default WrappedStep;
