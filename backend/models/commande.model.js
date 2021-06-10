const mongoose = require('mongoose');

const CommandeSchema = mongoose.Schema(
	{

		prodAchetes: Array,
		dateCom: Date,
		etatCom: String,
		etatPayCom: String,
		prixHt: Number,
		prixTTC: Number,
		grossistename: String,
		tva: Number,
	},
	{
		timestamps: true,
	}
);
//If set timestamps, mongoose assigns createdAt and updatedAt
//fields to your schema, the type assigned is Date.
module.exports = mongoose.model('Commande', CommandeSchema);
