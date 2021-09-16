// eslint-disable-next-line no-use-before-define
import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import MoreQuestions from './MoreQuestions';

const QuestionList = ({ questions }) => {
  const allQuestions = Object.values(questions);
  const [totalDisplayed, setTotalDisplayed] = React.useState(4);
  const [questionList, setQuestionList] = React.useState(allQuestions.slice(0, totalDisplayed));

  const setDisplayList = () => {
    console.log('Clicked MAQ');
    setQuestionList(() => allQuestions.slice(0, totalDisplayed));
  };

  return (
    <div>
      <div className="qa-question-list">
        { questionList.map((question) => (
          <Question question={question} />
        )) }
        {/* <Question question={questionList[0]} /> */}
      </div>
      <MoreQuestions />
    </div>
  );
};

QuestionList.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  // PropTypes.arrayOf(PropTypes.string)
  // PropTypes.string.isRequired
};

export default QuestionList;
