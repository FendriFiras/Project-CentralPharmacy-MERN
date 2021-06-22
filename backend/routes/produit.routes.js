module.exports = (app) => {
	const produits = require('../controllers/produit.controller.js');

	// Create a new Produit
	app.post('/ajoutproduit', produits.creerProduit);

	// Retrieve all Produits
	app.get('/produits', produits.afficherToutProduit);

	// retreving data from JSON files
	app.get('/produit', produits.findAll);
	// Retrieve a single Produit with produitId
	//app.get('/produits/:produitId', produits.afficherUn);

	// Update a Produit with produitId
	app.put('/produits', produits.modifierProduit);

	//Delete a Produit with produitId

	app.delete('/produits/:produitId', produits.supprimerProduit);
};
