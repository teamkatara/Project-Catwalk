import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import NewReview from './NewReview';

const Modal = ({ show, clickHandler, characters, productId,
}) => {
  const willShow = show;
  if (!willShow) {
    return (
      null
    );
  }
  const Close = (
    <button type="button" className="close-button" onClick={clickHandler}>x</button>
  );

  return (
    ReactDOM.createPortal(
      <div className="ratings-modal">
        <div className="ratings-modal-content">
          Write Your Review
          {Close}
          <NewReview characters={characters} productId={productId} closeHandler={clickHandler} />
        </div>
      </div>, document.getElementById('portal'),
    ));
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired,
  characters: PropTypes.object.isRequired,
  productId: PropTypes.number.isRequired,
};

export default Modal;
