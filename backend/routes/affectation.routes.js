module.exports = (app) => {
	const affectation = require('../controllers/lignecommande.controller.js');

	// Create a new Ctaegorie
	app.post('/affectation', affectation.saveAff);

	// Retrieve all Commande
	app.get('/affectation', affectation.afficherTout);

	// Retrieve a single Produit with produitId
	//app.get('/produits/:produitId', produits.afficherUn);

	// Update a Produit with produitId
	//     app.put('/produits/:produitId', produits.modifier);

	// Delete a Produit with produitId
	//   app.delete('/produits/:produitId', produits.supprimer);
};
