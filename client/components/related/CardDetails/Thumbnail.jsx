import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';

const Thumbnail = ({
  image, list, product, current,
}) => {
  const [show, setShow] = useState(false);

  const onClick = () => {
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  const Star = (
    <button type="button" className="button-style" onClick={onClick}>
      <img src="https://www.pngkit.com/png/full/437-4372254_star-outline-comments-empty-star.png" alt="empty star" style={{ height: 20, width: 20 }} />
    </button>
  );

  // const Star = React.createElement('button', {type: 'button'}, 'Star');
  return (
    <div className="thumbnail" style={{ backgroundImage: `url(${image})` }}>
      <div className="star-button">
        {Star}
      </div>
      <Modal
        show={show}
        click={onClick}
        characteristics={list}
        productName={product}
        currentName={current}
      />
    </div>
  );
};

Thumbnail.propTypes = {
  image: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  current: PropTypes.string.isRequired,
  product: PropTypes.string.isRequired,

};

export default Thumbnail;
