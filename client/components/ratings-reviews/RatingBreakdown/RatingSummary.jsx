import React from 'react';

// TODO import AverageReview
import AverageRating from '../../shared/AverageRating';

const RatingSummary = () => (
  <div>
    <div className="stars">
      <AverageRating average={1.37} />
    </div>
  </div>
);

export default RatingSummary;
