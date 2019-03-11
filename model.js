var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const schemaTitle = new Schema({	
	tconst:String,primaryTitle: String, startYear: Number,titleType:String

}, { toJSON: { virtuals: true } });

const schemaRatings = new Schema({
	tconst:String, averageRating: Number
});

const schemaAkas = new Schema({
	title: String,region: String, titleId:String
});

schemaTitle.virtual('rate',{
	ref: 'title.ratings', // The model to use
	localField: 'tconst', // Find people where `localField`
	foreignField: 'tconst', // is equal to `foreignField`
	// If `justOne` is true, 'members' will be a single doc as opposed to
	// an array. `justOne` is false by default.
	justOne: true,
	//options: {} // Query options, see http://bit.ly/mongoose-query-options
});

schemaTitle.virtual('reg',{
	ref: 'title.akas',
	localField: 'tconst', // Find people where `localField`
	foreignField: 'titleId', // is equal to `foreignField`
	justOne: false
});


mongoose.connect('mongodb://localhost:27017/films', {useNewUrlParser: true});

//var Ratings = mongoose
var Ratings = mongoose.model('title.ratings', schemaRatings);
var Akas = mongoose.model('title.akas', schemaAkas);
var Films = mongoose.model('title.basics', schemaTitle);


module.exports = Films;
