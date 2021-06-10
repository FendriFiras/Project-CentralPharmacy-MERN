const Affectations = require('../models/affectation.model.js');
exports.creerAff = async (req, res) => {
	var affectation = new Affectation({
		chauffeur: req.body.chauffeur || 'Empty Content',
	});
	affectation.save((err, user) => {
		if (err) {
			res.status(500).send({ message: err });
			return;
		}

		if (req.body.commandes) {
			Commande.find(
				{
					labelleProd: { $in: req.body.commandes },
				},
				(err, commandes) => {
					if (err) {
						res.status(500).send({ message: err });
						return;
					}

					affectation.commandes = commandes.map((commande) => commande._id);
					affectation.save((err) => {
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