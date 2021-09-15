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
    const results = {};
    const ratings = Object.keys(reviewMeta.ratings);

    for (let i = 0; i < ratings.length; i++) {
      scoreTotal += parseInt(ratings[i], 10) * parseInt(reviewMeta.ratings[ratings[i]], 10);
      responseTotal += parseInt(reviewMeta.ratings[ratings[i]], 10);
    }

    results.average = parseFloat((scoreTotal / responseTotal).toFixed(1));
    results.recNum = parseInt(((reviewMeta.recommended.true) / responseTotal) * 100, 10);
    return results;
  };
  const results = calcRatingBreakdown();

  return (
    <div className="rating-breakdown">
      <RatingSummary average={results.average} recNum={results.recNum} />
      <ul className="rating-bars">
        <li className="bar">
          <span className="text-bar">5 Stars</span>
          <progress className="bar-color" max="100" value="50" />
        </li>
        <li className="bar">
          <span className="text-bar">4 Stars</span>
          <progress className="bar-color" max="100" value="20" />
        </li>
        <li className="bar">
          <span className="text-bar">3 Stars</span>
          <progress className="bar-color" max="100" value="10" />
        </li>
        <li className="bar">
          <span className="text-bar">2 Stars</span>
          <progress className="bar-color" max="100" value="10" />
        </li>
        <li className="bar">
          <span className="text-bar">1 Stars</span>
          <progress className="bar-color" max="100" value="10" />
        </li>
      </ul>
    </div>
  );
};

RatingBreakdown.propTypes = {
  reviewMeta: PropTypes.object.isRequired,
};

export default RatingBreakdown;
