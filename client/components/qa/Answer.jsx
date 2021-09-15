// eslint-disable-next-line no-use-before-define
import React from 'react';
import PropTypes from 'prop-types';

const Answer = ({ answer }) => {
  const {
    body,
    date,
    helpfulness,
    // photos,
    answerer_name: name,
  } = answer;
  return (
    <div>
      <div className="qa-answer">
        {`A: ${body}`}
      </div>
      <div className="qa-answer-metadata">
        {`   by ${name}, ${date.slice(0, 10)}  |  Helpful? Yes(${helpfulness})  |  Report`}
      </div>
    </div>
  );
};

Answer.propTypes = {
  answer: PropTypes.arrayOf(PropTypes.object).isRequired,
  // PropTypes.arrayOf(PropTypes.string)
  // PropTypes.string.isRequired
};

export default Answer;
