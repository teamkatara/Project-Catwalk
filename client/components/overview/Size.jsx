import React from 'react';

const Size = ({ clickedStyle, sizeSelect, inStock }) => (
  <span onChange={sizeSelect}>
    {inStock
    && (
    <select className="size-dd">
      <option selected>Select Size</option>
      {Object.values(clickedStyle.skus).map((sku) => <option>{sku.size}</option>)}
    </select>
    )}
    {!inStock
      && <select className="size-disabled" disabled><option>OUT OF STOCK</option></select>}
  </span>
);

export default Size;
