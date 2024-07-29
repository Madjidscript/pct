const mongoose = require("mongoose")
const validator = require("validator")
const Schyma = mongoose.Schema({
        titre:{type:String,required:true},
        image:{type:String,required:true},
        id_cath:{type:mongoose.Schema.Types.ObjectId,
                ref:'Artisan',
                required:true
        }
        
})
const Realisation = mongoose.model("Realisation",Schyma)
module.exports= Realisation