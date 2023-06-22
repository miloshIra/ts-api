"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import required modules
var express_1 = require("express");
// Create an Express app
var app = (0, express_1.default)();
// Define a route handler for the root URL
app.get('/', function (req, res) {
    res.send('Hello, World!');
});
// Start the server
var port = 3000;
app.listen(port, function () {
    console.log("Server is running on port ".concat(port));
});
