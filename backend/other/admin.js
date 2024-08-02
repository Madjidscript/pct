const Admin = require("../model/admin")

const otherAdmin = class {
static afficheTout = async()=>{
  try {
    const affiche = await Admin.find()
    return affiche
  } catch (error) {
  console.log("mon erreur",error);  
  }
}

static utilisarteuParID = async(id)=>{
    try {
        const recupParId = await Admin.findById(id)
         return recupParId
    } catch (error) {
        console.log("mon erreur",error);
    }
}
static utilisarteuParMetier = async(metier)=>{
    try {
        const recupParId = await Admin.find({metier:metier}).exec()
         return recupParId
    } catch (error) {
        console.log("mon erreur",error);
    }
}

static utilisateurParEmail = async(email)=>{
    try {
        const recupParEmail = await Admin.findOne({email:email})
        return recupParEmail
    } catch (error) {
        console.log("mon erreur",error);
    }
}

static inscription = async(utilisateur)=>{
    try {
        const inscription  = await Admin.insertMany(utilisateur)
        return inscription
    } catch (error) {
        console.log('mon erreur',error);
    }
}

static suppression = async(id)=>{
    try {
        const supp = await Admin.findByIdAndDelete(id)
        return supp
    } catch (error) {
        console.log("mon erreur",error);
    }
}

static update = async (id, data) => {
    try {
        const modif = await Admin.findByIdAndUpdate(id, data);
        console.log("mon datadepuis other",data)
        return modif; // Renvoie les données mises à jour
    } catch (error) {
        console.error("Erreur dans otherAdmin.update :", error);
        throw error; // Rejette l'erreur pour la gestion dans le fichier appelant
    }
}
}
module.exports= otherAdmin