'use strict';

const express = require('express');

const categories = require('../models/categories/categories.schema.js');

const router = express.Router();

//Define the routes
router.get('/categories', getCategories);
router.post('/categories', postCategories);


//---------------------Functions-------------------//
function getCategories(req, res, next){
  categories.get()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

function postCategories(req, res, next){
  categories.get()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

module.exports = router;
