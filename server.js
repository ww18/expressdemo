var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'school'
});
 
connection.connect();

var express = require('express');
var app = express();

var swig = require('swig');
app.set('view engine','html');
app.engine('html', swig.renderFile);

app.use(express.static('public'));

app.get('/', function(req, res, next){
	res.render('index',{
		title: '测试首页',
		content: 'hello world'
	});
})
app.get('/receive', function(req, res, next){
	console.log(req.query.username)
	var post = {
		username: req.query.username
	}

	var query = connection.query('INSERT INTO userinfo SET ?', post, function (error, results, fields) {
	  	if (error) throw error;
	  	// Neat!
	  	res.json({
			success: 'ok'
		});
	});
	console.log(query.sql); // INSERT INTO posts SET `id` = 1, `title` = 'Hello MySQL'

	
})

app.get('*', function(req, res, next){
	res.status(404);
	res.end('404');
})
app.use(function(err, req, res, next){
	res.status(500);
	res.end('err ...');
})

app.listen('8081', function(){
	console.log('Server is running')
});