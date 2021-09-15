import React from 'react';

const Info = ({ product, selectedStyle }) => (
  <div>
    <p>Stars here <a href="#ratings-reviews">Reall all # reviews</a></p>
    <p>{product.category}</p>
    <h1>{product.name}</h1>
    <p>{selectedStyle.original_price}</p>
  </div>
);

export default Info;
