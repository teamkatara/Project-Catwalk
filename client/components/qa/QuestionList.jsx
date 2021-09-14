// eslint-disable-next-line no-use-before-define
import React from 'react';
import Question from './Question';
import QuestionData from '../../mock-data/sample-questions.json';

const QuestionList = () => {
  const questions = QuestionData.results;
  console.log('The Questions: ', questions);

  return (
    <div>
      {
        questions.map((question) => (
          <Question question={question} />
        ))
      }
    </div>
  );
};

export default QuestionList;
