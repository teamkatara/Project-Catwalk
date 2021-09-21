import React from 'react';
import AverageRating from '../shared/AverageRating';

const Info = ({ product, clickedStyle, reviews }) => (
  <div id="main">
    <AverageRating />
    {reviews > 0 && <a href="#ratings-reviews">Read all {reviews} reviews</a>}
    <p>{product.category}</p>
    <h1>{product.name}</h1>
    {!clickedStyle.sale_price && <p>${clickedStyle.original_price}</p>}
    {!!clickedStyle.sale_price && <p><span id="sale-price">${clickedStyle.sale_price} <span id="orig-price">${clickedStyle.original_price}</span></span></p>}
  </div>
);

export default Info;
