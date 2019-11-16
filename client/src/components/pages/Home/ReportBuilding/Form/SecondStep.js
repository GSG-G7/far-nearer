import React from 'react';
import { Form as FormAnt, Button, Upload, Icon, Input } from 'antd';
import PropTypes from 'prop-types';

import styles from './form.module.css';

const { TextArea } = Input;

const SecondStep = props => {
  const {
    submittedValues,
    handleNext,
    handleBack,
    stepTwoValues: { emptyPeriod, extraInfo, preferredUse, thumbnail },
    form: { getFieldDecorator, validateFields, getFieldsValue },
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

  const storeValues = () => {
    const values = getFieldsValue();
    submittedValues(values);
    handleBack();
  };

  const normFile = e => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <FormAnt onSubmit={validateInput} layout="vertical">
      <FormAnt.Item
        className={styles.item}
        label={<span>How Long has it been empty ?</span>}
      >
        {getFieldDecorator('emptyPeriod', {
          rules: [
            {
              required: true,
              message: 'Please specify how Long has it been empty',
            },
          ],
          initialValue: emptyPeriod,
        })(<Input placeholder="Approximately. Feel free to take a guess." />)}
      </FormAnt.Item>
      <FormAnt.Item
        className={styles.item}
        label={
          <span>
            Other information ?
            <span style={{ color: '#888' }}> (Optional)</span>
          </span>
        }
      >
        {getFieldDecorator('extraInfo', {
          rules: [{ required: false, message: 'Please add extra information' }],
          initialValue: extraInfo,
        })(
          <TextArea
            rows={3}
            placeholder="Broken window on first floor, corner street unit, compulsory purchased at some point, previously tried to contact owner."
          />,
        )}
      </FormAnt.Item>
      <FormAnt.Item
        className={styles.item}
        label={
          <span>
            What would you like it used for ?
            <span style={{ color: '#888' }}> (Optional)</span>
          </span>
        }
      >
        {getFieldDecorator('preferredUse', {
          rules: [{ required: false, message: 'Please add the prefered use' }],
          initialValue: preferredUse,
        })(<TextArea rows={3} placeholder="" />)}
      </FormAnt.Item>
      <FormAnt.Item
        className={styles.item}
        label={
          <span>
            Upload building picture
            <span style={{ color: '#888' }}> (Optional)</span>
          </span>
        }
      >
        {getFieldDecorator('thumbnail', {
          valuePropName: 'fileList',
          getValueFromEvent: normFile,
          initialValue: thumbnail,
        })(
          <Upload
            name="logo"
            accept="image/*"
            multiple={false}
            customRequest={() => {}}
            listType="picture"
          >
            <Button className={styles.white}>
              <Icon type="upload" /> Picture
            </Button>
          </Upload>,
        )}
      </FormAnt.Item>
      <FormAnt.Item>
        <Button
          className={`prevButton  ${styles.white} ${styles['ml-0']}`}
          onClick={storeValues}
          size="large"
        >
          Previous
        </Button>
        <Button
          type="primary"
          size="large"
          onClick={validateInput}
          className="nextButton"
        >
          Next
        </Button>
      </FormAnt.Item>
    </FormAnt>
  );
};

SecondStep.propTypes = {
  form: PropTypes.objectOf(PropTypes.any).isRequired,
  submittedValues: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
  stepTwoValues: PropTypes.objectOf(PropTypes.any).isRequired,
};

const WrappedStep = FormAnt.create({ name: 'validate_other' })(SecondStep);

export default WrappedStep;
