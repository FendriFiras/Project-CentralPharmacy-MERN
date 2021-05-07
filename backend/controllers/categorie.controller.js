const Categorie = require('../models/categorie.model.js');
const Products = require('../models/produit.model.js');
// Create and Save a new Note
exports.creerCat = async (req, res) => {
	var categorie = new Categorie({
		name: req.body.name || 'Empty Content',
	});
	categorie.save((err, user) => {
		if (err) {
			res.status(500).send({ message: err });
			return;
		}

		if (req.body.produits) {
			Products.find(
				{
					labelleProd: { $in: req.body.produits },
				},
				(err, produits) => {
					if (err) {
						res.status(500).send({ message: err });
						return;
					}

					categorie.produits = produits.map((produit) => produit._id);
					categorie.save((err) => {
						if (err) {
							res.status(500).send({ message: err });
							return;
						}

						res.send({ message: 'User was registered successfully!' });
					});
				}
			);
		}
	});
};

// Retrieve and return all categories from the database.
exports.afficherTout = (req, res) => {
	Categorie.find()
		.then((categories) => {
			res.send(categories);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Some error occurred while retrieving categories.',
			});
		});
};

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Update a note identified by the noteId in the request

exports.modifier = async (request, response) => {
	try {
		var d = await Categorie.findById({ _id: request.params.categorieId }).exec();

		d.name = req.body.name || 'Empty Content';
		var result = await d.save();
		response.send(result);
	} catch (error) {
		response.status(400).send('unable to update the database');
	}
};
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Delete a note with the specified noteId in the request
exports.supprimer = async (request, response) => {
	try {
		var result = await Categorie.deleteOne({ _id: request.params.categorieId }).exec();
		response.send(result);
	} catch (error) {
		response.status(500).send(error);
	}
};
