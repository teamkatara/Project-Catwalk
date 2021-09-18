const router = require('express').Router();
const axios = require('axios');
const { authToken } = require('../../config');

// Test Endpoint
router.get('/yourWidgetHere', (req, res) => {
  res.end('hello world');
});

router.get('/product/rating/:id', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?sort=newest&product_id=${req.params.id}&count=100`, {
    headers: { Authorization: authToken },
  })
    .then((response) => {
      console.log(response);
      res.send(JSON.stringify(response.data.results
        .map((review) => review.rating)
        .reduce((previous, current) => previous + current, 0) / response.data.results.length));
    })
    .catch((err) => res.send(err));
});

// QUESTION & ANSWER ENDPOINTS

router.get('/qa/questions/:id', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/?product_id=${req.params.id}&page=1&count=100`, {
    headers: { Authorization: authToken },
  })
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => res.send(err));
});

router.get('/qa/questions/answers/:id', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${req.params.id}/answers`, {
    headers: { Authorization: authToken },
  })
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => res.send(err));
});

module.exports = router;
