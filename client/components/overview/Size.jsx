import React from 'react';

const helper = (skus) => {
  let count = 0;
  const options = skus.map((sku, i) => {
    if (sku.quantity > 0) { return <option key={i}>{sku.size}</option>; }
  });
  options.forEach((option) => {
    if (option) { count++; }
  });
  if (count === 0) {
    return (
      <select className="size-disabled" disabled>
        <option>OUT OF STOCK</option>
      </select>
    );
  }
  return (
    <select className="size-dd">
      <option selected>Select Size</option>
      {options}
    </select>
  );
};

const Size = ({ selectedStyle, sizeSelect }) => (
  <span onChange={sizeSelect}>
    {helper(Object.values(selectedStyle.skus))}
  </span>
);

export default Size;
