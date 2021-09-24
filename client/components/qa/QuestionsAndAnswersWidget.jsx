// eslint-disable-next-line no-use-before-define
import './qa-styles.css';
import React from 'react';
import PropTypes from 'prop-types';

import QuestionList from './QuestionList.jsx';
import QuestionData from '../../mock-data/sample-questions.json';

const QuestionsAndAnswersWidget = ({ color }) => {
  const mockQuestions = QuestionData.results;

  return (
    <div className="questions-answers">
      <div id="qa-title">QUESTIONS & ANSWERS</div>
      <QuestionList mockQuestions={mockQuestions} color={color} />
    </div>
  );
};

QuestionsAndAnswersWidget.propTypes = {
  color: PropTypes.string.isRequired,
};

export default QuestionsAndAnswersWidget;
