// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RelatedCard from './CardDetails/RelatedCard.jsx';
import RelatedCarousel from './CardDetails/RelatedCarousel.jsx';
import './RP.css';
import relatedlist from '../../mock-data/sample-related.json';

const RelatedProductsWidget = ({ updateProductId }) => {
  const [list] = useState(relatedlist);

  const products = list.map((product) => (
    <RelatedCard
      updateProductId={updateProductId}
      id={product}
      key={product}
    />
  ));

  return (
    <div className="related-products">
      <h3>Related Products</h3>
      <RelatedCarousel related={products} />
    </div>
  );
};

RelatedProductsWidget.propTypes = {
  updateProductId: PropTypes.func.isRequired,
};

export default RelatedProductsWidget;
