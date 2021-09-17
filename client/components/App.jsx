/* eslint-disable no-use-before-define */
import React from 'react';
import $ from 'jquery';

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
      product: product,
      styles: styles,
      selectedStyle: findDefault(styles),
      reviews: reviews.results.length,
    };

    this.selectStyle = this.selectStyle.bind(this);
  }

  componentDidMount() {}

  selectStyle(style) {
    this.setState({
      selectedStyle: style,
    });
  }

  render() {
    return (
      <div>
        <div className="navbar">Logo</div>

        <ProductOverviewWidget selectStyle={this.selectStyle} product={this.state.product} styles={this.state.styles} selectedStyle={this.state.selectedStyle} reviews={this.state.reviews} />

        <RelatedProductsWidget />

        <QuestionsAndAnswersWidget />

        <RatingsReviewsWidget reviews={['Ratings and Reviews', 'next review']} />
      </div>
    );
  }
}

export default App;
