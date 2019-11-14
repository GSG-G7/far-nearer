import React from 'react';
import { Form as FormAnt, Radio, Select, Input, Button } from 'antd';
import PropTypes from 'prop-types';

import styles from './form.module.css';

const { Option } = Select;

const FirstStep = props => {
  const {
    onCityChange,
    address,
    city,
    submittedValues,
    handleNext,
    stepOneValues: { previousUse, isOwnerLocal },
    form: { getFieldDecorator, validateFields },
  } = props;

  const validateInput = e => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        submittedValues(values);
        handleNext();
      }
    });
  };

  return (
    <FormAnt onSubmit={validateInput} layout="vertical">
      <>
        <FormAnt.Item
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}
          label="Choose a City:"
          className={styles.cityItem}
        >
          {getFieldDecorator('city', {
            initialValue: city === 'Morecambe' ? 'Morecambe' : 'Hastings',
            normalize: (value, pv, av) => {
              const key = value === 'Morecambe' ? 1 : 2;
              onCityChange({ key });
              return value;
            },
          })(
            <Radio.Group>
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
            // hidden: true,
          })(<Input disabled placeholder="Click on map to have address" />)}
        </FormAnt.Item>

        <FormAnt.Item label="Previous use " hasFeedback>
          {getFieldDecorator('previousUse', {
            rules: [{ required: true, message: 'Please select previous use ' }],
            initialValue: previousUse,
          })(
            <Select placeholder="Previous Use">
              <Option value="Residential building">Residential building</Option>
              <Option value="Retail building">Retail building</Option>
              <Option value="Office building">Office building</Option>
              <Option value="community building">Community building</Option>
            </Select>,
          )}
        </FormAnt.Item>

        <FormAnt.Item
          className={styles.item}
          label={
            <span>
              Owner
              <span style={{ color: '#888' }}> (Optional)</span>
            </span>
          }
        >
          {getFieldDecorator('owner', {
            rules: [
              {
                required: false,
                message: 'Please add the owner',
              },
            ],
            // defaultValue: owner,
            initialValue: '',
          })(<Input placeholder="Please input the owner" />)}
        </FormAnt.Item>

        <FormAnt.Item label="Are they local ?">
          {getFieldDecorator('isOwnerLocal', {
            initialValue: isOwnerLocal,
            rules: [
              {
                required: true,
                message: 'This field is required',
              },
            ],
          })(
            <Radio.Group key="$owner.local" name="owner-local">
              <Radio value="Yes">Yes</Radio>
              <Radio value="No">No</Radio>
              <Radio value="N/A">Don’t know</Radio>
            </Radio.Group>,
          )}
        </FormAnt.Item>
        <FormAnt.Item className="next">
          <Button type="primary" htmlType="submit" size="large">
            Next
          </Button>
        </FormAnt.Item>
      </>
    </FormAnt>
  );
};

FirstStep.propTypes = {
  form: PropTypes.objectOf(PropTypes.any).isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  onCityChange: PropTypes.func.isRequired,
  submittedValues: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  stepOneValues: PropTypes.objectOf(PropTypes.any).isRequired,
};

const WrappedStep = FormAnt.create({ name: 'validate_other' })(FirstStep);

export default WrappedStep;
