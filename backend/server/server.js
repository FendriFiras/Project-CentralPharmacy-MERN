const express = require('express');
// create express app
const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//midelware and static files
app.use(express.static('public'));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());

var corsOptions = {
	origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//Activer CORS
app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
	next();
});

//connect to mongodb
const dbm = 'mongodb+srv://firas:cluplu44@cluster0.bysz7.mongodb.net/MERN_app?retryWrites=true&w=majority';
mongoose
	.connect(dbm, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log('connexionestableshed');

		app.listen(3001);
	})
	.catch((err) => console.log(err));

const db = require('./../models');
const Role = db.role;

// routes
// listen for requests
require('../routes/auth.routes')(app);
require('../routes/user.routes')(app);
require('../routes/commande.routes')(app);
require('../routes/lignecommande.routes')(app);
require('../routes/categorie.routes')(app);
require('../routes/produit.routes')(app);
require('../routes/depot.routes')(app);
require('../routes/grossiste.routes')(app);
require('../routes/transporteur.routes')(app);
require('../routes/affectation.routes')(app);
require('../routes/responsable.routes')(app);