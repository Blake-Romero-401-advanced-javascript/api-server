'use strict';

const express = require('express');
const router = express.Router();

router.get('/fruit', (req, res) => {
  let output = {
    type: req.query.type || 'unknown',
  }
  res.status(200).sendjson(output);
})

router.get('/fruit/apple', (req, res) => {
  res.status(200).send('I love apples');
})

router.get('/fruit/:type', (req, res) => {
  let output = {
    type: req.params.type,
  }
  res.status(200).json(output);
})

router.post('/fruit', (req, res) => {
  console.log('What got added?', req.body);
  res.status(200).send('ok');
})

router.get('/fruit-browser', (req, res) => {
  console.log('browser = ', req.browser);
res.status(200).send('ok');
});

module.exports = router;
