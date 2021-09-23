import React from 'react';

const ProductDescription = ({ slogan, description, color }) => (
  <div id="description"style={{borderColor: color}} >
    <h4>{slogan}</h4>
    <p>{description}</p>
  </div>
);

export default ProductDescription;
