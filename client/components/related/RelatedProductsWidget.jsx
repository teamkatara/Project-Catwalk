// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';
import RelatedCard from './RelatedCard';
import './RP.css';
import relatedlist from '../../mock-data/sample-related.json';

const RelatedProductsWidget = () => {
  const [list] = useState(relatedlist);
  return (
    <div className="related-products">
      {list.map((product) => <RelatedCard id={product} />)}
    </div>
  );
};

export default RelatedProductsWidget;
