// eslint-disable-next-line no-use-before-define
import React, {
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

import axios from 'axios';
import PropTypes from 'prop-types';
import { authToken } from '../../../config';
// import Search from './Search';
import Question from './Question.jsx';
// import MoreQuestions from './MoreQuestions';
import ProductContext from '../ProductContext.jsx';
import Modal from './Modal.jsx';

const QuestionList = ({ mockQuestions }) => {
  const productId = useContext(ProductContext);
  const firstRender = useRef(true);

  // let allQuestions = Object.values(mockQuestions);
  const [allQuestions, setAllQuestions] = useState(Object.values(mockQuestions));
  const { length } = allQuestions;

  const [displayMAQ, setMAQ] = useState(true);
  const [totalDisplayed, setTotalDisplayed] = useState(6);
  const [questionList, setQuestionList] = useState(allQuestions.slice(0, 4));
  const [show, setShow] = useState(false);

  // if (allQuestions.length <= 4) { setMAQ(false); }

  useEffect(() => {
    // console.log('Product ID: ', productId);
    if (firstRender.current) {
      // console.log('Questions: ', allQuestions);
      firstRender.current = false;
    } else {
      axios.get(`/qa/questions/${productId}`, {
        headers: { Authorization: authToken },
      })
        .then((response) => {
          const returnQuestions = Object.values(response.data.results);
          setAllQuestions(returnQuestions);
          setTotalDisplayed(6);
          setQuestionList(returnQuestions.slice(0, 4));
          setMAQ(true);
        })
        // .then(console.log('Get Answers'))
        .catch((err) => console.log(err));
    }
  }, [productId]);

  const onClick = () => {
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  const getQuestions = () => {
    axios.get(`/qa/questions/${productId}`, {
      headers: { Authorization: authToken },
    })
      .then((res) => {
        const returnQuestions = Object.values(res.data.results);
        setAllQuestions(returnQuestions);
        setTotalDisplayed(6);
        setQuestionList(returnQuestions);
        setMAQ(true);
      })
      .catch((err) => console.log(err));
  };

  const setDisplayList = () => {
    // console.log('Current Total', totalDisplayed);
    setTotalDisplayed((curr) => {
      if (curr < length) {
        return curr + 2;
      }
      setMAQ(false);
      return length;
    });
    setQuestionList(() => allQuestions.slice(0, totalDisplayed));
  };

  return (
    <div>
      <div className="qa-search flex-container">
        <input
          id="qa-search-text"
          type="text"
          placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
          onChange={(e) => {
            const query = e.target.value;
            if (query.length >= 3) {
              setQuestionList((curr) => curr.filter((q) => q.question_body.includes(query)));
            } else {
              setQuestionList(allQuestions.slice(0, totalDisplayed - 2));
            }
          }}
        />
        <i className="fas fa-search" id="magnifying-glass" />
      </div>
      <div className="qa-question-list">
        { questionList.map((question) => (
          <Question question={question} />
        )) }
      </div>
      <form className="qa-question-buttons">
        <input
          className="qa-more-questions"
          type="button"
          value="MORE ANSWERED QUESTIONS"
          onClick={() => setDisplayList()}
          style={{ display: displayMAQ ? 'inline' : 'none' }}
        />
        <input
          className="qa-add-question"
          type="button"
          value="ADD A QUESTION +"
          onClick={() => onClick()}
        />
      </form>
      <Modal
        show={show}
        click={onClick}
        submit={getQuestions}
        id={productId}
        type="question"
      />
    </div>
  );
};

QuestionList.propTypes = {
  mockQuestions: PropTypes.arrayOf(PropTypes.object).isRequired,
  // PropTypes.arrayOf(PropTypes.string)
  // PropTypes.string.isRequired
};

export default QuestionList;
