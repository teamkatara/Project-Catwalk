import React from 'react';

const helper = (stock) => {
  let count = 1;
  const options = [];

  while (count <= stock && count <= 15) {
    options.push(<option key={count}>{count}</option>);
    count++;
  }

  return options;
};

const Quantity = ({ quantitySelect, stock, inStock }) => (
  <span onChange={quantitySelect}>
    {inStock && (!!stock ? (
      <select id="quantity-dd">
        {helper(stock)}
      </select>
    ) : (
      <select id="quantity-dd">
        <option defaultValue>-</option>
        {helper(stock)}
      </select>
    )
    )}
    {!inStock && (
    <select id="quantity-disabled" disabled>
      <option defaultValue>-</option>
    </select>
    )}
  </span>
);

export default Quantity;
