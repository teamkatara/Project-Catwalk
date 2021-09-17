import React from 'react';
import Size from './Size';
import Quantity from './Quantity';
import AddtoCart from './AddtoCart';

class Buy extends React.Component {
  constructor(props) {
    super();

    this.state = {
      size: null,
      quantity: null,
      quantityOptions: null,
    };

    this.sizeSelect = this.sizeSelect.bind(this);
  }

  sizeSelect(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div>
        <Size selectedStyle={this.props.selectedStyle} sizeSelect={this.sizeSelect} />
        <Quantity selectedStyle={this.props.selectedStyle} quantityOptions={this.state.quantityOptions} />
        <AddtoCart size={this.state.size} quantity={this.state.quantity} />
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
