const User = require('../models/user.model.js');

// Create and Save a new Transporter
exports.creerT=  async(req, res) =>{
    try {

  var transporteur = new User({
       idUser:req.body.idUser||0,
       firstName :req.body.firstName||"Empty Content", 
       lastName:req.body.lastName||"Untitled",
       email :req.body.email||"Empty Content",
       password:req.body.password||"Untitled",
       adress :req.body.adress||"Empty Content", 
       cin:req.body.cin||0,
       role :req.body.role||"Transporteur"


});

       var result = await transporteur.save();
       res.send(result);
}
catch (error) {   res.status(500).send(error);
};
};




  // Retrieve and return all Transporters from the database.
  exports.afficherToutT = (req, res) => {
    
    User.find({"role":"Transporteur"})
      .then(users => {
          res.send(users);
      }).catch(err => {
          res.status(500).send({
              message: err.message || "Some error occurred while retrieving Transporters."
          });
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

