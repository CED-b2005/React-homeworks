import React, { Component } from 'react';
import ShowCard from './showCard/ShowCard';

class RightContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8000/api/products') /*axious*/
      .then((res) => res.json())
      .then((data) => this.setState({ products: data }))
      .catch((error) => console.error('API error:', error));
  }

  render() {
    const { products } = this.state;

    return (
      <div>
        <div id="right-content">
          <h2>Product :</h2>
          <div id="products">
            {products.map((product) => (
              <ShowCard
                key={product.id}
                loai={product.loai}
                name={product.name}
                image={product.image}
              />
            ))}
            <div style={{ clear: 'both' }} />
          </div>
          <div style={{ clear: 'both' }} />
        </div>
        <div style={{ clear: 'both' }} />
      </div>
    );
  }
}

export default RightContent;
