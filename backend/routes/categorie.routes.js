module.exports = (app) => {
	const categorie = require('../controllers/categorie.controller.js');

	// Create a new Ctaegorie
	app.post('/categorie', categorie.creerCat);

	// Retrieve all Produits
	app.get('/categorie', categorie.afficherTout);

	// Retrieve a single Produit with produitId
	//app.get('/produits/:produitId', produits.afficherUn);

	// Update a Produit with produitId
	//     app.put('/produits/:produitId', produits.modifier);

	// Delete a Produit with produitId
	//   app.delete('/produits/:produitId', produits.supprimer);
};
