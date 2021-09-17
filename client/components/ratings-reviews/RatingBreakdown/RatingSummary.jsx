import React from 'react';
import PropTypes from 'prop-types';

import AverageRating from '../../shared/AverageRating';

const RatingSummary = ({ average }) => (
  <div className="rating-summary">
    <div className="rating-summary-top">
      <span className="rating-summary-number">{average}</span>
      <div className="rating-summary-stars"><AverageRating average={average} /></div>
    </div>
  </div>
);

RatingSummary.defaultProps = {
  average: 5,
};

RatingSummary.propTypes = {
  average: PropTypes.number,
};

export default RatingSummary;
