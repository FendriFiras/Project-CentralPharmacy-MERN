const express = require('express');
const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
//register view engine
// app.set('view engine', 'ejs');

//modified files holding the vues
app.set('views', '../views');

//midelware and static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

var corsOptions = {
	origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// routes
require('../routes/auth.routes')(app);
require('../routes/user.routes')(app);

const db = require('./../models');
const Role = db.role;

//connect to mongodb
const dbm = 'mongodb+srv://firas:cluplu44@cluster0.bysz7.mongodb.net/MERN_app?retryWrites=true&w=majority';
mongoose
	.connect(dbm, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log('connexionestableshed');
		initial();

		app.listen(3001);
	})
	.catch((err) => console.log(err));

// // simple route
// app.get('/', (req, res) => {
// 	res.json({ message: 'Welcome to bezkoder application.' });
// });

function initial() {
	Role.estimatedDocumentCount((err, count) => {
		if (!err && count === 0) {
			new Role({
				name: 'transporteur',
			}).save((err) => {
				if (err) {
					console.log('error', err);
				}

				console.log("added 'transporteur' to roles collection");
			});

			new Role({
				name: 'grossiste',
			}).save((err) => {
				if (err) {
					console.log('error', err);
				}

				console.log("added 'grossiste' to roles collection");
			});

			new Role({
				name: 'admin',
			}).save((err) => {
				if (err) {
					console.log('error', err);
				}

				console.log("added 'admin' to roles collection");
			});

			new Role({
				name: 'responsable',
			}).save((err) => {
				if (err) {
					console.log('error', err);
				}

				console.log("added 'responsable' to roles collection");
			});
		}
	});
}
