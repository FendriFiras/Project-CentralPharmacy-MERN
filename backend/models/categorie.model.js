const mongoose = require('mongoose');

const CategorieSchema = mongoose.Schema(
	{
		name: String,
		produits: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Produit',
			},
		],
	},
	{
		timestamps: true,
	}
);
//If set timestamps, mongoose assigns createdAt and updatedAt
//fields to your schema, the type assigned is Date.
module.exports = mongoose.model('Categories', CategorieSchema);
