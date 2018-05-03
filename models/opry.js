const mongoose = require('mongoose');
const oprySchema = new mongoose.Schema({
	name: {type: String, require: true},
	location: {type: String, require: true},
	img: {type: String, require: true},
	description: {type: String, require: true},
	rating: Number
});

// collection
const Opry = mongoose.model('Opry', oprySchema);

module.exports = Opry;
