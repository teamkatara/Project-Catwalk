// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import RelatedRating from './RelatedRating';
import Thumbnail from './Thumbnail';

const RelatedCard = ({ id }) => (
  <div className="card">
    <Thumbnail />
    <div className="details">
      <span className="text">
        Product
        {id}
      </span>
      <span className="text">Expanded Product Name with Extra Text</span>
      <RelatedRating rating={5} />
    </div>
  </div>
);

RelatedCard.propTypes = {
  id: PropTypes.number.isRequired,
};

export default RelatedCard;
