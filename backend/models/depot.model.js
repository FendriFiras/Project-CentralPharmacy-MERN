const mongoose = require('mongoose');

const DepotSchema = mongoose.Schema({
    idDepot: String,
    name: String,
    adress: String,
    location: String,
    idResponsable:Number
}, {
    timestamps: true
});
//If set timestamps, mongoose assigns createdAt and updatedAt 
//fields to your schema, the type assigned is Date.
module.exports = mongoose.model('Depot', DepotSchema);
