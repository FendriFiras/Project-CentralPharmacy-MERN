// Create and Save a new Responsable
const User = require('../models/User.js');
exports.creerR=  async(req, res) =>{
    try {

  var responsable = new User({
       idUser:req.body.idUser||0,
       firstName :req.body.firstName||"Empty Content", 
       lastName:req.body.lastName||"Untitled",
       email :req.body.email||"Empty Content",
       password:req.body.password||"Untitled",
       adress :req.body.adress||"Empty Content", 
       cin:req.body.cin||0,
       role :req.body.role||"Responsable"


});

       var result = await responsable.save();
       res.send(result);
}
catch (error) {   res.status(500).send(error);
};
};




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////#
// Retrieve and return all Responsables from the database.

exports.afficherToutR = (req, res) => {
	User.find({ roles: ['6090c9e105e3bb1be0be9f35'] })
		.then((users) => {
			res.send(users);
            console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
            console.log(users);
            console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
        })
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Some error occurred while retrieving Responsables.',
			});
            console.log("eeeeeeetttttttttttttttt");
            console.log(users);
            console.log("eeeeeettttttttttttttt");

		});

};


  exports.modifierU = async(request, response) => {
    try 
    {
    var u =  await User.findById({ _id: request.params.userId }).exec();

        u.idUser=request.body.idUser;
        u.firstName =request.body.firstName; 
        u.lastName=request.body.lastName;
        u.email =request.body.email;
        u.password=request.body.password;
        u.adress =request.body.adress;
        u.cin=request.body.cin;
        u.role =request.body.role;

         var result = await u.save();
        response.send(result);
         }
    catch (error){
            response.status(400).send("Unable to update the database");
      }
};


exports.supprimerU= async (request, response) => {
    try {
        
        var result = await User.deleteOne({ _id: request.params.userId }).exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
};