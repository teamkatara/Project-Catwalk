import React from 'react';

const AddtoCart = ({ sku, quantity, addToBag, color }) => (
  <button style={{borderColor: color}} aria-label="Add to Bag" id="a2b" onClick={() => addToBag(sku, quantity)} >Add to Bag</button>
);

export default AddtoCart;
