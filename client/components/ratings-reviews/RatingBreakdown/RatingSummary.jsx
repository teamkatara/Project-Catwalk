import React from 'react';

// TODO import AverageReview
import AverageRating from '../../shared/AverageRating';

const RatingSummary = () => (
  <div>
    <div className="stars">
      <AverageRating />
    </div>
  </div>
);

export default RatingSummary;
