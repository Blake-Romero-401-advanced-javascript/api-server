'use strict';

const mongoose = require('mongoose');

const products = mongoose.Schema({
  name: {type: String, required: true},

})
//needs to return a mongoose model that contains a constructor with a create method
module.exports = mongoose.model('products', products);