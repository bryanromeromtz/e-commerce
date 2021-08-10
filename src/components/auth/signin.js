import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class SignIn extends Component {
  render() {
    return (
      <div className='sign-in'>
        <h1>Sign in</h1>
      </div>
    );
  }
}


export default SignIn;

SignIn = reduxForm({
  form: "SignIn"
})