import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';

const Thumbnail = ({ id, image, list, product, current, updateProductId }) => {
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
      <i className="far fa-star star-image"></i>
    </button>
  );

  // const Star = React.createElement('button', {type: 'button'}, 'Star');
  return (
    <div className="star-container">
      <div className="star-button">
        {Star}
      </div>
      <div
        onClick={() => updateProductId(id)}
        className="thumbnail"
        style={{ backgroundImage: `url(${image})` }}
      >
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
