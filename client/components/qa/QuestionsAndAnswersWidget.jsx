// eslint-disable-next-line no-use-before-define
import './qa-styles.css';
import React from 'react';
import Search from './Search';
import QuestionList from './QuestionList';
import QuestionData from '../../mock-data/sample-questions.json';

const QuestionsAndAnswersWidget = () => {
  const questions = QuestionData.results;
  return (
    <div className="questions-answers">
      <div id="qa-title">QUESTIONS & ANSWERS</div>
      <Search />
      <QuestionList questions={questions} />
    </div>
  );
};

export default QuestionsAndAnswersWidget;
