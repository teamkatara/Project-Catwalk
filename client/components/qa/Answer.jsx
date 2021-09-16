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
        <div>A:</div>
        <div>{body}</div>
      </div>
      <div>
        <div className="qa-ansqwer-user">
          {`by ${name}, ${date.slice(0, 10)}`}
        </div>
        <div>|</div>
        <div>
          <div>Helpful?</div>
          <input
            type="button"
            className="qa-answer-button"
            onClick={() => console.log('Clicked Yes')}
            value="Yes"
          />
          <div>{helpfulness}</div>
        </div>
        <div>|</div>
        <input
          type="button"
          className="qa-answer-button"
          onClick={() => console.log('Clicked Report')}
          value="Report"
        />
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
