const mongoose = require("mongoose")
const validator = require("validator")
const Schyma = mongoose.Schema({
        nomClient:{type:String,required:true},
        numClient:{type:String,required:true},
        nomArtisan:{type:String,required:true},
        numArtisan:{type:String,required:true},
        date:{type:String,required:true},
        message:{type:String,required:true}
        
       
        
})
const Reclamation1 = mongoose.model("Reclamation1",Schyma)
module.exports= Reclamation1