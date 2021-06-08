const mongoose = require('mongoose');

const ProduitSchema = mongoose.Schema(
	{
		labelleProd: String,
		mode: String,
		dose: String,
		dci: String,
		prixUnit: String,
	},
	{
		timestamps: true,
	}
);
//If set timestamps, mongoose assigns createdAt and updatedAt
//fields to your schema, the type assigned is Date.
module.exports = mongoose.model('Produit', ProduitSchema);
