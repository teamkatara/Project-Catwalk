// eslint-disable-next-line no-use-before-define
import './qa-styles.css';
import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import QuestionList from './QuestionList';
import QuestionData from '../../mock-data/sample-questions.json';
import ProductContext from '../ProductContext';

const QuestionsAndAnswersWidget = () => {
  const mockQuestions = QuestionData.results;
  // const allQuestions = mockQuestions;

  const productId = useContext(ProductContext);
  const [questions, setQuestions] = React.useState(mockQuestions);

  useEffect(() => {
    axios.get(`/qa/questions/${productId}`)
      .then((response) => {
        console.log(response);
        setQuestions(response);
      })
      .catch();
  }, [productId]);

  return (
    <div className="questions-answers">
      <div id="qa-title">QUESTIONS & ANSWERS</div>
      <QuestionList questions={questions} />
    </div>
  );
};

export default QuestionsAndAnswersWidget;
