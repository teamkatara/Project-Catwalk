import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Modal = ({
  show, click, characteristics, productName, currentName,
}) => {
  const willShow = show;

  if (!willShow) {
    return (
      null
    );
  }

  const Close = (
    <button type="button" className="close-button" onClick={click}>x</button>
  );

  return (
    ReactDOM.createPortal(
    <div className="modal" onClick={click}>
      <div className="modal-content">
        Comparison
        {Close}
        <table className="modalTable">
          <thead>
            <tr>
              <td className="productName">{productName}</td>
              <td />
              <td className="productName">{currentName}</td>
            </tr>
          </thead>
          <tbody>
            {characteristics.map((feature) => (
              <tr key={feature[1]}>
                <td>{feature[0]}</td>
                <td>{feature[1]}</td>
                <td>{feature[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>, document.getElementById('portal'),
    ));
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  click: PropTypes.func.isRequired,
  characteristics: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  productName: PropTypes.string.isRequired,
  currentName: PropTypes.string.isRequired,
};

export default Modal;
