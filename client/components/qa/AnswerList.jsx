// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Answer from './Answer.jsx';

const AnswerList = ({ answers, color }) => {
  const [allAnswers, setAllAnswers] = useState(Object.values(answers));
  const firstRender = useRef(true);
  const { length } = allAnswers;

  const [displayLMA, setLMA] = useState(true);
  const [answerList, setAnswerList] = useState(allAnswers.slice(0, 2));

  useEffect(() => {
    if (firstRender.current) {
      // console.log('Questions: ', allQuestions);
      firstRender.current = false;
    } else {
      setAllAnswers(Object.values(answers));
      setLMA(true);
      setAnswerList(Object.values(answers).slice(0, 2));
    }
  }, [answers]);

  const setDisplayList = () => {
    setAnswerList(allAnswers);
    setLMA(false);
  };

  const lma = (
    <input
      type="button"
      className="qa-answers-lma"
      onClick={() => setDisplayList()}
      value="LOAD MORE ANSWERS"
      style={{ color, display: displayLMA ? 'inline' : 'none' }}
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
  color: PropTypes.string.isRequired,
  // PropTypes.arrayOf(PropTypes.string)
  // PropTypes.string.isRequired
};

export default AnswerList;
