var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});

export default {
  path: '/api',
  handler: app
}