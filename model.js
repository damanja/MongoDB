var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const schemaTitle = new Schema({	
	title: String,region: String, titleId:String
}, { toJSON: { virtuals: true } });

const schemaRatings = new Schema({
	tconst:String, averageRating: Number
});

schemaTitle.virtual('titre',{
	ref: 'title.ratings', // The model to use
	localField: 'titleId', // Find people where `localField`
	foreignField: 'tconst', // is equal to `foreignField`
	// If `justOne` is true, 'members' will be a single doc as opposed to
	// an array. `justOne` is false by default.
	justOne: true,
	//options: {} // Query options, see http://bit.ly/mongoose-query-options
});

mongoose.connect('mongodb://localhost:27017/films', {useNewUrlParser: true});

//var Ratings = mongoose
var Ratings = mongoose.model('title.ratings', schemaRatings);
var Films = mongoose.model('title.akas', schemaTitle);

module.exports = Films;
