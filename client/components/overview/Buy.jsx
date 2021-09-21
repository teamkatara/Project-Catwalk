import React from 'react';
import Size from './Size';
import Quantity from './Quantity';
import AddtoCart from './AddtoCart';

class Buy extends React.Component {
  constructor(props) {
    super();

    this.state = {
      sku: null,
      quantity: null,
      stock: null,
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
  }

  quantitySelect(event) {
    this.setState({
      quantity: event.target.value,
    });
  }

  addToBag(sku, quantity) {
    console.log(sku, quantity)
  }

  render() {
    return (
      <div>
        <Size clickedStyle={this.props.clickedStyle} sizeSelect={this.sizeSelect} />
        <Quantity quantitySelect={this.quantitySelect} stock={this.state.stock} />
        <div>
          <AddtoCart addToBag={this.addToBag} sku={this.state.sku} quantity={this.state.quantity} />
        </div>
      </div>
    );
  }
}

// const Buy = ({ selectedStyle }) => (
//   <div>
//     <Size selectedStyle={selectedStyle} />
//     <Quantity selectedStyle={selectedStyle} />
//     <AddtoCart />
//   </div>
// );

export default Buy;
