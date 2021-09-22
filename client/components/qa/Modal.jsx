import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({
  show, click, type,
}) => {
  const willShow = show;

  if (!willShow) {
    return (
      null
    );
  }

  const Close = (
    <button type="button" className="qa-close-button" onClick={click}>x</button>
  );

  if (type === 'answer') {
    return (
      <div className="qa-modal">
        <div className="qa-modal-content">
          Add a New Answer:
          {Close}
          <table className="qa-modalTable">
            <div className="qa-modal-answer">
              Your Answer:
              <br />
              <textarea className="qa-modal-answer-body" cols="75" rows="5" maxLength="1000" />
            </div>
            <br />
            <div className="qa-modal-nick">
              Your Nickname:
              <br />
              <input className="qa-modal-nick-body" type="text" maxLength="60" />
            </div>
            <br />
            <div className="qa-modal-email">
              Your Email:
              <br />
              <input className="qa-modal-email-body" type="text" maxLength="60" />
            </div>
            <br />
            <div>Upload Your Photos:</div>
            <br />
            <div>
              <input type="button" value="Submit" />
            </div>
          </table>
        </div>
      </div>
    );
  }

  if (type === 'question') {
    return (
      <div>
        Test
      </div>
    );
  }

  return <div />;
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  click: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default Modal;
