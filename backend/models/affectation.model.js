const mongoose = require('mongoose');

const AffectationSchema = mongoose.Schema(
	{
		chauffeur: String,
		commandes: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Commande',
			},
		],
	},
	{
		timestamps: true,
	}
);
//If set timestamps, mongoose assigns createdAt and updatedAt
//fields to your schema, the type assigned is Date.
module.exports = mongoose.model('Affectations', AffectationSchema);
