import React from 'react';
import AverageRating from '../shared/AverageRating.jsx';

const Info = ({ product, clickedStyle, reviews, color }) => (
  <div id="main">
    <AverageRating />
    {reviews > 0 && <span className="ratings-link"><a href="#ratings-reviews">Read all {reviews} reviews</a></span>}
    <p>{product.category}</p>
    <h1>{product.name}</h1>
    {!clickedStyle.sale_price && <p>${clickedStyle.original_price}</p>}
    {!!clickedStyle.sale_price && <p><span id="sale-price">${clickedStyle.sale_price} <span style={{color: color}} className="orig-price">${clickedStyle.original_price}</span></span></p>}
  </div>
);

export default Info;
