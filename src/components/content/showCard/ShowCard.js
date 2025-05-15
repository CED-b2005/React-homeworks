import React, { Component } from 'react';

class ShowCard extends Component {
  render() {
    const { loai, name, image } = this.props;

    return (
      <div className="product">
        <div className="text">
          <div className="p-name">
            <a href="item.html">{loai}</a>
          </div>
        </div>

        <div className="p-img">
          <img src={image} alt={name} width={200} height={200} />
        </div>

        <div className="text">
          <div className="p-cat">{name}</div>
          <div className="p-price">Please Call</div>
          <input
            type="button"
            className="button"
            name="add"
            value="Add to cart"
          />
        </div>

        <div className="clear" />
      </div>
    );
  }
}

export default ShowCard;
