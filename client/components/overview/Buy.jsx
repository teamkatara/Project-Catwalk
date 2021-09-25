/* eslint-disable no-alert */
import React from 'react';
import PropTypes from 'prop-types';
import Size from './Size.jsx';
import Quantity from './Quantity.jsx';
import AddtoCart from './AddtoCart.jsx';

const inStock = (skus) => {
  let count = 0;
  skus.forEach((sku) => { if (sku.quantity > 0) { count++; } });
  return count !== 0;
};

class Buy extends React.Component {
  constructor(props) {
    super();

    this.state = {
      sku: null,
      quantity: null,
      stock: null,
      size: null,
    };

    this.sizeSelect = this.sizeSelect.bind(this);
    this.quantitySelect = this.quantitySelect.bind(this);
    this.addToBag = this.addToBag.bind(this);
  }

  sizeSelect(event) {
    Object.values(this.props.clickedStyle.skus).forEach((sku, i) => {
      if (sku.size === event.target.value) {
        this.setState({
          sku: Object.keys(this.props.clickedStyle.skus)[i],
          stock: sku.quantity,
          quantity: '1',
        });
      }
    });
    this.setState({
      size: event.target.value,
    });
  }

  quantitySelect(event) {
    this.setState({
      quantity: event.target.value,
    });
  }

  addToBag(sku, quantity) {
    if (!sku && !quantity) {
      alert('Please pick a size and quantity');
    } else if (this.state.size === 'Select Size') {
      alert('Please pick a size');
    }
  }

  render() {
    return (
      <div>
        <Size
          clickedStyle={this.props.clickedStyle}
          color={this.props.color}
          sizeSelect={this.sizeSelect}
          inStock={inStock(Object.values(this.props.clickedStyle.skus))}
        />
        <Quantity
          quantitySelect={this.quantitySelect}
          color={this.props.color}
          stock={this.state.stock}
          inStock={inStock(Object.values(this.props.clickedStyle.skus))}
        />
        <div>
          {inStock(Object.values(this.props.clickedStyle.skus))
            && (
            <AddtoCart
              color={this.props.color}
              addToBag={this.addToBag}
              sku={this.state.sku}
              quantity={this.state.quantity}
            />
            )}
          <span className="share-container" style={{ borderColor: this.props.color }}>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook link"><i className="fab fa-facebook-f fa-lg share" /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter link"><i className="fab fa-twitter fa-lg share" /></a>
            <a href="https://www.pinterest.com" target="_blank" rel="noreferrer" aria-label="Pinterest link"><i className="fab fa-pinterest-p fa-lg share" /></a>
          </span>
        </div>
      </div>
    );
  }
}

Buy.propTypes = {
  skus: PropTypes.arrayOf().isRequired,
}

export default Buy;
