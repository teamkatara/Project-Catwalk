// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import RelatedRating from './RelatedRating';
import Thumbnail from './Thumbnail';
import relatedProductList from '../related-data/related-products.json';
import relatedStyles from '../related-data/related-styles.json';
import currentProductInfo from '../../../mock-data/sample-product.json';

const RelatedCard = ({ id, updateProductHandler }) => {
  let currentProduct;
  let currentStyle;
  const characteristics = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < relatedProductList.length; i++) {
    if (id === relatedProductList[i].id || id === relatedStyles[i].id) {
      // eslint-disable-next-line prefer-destructuring
      currentProduct = relatedProductList[i];
      currentStyle = relatedStyles[i];
    }
  }

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
        image={currentStyle.thumbnail}
        list={characteristics}
        product={currentProductInfo.name}
        current={currentProduct.name}
      />
      <div className="details">
        <span className="price">
          {currentProduct.category}
          <br />
        </span>
        <span onClick={() => updateProductHandler(id)} className="text">{currentProduct.name}</span>
        <span className="price">
          $
          {currentProduct.default_price}
        </span>
        <RelatedRating score={4.8} />
      </div>
    </div>
  );
};

RelatedCard.propTypes = {
  id: PropTypes.number.isRequired,
};

export default RelatedCard;
