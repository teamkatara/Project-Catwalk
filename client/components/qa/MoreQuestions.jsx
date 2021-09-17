// eslint-disable-next-line no-use-before-define
import React from 'react';

const MoreQuestions = () => (
  <form className="qa-question-buttons">
    <input
      className="qa-more-questions"
      type="button"
      value="MORE ANSWERED QUESTIONS"
      onClick={() => console.log('More Answered Questions Clicked')}
    />
    <input
      className="qa-add-question"
      type="button"
      value="ADD A QUESTION +"
      onClick={() => console.log('Add A Question Clicked')}
    />
  </form>
);

export default MoreQuestions;
