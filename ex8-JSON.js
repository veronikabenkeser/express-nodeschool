var express = require("express");
var fs = require('fs');
var app = express();

app.use('/books', function(req, res) {
    fs.readFile(process.argv[3], 'utf8', function(err, data) {
        if (err) return res.send(500);

        try {
            var obj = JSON.parse(data);
            res.send(obj);

        } catch (err) {
            res.send(500);
        }


    });

});

app.listen(process.argv[2]);