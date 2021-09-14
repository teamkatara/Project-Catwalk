// eslint-disable-next-line no-use-before-define
import React from 'react';
import Search from './Search';
import QuestionList from './QuestionList';
import MoreQuestions from './MoreQuestions';

const QuestionsAndAnswersWidget = () => (
  <div className="questions-answers">
    Questions and Answers
    <Search />
    <QuestionList />
    <MoreQuestions />
  </div>
);

export default QuestionsAndAnswersWidget;
