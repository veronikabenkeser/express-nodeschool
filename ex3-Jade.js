var express = require("express");

var app = express();

app.set('views',process.argv[3]);
app.set('view engine','jade');

app.use('/home',function(request,response,next){
response.render('index', {date:new Date().toDateString()});
next();
    
});
app.listen(process.argv[2])