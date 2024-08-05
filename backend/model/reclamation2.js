const mongoose = require("mongoose")
const validator = require("validator")
const Schyma = mongoose.Schema({
        nomArtisan:{type:String,required:true},
        numArtisan:{type:String,required:true},
        date:{type:String,required:true},
        message:{type:String,required:true}
        
       
        
})
const Reclamation2 = mongoose.model("Reclamation2",Schyma)
module.exports= Reclamation2