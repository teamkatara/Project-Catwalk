import React, { useState } from 'react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

const Carousel = ({ selectedStyle }) => {
  const [current, setCurrent] = useState(0);
  const length = selectedStyle.photos.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slider">
      <BiLeftArrowAlt className="left-arrow" onClick={prevSlide} />
      <BiRightArrowAlt className="right-arrow" onClick={nextSlide} />
      {selectedStyle.photos.map((photo, i) => (
        <div className={i === current ? 'slide active' : 'slide'} key={i}>
          {i === current && <img className="images" src={photo.url} alt="product" />}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
