// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';
import RelatedCard from './CardDetails/RelatedCard';
import './RP.css';
import relatedlist from '../../mock-data/sample-related.json';

const RelatedProductsWidget = () => {
  const [list] = useState(relatedlist);

  return (
    <div className="related-products">
      <h3>Related Products</h3>
      <div className="cards-list">
        {list.map((product) => <RelatedCard id={product} key={product} />)}
      </div>
      <h3>Outfit List</h3>
      <div className="cards-list">
        {list.map((product) => <RelatedCard id={product} key={product} />)}
      </div>
    </div>
  );
};

export default RelatedProductsWidget;
