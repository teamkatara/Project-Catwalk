// eslint-disable-next-line no-use-before-define
import React from 'react';
import PropTypes from 'prop-types';

import './RatingsReviews.css';
import RatingBreakdown from './RatingBreakdown/RatingBreakdown';

const RatingsReviewsWidget = ({ reviews }) => (
  <div className="ratings-reviews">
    <div className="rr-title"><h2>RATINGS & REVIEWS</h2></div>
    <div className="rr-widget-container">
      <RatingBreakdown />
      <div className="reviews-list">Reviews List Lives Here</div>
    </div>
  </div>
);

RatingsReviewsWidget.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.string).isRequired,
  // PropTypes.arrayOf(PropTypes.string)
  // PropTypes.string.isRequired
};

export default RatingsReviewsWidget;
