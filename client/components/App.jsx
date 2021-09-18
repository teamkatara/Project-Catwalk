/* eslint-disable import/no-cycle */ // From using context in answer.js
/* eslint-disable no-use-before-define */
import React from 'react';
import axios from 'axios';
import $ from 'jquery';

import authToken from '../../config';

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

export const ProductContext = React.createContext();
// const [productID, setID] = React.useState(40355);

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
    const currProduct = {
      product_id: 40355,
      questions: [],
    };

    axios.get('/products/40355', {
      headers: { Authorization: authToken },
    })
      .then((response) => currProduct.product_id = 40355)
      .catch((err) => console.log(err));

    axios.get(`/qa/questions/${currProduct.product_id}`, {
      headers: { Authorization: authToken },
    })
      .then((response) => console.log('Questions: ', response.data.results))
      .catch((err) => console.log(err));

    return (
      <div>
        <div className="navbar">Logo</div>
        <ProductContext.Provider value={this.state}>

          <ProductOverviewWidget
            selectStyle={this.selectStyle}
            product={this.state.product}
            styles={this.state.styles}
            selectedStyle={this.state.selectedStyle}
            reviews={this.state.reviews}
          />

          <RelatedProductsWidget />

          <QuestionsAndAnswersWidget />

          <RatingsReviewsWidget reviews={['Ratings and Reviews', 'next review']} />

        </ProductContext.Provider>

      </div>
    );
  }
}

export default App;
