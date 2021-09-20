/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-use-before-define
import React, { useState, useEffect, useContext } from 'react';
// import { ProductContext } from '../../ProductContext.jsx';
import PropTypes from 'prop-types';
import axios from 'axios';

import './RatingsReviews.css';
import RatingBreakdown from './RatingBreakdown/RatingBreakdown';
import ReviewList from './ReviewList/ReviewList';
import Sort from './Sort';

import mockReviewMeta from '../../mock-data/sample-review-meta.json';
import mockReviews from '../../mock-data/sample-reviews.json';

const RatingsReviewsWidget = () => {
  // TODO Plug-in context
  // const currentProduct = useContext(ProductContext);
  // const productId = currentProduct.id;
  const reviewData = mockReviews.results;
  const reviewMetaData = mockReviewMeta;
  const [totalReviews, setProductReviews] = useState(reviewData);
  const [reviewMeta, setReviewMeta] = useState(reviewMetaData);
  const [displayedReviews, setReviewList] = useState([reviewData[0], reviewData[1]]);
  const [displayedIndex, setDisplayedIndex] = useState(2);
  const [toggleShowMore, setToggleShowMore] = useState(true);

  const showReviewsHandler = () => {
    if (displayedReviews.length === displayedIndex) {
      setToggleShowMore(false);
    }
  };

  const sortReviewHandler = (sorted) => {
    setReviewList(sorted);
  };

  return (
    <div id="ratings-reviews" className="ratings-reviews">
      <div className="rr-title">
        <h2>RATINGS &amp; REVIEWS</h2>
        <Sort reviews={totalReviews} sortReviewHandler={sortReviewHandler} />
      </div>
      <div className="rr-widget-container">
        <RatingBreakdown
          reviewMeta={reviewMeta}
          sortReviewHandler={sortReviewHandler}
          reviews={totalReviews}
        />
        <div className="reviews-list">
          <ReviewList reviews={displayedReviews} />
        </div>
      </div>
    </div>
  );
};

RatingsReviewsWidget.defaultProps = {
  productId: mockReviews.product,
  reviews: mockReviews.results,
  reviewMeta: mockReviewMeta,
};
// TODO - time permitting figure out how to pass
// prop-types the proper format for your props
RatingsReviewsWidget.propTypes = {
  productId: PropTypes.string,
  reviews: PropTypes.array,
  reviewMeta: PropTypes.object,
};

export default RatingsReviewsWidget;
