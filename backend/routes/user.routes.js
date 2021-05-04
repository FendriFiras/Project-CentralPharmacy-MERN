const { authJwt } = require('../middlewares');
const controller = require('../controllers/user.controller');

module.exports = function (app) {
	app.use(function (req, res, next) {
		res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, Content-Type, Accept');
		next();
	});

	app.get('/auth', controller.allAccess);

	app.get('/admin', [authJwt.verifyToken, authJwt.isAdmin], controller.admin);

	app.get('/responsable', [authJwt.verifyToken, authJwt.isResponsable], controller.responsable);

	app.get('/transporteur', [authJwt.verifyToken, authJwt.isTransporteur], controller.transporteur);

	app.get('/grossiste', [authJwt.verifyToken, authJwt.isGrossiste], controller.grossiste);
};
