// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');

var app = express();


// Middleware
// This middleware will parse the POST requests coming from an HTML form, and put the result in req.body.  Read the docs for more info!
app.use(bodyParser.urlencoded({
  extended: false
}));

// This middleware will parse the Cookie header from all requests, and put the result in req.cookies.  Read the docs for more info!
app.use(cookieParser());

// This middleware will console.log every request to your web server! Read the docs for more info!
app.use(morgan('dev'));

app.use(express.static('static_files'))


var mysql = require('promise-mysql');
var connection = mysql.createPool({
  host: 'db.bertha.ca',
  user: 'user_decodemtl',
  password: 'Q<U*.5@f461Sv7ffh3+3',
  database: 'decodemtl_shoestagram',
  connectionLimit: 10

  // host: process.env.IP,
  // user: process.env.C9_USER,
  // password: '',
  // database: 'shoestagram',
  // connectionLimit: 10
});

// load our reddit API
var shoestagramAPI = require('./shoestagram');


app.get('/media', function(request, response) {

  shoestagramAPI.getAllMedia({}, connection)
  .then(function(result) {
    response.json(result);
  })
});

app.get('/media/:id', function(request, response) {

  shoestagramAPI.getSingleMedia(request.params.id, connection)
  .then(function(result) {
    response.json(result);
  })
});

app.get('/profile', function(request, response) {

  shoestagramAPI.getAllProfile({}, connection)
  .then(function(result) {
    response.json(result);
  })
});

app.get('/profile/:id', function(request, response) {

  shoestagramAPI.getSingleProfile(request.params.id, connection)
  .then(function(result) {
    response.json(result);
  })
});

app.get('/search', function(request, response) {

  shoestagramAPI.searchMedia(request.query.key, connection)
  .then(function(result) {
    response.json(result);
  })
});

app.get('/shoplinks', function(request, response) {

  shoestagramAPI.shopLinks({}, connection)
  .then(function(result) {
    response.json(result);
  })
});


// Listen
var port = process.env.PORT || 3000;
app.listen(port, function() {
  // This part will only work with Cloud9, and is meant to help you find the URL of your web server :)
  if (process.env.C9_HOSTNAME) {
    console.log('Web server is listening on https://' + process.env.C9_HOSTNAME);
  }
  else {
    console.log('Web server is listening on http://localhost:' + port);
  }
});
