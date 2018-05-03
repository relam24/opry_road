const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');

app.use(express.urlencooded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(express.json());

const opryController = require('./controllers/opry.js');
app.use('/', opryController);

const mongoURI = process.end.MONGOD_URI || 'mongodb://localhost:27017/opry';
mongoose.connect(mongoURI);
mongoose.connection.once('open', () => {
	console.log('connected to mongod');
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log('listening');
});
