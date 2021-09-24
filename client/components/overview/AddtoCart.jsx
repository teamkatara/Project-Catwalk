import React from 'react';
import PropTypes from 'prop-types';

const AddtoCart = ({
  sku,
  quantity,
  addToBag,
  color,
}) => (
  <button type="button" style={{ borderColor: color }} id="a2b" onClick={() => addToBag(sku, quantity)}>
    Add to Bag
  </button>
);

AddtoCart.propTypes = {
  sku: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  addToBag: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

export default AddtoCart;
