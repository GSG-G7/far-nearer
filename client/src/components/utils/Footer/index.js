import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Input, Icon } from 'antd';
import axios from 'axios';

import './style.css';

class Subscribe extends Component {
  state = {
    email: '',
  };

  componentDidMount = async () => {
    const {
      data: { data },
    } = await axios.get('/api/v1/mailList');
    this.setState({ email: data });
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      form: { validateFields },
    } = this.props;
    const { email } = this.state;
    validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    return (
      <div className="footer">
        <div className="container">
          <div className="footer__section">
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
          </div>
          <div className="footer__section">
            <h2 className="footer__heading">Contact Us</h2>
            <div className="footer__contact">
              <p>
                <Icon type="environment" /> <span>London, UK</span>
              </p>
              <p>
                <Icon type="phone" /> <span>0093762362727</span>
              </p>
              <p>
                <Icon type="mail" /> <span>email@email.com</span>
              </p>
            </div>
            <div className="footer__sociallinks">
              <Icon type="google" />
              <Icon type="twitter" />
              <Icon type="slack" />
              <Icon type="skype" />
            </div>
          </div>
          <div className="footer__section">
            <h2 className="footer__heading">Join Our Mailing List</h2>
            <Form
              layout="inline"
              onSubmit={this.handleSubmit}
              className="subscribe__form"
            >
              <Form.Item label="">
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
          </div>
        </div>
        <div className="footer__bottom">
          Copyright © 2019 Far Nearer. All Rights Reserved.
        </div>
      </div>
    );
  }
}

Subscribe.propTypes = {
  form: PropTypes.objectOf(PropTypes.func).isRequired,
  getFieldDecorator: PropTypes.func.isRequired,
};

const Footer = Form.create({ name: 'Subscribe' })(Subscribe);

export default Footer;
