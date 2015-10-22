var express = require("express");
var stylus = require("stylus");
var app = express();


//Serve the stylus file and the html file from this directory upon request
app.use(express.static(process.argv[3]));
app.listen(process.argv[2]);