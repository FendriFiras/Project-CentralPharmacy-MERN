module.exports = (app) => {
	const categorie = require('../controllers/categorie.controller.js');

	// Create a new Ctaegorie
	app.post('/categorie', categorie.creerCat);

	// Retrieve all Produits
	app.get('/categorie', categorie.afficherTout);


};
