// eslint-disable-next-line no-use-before-define
import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';

const QuestionList = ({ questions }) => (
  <div className="qa-question-list">
    <Question question={questions[0]} />
  </div>
);

QuestionList.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  // PropTypes.arrayOf(PropTypes.string)
  // PropTypes.string.isRequired
};

export default QuestionList;
