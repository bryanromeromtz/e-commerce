import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

function FormSearchBar(props) {
  return (
    <input
      {...props.input}
      type="text"
      placeholder={props.placeholder}
      className={`${props.className} form-search-bar`}
    />
  )
}

class ShopSearchBar extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    return (
      <form
        onSubmit={handleSubmit}
        className={`${className} shop-search-bar`}>
        <Field
          name="shop-search-bar"
          className='shop-search-bar__form-search-bar'
          placeholder='Search'
          component={FormSearchBar}
        />
      </form>
    )
  }
}

ShopSearchBar = reduxForm({
  form: "ShopSearchBar"
})(ShopSearchBar);

export default ShopSearchBar;