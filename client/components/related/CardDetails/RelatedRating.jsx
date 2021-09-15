import React from 'react';
import PropTypes from 'prop-types';
import AverageRating from '../../shared/AverageRating';

const RelatedRating = ({ score }) => (
  <div>
    <AverageRating rating={score} />
  </div>
);

RelatedRating.defaultProps = {
  score: 5,
};

RelatedRating.propTypes = {
  score: PropTypes.number,
};

export default RelatedRating;
