import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class SignInForm extends Component {
  render() {
    const { className } = this.props;
    return (
      <form className={`${className} sing-in-form`}>

      </form>
    );
  }
}


export default SignInForm;

SignInForm = reduxForm({
  form: "SignInForm"
})