// eslint-disable-next-line no-use-before-define
import React, { useContext, useEffect, useRef } from 'react';
import ProductContext from '../ProductContext';
import axios from 'axios';

import Info from './Info';
import Carousel from './Carousel';
import StyleSelector from './StyleSelector';
import Buy from './Buy';
import ImageGallery from './ImageGallery';
import ProductDescription from './ProductDescription';
import ProductFeatures from './ProductFeatures';

// class ProductOverviewWidget extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       rating: null,
//     };
//   }

//   componentDidMount() {
//     // axios.get('/product/rating/40355')
//     //   .then((response) => {
//     //     this.setState({
//     //       rating: response.data.toFixed(2),
//     //     });
//     //   });
//   }

//   render() {
//     return (
//       <div className="overview">Overview</div>
//     );
//   }
// }

// updateProduct(, resultStyles.data, resultReviews.data.results.length)

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
        <a href="https://www.facebook.com" target="_blank"><i className="fab fa-facebook-f"></i></a>
        <a href="https://twitter.com" target="_blank"><i className="fab fa-twitter"></i></a>
        <a href="https://www.pinterest.com" target="_blank"><i className="fab fa-pinterest-p"></i></a>
      </div>
      <ProductDescription description={product.description} slogan={product.slogan} />
      <ProductFeatures features={product.features} />
      {/* <ImageGallery /> */}
    </div>
  )
};

// PropTypes

export default Overview;
