// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import RelatedRating from './RelatedRating';
import Thumbnail from './Thumbnail';

const RelatedCard = ({
  id,
  updateProductId,
  currentProductInfo,
  currentP,
  currentS,
  ratings,
}) => {
  const characteristics = [];
  const [currentProduct] = useState(currentP);
  const [currentStyle] = useState(currentS);
  const [currentReview] = useState(ratings);

  const main = Object.values(currentProductInfo.features);
  const mainMap = main.map((feature) => feature.feature);
  const current = Object.values(currentProduct.features);
  const currentMap = current.map((feature) => feature.feature);

  let length;

  if (main.length > current.length) {
    length = main.length;
  } else {
    length = current.length;
  }

  for (let i = 0; i < length; i += 1) {
    let isDuplicate = false;
    let mainUndefined = false;
    let currentUndefined = false;

    if (main[i] === undefined) {
      mainUndefined = true;
    } else if (current[i] === undefined) {
      currentUndefined = true;
    }

    if (!mainUndefined && !currentUndefined) {
      if (mainMap.indexOf(current[i].feature) >= 0 || currentMap.indexOf(main[i].feature) >= 0) {
        isDuplicate = true;
      }
    }

    if (mainUndefined) {
      if (current[i].value === null) {
        current[i].value = '✔';
      }
      characteristics.push(['', current[i].feature, current[i].value]);
    } else if (currentUndefined) {
      if (main[i].value === null) {
        main[i].value = '✔';
      }
      characteristics.push([main[i].value, main[i].feature, '']);
    } else if (isDuplicate) {
      if (main[i].value === null) {
        main[i].value = '✔';
      }
      if (current[i].value === null) {
        current[i].value = '✔';
      }
      characteristics.push([main[i].value, main[i].feature, current[i].value]);
    } else if (!isDuplicate) {
      if (main[i].value === null) {
        main[i].value = '✔';
      }
      if (current[i].value === null) {
        current[i].value = '✔';
      }
      characteristics.push([main[i].value, main[i].feature, '']);
      characteristics.push(['', current[i].feature, current[i].value]);
    }
  }

  return (
    <div className="card">
      <Thumbnail
        image={currentStyle.results[0].photos[0].thumbnail_url}
        list={characteristics}
        product={currentProductInfo.name}
        current={currentProduct.name}
        updateProductId={updateProductId}
        id={id}
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
        <RelatedRating score={currentReview} />
      </div>
    </div>
  );
};

RelatedCard.propTypes = {
  id: PropTypes.number.isRequired,
  updateProductId: PropTypes.func.isRequired,
  currentProductInfo: PropTypes.objectOf(
    [
      PropTypes.number,
      PropTypes.string,
      PropTypes.object,
    ],
  ).isRequired,
  currentP: PropTypes.objectOf(
    [
      PropTypes.number,
      PropTypes.string,
      PropTypes.object,
    ],
  ).isRequired,
  currentS: PropTypes.objectOf(
    [
      PropTypes.string,
      PropTypes.object,
    ],
  ).isRequired,
  ratings: PropTypes.number.isRequired,
};

export default RelatedCard;
