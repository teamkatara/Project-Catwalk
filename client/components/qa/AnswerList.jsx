// eslint-disable-next-line no-use-before-define
import React from 'react';
import PropTypes from 'prop-types';
import Answer from './Answer';

const AnswerList = ({ answers }) => {
  const allAnswers = Object.values(answers);
  const [answerList, setAnswerList] = React.useState(allAnswers.slice(0, 2));

  const setDisplayList = () => {
    setAnswerList(() => allAnswers);
  };

  return (
    <div>
      { answerList.map((answer) => (
        <Answer answer={answer} />
      )) }
      <div className="qa-answers-lma">
        LOAD MORE ANSWERS
      </div>
    </div>
  );
};

AnswerList.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.object).isRequired,
  // PropTypes.arrayOf(PropTypes.string)
  // PropTypes.string.isRequired
};

export default AnswerList;
