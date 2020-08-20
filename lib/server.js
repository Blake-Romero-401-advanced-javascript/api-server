'use strict';

const express = require('express');
require('dotenv').config();
const app = express();

// const fruitRouter = require('./routes.js');
// const categoriesRoutes = require('../routes/categories.js');
// const productsRoutes = require('../routes/products.js');
// Global Middleware
app.use(express.json());
app.use('api/v1/', categoriesRoutes);
app.use('api/v1/', productsRoutes);
// app.us(logRequest);

// app.use(getBrowser);


app.get('/categories', (req, res, next) => {
  let count = categoryDb.length;
  let results = categoryDb;
  res.json({count, results});
});

app.get('/categories/:id', (req, res, next) => {
  let id = req.params.id;
  let record = categoryDb.filter((record) => record.id === parseInt(id));
  res.json(record[0]);
});

app.post('/categories/', (req, res, next) => {
  let { name } = req.body;
  let record = { name };
  record.id = categoryDb.length + 1;
  categoryDb.push(record);
  res.json(record);
});

app.put('/categories/:id', (reg, res, next) => {
  let idToUpdate = req.params.id;
  let { name, id } = req.body;
  let updatedRecord = { name, id };
  categoryDb = categoryDb.map((record) => (record.id === parseInt(idToUpdate)) ? updatedRecord : record);
  res.json(updatedRecord);
})

app.delete('/categories/:id', (req, res, next) => {
  let id = req.params.id;
  categoryDb = categoryDb.filter((record) => record.id !== parseInt(id));
  res.json({})
});

//----------------------------------------------------------------------//

app.get('/products', (req, res, next) => {
  let count = productsDb.length;
  let results = productsDb;
  res.json({count, results});
});

app.get('/products/:id', (req, res, next) => {
  let id = req.params.id;
  let record = productsDb.filter((record) => record.id === parseInt(id));
  res.json(record[0]);
});

app.post('/products/', (req, res, next) => {
  let { name } = req.body;
  let record = { name };
  record.id = productsDb.length + 1;
  productsDb.push(record);
  res.json(record);
});

app.put('/products/:id', (reg, res, next) => {
  let idToUpdate = req.params.id;
  let { name, id } = req.body;
  let updatedRecord = { name, id };
  productsDb = productsDb.map((record) => (record.id === parseInt(idToUpdate)) ? updatedRecord : record);
  res.json(updatedRecord);
})

app.delete('/products/:id', (req, res, next) => {
  let id = req.params.id;
  productsDb = productsDb.filter((record) => record.id !== parseInt(id));
  res.json({})
});

// function logRequest(req, res, next){
//   console.log('We are in!');
//   next();
// }

// function getBrowser(req, res, next){
//   req.browser = req.headers['user-agent'];
//   next();
// }

app.use('*', notFoundHandler);

app.use(errorHandler);

//--------------------------------------------------------//

function notFoundHandler(req, res, next) {
  res.status(404);
  res.statusMessage = 'Resource Not Found';
  res.json({ error: 'Not Found' });
}


function errorHandler(err, req, res, next) {
  res.status(500);
  res.statusMessage = 'Server Error';
  res.json({ error: err });
}


//----------------------------------------------------------//

module.exports = {
  start: port => {
    const PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  }
}
