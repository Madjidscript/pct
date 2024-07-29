const Reclamation1 = require("../model/reclamation1")

const otherReclamation1 = class {
static afficheTout = async()=>{
  try {
    const affiche = await Reclamation1.find()
    return affiche
  } catch (error) {
  console.log("mon erreur",error);  
  }
}

static utilisarteuParID = async(id)=>{
    try {
        const recupParId = await Reclamation1.findById(id)
         return recupParId
    } catch (error) {
        console.log("mon erreur",error);
    }
}
static utilisarteuParMetier = async(metier)=>{
    try {
        const recupParId = await Reclamation1.find({metier:metier}).exec()
         return recupParId
    } catch (error) {
        console.log("mon erreur",error);
    }
}

static utilisateurParEmail = async(email)=>{
    try {
        const recupParEmail = await Reclamation1.findOne({email:email})
        return recupParEmail
    } catch (error) {
        console.log("mon erreur",error);
    }
}

static inscription = async(utilisateur)=>{
    try {
        const inscription  = await Reclamation1.insertMany(utilisateur)
        return inscription
    } catch (error) {
        console.log('mon erreur',error);
    }
}

static suppression = async(id)=>{
    try {
        const supp = await Reclamation1.findByIdAndDelete(id)
        return supp
    } catch (error) {
        console.log("mon erreur",error);
    }
}
static update= async(id,data)=>{
    try {
        const modif = await Reclamation1.findByIdAndUpdate(id,data)
        return modif
    } catch (error) {
        console.log("mon erreur hoo",error);
    }
}
}
module.exports= otherReclamation1