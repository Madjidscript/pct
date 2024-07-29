const Reclamation2 = require("../model/reclamation2")

const otherReclamation2 = class {
static afficheTout = async()=>{
  try {
    const affiche = await Reclamation2.find()
    return affiche
  } catch (error) {
  console.log("mon erreur",error);  
  }
}

static utilisarteuParID = async(id)=>{
    try {
        const recupParId = await Reclamation2.findById(id)
         return recupParId
    } catch (error) {
        console.log("mon erreur",error);
    }
}
static utilisarteuParMetier = async(metier)=>{
    try {
        const recupParId = await Reclamation2.find({metier:metier}).exec()
         return recupParId
    } catch (error) {
        console.log("mon erreur",error);
    }
}

static utilisateurParEmail = async(email)=>{
    try {
        const recupParEmail = await Reclamation2.findOne({email:email})
        return recupParEmail
    } catch (error) {
        console.log("mon erreur",error);
    }
}

static inscription = async(utilisateur)=>{
    try {
        const inscription  = await Reclamation2.insertMany(utilisateur)
        return inscription
    } catch (error) {
        console.log('mon erreur',error);
    }
}

static suppression = async(id)=>{
    try {
        const supp = await Reclamation2.findByIdAndDelete(id)
        return supp
    } catch (error) {
        console.log("mon erreur",error);
    }
}
static update= async(id,data)=>{
    try {
        const modif = await Reclamation2.findByIdAndUpdate(id,data)
        return modif
    } catch (error) {
        console.log("mon erreur hoo",error);
    }
}
}
module.exports= otherReclamation2