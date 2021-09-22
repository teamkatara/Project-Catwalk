import React, { useState, useRef } from 'react';
import { BiLeftArrowAlt, BiRightArrowAlt, BiDownArrowAlt, BiUpArrowAlt } from 'react-icons/bi';
import { RiFullscreenFill } from 'react-icons/ri';
import ImageGallery from './ImageGallery';
import Modal from './Modal';

const Carousel = ({ clickedStyle }) => {
  const [current, setCurrent] = useState(0);
  const [showModal, setModal] = useState(false);
  const length = clickedStyle.photos.length;
  const url = useRef();

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slider">
      <ImageGallery photos={clickedStyle.photos} current={current} setCurrent={setCurrent} />
      <Modal url={url.current} showModal={showModal} setModal={setModal} />
      <RiFullscreenFill className="expand" onClick={() => setModal(!showModal)} />
      {current !== 0 && <BiLeftArrowAlt className="left-arrow" onClick={prevSlide} />}
      {current !== length - 1 && <BiRightArrowAlt className="right-arrow" onClick={nextSlide} />}
      {current !== 0 && <BiUpArrowAlt className="up-arrow" onClick={prevSlide} />}
      {current !== length - 1 && <BiDownArrowAlt className="down-arrow" onClick={nextSlide} />}
      {clickedStyle.photos.map((photo, i) => {
        if (i === current) { url.current = photo.url; }
        return (
          <div className={i === current ? 'slide active' : 'slide'} key={i}>
            {i === current && <img className="images" src={photo.url} alt="product" />}
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
