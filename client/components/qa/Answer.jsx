/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import PropTypes from 'prop-types';
import { ProductContext } from '../App';

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
      <div className="qa-answer flex-container">
        <div id="qa-a">A:</div>
        <br />
        <div id="qa-answer-body">{body}</div>
      </div>
      <div className="qa-answer-metadata flex-container">
        <div className="qa-ansqwer-user" id="qa-user">
          {`by ${name}, ${date.slice(0, 10)}`}
        </div>
        <div>|</div>
        <div className="flex-container">
          <div id="qa-helpful">Helpful?</div>
          <div id="qa-yes" onClick={() => console.log('Yes Clicked')}>Yes</div>
          <div id="qa-score">{`(${helpfulness})`}</div>
        </div>
        <div>|</div>
        <div id="qa-report" onClick={() => console.log('Report Clicked')}>Report</div>
      </div>
    </div>
  );
};

Answer.propTypes = {
  answer: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.array,
    ]),
  ).isRequired,
  // PropTypes.arrayOf(PropTypes.string)
  // PropTypes.string.isRequired
};

export default Answer;
