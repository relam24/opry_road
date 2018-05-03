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
