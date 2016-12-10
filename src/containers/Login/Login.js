import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { loginUser } from './../../actions/auth';
import LogoImg from '../../images/logo.png'

import './Login.scss';

const createForm = Form.create;
const FormItem = Form.Item;

function nope() {
  return false;
}

class Login extends Component {

  constructor(props) {
    super(props);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { dispatch } = this.props;
    this.props.form.validateFields((errors) => {
      if (errors) {
        return false;
      }
      const creds = (this.props.form.getFieldsValue());
      dispatch(loginUser(creds, this.loginFailedCallback));
    });
  }

  loginFailedCallback = (email, message) => {
    const { setFields } = this.props.form;
    const newValue = {
      email: {
        name: "email",
        validating: false,
        value: email,
        errors: [message]
      }
    };
    setFields(newValue);
  }

  render() {
    const { getFieldProps } = this.props.form;
    const emailProps = getFieldProps('email', {
      validate: [{
        rules: [
          { required: true }
        ],
        trigger: 'onBlur'
      }, {
        rules: [
          { type: 'email', message: 'Not a valid email address!' }
        ],
        trigger: ['onBlur']
      }]
    });

    const passwordProps = getFieldProps('password')

    return (
      <div className="login-container">
        <div className="login-mask"/>
        <Form className="login-content" horizontal onSubmit={this.handleSubmit}>
          <h2><img src={LogoImg}/></h2>
          <FormItem label="Email" hasFeedback required={false}>
            <Input
              {...emailProps}
              type="email"
            />
          </FormItem>
          <FormItem label="Password" hasFeedback  required={false}>
            <Input {...passwordProps} type="password" autoComplete="off"
              onContextMenu={nope} onPaste={nope} onCopy={nope} onCut={nope} />
          </FormItem>
          <FormItem>
            <Button className="ant-col-24" type="primary" htmlType="submit">Login</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

Login.propTypes = {
  form: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { auth } = state;
  return {
    auth
  };
}

export default connect(mapStateToProps)(createForm()(Login));
