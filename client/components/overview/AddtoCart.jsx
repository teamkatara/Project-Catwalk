import React from 'react';

const AddtoCart = ({ sku, quantity, addToBag }) => (
  <button id="a2b" onClick={() => addToBag(sku, quantity)} >Add to Bag</button>
);

export default AddtoCart;
