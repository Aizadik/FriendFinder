// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");
var path = require("path");

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port that we are going to use in our listener
var PORT = process.env.PORT || 8081;

// this line line return decoded url in json format
app.use(express.urlencoded({ extended: true }));

// returns req.body in json format
app.use(express.json());

// ================================================================================
// ROUTER
// Below codes tells to the server routes files that I am going to use
// These routes give the server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// =============================================================================
// LISTENER
// The below code starts the server
// =============================================================================

app.listen(PORT, function() {
    console.log("FriendFinder is listening on PORT: " + PORT);
});