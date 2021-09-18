import React from 'react';

const Carousel = ({ selectedStyle }) => (
  <div className="carousel-wrapper">
    <div className="carousel">
      {selectedStyle.photos.map((photo, i) => (i === 0
        ? <img className="carousel-photo initial" src={photo.url}></img>
        : <img className="carousel-photo" src={photo.url}></img>
      ))}
    </div>
  </div>
);

export default Carousel;
