import React from 'react';
import { Form as FormAnt, Button, Upload, Icon, Input } from 'antd';
import PropTypes from 'prop-types';

import styles from './form.module.css';

const { TextArea } = Input;

const SecondStep = props => {
  const { form } = props;
  const handleSubmit = e => {
    e.preventDefault();
  };
  const normFile = e => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  const { getFieldDecorator } = form;

  return (
    <FormAnt onSubmit={handleSubmit} layout="vertical">
      <FormAnt.Item
        className={styles.item}
        label={<span>How Long has it been empty ?</span>}
      >
        {getFieldDecorator('username', {
          rules: [
            {
              required: true,
              message: 'Please specify how Long has it been empty',
            },
          ],
        })(<Input placeholder="" />)}
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
        <TextArea rows={3} placeholder="" />
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
        <TextArea rows={3} placeholder="" />
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
        {getFieldDecorator('upload', {
          valuePropName: 'fileList',
          getValueFromEvent: normFile,
        })(
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button className={styles.white}>
              <Icon type="upload" /> Picture
            </Button>
          </Upload>,
        )}
      </FormAnt.Item>
    </FormAnt>
  );
};

SecondStep.propTypes = {
  form: PropTypes.objectOf(PropTypes.any).isRequired,
};

const WrappedStep = FormAnt.create({ name: 'validate_other' })(SecondStep);

export default WrappedStep;
