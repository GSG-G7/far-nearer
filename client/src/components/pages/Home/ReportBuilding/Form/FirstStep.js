import React from 'react';
import { Form as FormAnt, Radio, Select, Input, Button } from 'antd';
import PropTypes from 'prop-types';

import styles from './form.module.css';

const { Option } = Select;

class FirstStep extends React.Component {
  componentDidUpdate(prevProps) {
    const {
      form: { setFieldsValue },
      location,
    } = this.props;
    if (prevProps.location !== location) setFieldsValue({ location });
  }

  validateInput = e => {
    const {
      submittedValues,
      handleNext,
      form: { validateFields },
    } = this.props;
    e.preventDefault();

    validateFields((err, values) => {
      const val = { ...values };
      if (!err) {
        if (!val.isOwnerLocal) val.isOwnerLocal = 'N/A';
        submittedValues(val);
        handleNext();
      }
    });
  };

  render() {
    const {
      onCityChange,
      location,
      city,
      stepOneValues: { previousUse, isOwnerLocal },
      form: { getFieldDecorator },
    } = this.props;

    return (
      <FormAnt onSubmit={this.validateInput} layout="vertical">
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
        <FormAnt.Item label="Location">
          {getFieldDecorator('location', {
            rules: [
              {
                required: true,
                message: 'Please pin on the map the location',
              },
            ],
            initialValue: location,
          })(<Input disabled placeholder="Click on map to have location" />)}
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
              <Option value="Community building">Community building</Option>
              <Option value="Industrial building">Industrial building</Option>
              <Option value="Other">Other</Option>
            </Select>,
          )}
        </FormAnt.Item>

        <FormAnt.Item
          className={styles.item}
          label={
            <span>
              Who owns the building ?
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
            initialValue: '',
          })(
            <Input placeholder="E.g. Dan Jones. Has lived overseas since 2014. Last contacted in 2015" />,
          )}
        </FormAnt.Item>

        <FormAnt.Item label="Are they local ?">
          {getFieldDecorator('isOwnerLocal', {
            initialValue: isOwnerLocal,
            rules: [
              {
                required: false,
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
      </FormAnt>
    );
  }
}

FirstStep.propTypes = {
  form: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  onCityChange: PropTypes.func.isRequired,
  submittedValues: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  stepOneValues: PropTypes.objectOf(PropTypes.any).isRequired,
};

const WrappedStep = FormAnt.create({ name: 'validate_other' })(FirstStep);

export default WrappedStep;
