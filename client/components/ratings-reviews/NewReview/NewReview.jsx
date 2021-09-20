import React from 'react';

import AddReview from './AddReview';

const NewReview = ({characteristics, productId, submitReviewHandler}) => (
  <div>
    <AddReview />
    <div className="rr-review-form">
      <form onSubmit={submitReviewHandler}>
        {/* TODO ADD EACH ITEM */}
      </form>
    </div>
  </div>
);

export default NewReview;
