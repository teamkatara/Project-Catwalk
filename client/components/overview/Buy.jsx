import React from 'react';
import Size from './Size';
import Quantity from './Quantity';
import AddtoCart from './AddtoCart';

class Buy extends React.Component {
  constructor(props) {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <Size />
        <Quantity />
        <AddtoCart />
      </div>
    );
  }
}

export default Buy;
