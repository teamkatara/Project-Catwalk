// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import RelatedRating from './RelatedRating';
import Thumbnail from './Thumbnail';
import relatedProductList from '../related-data/related-products.json';
import relatedStyles from '../related-data/related-styles.json';

const RelatedCard = ({ id }) => {
  let currentProduct;
  let currentStyle;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < relatedProductList.length; i++) {
    if (id === relatedProductList[i].id || id === relatedStyles[i].id) {
      // eslint-disable-next-line prefer-destructuring
      currentProduct = relatedProductList[i];
      currentStyle = relatedStyles[i];
    }
  }

  return (
    <div className="card">
      <Thumbnail image={currentStyle.thumbnail} />
      <div className="details">
        <span className="price">Category</span>
        <span className="text">{currentProduct.name}</span>
        <span className="price">{currentProduct.default_price}</span>
        <RelatedRating score={4.8} />
      </div>
    </div>
  );
};

RelatedCard.propTypes = {
  id: PropTypes.number.isRequired,
};

export default RelatedCard;
