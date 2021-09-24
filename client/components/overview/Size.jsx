import React from 'react';

const Size = ({ clickedStyle, sizeSelect, inStock, color }) => (
  <span onChange={sizeSelect}>
    {inStock
    && (
    <select className="size-dd" style={{borderColor: color}}>
      <option selected>Select Size</option>
      {Object.values(clickedStyle.skus).map((sku) => <option>{sku.size}</option>)}
    </select>
    )}
    {!inStock
      && <select className="size-disabled" disabled><option>OUT OF STOCK</option></select>}
  </span>
);

export default Size;
