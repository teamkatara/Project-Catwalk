import React from 'react';
import PropTypes from 'prop-types';

import AverageRating from '../../shared/AverageRating';

const RatingSummary = ({ average, recNum }) => (
  <div className="rating-summary">
    <div className="rating-summary-top">
      <span className="rating-summary-number">{average}</span>
      <AverageRating average={average} />
    </div>
    <div className="rating-summary-total">{`${recNum}% of reviews recommend this product`}</div>
  </div>
);

RatingSummary.defaultProps = {
  average: 5,
  recNum: 100,
};

RatingSummary.propTypes = {
  average: PropTypes.number,
  recNum: PropTypes.number,
};

export default RatingSummary;
