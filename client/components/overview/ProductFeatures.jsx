import React from 'react';

let key = 0;

const ProductFeatures = ({ features }) => (
  <div id="features">{features.map((feature) => <div className="feature-entry" key={key++}>✓ {feature.feature}</div>)}</div>
);

export default ProductFeatures;
