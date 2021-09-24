import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const OutfitCarousel = ({ outfit, click }) => {
  console.log(outfit);

  const [current, setCurrent] = useState(0);
  const [leftShow, setLeftShow] = useState(false);
  const [rightShow, setRightShow] = useState(true);
  let index;

  if (outfit.length < 2 && rightShow === true) {
    setRightShow(false);
  } else if (outfit.length > 2 && rightShow === false) {
    index = outfit.length - 2;
    setRightShow(true);
  }

  const nextSlide = () => {
    if (current === index - 1) {
      setCurrent(current + 1);
      setRightShow(false);
    } else if (current !== index) {
      setCurrent(current + 1);
      if (leftShow === false) {
        setLeftShow(true);
      }
    }
  };

  const prevSlide = () => {
    if (current === 1) {
      setCurrent(current - 1);
      setLeftShow(false);
    } else if (current !== 0) {
      setCurrent(current - 1);
      if (current !== index && rightShow === false) {
        setRightShow(true);
      }
    }
  };

  console.log(current);

  let rightArrow;

  if (rightShow === false) {
    rightArrow = null;
  } else {
    rightArrow = <FaArrowAltCircleRight className="related-arrow-right" onClick={nextSlide} />;
  }

  let leftArrow;

  if (leftShow === false) {
    leftArrow = null;
  } else {
    leftArrow = <FaArrowAltCircleLeft className="related-arrow-left" onClick={prevSlide} />;
  }

  const Add = (
    <button type="button" className="add-button" onClick={click}>Add an Outfit!</button>
  );

  return (
    <div className="rc-container">
      <div className="rc-wrapper">
        {leftArrow}
        <div className="carouse-content.show-3" style={{ transform: `translateX(-${current * (100)}%)` }}>
          <div className="card-button">
            {Add}
          </div>
        </div>
        {outfit.map((product) => {
          if (product !== undefined || product !== ['']) {
            return (
              <div className="carousel-content.show-3" style={{ transform: `translateX(-${current * (100)}%)` }} key="product">
                {product}
              </div>
            );
          }
          return null;
        })}
        {rightArrow}
      </div>
    </div>
  );
};

OutfitCarousel.propTypes = {
  outfit: PropTypes.oneOfType(
    [
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.arrayOf(PropTypes.object),
    ],
  ).isRequired,
  click: PropTypes.func.isRequired,
};

export default OutfitCarousel;
