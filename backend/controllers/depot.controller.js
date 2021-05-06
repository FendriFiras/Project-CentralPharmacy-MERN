

const Depot = require('../models/depot.model.js');
// Create and Save a new Note
exports.creerD=  async(req, res) =>{
    try {

  var depot = new Depot({

    idDepot:req.body.idDepot||0,
    name :req.body.name||"Empty Content", 
    adress:req.body.adress||"Untitled",
    location :req.body.location||"Empty Content",
    idResponsable:req.body.idResponsable||"Untitled",

});

       var result = await depot.save();
       res.send(result);
}
catch (error) {   res.status(500).send(error);
};
};
// Retrieve and return all depots from the database.
exports.afficherTout = (req, res) => {
  Depot.find()
    .then(depots => {
        res.send(depots);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving depots."
        });
    });
};

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Update a note identified by the noteId in the request

exports.modifier = async(request, response) => {
    try 
    {
    var d =  await Depot.findById({ _id: request.params.depotId }).exec();



    
    d.idDepot=request.body.idDepot|| "Updated Depot" ; 
    d.name =req.body.name||"Empty Content";
    d.adress=req.body.adress||"Untitled";
    d.location=req.body.location||"Empty Content";
    d.idResponsable=req.body.idResponsable||"Untitled";


         var result = await d.save();
        response.send(result);
         }
    catch (error){
            response.status(400).send("unable to update the database");
      }
};
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Delete a note with the specified noteId in the request
exports.supprimer= async (request, response) => {
    try {
        
        var result = await Depot.deleteOne({ _id: request.params.depotId }).exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
};
