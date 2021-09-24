import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './NewReview.css';
import Modal from './Modal.jsx';

const AddReview = ({ characters, productId }) => {
  const [show, setShow] = useState(false);

  const clickHandler = () => {
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  return (
    <div>
      <button type="button" aria-label="Add Review" onClick={clickHandler}>Add Review</button>
      <Modal
        show={show}
        clickHandler={clickHandler}
        characters={characters}
        productId={productId}
      />
    </div>
  );
};

export default AddReview;
