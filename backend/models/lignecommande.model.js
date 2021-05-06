const mongoose = require('mongoose');

const LigneCommandeSchema = mongoose.Schema({
    idProd: Number,
    prodPrice:Number,
    qte:Number,

}, {
    timestamps: true
});
//If set timestamps, mongoose assigns createdAt and updatedAt 
//fields to your schema, the type assigned is Date.
module.exports = mongoose.model('LigneCommande', LigneCommandeSchema);
