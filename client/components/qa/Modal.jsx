import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { authToken } from '../../../config';

const Modal = ({
  show, click, submit, type, id,
}) => {
  const [newBody, setnewBody] = useState('');
  const [newNick, setNewNick] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const willShow = show;

  if (!willShow) { return (null); }

  const Close = (
    <input
      type="button"
      className="qa-close-button"
      onClick={click}
      value="X"
    />
  );

  const submitForm = () => {
    if (type === 'answer') {
      const answerForm = {
        body: newBody,
        name: newNick,
        email: newEmail,
        photos: [],
      };
      axios.post(`/qa/answers/add/${id}`, answerForm, {
        headers: { Authorization: authToken },
      })
        .then(() => {
          click();
          submit();
          // console.log('Added New Answer ', response);
        })
        .catch((err) => console.log(err));
    }

    if (type === 'question') {
      const questionForm = {
        body: newBody,
        name: newNick,
        email: newEmail,
        product_id: id,
      };
      axios.post(`/qa/questions/add/${id}`, questionForm, {
        headers: { Authorization: authToken },
      })
        .then(() => {
          click();
          // console.log('Added New Question ', response);
        })
        .catch((err) => console.log(err));
    }
  };

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
              <textarea
                className="qa-modal-answer-body"
                cols="75"
                rows="5"
                maxLength="1000"
                onChange={(e) => setnewBody(e.target.value)}
              />
            </div>
            <br />
            <div className="qa-modal-nick">
              Your Nickname:
              <br />
              <input
                className="qa-modal-nick-body"
                type="text"
                maxLength="60"
                onChange={(e) => setNewNick(e.target.value)}
              />
            </div>
            <br />
            <div className="qa-modal-email">
              Your Email:
              <br />
              <input
                className="qa-modal-email-body"
                type="text"
                maxLength="60"
                onChange={(e) => setNewEmail(e.target.value)}
              />
            </div>
            <br />
            <div>Upload Your Photos:</div>
            <br />
            <div>
              <input
                type="button"
                value="Submit Your Answer"
                onClick={() => submitForm()}
              />
            </div>
          </table>
        </div>
      </div>
    );
  }

  if (type === 'question') {
    return (
      <div className="qa-modal">
        <div className="qa-modal-content">
          Add a New Question:
          {Close}
          <table className="qa-modalTable">
            <div className="qa-modal-answer-NOTUSED">
              Your Question:
              <br />
              <textarea
                className="qa-modal-answer-body"
                cols="75"
                rows="5"
                maxLength="1000"
                onChange={(e) => setnewBody(e.target.value)}
              />
            </div>
            <br />
            <div className="qa-modal-nick">
              Your Nickname:
              <br />
              <input
                className="qa-modal-nick-body"
                type="text"
                maxLength="60"
                onChange={(e) => setNewNick(e.target.value)}
              />
            </div>
            <br />
            <div className="qa-modal-email">
              Your Email:
              <br />
              <input
                className="qa-modal-email-body"
                type="text"
                maxLength="60"
                onChange={(e) => setNewEmail(e.target.value)}
              />
            </div>
            <br />
            <div>
              <input
                type="button"
                value="Submit Your Question"
                onClick={() => submitForm()}
              />
            </div>
          </table>
        </div>
      </div>
    );
  }

  return <div />;
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  click: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

export default Modal;
