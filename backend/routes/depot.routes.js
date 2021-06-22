module.exports = (app) => {
	const depots = require('../controllers/depot.controller.js');

	// Create a new Ctaegorie
	app.post('/depots', depots.creerD);
   

	// Retrieve all Produits
	app.get('/depots', depots.afficherTout);

	// Retrieve a single Produit with produitId
	//app.get('/produits/:produitId', produits.afficherUn);

	// Update a Produit with produitId
    app.put('/depots/:depotId',depots.modifier);

	// Delete a Produit with produitId
	 app.delete('/depots/:depotId', depots.supprimer);
};