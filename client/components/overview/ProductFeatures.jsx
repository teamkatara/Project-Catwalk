import React from 'react';

const ProductFeatures = ({ features }) => (
  <div>{features.map((feature) => <div>✓ {feature.feature}</div>)}</div>
);

export default ProductFeatures;
