const LigneCommande = require('../models/lignecommande.model.js');
const Affectation = require('../models/affectation.model.js');
const Commande = require('../models/commande.model.js');
const Produit = require('../models/produit.model.js');
const fs = require('fs');
const path = require('path');
const appDir = path.dirname(require.main.filename);
const p = path.join(appDir, '../', 'data', 'produit.json');
const pp = path.join(appDir, '../', 'data', 'transport.json');

exports.save = (req, res) => {
	var lc = new LigneCommande({
		labelleProd: req.body.labelleProd || 'Un labelleProdd',
		prodPrice: req.body.prodPrice || 0,
		qte: req.body.qte || 0,
	});

	fs.readFile(p, (err, fileContent) => {
		console.log("hammadiiiiiiiii");
		let cart = { products: [], totalPrice: 0 };
		if (!err) {
			if (Object.keys(fileContent).length != 0) {
				cart = JSON.parse(fileContent);
				console.log("hammadiiiiiiiii222222222222");
			}
		
		}
		const existingProductIndex = cart.products.findIndex((prod) => prod === 'idProd');
		const existingProduct = cart.products[existingProductIndex];
		if (existingProduct) {
			cart.products[existingProductIndex].qte = cart.products[existingProductIndex].qte + 1;
		} else {
			console.log("hammadiiiiiiiii33333");
			cart.products.push({ labelleProd: lc.labelleProd, prodPrice: lc.prodPrice, qte: lc.qte });
		}
		//calcul
		cart.totalPrice = cart.totalPrice + lc.prodPrice * lc.qte;
		fs.writeFile(p, JSON.stringify(cart), (err) => {
			///////////////////////////////////////////////////////  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			if (err) console.log(err);
		});
	});
};

exports.saveAff = (req, res) => {
	try {
		var aff = new Affectation({
			chauffeur: req.body.chauffeur || 'chifour',
			commandes: req.body.commandes || [],
		});

		fs.readFile(pp, (err, fileContent) => {
			let cart = [];
			if (!err) {
				if (Object.keys(fileContent).length != 0) {
					cart = JSON.parse(fileContent);
				}
			}
			//const existingCommandIndex = cart.commandes.findIndex((com) => com === '_id');
			//const existingCommand = cart.commandes[existingCommandIndex];
			//if (existingCommand) {
			//cart.commandes[existingCommandIndex].qte = cart.products[existingCommandIndex].qte + 1;
			//} else {s

			cart.push({ chauffeur: aff.chauffeur, commandes: aff.commandes });

			//}
			fs.writeFile(pp, JSON.stringify(cart), (err) => {
				///////////////////////////////////////////////////////  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
				if (err) console.log(err);
			});
		});
	} catch (err) {
		res.status(500).send(error);
	}
};

// Create and Save a new Note
exports.creerL = async (req, res) => {
	try {
		var lc = new LigneCommande({
			qte: req.body.qte || 0,
		});

		var result = await depot.save();
		res.send(result);
	} catch (error) {
		res.status(500).send(error);
	}
};
// Retrieve and return all depots from the database.
exports.afficherTout = async (req, res) => {
	fs.readFile(pp, (err, fileContent) => {
		let cart = [];
		if (!err) {
			if (Object.keys(fileContent).length != 0) {
				res.send(JSON.parse(fileContent));
			}
		}
	});
};

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Update a note identified by the noteId in the request

exports.modifier = async (request, response) => {
	try {
		Commande.findById(ObjectId(request.body.id)).then((commande) => {
			commande.etatCom = 'Livrée';
			commande.etatPayCom = 'Payée';
			commande.save();
		});
	} catch (error) {
		response.status(400).send('unable to update the database');
	}
};
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Delete a note with the specified noteId in the request
exports.supprimer = async (req, res) => {
	fs.readFile(p, (err, fileContent) => {
		if (Object.keys(fileContent).length != 0) {
		cart = JSON.parse(fileContent);
		}
		let product = cart.products;
		for (let index = 0; index < product.length; index++) {
			let element = product[index];
			if (element != null && element.labelleProd === req.body.labelleProd) {
				delete product[index];
				fs.writeFile(p, JSON.stringify(cart), (err) => {
					if (err) console.log(err);
				});
			}
		}

		//calcul
	});
};
