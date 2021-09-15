// eslint-disable-next-line no-use-before-define
import React from 'react';
import PropTypes from 'prop-types';
import AnswerList from './AnswerList';

const Question = ({ question }) => {
  const {
    question_body: body,
    answers,
  } = question;
  return (
    <div>
      <div className="qa-question">
        {`Q: ${body}`}
      </div>
      <AnswerList answers={answers} />
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.arrayOf(PropTypes.object).isRequired,
  // PropTypes.arrayOf(PropTypes.string)
  // PropTypes.string.isRequired
};

export default Question;
