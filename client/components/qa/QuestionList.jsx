// eslint-disable-next-line no-use-before-define
import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import { ProductContext } from '../App';

const QuestionList = ({ questions }) => {
  const allQuestions = Object.values(questions);
  const { length } = allQuestions;

  const [displayMAQ, setMAQ] = React.useState(true);
  const [totalDisplayed, setTotalDisplayed] = React.useState(6);
  const [questionList, setQuestionList] = React.useState(allQuestions.slice(0, 4));

  const setDisplayList = () => {
    // console.log('Current Total', totalDisplayed);
    setTotalDisplayed((curr) => {
      if (curr < length) {
        return curr + 2;
      }
      setMAQ(false);
      return length;
    });
    setQuestionList(() => allQuestions.slice(0, totalDisplayed));
  };

  return (
    <ProductContext.Consumer>
      { (data) => {
        console.log('Product ID: ', data);
        return (
          <div>
            <div className="qa-search flex-container">
              <input
                id="qa-search-text"
                type="text"
                placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
                onChange={(e) => {
                  const query = e.target.value;
                  if (query.length >= 3) {
                    setQuestionList((curr) => curr.filter((q) => q.question_body.includes(query)));
                  } else {
                    setQuestionList(allQuestions.slice(0, totalDisplayed - 2));
                  }
                }}
              />
              <i className="fas fa-search silly" id="magnifying-glass" />
            </div>
            <div className="qa-question-list">
              { questionList.map((question) => (
                <Question question={question} />
              )) }
            </div>
            <form className="qa-question-buttons">
              <input
                className="qa-more-questions"
                type="button"
                value="MORE ANSWERED QUESTIONS"
                onClick={() => setDisplayList()}
                style={{ display: displayMAQ ? 'inline' : 'none' }}
              />
              <input
                className="qa-add-question"
                type="button"
                value="ADD A QUESTION +"
                onClick={() => console.log('Add A Question Clicked')}
              />
            </form>
          </div>
        );
      }}
    </ProductContext.Consumer>
  );
};

QuestionList.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  // PropTypes.arrayOf(PropTypes.string)
  // PropTypes.string.isRequired
};

export default QuestionList;

