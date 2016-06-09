//var db = require('./db');
var books = require('./books');
const port = process.env.PORT;

//db.init();

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

/*  Must come after users.auth to ensure even static pages are authenticated */
app.use(express.static('public'));

/*  Enable CORS requests */
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/*  Routes for Ajax based API */
app.get('/api/books', books.list);

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});