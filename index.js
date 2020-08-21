'use strict';

require('dotenv').config();

const server = require('./lib/server.js');

const mongoose = require('mongoose');

const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
}
mongoose.connect(process.env.MONGOD_URI, mongooseOptions);

server.start(3000);