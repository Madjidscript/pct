const mongoose = require("mongoose")
const validator = require("validator")
const Schyma = mongoose.Schema({
    nom:{type:String,required:true},
        entreprise:{type:String,required:true},
        tel:{type:Number,required:true},
        whathsapp:{type:Number,required:true},
        email:{type:String,required:true},
        password:{type:String,required:true},
        longitude:{type:String,required:true},
        altitude:{type:String,required:true},
        comune:{type:String,required:true},
        ville:{type:String,required:true},
        ouverture:{type:String,require:true},
        fermeture:{type:String,require:true},
        image:{type:String,required:true},
        experience:{type:String,required:true},
        metier:{type:String,required:true},
        statut:{type:Boolean,required:true}
})
const Artisan = mongoose.model("Artisan",Schyma)
module.exports= Artisan