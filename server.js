var express = require("express");
var bodyParser = require("body-parser");
var request = require("request");
var mongoose = require("mongoose");
var Note = require("./models/Note.js");
var Article = require("./models/Article.js");
var Save = require("./models/Save.js");
var logger = require("morgan");
var cheerio = require("cheerio");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("./public"));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/foxsScrape";
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
    useMongoClient: true
  });