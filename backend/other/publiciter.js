const Publiciter = require("../model/publiciter")

const otherPubliciter = class {
static afficheTout = async()=>{
  try {
    const affiche = await Publiciter.find()
    return affiche
  } catch (error) {
  console.log("mon erreur",error);  
  }
}

static utilisarteuParID = async(id)=>{
    try {
        const recupParId = await Publiciter.findById(id)
         return recupParId
    } catch (error) {
        console.log("mon erreur",error);
    }
}
static utilisarteuParMetier = async(metier)=>{
    try {
        const recupParId = await Publiciter.find({metier:metier}).exec()
         return recupParId
    } catch (error) {
        console.log("mon erreur",error);
    }
}

static utilisateurParEmail = async(email)=>{
    try {
        const recupParEmail = await Publiciter.findOne({email:email})
        return recupParEmail
    } catch (error) {
        console.log("mon erreur",error);
    }
}

static inscription = async(utilisateur)=>{
    try {
        const inscription  = await Publiciter.insertMany(utilisateur)
        return inscription
    } catch (error) {
        console.log('mon erreur',error);
    }
}

static suppression = async(id)=>{
    try {
        const supp = await Publiciter.findByIdAndDelete(id)
        return supp
    } catch (error) {
        console.log("mon erreur",error);
    }
}

static update = async (id, data) => {
    try {
        const modif = await Publiciter.findByIdAndUpdate(id, data);
        console.log("mon datadepuis other",data)
        return modif; // Renvoie les données mises à jour
    } catch (error) {
        console.error("Erreur dans otherPubliciter.update :", error);
        throw error; // Rejette l'erreur pour la gestion dans le fichier appelant
    }
}
}
module.exports= otherPubliciter