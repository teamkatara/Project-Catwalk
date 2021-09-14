// eslint-disable-next-line no-use-before-define
import React from 'react';
import PropTypes from 'prop-types';

import RatingBreakdown from './RatingBreakdown/RatingBreakdown';

const RatingsReviewsWidget = ({ reviews }) => (
  <div className="ratings-reviews">
    <h4>Ratings and Reviews</h4>
    <RatingBreakdown />
  </div>
);

RatingsReviewsWidget.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.string).isRequired,
  // PropTypes.arrayOf(PropTypes.string)
  // PropTypes.string.isRequired
};

export default RatingsReviewsWidget;
