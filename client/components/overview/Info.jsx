import React from 'react';
import AverageRating from '../shared/AverageRating';

const Info = ({ product, selectedStyle, reviews }) => (
  <div id="main">
    <AverageRating />
    {reviews > 0 && <a href="#ratings-reviews">Read all {reviews} reviews</a>}
    <p>{product.category}</p>
    <h1>{product.name}</h1>
    {!selectedStyle.sale_price && <p>${selectedStyle.original_price}</p>}
    {!!selectedStyle.sale_price && <p><span id="sale-price">${selectedStyle.sale_price} <span id="orig-price">${selectedStyle.original_price}</span></span></p>}
  </div>
);

export default Info;
