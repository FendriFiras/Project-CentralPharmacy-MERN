const Produit = require('../models/produit.model.js');
const fs = require('fs');
const path = require('path');
const appDir = path.dirname(require.main.filename);
const p = path.join(appDir, '../', 'data', 'produit.json');

// Create and Save a new produit
exports.save = (req, res) => {
	var produit = new Produit({

		labelleProd: req.body.labelleProd || 'Un labelleProdd',
		mode: req.body.mode || 'Unmoded',
		dose: req.body.dose || 'undosed',
		dci: req.body.dci || 'no dci',
		prixUnit: req.body.prixUnit || 'Empty Content',
	});

	fs.readFile(p, (err, fileContent) => {
		let products = [];
		if (!err) {
			products = JSON.parse(fileContent);
		}
		products.push(produit);
		fs.writeFile(p, JSON.stringify(products), (err) => {
			///////////////////////////////////////////////////////  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			if (err) console.log(err);
		});
	});
};
exports.findAll = async (req, res) => {


	fs.readFile(p, (err, fileContent) => {
		if (!err) {
			if (Object.keys(fileContent).length != 0) {
				res.send(JSON.parse(fileContent));
			}
		}
	});
};

exports.creerProduit = async (req, res) => {
	try {
		//Note= new Produit(req.body);

		var produit = new Produit({
	
			labelleProd: req.body.labelleProd || 'Un labelleProdd',
			mode: req.body.mode || 'Unmoded',
			dose: req.body.dose || 'undosed',
			dci: req.body.dci || 'no dci',
			prixUnit: req.body.prixUnit || 'Empty Content',
		});

		var result = await produit.save();
		res.send(result);
	} catch (error) {
		res.status(500).send(error);
	}
};
// Retrieve and return all notes from the database.
exports.afficherToutProduit = (req, res) => {
	Produit.find()
		.then((produits) => {
			res.send(produits);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Some error occurred while retrieving produits.',
			});
		});
};

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Update a note identified by the noteId in the request

exports.modifierProduit = async (request, response) => {
	try {
		var n = await Produit.findById({ _id: request.params.produitId }).exec();
		labelleProd: req.body.labelleProd || 'Un labelleProdd';
		mode: req.body.mode || 'Unmoded';
		dose: req.body.dose || 'undosed';
		dci: req.body.dci || 'no dci';
		prixUnit: req.body.prixUnit || 'Empty Content';
		var result = await n.save();
		response.send(result);
	} catch (error) {
		response.status(400).send('unable to update the database');
	}
};
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Delete a note with the specified noteId in the request
exports.supprimerProduit = async (request, response) => {
	try {
		var result = await Produit.deleteOne({ _id: request.params.produitId }).exec();
		response.send(result);
	} catch (error) {
		response.status(500).send(error);
	}
};
