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
  <select onChange={quantitySelect}>
    <option>--</option>
    {helper(stock)}
  </select>
);

export default Quantity;
