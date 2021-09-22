// eslint-disable-next-line no-use-before-define
import React, { useContext, useEffect, useRef } from 'react';
import axios from 'axios';
import ProductContext from '../ProductContext';

import Info from './Info';
import Carousel from './Carousel';
import StyleSelector from './StyleSelector';
import Buy from './Buy';
import ProductDescription from './ProductDescription';
import ProductFeatures from './ProductFeatures';

const Overview = ({ product, selectStyle, styles, clickedStyle, reviews, updateProduct }) => {
  const productId = useContext(ProductContext);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      axios.get(`/products/${productId}`)
        .then((resultProduct) => (
          axios.get(`/products/styles/${productId}`)
            .then((resultStyles) => (
              axios.get(`/reviews/${productId}`)
                .then((resultReviews) => (
                  updateProduct(resultProduct.data, resultStyles.data, resultReviews.data)
                ))
            ))
        ));
    }
  }, [productId]);

  return (
    <div className="overview">
      <Carousel clickedStyle={clickedStyle} />
      <div id="product-info-container">
        <Info product={product} styles={styles} clickedStyle={clickedStyle} reviews={reviews} />
        <StyleSelector styles={styles} clickedStyle={clickedStyle} selectStyle={selectStyle} />
        <Buy clickedStyle={clickedStyle} />
        {/* <div className="share-container">
          <a href="https://www.facebook.com" target="_blank"><i className="fab fa-facebook-f fa-2x"></i></a>
          <a href="https://twitter.com" target="_blank"><i className="fab fa-twitter fa-2x"></i></a>
          <a href="https://www.pinterest.com" target="_blank"><i className="fab fa-pinterest-p fa-2x"></i></a>
        </div> */}
      </div>
      <ProductDescription description={product.description} slogan={product.slogan} />
      <ProductFeatures features={product.features} />
    </div>
  );
};

// PropTypes

export default Overview;
