/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-use-before-define
import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ProductContext from '../ProductContext.jsx';
import { authToken } from '../../../config';

import './RatingsReviews.css';
import RatingBreakdown from './RatingBreakdown/RatingBreakdown.jsx';
import ReviewList from './ReviewList/ReviewList.jsx';
import Sort from './Sort.jsx';
// import NewReview from './NewReview/NewReview';
import AddReview from './NewReview/AddReview.jsx';

import mockReviewMeta from '../../mock-data/sample-review-meta.json';
import mockReviews from '../../mock-data/sample-reviews.json';

const RatingsReviewsWidget = ({ reviews, reviewMeta }) => {
  // TODO Plug-in context
  const currentProductId = useContext(ProductContext);
  const reviewData = mockReviews.results;
  const reviewMetaData = mockReviewMeta;
  const [totalReviews, setProductReviews] = useState(reviews);
  // const [reviewMeta, setReviewMeta] = useState(reviewMetaData);
  const [displayedReviews, setDisplayedReviews] = useState([reviewData[0], reviewData[1]]);

  useEffect(() => {
    setProductReviews(reviews);
    setDisplayedReviews(reviews);
  }, [reviews]);

  // useEffect(() => () => {
  //   axios.get(`./reviews/${currentProductId}`, {
  //     headers: { Authorization: authToken },
  //   })
  //     .then((data) => {
  //       const newReviews = data.data.results;
  //       axios.get(`./reviews/meta/${currentProductId}`, {
  //         headers: { Authorization: authToken },
  //       })
  //         .then((metaData) => {
  //           console.log('I am metaData!', metaData);
  //           console.log('I am newReviews!', newReviews);
  //           setReviewMeta(metaData.data);
  //           setProductReviews(newReviews);
  //           setDisplayedReviews(newReviews);
  //         })
  //         .catch((err) => console.log(err));
  //     })
  //     .catch((err) => console.log(err));
  // }, [currentProductId]);

  // TODO Set only 2 reviews to show at a time
  const [displayedIndex, setDisplayedIndex] = useState(2);
  const [toggleShowMore, setToggleShowMore] = useState(true);

  const showReviewsHandler = () => {
    if (displayedReviews.length >= displayedIndex) {
      setToggleShowMore(false);
    } else {
      setDisplayedIndex(displayedIndex + 2);
      // TODO increase the amount of reviews displayed
      // setReviewList(make the magic happen here)
    }
  };

  const sortReviewHandler = (sorted) => {
    setDisplayedReviews(sorted);
  };

  return (
    <div id="ratings-reviews" className="ratings-reviews">
      <div className="rr-title">
        <h2>Ratings &amp; Reviews</h2>
        <AddReview productId={currentProductId} characters={reviewMeta.characteristics} />
        <Sort reviews={totalReviews} sortReviewHandler={sortReviewHandler} />
      </div>
      <div className="rr-widget-container">
        <RatingBreakdown
          reviewMeta={reviewMeta}
          sortReviewHandler={sortReviewHandler}
          reviews={totalReviews}
        />
        <div className="reviews-list">
          <ReviewList reviews={displayedReviews} />
        </div>
      </div>
    </div>
  );
};

RatingsReviewsWidget.defaultProps = {
  productId: mockReviews.product,
  reviews: mockReviews.results,
  reviewMeta: mockReviewMeta,
};
// TODO - time permitting figure out how to pass
// prop-types the proper format for your props
RatingsReviewsWidget.propTypes = {
  productId: PropTypes.string,
  reviews: PropTypes.array,
  reviewMeta: PropTypes.object,
};

export default RatingsReviewsWidget;
