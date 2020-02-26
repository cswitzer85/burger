var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");
var app = express();

// Application port to set by Heroku or set to 9001
var PORT = process.env.PORT || 9001;