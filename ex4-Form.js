var express = require("express");
var bodyparser = require('body-parser');

var app = express();
var urlencodedParser = bodyparser.urlencoded({endeded:false});

app.post('/form', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400);
  res.send(req.body.str.split('').reverse().join(''));
})

app.listen(process.argv[2]);