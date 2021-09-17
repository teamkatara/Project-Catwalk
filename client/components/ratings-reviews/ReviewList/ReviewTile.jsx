import React from 'react';
import PropTypes from 'prop-types';

import AverageRating from '../../shared/AverageRating';

import mockReviews from '../../../mock-data/sample-reviews.json';

const ReviewTile = ({ review }) => {
  const reviewDate = new Date(review.date);
  return (
    <div className="review-tile-container">
      <div className="review-tile-rating"><AverageRating average={review.rating} /></div>
      <div className="review-tile-summary" style={{ fontWeight: 'bold' }}>{review.summary}</div>
      <div className="review-tile-body">{review.body}</div>
      <div className="review-tile-date">{reviewDate.toDateString()}</div>
      <div className="review-tile-recommend">
        <span style={{ fontWeight: 'bold' }}>{review.reviewer_name}</span>
        {review.recommend === true ? ' ✔ I recommend this product.' : null}
      </div>
      <div className="review-tile-response">
        {review.response !== null ? `Response from seller: ${review.response}` : null}
      </div>
      <div className="review-tile-photos">
        {review.photos.map((photo) => (
          <img className="review-tile-thumbnail" src={photo.url} height="50" width="auto" loading="lazy" alt="" />))}
      </div>
      <div className="review-tile-helpful">
        Was this review helpful?
        <u style={{ cursor: 'pointer' }}>Yes</u>
        <span>
          {`  ${review?.helpfulness}          `}
        </span>
        <u style={{ cursor: 'pointer' }}>No</u>
      </div>
    </div>

  );
};

ReviewTile.defaultProps = {
  review: mockReviews.results[0],
};

ReviewTile.propTypes = {
  review: PropTypes.object,
};

export default ReviewTile;
