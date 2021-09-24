/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// eslint-disable-next-line no-use-before-define
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { authToken } from '../../../config';
import AnswerList from './AnswerList.jsx';
import Modal from './Modal.jsx';

const Question = ({ question, color }) => {
  const {
    question_id: id,
    question_body: body,
    answers,
    question_helpfulness: helpfulness,
  } = question;

  // console.log('Question: ', question);
  const [newAnswers, setAnswers] = useState(answers);
  const [helpRating, setHelpRating] = useState(helpfulness);
  const [helped, setHelped] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setAnswers(answers);
    setHelpRating(helpfulness);
    setHelped(false);
    setShow(false);
  }, [question]);

  const submitHelpfulness = () => {
    if (!helped) {
      setHelped(true);
      axios.put(`./qa/questions/helpful/${id}`, {
        headers: { Authorization: authToken },
      })
        .then(setHelpRating((curr) => curr + 1))
        .catch((err) => console.log(err));
    }
  };

  const onClick = () => {
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  const getAnswers = () => {
    axios.get(`/qa/questions/answers/${id}`, {
      headers: { Authorization: authToken },
    })
      .then((res) => {
        setAnswers(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="qa-question flex-container">
        <div className="qa-question-left flex-container">
          <div id="qa-q">Q:</div>
          <br />
          <div id="qa-question-body">{body}</div>
        </div>
        <div className="qa-question-right flex-container">
          <div className="flex-container">
            <div id="qa-helpful">Helpful?</div>
            <div id="qa-yes" onClick={() => submitHelpfulness()}>Yes</div>
            <div id="qa-score">{`(${helpRating})`}</div>
          </div>
          <div>|</div>
          <div id="qa-add-answer" onClick={() => onClick()}>Add Answer</div>
        </div>
      </div>
      <AnswerList answers={newAnswers} id={id} color={color} />
      <Modal
        show={show}
        click={onClick}
        submit={getAnswers}
        id={id}
        type="answer"
      />
    </div>
  );
};

Question.propTypes = {
  color: PropTypes.string.isRequired,
  question: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.number,
      PropTypes.string,
      PropTypes.boolean,
    ]),
  ).isRequired,
  // PropTypes.arrayOf(PropTypes.string)
  // PropTypes.string.isRequired
};

export default Question;
