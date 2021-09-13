/* eslint-disable no-use-before-define */
import React from 'react';

import ProductOverviewWidget from './overview/ProductOverviewWidget';
import QuestionsAndAnswersWidget from './qa/QuestionsAndAnswersWidget';
import RatingsReviewsWidget from './ratings-reviews/RatingsReviewsWidget';
import RelatedProductsWidget from './related/RelatedProductsWidget';

const App = () => (
  <div>
    <div className="navbar">Logo </div>

    <ProductOverviewWidget />

    <RelatedProductsWidget />

    <QuestionsAndAnswersWidget />

    <RatingsReviewsWidget reviews={['Ratings and Reviews', 'next review']} />
  </div>

);

export default App;
