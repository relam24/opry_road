# opry_road
https://roadtotheopry.herokuapp.com/
If you are a musician aspiring to be anyone, you want to be in the six foot circle of wood at the Grand Ole Opry. To get there, some think that the Nashville strip is the place to be...but the places where the songwriters go are just beyond the borders. This app shows you all of the venues where the great songwriters of Nashville go to play.

APPROACH:
Technologies Used-- Node.js, Mongoose, Express, EJS, Bulma, and CSS. 
7 restful routes within MVC, full CRUD. Designed for users to be able to add venues they know of.

UNSOLVED PROBLEMS:
My first thought was to create an app using Spotify's API but then I realized how complicated it was, and it would definitely take more than two weeks to get it going. 

Code Snippet --

Controller

const express = require('express');
const router = express.Router();
const Opry = require('../models/opry.js');

// Index
router.get('/', (req, res) => {
	Opry.find({}, (err, allOpry) => {
		res.render('index.ejs', {
			Opry: allOpry
		});
	});
});

// New Route
router.get('/new', (req, res) => {
	res.render('new.ejs');
});

// Seed Data
router.get('/seed', (req, res) => {
	Opry.create([
		{
			name: 'Bluebird Cafe',
			location: 'Hillsboro Pike, Nashville',
			img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkbSP5oAUZAfNDC8ybV5EYPn-34rNIQluEPojEux0Q5bEq35-G',
			description: 'The Bluebird Cafe is one of the world’s preeminent listening rooms and the venue has gained worldwide recognition as a songwriter’s performance space where the “heroes behind the hits” perform their own songs; songs that have been recorded by chart-topping artists in all genres of music.  Located in a small strip mall outside of downtown Nashville, the 90 seat venue is unassuming in appearance but some of the most significant songwriters and artists have performed on this stage.',
			rating: 5
		},
		{
			name: 'The Basement',
			location: '8th Avenue S, Nashville',
			img: 'https://3hkj9i2chtjx336clgvx1skh-wpengine.netdna-ssl.com/wp-content/uploads/2016/04/Nashville-Music-The-Basement-Tara-Misu-small-1-1024x950.png',
			description: 'The underground rock scene lives here. The Basement features both national and local bands on the rise, cause let\'s face it, you gotta start somewhere. Fueled by the desire to become the next rock gods, The Basement offers a room for bands to fine tune their craft while making a name for themselves',
			rating: 4
		},
		{
			name: 'The High Watt | Mercy Lounge',
			location: 'Cannery Row, Nashville',
			img: 'https://image-ticketfly.imgix.net/00/02/35/14/87-og.jpg?w=600&h=413',
			description: 'The world\'s finest dive bar and music venue. Established 2012 in Nashville, TN. Locally owned and independently run.',
			rating: 3
		},
		{
			name: 'Exit/In',
			location: 'Elliston Pl, Nashville',
			img: 'https://cdn.ticketfly.com/wp-content/themes/exitin-v2/og-logo.png',
			description: 'Nashville is predominantly a country town; there are no vagaries about where its musical legacy lies. But we also know that universal statements are never accurate – there’s also room in Nashville for rockers, rappers, punks, DJs, metalheads, etc. (It IS called “Music City,” not “Country City,” after all.) And those music lovers on the margins, the ones who prefer something other than the twang and honkey-tonk of its city’s signature sound, need a home to congregate in. They need Exit/In.',
			rating: 3
		},
		{
			name: 'The Station Inn',
			location: '12th Ave S, Nashville',
			img: 'https://i.pinimg.com/originals/4a/fc/50/4afc50d24736b9675f676b9d1dc4e6f0.jpg',
			description: 'Bluegrass and Roots Music. You’ll find the best of it right here at the Station Inn ',
			rating: 4
		},
		{
			name: '12th and Porter',
			location: '12th Ave N, Nashville',
			img: 'https://caseyderhakmusic.com/wp-content/uploads/112th-and-porter.jpg',
			description: 'At 12th & Porter, we pride ourselves on being one of the most distinguished concert venues in the Southeastern United States because of our state-of-the-art production equipment, prime location in the heart of downtown Nashville, and our dedication to providing the best possible concert experience for our guests and artists every single night.',
			rating: 4
		},
		{
			name: 'The East Room',
			location: 'Gallatin Ave, Nashville',
			img: 'http://eastroom.ca/wp-content/themes/er2016b/img/logo-black-small-square.png',
			description: 'The East Room is a music/arts venue in East Nashville. Events have included indie/rock bands, comedy, dance parties, and theater.',
			rating: 3
		},
		{
			name: 'The Sutler',
			location: '8th Avenue S, Nashville',
			img: 'https://i0.wp.com/www.anniereeves.com/wp-content/uploads/2014/10/the-sutler-stage.png?resize=760%2C509',
			description: 'The historic Sutler was originally opened in 1976 by country radio personality Johnny Potts. Part venue, part restaurant, and part dive bar, the Sutler was a social hub for locals and the Nashville music community, as well as a waypoint for travelers and touring acts from far and wide.',
			rating: 3
		},
		{
			name: 'The End',
			location: 'Elliston Pl, Nashville',
			img: 'https://i.ytimg.com/vi/CKujeJZt6Q4/maxresdefault.jpg',
			description: 'Welcome to The End! Located on the revered “Rock Block” of Elliston Place, The End is Nashville’s premier small-capacity Rock N Roll dive bar. We have played host to several of the world’s finest and most raucous bands over quite a long time and still provide a small club experience like nowhere else you’ll find.',
			rating: 2
		}
	]);
});

// Show Route
router.get('/:id', (req, res) => {
	Opry.findById(req.params.id, (err, foundOpry) => {
		res.render('show.ejs', {
			Opry: foundOpry
		});
	});
});

// Create Route
router.post('/', (req, res) => {
	Opry.create(req.body, (err, createdOpry) => {
		res.redirect('/');
	});
});

// Delete Route
router.delete('/:id', (req, res) => {
	Opry.findByIdAndRemove(req.params.id, (err, foundOpry) => {
		res.redirect('/');
	});
});

// Edit Route
router.get('/:id/edit', (req, res) => {
	Opry.findById(req.params.id, (err, foundOpry) => {
		res.render('edit.ejs', {
			Opry: foundOpry
		});
	});
});

// Update Route for Edit Page
router.put('/:id', (req, res) => {
	Opry.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updateModel) => {
		res.redirect('/');
	});
});

module.exports = router;

MODELS
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

SERVER

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

SHOW.EJS
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





