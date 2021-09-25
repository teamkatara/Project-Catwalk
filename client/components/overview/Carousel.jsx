import React, { useState, useRef } from 'react';
import { BiLeftArrowAlt, BiRightArrowAlt, BiDownArrowAlt, BiUpArrowAlt } from 'react-icons/bi';
import { RiFullscreenFill } from 'react-icons/ri';
import ImageGallery from './ImageGallery.jsx';
import Modal from './Modal.jsx';

const Carousel = ({ clickedStyle }) => {
  const [current, setCurrent] = useState(0);
  const [showModal, setModal] = useState(false);
  const [gallery, setGallery] = useState(0);
  const [yPos, setYPos] = useState(0);
  const { length } = clickedStyle.photos;
  const url = useRef();

  const nextSlide = () => {
    gallery === 3 ? setYPos(yPos - 121) : setGallery(gallery + 1);
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    gallery === 0 ? setYPos(yPos + 121) : setGallery(gallery - 1);
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slider">
      <ImageGallery yPos={yPos} photos={clickedStyle.photos} current={current} setCurrent={setCurrent} />
      <RiFullscreenFill className="expand" onClick={() => setModal(!showModal)} />
      {current !== 0 && <BiLeftArrowAlt className="left-arrow" onClick={prevSlide} />}
      {current !== length - 1 && <BiRightArrowAlt className="right-arrow" onClick={nextSlide} />}
      {current !== 0 && <BiUpArrowAlt className="up-arrow" onClick={prevSlide} />}
      {current !== length - 1 && <BiDownArrowAlt className="down-arrow" onClick={nextSlide} />}
      {clickedStyle.photos.map((photo, i) => {
        if (i === current) { url.current = photo.url; }
        return (
          <div className={i === current ? 'slide active' : 'slide'} key={i}>
            {i === current && <img onClick={() => setModal(!showModal)} className="images" src={photo.url} alt="product" />}
          </div>
        );
      })}
      <Modal url={url.current} showModal={showModal} setModal={setModal} photos={clickedStyle.photos} setCurrent={setCurrent} current={current}/>
    </div>
  );
};

export default Carousel;
