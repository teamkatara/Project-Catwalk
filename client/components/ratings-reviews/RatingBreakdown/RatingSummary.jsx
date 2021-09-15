import React from 'react';

// TODO import AverageReview
import AverageRating from '../../shared/AverageRating';

const RatingSummary = () => (
  <div>
    <div className="rating-summary-top">
      <span className="rating-summary-number">4.8</span>
      <AverageRating average={1.2} />
    </div>
    <div className="rating-summary-total">123 Reviews</div>
  </div>
);

export default RatingSummary;
