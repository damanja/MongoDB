var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const schemaTitle = new Schema({	
	title: String,region: String, titleId:String
}, { toJSON: { virtuals: true } });

const schemaRatings = new Schema({
	tconst:String, averageRating: Number
});

const schemaBasics = new Schema({
	tconst:String, startYear: Number,titleType:String
});

schemaTitle.virtual('rate',{
	ref: 'title.ratings', // The model to use
	localField: 'titleId', // Find people where `localField`
	foreignField: 'tconst', // is equal to `foreignField`
	// If `justOne` is true, 'members' will be a single doc as opposed to
	// an array. `justOne` is false by default.
	justOne: true,
	//options: {} // Query options, see http://bit.ly/mongoose-query-options
});

schemaTitle.virtual('info',{
	ref: 'title.basics',
	localField: 'titleId', // Find people where `localField`
	foreignField: 'tconst', // is equal to `foreignField`
	justOne: true
});


mongoose.connect('mongodb://localhost:27017/films', {useNewUrlParser: true});

//var Ratings = mongoose
var Ratings = mongoose.model('title.ratings', schemaRatings);
var Basics = mongoose.model('title.basics', schemaBasics);
var Films = mongoose.model('title.akas', schemaTitle);


module.exports = Films;
