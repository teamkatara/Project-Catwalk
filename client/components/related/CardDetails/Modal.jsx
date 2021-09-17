import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ show }) => {
  const willShow = show;

  if (!willShow) {
    return (
      null
    );
  }

  return (
    <div className="modal">
      Comparison
      <table className="modalTable">
        <thead>
          <tr>
            <td>Product</td>
            <td />
            <td>Product</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>✔</td>
            <td>GMO and Pesticide Free</td>
            <td>✔</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default Modal;
