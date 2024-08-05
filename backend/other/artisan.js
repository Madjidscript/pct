const Artisan = require("../model/artisan")

const otherArtisan = class {
static afficheTout = async()=>{
  try {
    const affiche = await Artisan.find()
    return affiche
  } catch (error) {
  console.log("mon erreur",error);  
  }
}

static utilisarteuParID = async(id)=>{
    try {
        const recupParId = await Artisan.findById(id)
         return recupParId
    } catch (error) {
        console.log("mon erreur",error);
    }
}
static utilisarteuParMetier = async(metier)=>{
    try {
        const recupParId = await Artisan.find({metier:metier}).exec()
         return recupParId
    } catch (error) {
        console.log("mon erreur",error);
    }
}

static utilisateurParEmail = async(email)=>{
    try {
        const recupParEmail = await Artisan.findOne({email:email})
        return recupParEmail
    } catch (error) {
        console.log("mon erreur",error);
    }
}
static utilisateurParUsername = async(utilisateur)=>{
    try {
        const recupParUtilisateur = await Artisan.findOne({utilisateur:utilisateur})
        return recupParUtilisateur
    } catch (error) {
        console.log("mon erreur",error);
    }
}

static inscription = async(utilisateur)=>{
    try {
        const inscription  = await Artisan.insertMany(utilisateur)
        return inscription
    } catch (error) {
        console.log('mon erreur',error);
    }
}

static suppression = async(id)=>{
    try {
        const supp = await Artisan.findByIdAndDelete(id)
        return supp
    } catch (error) {
        console.log("mon erreur",error);
    }
}

static update = async (id, data) => {
    try {
        const modif = await Artisan.findByIdAndUpdate(id, data);
        console.log("mon datadepuis other",data)
        return modif; // Renvoie les données mises à jour
    } catch (error) {
        console.error("Erreur dans otherArtisan.update :", error);
        throw error; // Rejette l'erreur pour la gestion dans le fichier appelant
    }
}
}
module.exports= otherArtisan