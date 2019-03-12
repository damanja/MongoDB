var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var route = require('./api-route');
var nunjucks = require('nunjucks');

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

nunjucks.configure('public',{
	autoescape:true,
	express: app
});

route(app);

app.listen(8080);
console.log("on utilise le port: 8080");
