/* eslint-disable no-plusplus */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import './RatingBreakdown.css';
import RatingSummary from './RatingSummary';

const RatingBreakdown = ({ reviewMeta }) => {
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
        let currentValue = ((parseInt(reviewMeta.ratings[i], 10) / responseTotal) * 100).toFixed(0);
        results.ratings[i] = { value: currentValue, amount: parseInt(reviewMeta.ratings[i], 10) };
      } else {
        results.ratings[i] = { value: 0, amount: 0 };
      }
    }

    return results;
  };
  const results = calcRatingBreakdown();

  return (
    <div className="rating-breakdown">
      <RatingSummary average={results.average} recNum={results.recNum} />
      <ul className="rating-bars">
        <li className="bar">
          <span className="text-bar">5 Stars</span>
          <progress className="bar-color" max="100" value={results.ratings[5].value} />
          <span className="text-total-amount">{results.ratings[5].amount}</span>
        </li>
        <li className="bar">
          <span className="text-bar">4 Stars</span>
          <progress className="bar-color" max="100" value={results.ratings[4].value} />
          <span className="text-total-amount">{results.ratings[4].amount}</span>
        </li>
        <li className="bar">
          <span className="text-bar">3 Stars</span>
          <progress className="bar-color" max="100" value={results.ratings[3].value} />
          <span className="text-total-amount">{results.ratings[3].amount}</span>
        </li>
        <li className="bar">
          <span className="text-bar">2 Stars</span>
          <progress className="bar-color" max="100" value={results.ratings[2].value} />
          <span className="text-total-amount">{results.ratings[2].amount}</span>
        </li>
        <li className="bar">
          <span className="text-bar">1 Stars</span>
          <progress className="bar-color" max="100" value={results.ratings[1].value} />
          <span className="text-total-amount">{results.ratings[1].amount}</span>
        </li>
      </ul>
      <div className="rating-summary-total">{`${results.recNum}% of reviews recommend this product`}</div>
    </div>
  );
};

RatingBreakdown.propTypes = {
  reviewMeta: PropTypes.object.isRequired,
};

export default RatingBreakdown;
