/* eslint-disable no-use-before-define */
import React from 'react';

import ProductOverviewWidget from './overview/ProductOverviewWidget';
import QuestionsAndAnswersWidget from './qa/QuestionsAndAnswersWidget';
import RatingsReviewsWidget from './ratings-reviews/RatingsReviewsWidget';
import RelatedProductsWidget from './related/RelatedProductsWidget';

import product from '../mock-data/sample-product.json';
import styles from '../mock-data/sample-styles.json';

// const App = () => (
//   <div>
//     <div className="navbar">Logo </div>

//     <ProductOverviewWidget product={product} styles={styles} />

//     <RelatedProductsWidget />

//     <QuestionsAndAnswersWidget />

//     <RatingsReviewsWidget reviews={['Ratings and Reviews', 'next review']} />
//   </div>

// );

const findDefault = (styles) => {
  let defaultStyle;
  styles.results.forEach((style) => {
    if (style['default?']) {
      defaultStyle = style;
    }
  });
  return defaultStyle;
};

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      product: product,
      styles: styles,
      selectedStyle: findDefault(styles),
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <div className="navbar">Logo </div>

        <ProductOverviewWidget product={this.state.product} styles={this.state.styles} selectedStyle={this.state.selectedStyle} />

        <RelatedProductsWidget />

        <QuestionsAndAnswersWidget />

        <RatingsReviewsWidget reviews={['Ratings and Reviews', 'next review']} />
      </div>
    );
  }
}

export default App;
