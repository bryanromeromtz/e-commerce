import React, { Component } from 'react';

class Details extends Component {

  renderChildren = () => {
    const { links, infos } = this.props;
    let children = [];
    if (links) {
      children = links.map((link) => {
        return (
          <a onClick={link.onClick} key={link._id} className="details__link">{link.title}</a>
        )
      });
    }
    else if (infos) {
      children = infos.map((item) => {
        return (
          <div key={item._id} className="details__item">{item.title}</div>
        )
      });
    }
    return children;
  }
  render() {
    const { title, className } = this.props;
    return (
      <div className={`${className} details`}>
        <div className="details__title">{title}</div>
        <div className="details__items">
          {
            this.renderChildren()
          }
        </div>
      </div>
    );
  }
}

export default Details;
