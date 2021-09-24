import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const RelatedCarousel = ({ related }) => {
  const [current, setCurrent] = useState(0);
  const [leftShow, setLeftShow] = useState(false);
  const [rightShow, setRightShow] = useState(true);

  const index = related.length - 3;

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
      if (current !== index - 1 && rightShow === false) {
        setRightShow(true);
      }
    }
  };

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
          <div className="carousel-content.show-3" style={{ transform: `translateX(-${current * (100)}%)` }} key={product.key}>
            {product}
          </div>
        ))}
        {rightArrow}
      </div>
    </div>
  );
};

RelatedCarousel.propTypes = {
  related: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RelatedCarousel;
