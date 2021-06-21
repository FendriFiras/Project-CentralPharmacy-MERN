module.exports = (app) => {
	const transporteurs = require('../controllers/responsable.controller.js');

	// Create a new Note
	//   app.post('/notes', notes.creer);
	//app.post('/responsables', responsables.creerT);
	// Retrieve all Notes
	app.get('/responsables', responsables.afficherToutR);

	// Retrieve a single Note with noteId
	//app.get('/notes/:noteId', notes.afficherUn);

	// Update a Note with noteId
	//     app.put('/notes/:noteId', notes.modifier);

	// Delete a Note with noteId
	//app.post('/delete', transporteurs.supprimer);
};
