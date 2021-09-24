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

const Overview = ({ product, selectStyle, styles, clickedStyle, reviews, updateProduct, color }) => {
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
                  axios.get(`/products/${productId}/related`)
                    .then((resultRelated) => {
                      updateProduct(
                        resultProduct.data,
                        resultStyles.data,
                        resultReviews.data,
                        resultRelated.data,
                      );
                    })
                ))
            ))
        ));
    }
  }, [productId]);

  return (
    <div className="overview">
      <Carousel clickedStyle={clickedStyle} />
      <div id="product-info-container">
        <Info product={product} styles={styles} clickedStyle={clickedStyle} reviews={reviews} color={color} />
        <StyleSelector styles={styles} clickedStyle={clickedStyle} selectStyle={selectStyle} color={color} />
        <Buy clickedStyle={clickedStyle} color={color}/>
      </div>
      <ProductDescription description={product.description} slogan={product.slogan} color={color} />
      <ProductFeatures features={product.features} />
    </div>
  );
};

// PropTypes

export default Overview;
