const mongoose = require('mongoose');

const ProduitSchema = mongoose.Schema({
   idProd : String,
    categorie:String,
    refProd: String,
    labelleProd : String,
    numlot: String,
    mode : String,
    prixUnit: String,
    type: String
    
}, {
    timestamps: true
});
//If set timestamps, mongoose assigns createdAt and updatedAt 
//fields to your schema, the type assigned is Date.
module.exports = mongoose.model('Produit', ProduitSchema);