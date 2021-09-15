// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import AverageRating from '../shared/AverageRating';

const RelatedCard = ({ id }) => (
  <div className="card">
    {id}
    <AverageRating average={3.5} />
  </div>
);

RelatedCard.propTypes = {
  id: PropTypes.number.isRequired,
};

export default RelatedCard;
