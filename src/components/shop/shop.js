import React, { Component } from 'react';

import * as actions from '../../actions';
import { connect } from 'react-redux';
import ShopSearchBar from './shopSearchBar';



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

  onSubmit = (fields) => {
    console.log('fields', fields);
  }

  render() {
    return (
      <div className="shop">
        <ShopSearchBar
          className="shop_search-bar"
          onSubmit={this.onSubmit}
        />
        <div className="shop__products">
          {
            this.props.filteredProducts.map((product) => {
              return (
                <div key={product._id} className="shop-product">
                  <div className="shop-product__title">
                    {product.title}
                  </div>
                  <div className="shop-product__description">
                    {product.description}
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { categories, filteredProducts } = state.shop
  return {
    categories,
    filteredProducts
  }
}

Shop = connect(mapStateToProps, actions)(Shop);

export default Shop;