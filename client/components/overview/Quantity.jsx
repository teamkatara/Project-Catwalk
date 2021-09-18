import React from 'react';

const helper = (stock) => {
  let count = 1;
  const options = [];

  while (count <= stock && count <= 15) {
    options.push(<option>{count}</option>);
    count++;
  }

  return options;
};

const Quantity = ({ quantitySelect, stock }) => (
  <span onChange={quantitySelect}>
    {!!stock
    && (
      <select id="quantity-dd">
        {helper(stock)}
      </select>
    )}
    {!stock
    && (
      <select id="quantity-dd">
        <option selected>-</option>
        {helper(stock)}
      </select>
    )}
  </span>
);

export default Quantity;
