import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Input, Icon, notification } from 'antd';
import axios from 'axios';

import './style.css';

class Subscribe extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const {
      form: { validateFields },
    } = this.props;
    const openNotificationWithIcon = (type, message) => {
      notification[type]({
        message,
      });
    };
    validateFields(async (err, values) => {
      try {
        if (!err) {
          const { data } = await axios.get('/api/v1/mailList', {
            params: { email: values.email },
          });
          if (data.statusCode === 400) {
            openNotificationWithIcon('error', data.error);
          }
        }
      } catch (error) {
        openNotificationWithIcon('error', 'Something went wrong');
      }
    });
  };

  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    return (
      <footer className="footer">
        <div className="container">
          <section className="footer__section">
            <h2 className="footer__heading">About Us</h2>
            <p className="footer__content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate velit ex maxime ipsum amet recusandae Lorem, ipsum
              dolor.
            </p>
            <Icon type="global" className="footer__icon" />
            <a href="http://www.farnearer.org/" className="footer__link">
              Farnearer.org
            </a>
          </section>
          <section className="footer__section">
            <h2 className="footer__heading">Contact Us</h2>
            <div className="footer__contact">
              <p>
                <Icon type="environment" /> <span>London, UK</span>
              </p>
              <p>
                <Icon type="phone" /> <span>+44 01 2345 6789</span>
              </p>
              <p>
                <Icon type="mail" /> <span>example@example.com</span>
              </p>
            </div>
            <div className="footer__sociallinks">
              <Icon type="google" />
              <Icon type="twitter" />
              <Icon type="slack" />
              <Icon type="skype" />
            </div>
          </section>
          <section className="footer__section">
            <h2 className="footer__heading">Join Our Mailing List</h2>
            <Form
              layout="inline"
              onSubmit={this.handleSubmit}
              className="subscribe__form"
            >
              <Form.Item>
                {getFieldDecorator('email', {
                  rules: [
                    {
                      type: 'email',
                      message: 'The input is not valid E-mail!',
                    },
                    {
                      required: true,
                      message: 'Please input your E-mail!',
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
            <p className="footer__content">
              Subscribe to our website and recieve updateed news and emails
            </p>
          </section>
        </div>
        <div className="footer__bottom">
          Copyright © 2019 Far Nearer. All Rights Reserved.
        </div>
      </footer>
    );
  }
}

Subscribe.propTypes = {
  form: PropTypes.objectOf(PropTypes.func).isRequired,
};

const Footer = Form.create({ name: 'Subscribe' })(Subscribe);

export default Footer;
