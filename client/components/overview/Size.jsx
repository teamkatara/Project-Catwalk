import React from 'react';

const Size = ({ selectedStyle, sizeSelect }) => (
  <select id="size-dd" onChange={sizeSelect}>
    <option>Select Size</option>
    {Object.values(selectedStyle.skus).map((sku) => {
      if (sku.quantity > 0) {
        return <option>{sku.size}</option>;
      }
    })}
  </select>
);

export default Size;
