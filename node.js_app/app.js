const express = require('express');
const app = express();
const db = require('./db');
global.__root = __dirname + '/';

const AuthController = require(__root + 'auth/AuthController');
app.use('/api', AuthController);
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
  next();
});

module.exports = app;