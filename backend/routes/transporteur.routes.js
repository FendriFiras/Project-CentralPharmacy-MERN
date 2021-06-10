module.exports = (app) => {
	const transporteurs = require('../controllers/transporteur.controller.js');

	// Create a new Note
	//   app.post('/notes', notes.creer);
	app.post('/transporteurs', transporteurs.creerT);
	// Retrieve all Notes
	app.get('/transporteurs', transporteurs.afficherToutT);

	// Retrieve a single Note with noteId
	//app.get('/notes/:noteId', notes.afficherUn);

	// Update a Note with noteId
	//     app.put('/notes/:noteId', notes.modifier);

	// Delete a Note with noteId
	//app.post('/delete', transporteurs.supprimer);
};
