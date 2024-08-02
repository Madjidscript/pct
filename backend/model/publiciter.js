const mongoose = require("mongoose")
const validator = require("validator")
const Schyma = mongoose.Schema({
        titre:{type:String,required:true},
        image:{type:String,required:true},
       
        
})
const Publiciter = mongoose.model("Publiciter",Schyma)
module.exports= Publiciter