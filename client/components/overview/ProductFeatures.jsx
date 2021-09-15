import React from 'react';

const ProductFeatures = ({ features }) => (
  <div id="features">{features.map((feature) => <div>✓ {feature.feature}</div>)}</div>
);

export default ProductFeatures;
