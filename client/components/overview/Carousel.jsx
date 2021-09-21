import React, { useState } from 'react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { RiFullscreenFill } from 'react-icons/ri';
import ImageGallery from './ImageGallery';

const Carousel = ({ clickedStyle }) => {
  const [current, setCurrent] = useState(0);
  const [showModal, setModal] = useState(false);
  const length = clickedStyle.photos.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slider">
      <ImageGallery photos={clickedStyle.photos} current={current} setCurrent={setCurrent} />
      <RiFullscreenFill className="expand" />
      <BiLeftArrowAlt className="left-arrow" onClick={prevSlide} />
      <BiRightArrowAlt className="right-arrow" onClick={nextSlide} />
      {clickedStyle.photos.map((photo, i) => (
        <div className={i === current ? 'slide active' : 'slide'} key={i}>
          {i === current && <img className="images" src={photo.url} alt="product" />}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
