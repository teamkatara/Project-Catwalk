import React from 'react';
import PropTypes from 'prop-types';
import AverageRating from '../../shared/AverageRating';

const RelatedRating = ({ score }) => (
  <div className="rating">
    <AverageRating average={score} />
  </div>
);

RelatedRating.propTypes = {
  score: PropTypes.number.isRequired,
};

export default RelatedRating;
