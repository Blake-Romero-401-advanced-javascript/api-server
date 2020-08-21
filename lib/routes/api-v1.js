'use strict';

const express = require('express');
const router = express.Router();

// grabs instance of a model
const categories = require('../models/categories/categories.collection');
const products = require('../models/products/products.collection');

function getModel(req, res, next){
  let model = req.params.model;

  switch (model) {
    case 'categories':
      req.model = categories;
      next();
      return;
    case 'products':
      req.model = products;
      next();
      return;
    default:
      next('Invalid Model');
      return;
  }
}

router.param('model', getModel);


// Route Definitions
router.get('api/v1/:model', handleGetAll);
router.post('api/v1/:model', handlePost);
router.get('api/v1/:model/:id', handleGetId);
router.put('api/v1/:model/:id', handlePut);
router.delete('api/v1/:model/:id', handleDelete);




// //Define the routes
// router.get('/categories', getCategories);
// router.post('/categories', postCategories);

// router.get('/products', getProducts);
// router.post('/products', postProducts);


//---------------------Functions-------------------//
function handleGetAll(req, res, next){
  req.model.get()
  .then(data => {
    let count = data.length;
    res.status(200).json({ count, data });
  })
  .catch(next);
}


function handlePost(req, res, next){
  req.model.create(req.body)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}


function handleGetId(req, res, next){
  let id = req.params.id;
  req.model.get(id)
  .then(data => {
    res.status(200).json(data);
  })
  .catch(next);
}


function handlePut(req, res, next){
  req.model.update(req.params.id, req.body)
  .then(data => {
    res.status(200).json(data);
  })
  .catch(next);
}


function handleDelete(req, res, next){
  req.model.delete(req.params.id)
  .then(data => {
    res.status(200).json(data);
  })
  .catch(next);
}




// function getCategories(req, res, next){
//   categories.get()
//     .then(data => {
//       res.status(200).json(data);
//     })
//     .catch(next);
// }

// function postCategories(req, res, next){
//   categories.create(req.body)
//     .then(data => {
//       res.status(200).json(data);
//     })
//     .catch(next);
// }

// function getProducts(req, res, next){
//   products.get()
//     .then(data => {
//       res.status(200).json(data);
//     })
//     .catch(next);
// }

// function postProducts(req, res, next){
//   console.log('reqbody=================',req.body)
//   products.create(req.body)
//     .then(data => {
//       console.log('req After ==========*=======',req.body)
//       res.status(200).json(data);
//     })
//     .catch(next);
//   // res.status(200).json('OK');
// }

module.exports = router;