import React, { Component } from 'react';

import * as actions from '../../actions';
import { connect } from 'react-redux';

class Shop extends Component {

  componentDidMount() {
    const headerLinks = [
      {
        _id: 0,
        title: 'Login',
        path: '/signin'
      }
    ]

    this.props.setHeaderLinks(headerLinks);
  }

  render() {
    return (
      <div className="shop">
        Shop...
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

Shop = connect(mapStateToProps, actions)(Shop);

export default Shop;