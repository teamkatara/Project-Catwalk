const router = require('express').Router();

router.get('/yourWidgetHere', (req, res) => {
  res.end('hello world');
});

module.exports = router;
