const mongoose = require("mongoose")
const validator = require("validator")
const Schyma = mongoose.Schema({
    nom:{type:String,required:true},
        email:{type:String,required:true},
        password:{type:String,required:true},
        image:{type:String,required:true},
        
})
const Admin = mongoose.model("Admin",Schyma)
module.exports= Admin