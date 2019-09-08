// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");
var path = require("path");

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port that we are going to use in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing ???????
app.use(express.urlencoded({ extended: true }));
app.use(express.json());