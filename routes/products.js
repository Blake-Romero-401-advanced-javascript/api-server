'use strict';

const express = require('express');

const products = require('../models/products/products.schema.js');

const router = express.Router();

//Define the routes
router.get('/products', getProducts);
router.post('/products', postProducts);


//---------------------Functions-------------------//
function getProducts(req, res, next){
  products.get()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

function postProducts(req, res, next){
  products.get()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

module.exports = router;
