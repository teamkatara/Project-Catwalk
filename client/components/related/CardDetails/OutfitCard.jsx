// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import RelatedRating from './RelatedRating';
import OutfitThumbnail from './OutfitThumbnail';
import currentStyle from '../../../mock-data/sample-styles.json';
import currentProductInfo from '../../../mock-data/sample-product.json';

const OutfitCard = ({ id, updateProductId, removeFunction, rating}) => {
  const currentProduct = currentProductInfo;

  const removing = () => {
    removeFunction(id);
  };
  return (
    <div className="card">
      <OutfitThumbnail
        image={currentStyle.results[0].photos[0].thumbnail_url}
        updateProductId={updateProductId}
        id={id}
        click={removing}
      />
      <div
        onClick={() => updateProductId(id)}
        className="details"
      >
        <span className="price">
          {currentProduct.category}
          <br />
        </span>
        <span className="text">{currentProduct.name}</span>
        <span className="price">
          $
          {currentProduct.default_price}
        </span>
        <RelatedRating score={4.8} />
      </div>
    </div>
  );
};

OutfitCard.propTypes = {
  id: PropTypes.number.isRequired,
  updateProductId: PropTypes.func.isRequired,
  removeFunction: PropTypes.func.isRequired,
  rating: PropTypes.number.isRequired,
};

export default OutfitCard;
