var express = require("express");
var stylus = require("stylus");
var app = express();
var crypto = require("crypto");



app.put('/message/:id',function(req,res){
    var id = req.params.id;
    var result = crypto.createHash('sha1').
    update(new Date().toDateString()+id)
    .digest('hex');
    
    res.send(result);
});
app.listen(process.argv[2]);