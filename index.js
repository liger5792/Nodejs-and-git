var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
})

app.listen(3005, function() {
  console.log('Server on at' + 3005);
})
