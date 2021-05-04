exports.allAccess = (req, res) => {
	res.status(200).send('LoginPage.');
};

exports.grossiste = (req, res) => {
	res.status(200).send('grossite Content.');
};

exports.admin = (req, res) => {
	res.status(200).send('Admin Content.');
};

exports.transporteur = (req, res) => {
	res.status(200).send('transpoteur Content.');
};

exports.responsable = (req, res) => {
	res.status(200).send('responsable Content.');
};
