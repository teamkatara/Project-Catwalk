// eslint-disable-next-line no-use-before-define
import React from 'react';
import PropTypes from 'prop-types';

const Question = ({ question }) => {
  const { question_body: body, answers } = question;
  return (
    <div>
      <div>
        {`Q: ${body}`}
      </div>
      <div>
        {`A: ${answers}`}
      </div>
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.arrayOf(PropTypes.object).isRequired,
  // PropTypes.arrayOf(PropTypes.string)
  // PropTypes.string.isRequired
};

export default Question;
