import React from 'react';

const ProductDescription = ({ slogan, description }) => (
  <div id="description">
    <h4>{slogan}</h4>
    <p>{description}</p>
  </div>
);

export default ProductDescription;
