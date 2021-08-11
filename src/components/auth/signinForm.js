import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formFields';

class SignInForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className={`${className} sign-in-form`}>
        <Field className='sign-in-form__email'
          type='email'
          title='Email'
          placeholder='Email'
          name='email'
          component={FormInput} />
        <Field className='sign-in-form__password'
          onClick={() => console.log('tryna submit')
          }
          type='password'
          title='Password'
          placeholder='Password'
          name='password'
          component={FormInput} />
        <div className="sign-in-form__line"></div>
        <Field className='sign-in-form__login'
          type='login'
          title='Login'
          name='login'
          component={FormButton} />
      </form>
    );
  }
}

SignInForm = reduxForm({
  form: 'SignInForm'
})(SignInForm);

export default SignInForm;

