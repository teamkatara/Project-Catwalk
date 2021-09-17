import React from 'react';

const AddtoCart = ({ sku, quantity, addToBag }) => (
  <button onClick={() => addToBag(sku, quantity)} >Add to Bag</button>
);

export default AddtoCart;
