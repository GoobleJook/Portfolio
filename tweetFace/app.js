// This app is a simple demonstration of features in node.JS, highlighting
// the express node.JS framework in conjunction with bodyParser for middleware
// JSON parsing. It does not connect to any real database and it offers no permanance.

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

 