/* eslint-disable react/forbid-prop-types */
/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';

import './ReviewList.css';

import ReviewTile from './ReviewTile';

import mockReviews from '../../../mock-data/sample-reviews.json';

const ReviewList = ({ reviews }) => {
  return (
    <div>
      { reviews.map((item) => {
        return (
          <>
            <ReviewTile key={item.review_id} review={item} />
            <hr />
          </>
        );
      })}
    </div>
  );
};

ReviewList.defaultProps = {
  reviews: mockReviews.results,
};

ReviewList.propTypes = {
  reviews: PropTypes.array,
};

export default ReviewList;
