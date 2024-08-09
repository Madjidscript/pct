const mongoose = require("mongoose")
const validator = require("validator")
const Schyma = mongoose.Schema({
        nom:{type:String},
        entreprise:{type:String},
        utilisateur:{type:String},
        quartier:{type:String},
        tel:{type:String},
        whathsapp:{type:String},
        email:{type:String},
        password:{type:String},
        longitude:{type:String},
        altitude:{type:String},
        comune:{type:String},
        ville:{type:String},
        ouverture:{type:String},
        fermeture:{type:String},
        image:{type:String},
        experience:{type:String},
        metier:{type:String},
        statut:{type:Boolean}
})
const Artisan = mongoose.model("Artisan",Schyma)
module.exports= Artisan