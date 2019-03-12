var Films = require('./model');

var route=function(app){
	app.get('/', function(req, res) {
		res.sendFile('./public/index.html');
	});

	app.get('/api/lesfilms', function(req,res) {
		Films.find({},null,{limit:1000})
		.populate([{path:'rate', select:'averageRating'}, {path:'reg', match:{region:{$nin:['\\N']}},select:'region'}])
		.exec(function(err, lesfilms) {
			if(err)
				res.send(err);
			res.json(lesfilms);
		});
	});

	app.post('/api/lesfilms', function(req,res) {
//		var titre = req.body.text;

		Films.find({
			primaryTitle : new RegExp(req.body.text,"i")
		},null,{limit:1000})
		.populate([{path:'rate', select:'averageRating'}, {path:'reg', match:{region:{$nin:['\\N']}},select:'region'}])
		.exec(function(err, lesfilms){ //on va limiter nos recherches à 10.000 résultats max
 		if(err)
			res.send(err);
		res.json(lesfilms);
			});
		});

	app.get('/api/lesfilms/:tconst',function(req,res){
		Films.findById(req.params.id).then(films=> {
			res.render('info.html', { films: films});			
		})

	});
	
}
module.exports = route;
