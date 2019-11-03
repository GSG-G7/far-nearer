import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Input, notification } from 'antd';
import axios from 'axios';

import styles from './footer.module.css';

class SubscribeForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const {
      form: { validateFields },
    } = this.props;
    const openNotificationWithIcon = (type, message) => {
      notification[type]({
        message,
        duration: 3,
      });
    };
    validateFields(async (err, values) => {
      try {
        if (!err) {
          const { data } = await axios.get('/api/v1/mailList', {
            params: { email: values.email },
          });
          if (data.statusCode === 201) {
            openNotificationWithIcon(
              'success',
              'Great !! You will recive updated news and emails',
            );
          } else if (data.statusCode === 200) {
            openNotificationWithIcon('info', 'You already subscribed');
          } else if (data.statusCode === 400) {
            openNotificationWithIcon('error', data.error);
          }
        }
      } catch (error) {
        openNotificationWithIcon('error', 'Something went wrong !! Try again');
      }
    });
  };

  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    return (
      <Form
        layout="inline"
        onSubmit={this.handleSubmit}
        className={styles.form}
      >
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'Invalid email address',
              },
              {
                required: true,
                message: 'Please enter your email!',
              },
            ],
          })(<Input placeholder="Enter your email" size="large" />)}
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" size="large">
            Subscribe
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

SubscribeForm.propTypes = {
  form: PropTypes.objectOf(PropTypes.func).isRequired,
};

const Subscribe = Form.create({ name: 'SubscribeForm' })(SubscribeForm);

export default Subscribe;
