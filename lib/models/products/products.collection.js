'use strict';

const schema = require('./products.schema.js');
const Model = require('../mongo.js');

class Products extends Model{
  constructor() {
    super(schema);
  }
}

// module.exports = new Products();
// module.exports = Products;
module.exports = new Products(schema);