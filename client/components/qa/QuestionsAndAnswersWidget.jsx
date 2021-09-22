// eslint-disable-next-line no-use-before-define
import './qa-styles.css';
import React from 'react';

import QuestionList from './QuestionList';
import QuestionData from '../../mock-data/sample-questions.json';

const QuestionsAndAnswersWidget = () => {
  const mockQuestions = QuestionData.results;

  return (
    <div className="questions-answers">
      <div id="qa-title">QUESTIONS & ANSWERS</div>
      <QuestionList mockQuestions={mockQuestions} />
    </div>
  );
};

export default QuestionsAndAnswersWidget;
