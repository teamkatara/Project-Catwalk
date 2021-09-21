/* eslint-disable no-use-before-define */
import React from 'react';
import ProductContext from './ProductContext';
import { IoBagOutline, IoWaterOutline } from 'react-icons/io5';
import { AiOutlineFire } from 'react-icons/ai';

import ProductOverviewWidget from './overview/ProductOverviewWidget';
import QuestionsAndAnswersWidget from './qa/QuestionsAndAnswersWidget';
import RatingsReviewsWidget from './ratings-reviews/RatingsReviewsWidget';
import RelatedProductsWidget from './related/RelatedProductsWidget';

import product from '../mock-data/sample-product.json';
import styles from '../mock-data/sample-styles.json';
import reviews from '../mock-data/sample-reviews.json';

const findDefault = (styles) => {
  let defaultStyle;
  styles.results.forEach((style) => {
    if (style['default?']) {
      defaultStyle = style;
    }
  });
  return defaultStyle;
};

// const App = () => (
//   <div>
//     <div className="navbar">Logo </div>

//     <ProductOverviewWidget />

//     <RelatedProductsWidget />

//     <QuestionsAndAnswersWidget />

//     <RatingsReviewsWidget reviews={['Ratings and Reviews', 'next review']} />
//   </div>

// );

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      theme: true,
      product: product,
      styles: styles,
      selectedStyle: findDefault(styles),
      reviews: reviews.results.length,
      productId: 40457,
    };

    this.selectStyle = this.selectStyle.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);
    this.updateProductHandler = this.updateProductHandler.bind(this);
  }

  componentDidMount() {

  }

  updateProductHandler(id) {
    this.setState({
      productId: id,
    });
    // console.log(id);
  }

  selectStyle(style) {
    this.setState({
      selectedStyle: style,
    });
  }

  toggleTheme() {
    this.setState({
      theme: !this.state.theme,
    });
  }

  render() {
    return (
      <div>
        <div className="navbar">
          {this.state.theme
            ? <IoWaterOutline className="logo" onClick={this.toggleTheme} />
            : <AiOutlineFire className="logo" onClick={this.toggleTheme} />}
          <IoBagOutline className="bag" />
        </div>
        <ProductContext.Provider value={this.state.productId}>
          <ProductOverviewWidget
            selectStyle={this.selectStyle}
            product={this.state.product}
            styles={this.state.styles}
            selectedStyle={this.state.selectedStyle}
            reviews={this.state.reviews}
          />

          <RelatedProductsWidget updateProductHandler={this.updateProductHandler} />

          <QuestionsAndAnswersWidget />

          <RatingsReviewsWidget reviews={['Ratings and Reviews', 'next review']} />
        </ProductContext.Provider>
      </div>
    );
  }
}

export default App;
