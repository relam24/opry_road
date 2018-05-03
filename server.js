const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');

// body parser needs to be above controllers
// method override
// static files (css/js)
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(express.json());

// controllers
// tournaments
const opryController = require('./controllers/opry.js');
app.use('/', opryController);

// connections
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/opry';
mongoose.connect(mongoURI);
mongoose.connection.once('open', () => {
	console.log('connected to mongo');
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log('listening');
});
