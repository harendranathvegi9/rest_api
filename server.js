var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


var mongo = require('mongodb'),
  Server = mongo.Server,
  Db = mongo.Db;

var server = new Server('localhost', 27017, {auto_reconnect: true});
var db = new Db('exampleDb', server);

db.open(function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});


// MongoDB
mongoose.connect('mongodb://localhost/rest_test');

// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Routes
app.use('/api', require('./routes/api'));


// Start server at port 3000
app.listen(3000);
console.log('API is running on port 3000');