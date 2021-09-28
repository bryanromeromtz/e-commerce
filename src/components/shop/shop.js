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
    this.props.fetchShopCategories();
    this.props.fetchShopProducts();
  }

  shouldComponentUpdate(nextProps) {
    if (this.props != nextProps) {
      this.props.setNavbarLinks(nextProps.categories, (_id) => this.props.filterProductsWithCategorieId(_id));
    }
    return true;
  }

  render() {
    return (
      <div className="shop">
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { categories } = state.shop
  return {
    categories
  }
}

Shop = connect(mapStateToProps, actions)(Shop);

export default Shop;