// eslint-disable-next-line no-use-before-define
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import RelatedCard from './CardDetails/RelatedCard.jsx';
import OutfitCard from './CardDetails/OutfitCard.jsx';
import RelatedCarousel from './CardDetails/RelatedCarousel.jsx';
import OutfitCarousel from './CardDetails/OutfitCarousel.jsx';

import './RP.css';
import relatedProductList from './related-data/related-products.json';
import relatedStyles from './related-data/related-styles.json';

const RelatedProductsWidget = ({
  updateProductId,
  rel,
  currentId,
  currentProduct,
  currentRating,
}) => {
  const firstRender = useRef(true);
  const [list, setList] = useState(rel);
  const [current, setCurrent] = useState(currentProduct);
  const [outfitList, setOutfit] = useState([]);
  const [currentP, setP] = useState();
  const [currentS, setS] = useState();
  const [rating, setRating] = useState();

  useEffect(() => {
    axios.get(`/products/${currentId}`)
      .then((resultProduct) => {
        axios.get(`/products/styles/${currentId}`)
          .then((resultStyles) => {
            axios.get(`/product/rating/${currentId}`)
              .then((resultReviews) => {
                setP(resultProduct.data);
                setS(resultStyles.data);
                return setRating(resultReviews.data);
              });
          });
      });
  }, [currentId]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      setList(rel);
      setCurrent(currentProduct);
    }
  }, [rel]);

  const click = (e) => {
    e.preventDefault();
    if (outfitList.indexOf(currentId) === -1) {
      setOutfit(outfitList.concat(currentId));
      // window.localStorage.setItem('outfits', JSON.stringify(outfitList));
    }
  };

  const removed = (number) => {
    setOutfit(outfitList.filter((outfit) => outfit !== number));
  };

  let outfits;
  if (outfitList.length === 0) {
    outfits = [''];
  } else {
    outfits = outfitList.map((outfit) => (
      <OutfitCard
        updateProductId={updateProductId}
        id={outfit}
        key={outfit}
        removeFunction={removed}
      />
    ));
  }

  let currentPro;
  let currentSty;
  let currentRa;

  const products = list.map((product) => {
    for (let i = 0; i < relatedProductList.length; i += 1) {
      if (currentP || currentS || rating === undefined) {
        if (product === relatedProductList[i].id || product === relatedStyles[i].id) {
          // eslint-disable-next-line prefer-destructuring
          currentPro = (relatedProductList[i]);
          currentSty = relatedStyles[i];
          currentRa = currentRating;
        }
      }
    }
    if (currentPro !== undefined || currentSty !== undefined) {
      return (
        <RelatedCard
          updateProductId={updateProductId}
          id={product}
          key={product}
          currentProductInfo={currentProduct}
          currentP={currentPro}
          currentS={currentSty}
          ratings={currentRa}
        />
      );
    }

    return (
      <RelatedCard
        updateProductId={updateProductId}
        id={product}
        key={product}
        currentProductInfo={currentProduct}
        currentP={currentP}
        currentS={currentS}
        ratings={rating}
      />
    );
  });

  return (
    <div className="related-products">
      <h3>Related Products</h3>
      <RelatedCarousel related={products} />
      <h3>Outfit List</h3>
      <OutfitCarousel
        outfit={outfits}
        currentProduct={current}
        rating={currentRating}
        click={click}
      />
    </div>
  );
};

RelatedProductsWidget.propTypes = {
  updateProductId: PropTypes.func.isRequired,
  rel: PropTypes.arrayOf(PropTypes.number).isRequired,
  currentId: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

export default RelatedProductsWidget;
