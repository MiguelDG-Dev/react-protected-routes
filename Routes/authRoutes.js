const { model } = require('mongoose');

const router = require('express').Router();

router.get('/google', (req, res) => {
  res.json({
    message: 'Login using google account'
  });
});

module.exports = router;
