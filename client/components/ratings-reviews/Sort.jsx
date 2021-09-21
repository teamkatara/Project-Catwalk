/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Sort = ({ reviews, sortReviewHandler }) => {
  const [sortReviewsBy, setSortReviewsBy] = useState('relevance');

  useEffect(() => {
    if (reviews) {
      const sortReviews = (sortBy) => {
        let sortResults;
        const options = {
          date: 'date',
          helpfulness: 'helpfulness',
          relevance: 'relevance',
        };
        const sortOption = options[sortBy];

        if (sortOption === 'relevance') {
          sortResults = [...reviews].sort((a, b) => {
            if (a.helpfulness > b.helpfulness) return -1;
            if (a.helpfulness < b.helpfulness) return 1;
            if (-a.date.localeCompare(b.date)) return 1;
            if (!-a.date.localeCompare(b.date)) return -1;
          });
          sortReviewHandler(sortResults);
        } else if (sortOption === 'date') {
          sortResults = [...reviews].sort((a, b) => -a.date.localeCompare(b.date));
          sortReviewHandler(sortResults);
        } else if (sortOption === 'helpfulness') {
          sortResults = [...reviews].sort((a, b) => (
            a.helpfulness < b.helpfulness ? 1 : -1
          ));
          sortReviewHandler(sortResults);
        }
      };
      sortReviews(sortReviewsBy);
    }
  }, [sortReviewsBy]);

  return (
    <div className="rr-sort">
      {`${reviews.length} Reviews Sort by:`}
      <select className="sortDropdown" onChange={(e) => setSortReviewsBy(e.target.value)} aria-label="sort reviews">
        <option value="relevance">Relevance</option>
        <option value="helpfulness">Helpful</option>
        <option value="date">Newest</option>
      </select>
    </div>
  );
};

Sort.propTypes = {
  reviews: PropTypes.array.isRequired,
  sortReviewHandler: PropTypes.func.isRequired,
};

export default Sort;
