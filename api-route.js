var Films = require('./model');

var route=function(app){
	app.get('/', function(req, res) {
		res.sendFile('./public/index.html');
	});

/*	app.get('/api/lesfilms', function(req,res) {
		Films.find({},	function(err, lesfilms) {
			if(err)
				res.send(err);
			res.json(lesfilms);
		});
	});*/

	app.post('/api/lesfilms', function(req,res) {
//		var titre = req.body.text;

		Films.find({
			"title" : new RegExp(req.body.text)
		},null,{limit:10000},function(err,lesfilms){ //on va limiter nos recherches à 10.000 résultats max
 		if(err)
			res.send(err);
		res.json(lesfilms);
			});
		});
	
}

module.exports = route;
