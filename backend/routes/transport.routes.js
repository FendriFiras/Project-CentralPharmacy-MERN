module.exports = (app) => {
	const commande = require('../controllers/commande.controller.js');

	// Create a new Note
	//   app.post('/notes', notes.creer);
	app.post('/commande', commande.affecterCommande);
	// Retrieve all Notes
    //app.get('/commande', commande.afficherTout);

	// Retrieve a single Note with noteId
	//app.get('/notes/:noteId', notes.afficherUn);

	// Update a Note with noteId
	//     app.put('/notes/:noteId', notes.modifier);

	// Delete a Note with noteId
	//app.delete('/commande', commande.supprimer);
};
