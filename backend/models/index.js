const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require('./User');
db.role = require('./Role');

db.ROLES = ['transporteur', 'admin', 'grossiste', 'responsable'];

module.exports = db;
