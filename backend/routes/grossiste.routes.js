module.exports = (app) => {
	const grossistes = require('../controllers/grossiste.controller.js');

	// Create a new Note
	//   app.post('/notes', notes.creer);
	app.post('/grossistes', grossistes.creerG);
	// Retrieve all Notes
	app.get('/grossistes', grossistes.afficherToutG);

	// Retrieve a single Note with noteId
	//app.get('/notes/:noteId', notes.afficherUn);

	// Update a Note with noteId
	//     app.put('/notes/:noteId', notes.modifier);

	// Delete a Note with noteId
	//app.post('/delete', grossistes.supprimer);
};