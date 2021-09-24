/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './RatingBreakdown.css';
import RatingSummary from './RatingSummary.jsx';
import CharacterBars from './CharacterBars.jsx';

const RatingBreakdown = ({ reviewMeta, reviews, sortReviewHandler }) => {
  const [currentFilters, setCurrentFilters] = useState([]);
  const [allReviews, setAllReviews] = useState(reviews);
  const [displayedReviews, setDisplayedReviews] = useState(reviews);
  const [characters, setCharacters] = useState(reviewMeta.characteristics);

  useEffect(() => {
    setCharacters(reviewMeta.characteristics);
  }, [reviewMeta]);

  const calcRatingBreakdown = () => {
    let scoreTotal = 0;
    let responseTotal = 0;
    const results = { ratings: {}, average: 5, recNum: 0 };
    const ratings = Object.keys(reviewMeta.ratings);

    for (let i = 0; i < ratings.length; i++) {
      scoreTotal += parseInt(ratings[i], 10) * parseInt(reviewMeta.ratings[ratings[i]], 10);
      responseTotal += parseInt(reviewMeta.ratings[ratings[i]], 10);
    }
    results.average = parseFloat((scoreTotal / responseTotal).toFixed(1));
    results.recNum = parseInt(((reviewMeta.recommended.true) / responseTotal) * 100, 10);

    for (let i = 1; i <= 5; i++) {
      if (reviewMeta.ratings[i]) {
        // eslint-disable-next-line prefer-const
        let currentValue = ((parseInt(reviewMeta.ratings[i], 10) / responseTotal) * 100).toFixed(0);
        results.ratings[i] = { value: currentValue, amount: parseInt(reviewMeta.ratings[i], 10) };
      } else {
        results.ratings[i] = { value: 0, amount: 0 };
      }
    }
    return results;
  };
  const results = calcRatingBreakdown();

  useEffect(() => {
    if (currentFilters.length === 0) {
      sortReviewHandler(reviews);
    } else {
      const ratingsToShow = [];
      reviews.forEach((review) => {
        if (review.rating === 5 && currentFilters.indexOf('5 Stars') !== -1) ratingsToShow.push(review);
        if (review.rating === 4 && currentFilters.indexOf('4 Stars') !== -1) ratingsToShow.push(review);
        if (review.rating === 3 && currentFilters.indexOf('3 Stars') !== -1) ratingsToShow.push(review);
        if (review.rating === 2 && currentFilters.indexOf('2 Stars') !== -1) ratingsToShow.push(review);
        if (review.rating === 1 && currentFilters.indexOf('1 Star') !== -1) ratingsToShow.push(review);
      });
      return sortReviewHandler(ratingsToShow);
    }
  }, [currentFilters]);

  const ratingClickHandler = (rating) => {
    const newFilter = [...currentFilters];
    const newRating = currentFilters.indexOf(rating);
    if (newRating === -1) {
      newFilter.push(rating);
    } else {
      newFilter.splice(newRating, 1);
    }
    return setCurrentFilters(newFilter);
  };
  const clearClickHandler = () => {
    setCurrentFilters([]);
  };
  if (reviews.length !== 0) {
    return (
      <div className="rating-breakdown">
        <RatingSummary average={results.average} recNum={results.recNum} />
        <div className="rating-filter-container">
          {currentFilters.map((rating) => (
            <button
              type="button"
              key={rating}
              className="rating-filter"
              onClick={() => (ratingClickHandler(rating))}
            >
              {rating}
            </button>
          ))}
        </div>
        <ul className="rating-bars">
          <li className="bar" onClick={() => (ratingClickHandler('5 Stars'))}>
            <span className="text-bar">5 Stars</span>
            <progress className="bar-color" max="100" value={results.ratings[5].value} />
            <span className="text-total-amount">{results.ratings[5].amount}</span>
          </li>
          <li className="bar" onClick={() => ratingClickHandler('4 Stars')}>
            <span className="text-bar">4 Stars</span>
            <progress className="bar-color" max="100" value={results.ratings[4].value} />
            <span className="text-total-amount">{results.ratings[4].amount}</span>
          </li>
          <li className="bar" onClick={() => ratingClickHandler('3 Stars')}>
            <span className="text-bar">3 Stars</span>
            <progress className="bar-color" max="100" value={results.ratings[3].value} />
            <span className="text-total-amount">{results.ratings[3].amount}</span>
          </li>
          <li className="bar" onClick={() => ratingClickHandler('2 Stars')}>
            <span className="text-bar">2 Stars</span>
            <progress className="bar-color" max="100" value={results.ratings[2].value} />
            <span className="text-total-amount">{results.ratings[2].amount}</span>
          </li>
          <li className="bar" onClick={() => ratingClickHandler('1 Star')}>
            <span className="text-bar">1 Stars</span>
            <progress className="bar-color" max="100" value={results.ratings[1].value} />
            <span className="text-total-amount">{results.ratings[1].amount}</span>
          </li>
        </ul>
        <div className="rating-summary-total">
          <p>
            <span type="button" className="clear-filter" onClick={clearClickHandler}>Clear Current Filters</span>
          </p>
          {`${results.recNum}% of reviews recommend this product`}
        </div>
        <div className="product-breakdown">
          <CharacterBars characters={characters} />
        </div>
      </div>
    );
  // eslint-disable-next-line no-else-return
  } else {
    return (
      <div className="rating-breakdown">
        <RatingSummary average={0} recNum={0} />
        <div className="rating-filter-container">
          {currentFilters.map((rating) => (
            <button
              type="button"
              key={rating}
              className="rating-filter"
              onClick={() => (ratingClickHandler(rating))}
            >
              {rating}
            </button>
          ))}
        </div>
        <ul className="rating-bars">
          <li className="bar" onClick={() => (ratingClickHandler('5 Stars'))}>
            <span className="text-bar">5 Stars</span>
            <progress className="bar-color" max="100" value={0} />
            <span className="text-total-amount">{0}</span>
          </li>
          <li className="bar" onClick={() => ratingClickHandler('4 Stars')}>
            <span className="text-bar">4 Stars</span>
            <progress className="bar-color" max="100" value={0} />
            <span className="text-total-amount">{0}</span>
          </li>
          <li className="bar" onClick={() => ratingClickHandler('3 Stars')}>
            <span className="text-bar">3 Stars</span>
            <progress className="bar-color" max="100" value={0} />
            <span className="text-total-amount">{0}</span>
          </li>
          <li className="bar" onClick={() => ratingClickHandler('2 Stars')}>
            <span className="text-bar">2 Stars</span>
            <progress className="bar-color" max="100" value={0} />
            <span className="text-total-amount">{0}</span>
          </li>
          <li className="bar" onClick={() => ratingClickHandler('1 Star')}>
            <span className="text-bar">1 Stars</span>
            <progress className="bar-color" max="100" value={0} />
            <span className="text-total-amount">{0}</span>
          </li>
        </ul>
        <div className="rating-summary-total">
          <p>
            <span type="button" className="clear-filter" onClick={clearClickHandler}>Clear Current Filters</span>
          </p>
          {`${0}% of reviews recommend this product`}
        </div>
        <div className="product-breakdown">
          <CharacterBars characters={reviewMeta.characteristics} />
        </div>
      </div>
    );
  }
};

RatingBreakdown.propTypes = {
  reviewMeta: PropTypes.object.isRequired,
  reviews: PropTypes.array.isRequired,
  sortReviewHandler: PropTypes.func.isRequired,
};

export default RatingBreakdown;
