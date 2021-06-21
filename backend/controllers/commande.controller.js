const Commande = require('../models/commande.model');
const fs = require('fs');
const path = require('path');
const appDir = path.dirname(require.main.filename);
const p = path.join(appDir, '../', 'data', 'produit.json');
const pp = path.join(appDir, '../', 'data', 'transport.json');

exports.getPriceById = (id) => {
	User.find({ idProd: 'Admin' })
		.then((users) => {
			res.send(users);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Some error occurred while retrieving Admins.',
			});
		});
};

// Create and Save a new Admin
exports.genererCommande = async (req, res) => {
	try {
		fs.readFile(p, (err, fileContent) => {
			let cart = { products: [], totalPrice: 0 };
			if (!err) {
				cart = JSON.parse(fileContent);
			}

			fs.writeFile(p, JSON.stringify(cart), (err) => {
				///////////////////////////////////////////////////////  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
				if (err) console.log(err);
			});
			var commande = new Commande({
				prodAchetes: req.body.prodAchetes || cart.products,
				dateCom: req.body.dateCom || '01/06/2023',
				etatCom: req.body.etatCom || 'Non livrée',
				etatPayCom: req.body.etatPayCom || 'Non Payée',
				prixHt: req.body.prixHt || cart.totalPrice,
				prixTTC: req.body.prixTTC || cart.totalPrice + cart.totalPrice * 0.19,
				grossistename: req.body.grossistename || 'hamadi',
				tva: req.body.tva || 0.19,
			});
			console.log(commande);
			console.log(cart);

			var result = commande.save();
			res.send(result);
		});
	} catch (error) {
		res.status(500).send(error);
	}
};



exports.affecterCommande = async (req, res) => {
	try {
		fs.readFile(pp, (err, fileContent) => {
			let cartt = { commande: [], chauffeur: ""};
			if (!err) {
				cartt = JSON.parse(fileContent);
			}

			fs.writeFile(pp, JSON.stringify(cartt), (err) => {
				///////////////////////////////////////////////////////  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
				if (err) console.log(err);
			});

			console.log(cartt);


		});
	} catch (error) {
		res.status(500).send(error);
	}
};




















////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////#
// Retrieve and return all Admins from the database.
exports.afficherTout = (req, res) => {
	Commande.find()
		.then((commandes) => {
			res.send(commandes);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Some error occurred while retrieving commands.',
			});
		});
};


  







// Delete a User with the specified userId in the request
exports.supprimer = async (request, response) => {
	try {
		var result = await Commande.deleteOne({ _id: request.params.commandeId }).exec();
		response.send(result);
	} catch (error) {
		response.status(500).send(error);
	}
};


exports.modifierU = async (request, response) => {
	try {
		var u = await User.findById({ _id: request.params.userId }).exec();

		u.idUser = request.body.idUser;
		u.firstName = request.body.firstName;
		u.lastName = request.body.lastName;
		u.email = request.body.email;
		u.password = request.body.password;
		u.adress = request.body.adress;
		u.cin = request.body.cin;
		u.role = request.body.role;

		var result = await u.save();
		response.send(result);
	} catch (error) {
		response.status(400).send('Unable to update the database');
	}
};
