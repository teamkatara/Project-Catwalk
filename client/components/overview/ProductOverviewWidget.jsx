// eslint-disable-next-line no-use-before-define
import React from 'react';
// import axios from 'axios';

import Info from './Info';
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

const ProductOverviewWidget = ({ product, selectStyle, styles, selectedStyle, reviews }) => (
  <div className="overview">
    <div id="main-image-container"><img id="selected-style-image" src={selectedStyle.photos[0].url} /></div>
    <div id="product-info-container">
      <Info product={product} styles={styles} selectedStyle={selectedStyle} reviews={reviews} />
      <StyleSelector styles={styles} selectedStyle={selectedStyle} selectStyle={selectStyle} />
      <Buy selectedStyle={selectedStyle} />
      <a href="https://www.facebook.com" target="_blank"><i className="fab fa-facebook-f"></i></a>
      <a href="https://twitter.com" target="_blank"><i className="fab fa-twitter"></i></a>
      <a href="https://www.pinterest.com" target="_blank"><i className="fab fa-pinterest-p"></i></a>
    </div>
    <ProductDescription description={product.description} slogan={product.slogan} />
    <ProductFeatures features={product.features} />
    {/* <ImageGallery /> */}
  </div>
);

// PropTypes

export default ProductOverviewWidget;
