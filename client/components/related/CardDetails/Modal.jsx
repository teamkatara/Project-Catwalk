import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ show }) => {
  const willShow = show;

  if (!willShow) {
    return (
      <div> ): </div>
    );
  }

  return (
    <div className="modal">
      Modal Component
    </div>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default Modal;
