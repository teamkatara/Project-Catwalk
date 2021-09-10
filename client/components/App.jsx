/* eslint-disable no-use-before-define */
import React from 'react';

import ProductOverviewWidget from './overview/ProductOverviewWidget';
import QuestionsAndAnswersWidget from './qa/QuestionsAndAnswersWidget';
import RatingsReviewsWidget from './ratings-reviews/RatingsReviewsWidget';
import RelatedProductsWidget from './related/RelatedProductsWidget';

const App = () => (
  <div>
    <ProductOverviewWidget />

    <RelatedProductsWidget />

    <RatingsReviewsWidget reviews={['Ratings and Reviews', 'next review']} />

    <QuestionsAndAnswersWidget />
  </div>

);

export default App;
