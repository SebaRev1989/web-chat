var express = require('express');
var app = express();
var port = 3700;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get("/", function(req, res){
	res.render("page");
});

app.listen(port);
console.log("Listening on port " + port);
