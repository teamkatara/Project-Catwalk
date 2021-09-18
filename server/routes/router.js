const router = require('express').Router();
const axios = require('axios');
const { authToken } = require('../../config');

// Test Endpoint
router.get('/yourWidgetHere', (req, res) => {
  res.end('hello world');
});

// OVERVIEW ENDPOINTS

router.get('/products', (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/?count=25', {
    headers: { Authorization: authToken },
  })
    .then((response) => res.send(response.data))
    .catch((err) => res.send(err));
});

router.get('/products/:product_id', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${req.params.product_id}`, {
    headers: { Authorization: authToken },
  })
    .then((response) => res.send(response.data))
    .catch((err) => res.send(err));
});

router.get('/products/styles/:product_id', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${req.params.product_id}/styles`, {
    headers: { Authorization: authToken },
  })
    .then((response) => res.send(response.data))
    .catch((err) => res.send(err));
});

// RELATED PRODUCTS ENDPOINTS

router.get('/products/related/:product_id', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${req.params.product_id}/related`, {
    headers: { Authorization: authToken },
  })
    .then((response) => res.send(response.data))
    .catch((err) => res.send(err));
});

// QUESTION & ANSWER ENDPOINTS

router.get('/qa/questions/:question_id', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/?product_id=${req.params.question_id}&page=1&count=100`, {
    headers: { Authorization: authToken },
  })
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => res.send(err));
});

router.get('/qa/questions/answers/:question_id', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${req.params.question_id}/answers`, {
    headers: { Authorization: authToken },
  })
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => res.send(err));
});

// RATINGS AND REVIEWS ENDPOINTS

router.get('/reviews/:product_id', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?sort=newest&product_id=${req.params.product_id}&count=100`, {
    headers: { Authorization: authToken },
  })
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => res.send(err));
});

router.get('/reviews/meta/:product_id', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta/?sort=newest&product_id=${req.params.product_id}&count=100`, {
    headers: { Authorization: authToken },
  })
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => res.send(err));
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

module.exports = router;