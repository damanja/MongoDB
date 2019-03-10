var mongoose = require('mongoose');
//var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/films', {useNewUrlParser: true});

var Films = mongoose.model('title.akas',{
	title: String,region: String, averageRating: Number
});

module.exports = Films;
