var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var math = require('./routes/math.js');

var port = 5000;

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('server/public'));

app.use('/math', math);

// Start up our server
app.listen(port, function(){
  console.log('listening on port', port);
});