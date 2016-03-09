var express = require('express');
var app = express();
var port = 3700;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get("/", function(req, res){
	res.render("page");
});

app.use(express.static(__dirname + '/public'));

var io = require('socket.io').listen(app.listen(port));

io.sockets.on('connection', function (socket) {
    socket.emit('message', { message: 'Bienvenido al Chat' });
    socket.on('send', function (data) {
        io.sockets.emit('message', data);
    });
});

console.log("Listening on port " + port);

