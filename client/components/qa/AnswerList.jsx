// eslint-disable-next-line no-use-before-define
import React from 'react';
import PropTypes from 'prop-types';
import Answer from './Answer';

const AnswerList = ({ answers }) => {
  const allAnswers = Object.values(answers);
  const [answerList, setAnswerList] = React.useState(allAnswers.slice(0, 2));

  const setDisplayList = () => {
    console.log('Clicked LMA');
    setAnswerList(() => allAnswers);
  };

  return (
    <div>
      { answerList.map((answer) => (
        <Answer answer={answer} />
      )) }
      <input
        type="button"
        className="qa-answers-lma"
        onClick={() => setDisplayList()}
        value="LOAD MORE ANSWERS"
      />
    </div>
  );
};

AnswerList.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.object).isRequired,
  // PropTypes.arrayOf(PropTypes.string)
  // PropTypes.string.isRequired
};

export default AnswerList;
