// eslint-disable-next-line no-use-before-define
import React from 'react';
import PropTypes from 'prop-types';
import Answer from './Answer';

const AnswerList = ({ answers }) => {
  const allAnswers = Object.values(answers);
  const { length } = allAnswers;

  const [displayLMA, setLMA] = React.useState(true);
  const [answerList, setAnswerList] = React.useState(allAnswers.slice(0, 2));

  const setDisplayList = () => {
    console.log('Clicked LMA');
    setAnswerList(() => allAnswers);
    setLMA(false);
  };

  const lma = (
    <input
      type="button"
      className="qa-answers-lma"
      onClick={() => setDisplayList()}
      value="LOAD MORE ANSWERS"
      style={{ display: displayLMA ? 'inline' : 'none' }}
    />
  );

  return (
    <div className="qa-answer-list">
      {
        answerList.map((answer) => (<Answer answer={answer} />))
      }
      {length <= 2 ? <div /> : lma}

    </div>
  );
};

AnswerList.propTypes = {
  answers: PropTypes.objectOf(PropTypes.object).isRequired,
  // PropTypes.arrayOf(PropTypes.string)
  // PropTypes.string.isRequired
};

export default AnswerList;
