// eslint-disable-next-line no-use-before-define
import React from 'react';
import PropTypes from 'prop-types';

const RatingsReviewsWidget = ({ reviews }) => (<div className="ratings-reviews">{reviews[0]}</div>);

RatingsReviewsWidget.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.string).isRequired,
  // PropTypes.arrayOf(PropTypes.string)
  // PropTypes.string.isRequired
};

export default RatingsReviewsWidget;
