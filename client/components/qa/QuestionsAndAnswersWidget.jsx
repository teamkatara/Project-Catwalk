// eslint-disable-next-line no-use-before-define
import React from 'react';
import Search from './Search';
import QuestionList from './QuestionList';
import MoreQuestions from './MoreQuestions';
import QuestionData from '../../mock-data/sample-questions.json';

const QuestionsAndAnswersWidget = () => {
  const questions = QuestionData.results;
  return (
    <div className="questions-answers">
      Questions and Answers
      <Search />
      <QuestionList questions={questions} />
      <MoreQuestions />
    </div>
  );
};

export default QuestionsAndAnswersWidget;
