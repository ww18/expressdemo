var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.get('/', function(req, res){
	res.sendFile(__dirname + '/views/socket.html');
})
io.on('connection', function(socket){
	socket.on('chat message', function(msg){
		io.emit('chat message', msg);
	})
	
})
http.listen('3001', function(){
	console.log('server start');
})