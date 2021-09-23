import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const RelatedCarousel = ({ related }) => {
  console.log(related);

  const [current, setCurrent] = useState(0);
  const [leftShow, setLeftShow] = useState(false);
  const [rightShow, setRightShow] = useState(true);

  const nextSlide = () => {
    if (current === related.length - 4) {
      setCurrent(current + 1);
      setRightShow(false);
    } else if (current !== related.length) {
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
      if (current !== related.length - 1 && rightShow === false) {
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

  return (
    <div className="rc-container">
      <div className="rc-wrapper">
        {leftArrow}
        {related.map((product) => (
          <div className="carousel-content.show-3" style={{ transform: `translateX(-${current * (100)}%)` }}>
            {product}
          </div>
        ))}
        {rightArrow}
      </div>
    </div>
  );
};

RelatedCarousel.propTypes = {
  related: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};

export default RelatedCarousel;
