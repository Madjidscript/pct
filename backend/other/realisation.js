const Realisation = require("../model/realisation")

const otherRealisation = class {
static afficheTout = async()=>{
  try {
    const affiche = await Realisation.find()
    return affiche
  } catch (error) {
  console.log("mon erreur",error);  
  }
}

static afficheTout2 = async(id)=>{
    try {
      const affiche = await Realisation.find({id_cath:id}).populate('id_cath')
      return affiche
    } catch (error) {
    console.log("mon erreur",error);  
    }
}

static utilisarteuParID = async(id)=>{
    try {
        const recupParId = await Realisation.findById(id)
         return recupParId
    } catch (error) {
        console.log("mon erreur",error);
    }
}

static utilisateurParEmail = async(email)=>{
    try {
        const recupParEmail = await Realisation.findOne({email:email})
        return recupParEmail
    } catch (error) {
        console.log("mon erreur",error);
    }
}

static inscription = async(utilisateur)=>{
    try {
        const inscription  = await Realisation.insertMany(utilisateur)
        return inscription
    } catch (error) {
        console.log('mon erreur',error);
    }
}

static suppression = async(id)=>{
    try {
        const supp = await Realisation.findByIdAndDelete(id)
        return supp
    } catch (error) {
        console.log("mon erreur",error);
    }
}
static update= async(id,data)=>{
    try {
        const modif = await Realisation.findByIdAndUpdate(id,data)
        return modif
    } catch (error) {
        console.log("mon erreur",error);
    }
}
}
module.exports= otherRealisation