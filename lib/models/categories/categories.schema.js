'use strict';

const mongoose = require('mongoose');

const categories = mongoose.Schema({
  name: {type: String, required: true},

})

module.exports = mongoose.model('categories', categories);