module.exports = (app) => {
	const commandes = require('../controllers/commande.controller.js');

	// Create a new Note
	//   app.post('/notes', notes.creer);
	app.post('/commandes', commandes.genererCommande);
	// Retrieve all Notes
    app.get('/commandes', commandes.afficherTout);

	// Retrieve a single Note with noteId
	//app.get('/notes/:noteId', notes.afficherUn);

	// Update a Note with noteId
	//     app.put('/notes/:noteId', notes.modifier);

	// Delete a Note with noteId
	app.delete('/commandes', commandes.supprimer);
};
