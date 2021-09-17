/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import PropTypes from 'prop-types';
import AnswerList from './AnswerList';

const Question = ({ question }) => {
  const {
    question_body: body,
    answers,
    question_helpfulness: helpfulness,
  } = question;
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
            <div id="qa-yes" onClick={() => console.log('Yes Clicked')}>Yes</div>
            <div id="qa-score">{`(${helpfulness})`}</div>
          </div>
          <div>|</div>
          <div id="qa-report" onClick={() => console.log('Add Answer Clicked')}>Add Answer</div>
        </div>
      </div>
      <AnswerList answers={answers} />
    </div>
  );
};

Question.propTypes = {
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
