var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hola Mundo!');
});

app.get('/user/4', function(req, res) {
    res.send('User 4!');
  });

app.listen(3000, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 3000!');
  console.log('The result is displayed in the New Command Line Interface');
});