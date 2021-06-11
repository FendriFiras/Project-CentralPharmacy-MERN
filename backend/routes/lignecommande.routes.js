module.exports = (app) => {
	const lcs = require('../controllers/lignecommande.controller.js');

	// Create a new Note
	//   app.post('/notes', notes.creer);
	app.post('/lcs', lcs.save);
	// Retrieve all Notes
	// app.get('/notes', notes.afficherTout);

	// Retrieve a single Note with noteId
	//app.get('/notes/:noteId', notes.afficherUn);

	//Update
	app.post('/update', lcs.modifier);

	// Delete a Note with noteId
	app.post('/delete', lcs.supprimer);
};
