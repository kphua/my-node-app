// grab the mongoose module
var mongoose = require('mongoose');

// define our challenge model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Challenge', {
	name : {type : String, default: ''}
});
