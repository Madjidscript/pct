const { request } = require("express")
const otherPubliciter = require("../other/publiciter")
const otherArtisan = require("../other/artisan")
const otherAdmin= require("../other/admin")

const bcrypt = require("bcryptjs")
const path = require("path/win32");




const ControlerAdmin = class{
  static Inscription = async(req=request,res=response)=>{
    let message=""
    console.log("mes donner",req.body)
    const email = await req.body.email
    const password = await req.body.password
    const images= req.file.path
    const verifmail = await otherAdmin.utilisateurParEmail(email)
    if(verifmail){
      message="l'email existe deja"
      res.json(message)
    }else{
      const haspass = await bcrypt.hash(password,10)
      console.log("mon password hashe",haspass);
      const data = {
        ...req.body,
        password:haspass,
        image:images
      }
      console.log("mon data",data);
      const insert = await otherAdmin.inscription(data)
    if(insert){
      message="inscription valider"
      res.json(message)
    }
    }
    

  }



  static Connexion= async (req=request,res=response)=>{
    let message =""
   console.log("ma connexion",req.body)
   const email = await req.body.email
   const passwords = await req.body.password
   const verifmail = await otherAdmin.utilisateurParEmail(email)

   if (!verifmail) {
    message="email incorrect"
    res.json(message)
   } 
   else {
    const verifpass = await bcrypt.compare(passwords,verifmail.password)
    if(verifpass){
      const {password:pwd, ...data} = verifmail
      message="connexion reussit"
       console.log("mon data hoo",data);
       res.json({data,message})
      
    }else{
      message="mot de pass incorrect"
      res.json(message)
    }
    
   }
  }


  static AfficheAdminId = async (req=request,res=response)=>{
    const id = req.params.id
    console.log("mon id")
    let message =""
    const Admin  = await otherAdmin.utilisarteuParID(id)
    if(Admin){
      message="recuperation reussit"
      console.log("ma recuperation",Admin)
      res.json({Admin,message})
    }else{
      message ="recuperation echouer"
      res.json(message)
    }
  }
    static Publiciter = async (req=request,res=response)=>{
        let message =""
        console.log("realisation artisan",req.body,"monimage")
        const images= req.file.path
        const data = {
          ...req.body,
          image:images,
         
        }
        const realisation  = await otherPubliciter.inscription(data)
        console.log("ma realisation",realisation)
        message="realisation effectuer"
        res.json({realisation,message})
      }
      static GetPubliciter= async (req=request,res=response)=>{
        let message=""
        const recup = await otherPubliciter.afficheTout()
        // console.log("ma recupertion ....",recup)
        if(recup){
         message = "reclation client recuperer"
         res.json({recup,message})
        }else{
          message="reclamation client client pas recuperer"
          res.json({message})
        }
       }
       static supp = async (req=request,res=response)=>{
        let message=""
        const id =req.params.id
        
        
        const supprimer= await otherPubliciter.suppression(id)
        if(supprimer){
          message="suppression de realisation valider"
          res.json({message})
        }else{
          message="suppresion d'image echouer"
          res.json({message})
        }
      }
       static suppArtisan = async (req=request,res=response)=>{
        let message=""
        const id =req.params.id
        
        const supprimer= await otherArtisan.suppression(id)
        if(supprimer){
          message="suppression de realisation valider"
          res.json({message})
        }else{
          message="suppresion d'image echouer"
          res.json({message})
        }
      }
       static ModifStatut = async (req=request,res=response)=>{
        let message=""
        const id =req.params.id
        
        const artisan  =await otherArtisan.utilisarteuParID(id)
        if (artisan) {
          const nouveauStatut = !artisan.statut
          artisan.statut = nouveauStatut
          const modif = otherArtisan.update(id,artisan)
          console.log("la modication bien .....",modif)
          message ="statut changer"
          res.json({modif,message})
        }else{
          message ="erreur lor de la modification"
          res.json({message})
        }
        
         
        
      }



      static edditer = async(req=request,res=response)=>{
    
        const id = req.params.id;
        console.log("mon id", id, "mon body", req.body);
    
        try {
            // Récupérer l'artisan existant depuis la base de données
            const Admin = await otherAdmin.utilisarteuParID(id);
    
            if (!Admin) {
                return res.status(404).json({ message: "Admin non trouvé" });
            }
    
            // Vérifier si le champ 'password' est modifié
            let passwords = req.body.password;
            let hspass = Admin.password; // Utiliser le mot de passe existant par défaut
    
            if (passwords && passwords !== Admin.password) {
                // Recrypter le nouveau mot de passe s'il est modifié
                hspass = await bcrypt.hash(passwords, 10);
            }
    
            // Construire les données à mettre à jour
            const data = {
                ...req.body,
                image: req.file ? req.file.path : Admin.image, // Utiliser la nouvelle image ou l'image existante
                password: hspass, // Utiliser le mot de passe recrypté ou existant
            };
    
            // Effectuer la mise à jour
            const modif = await otherAdmin.update(id, data);
    
            if (modif) {
                const message = 'Modification effectuée avec succès';
                res.json({ message });
            } else {
                const message = "Erreur de modification des données";
                res.status(400).json({ message });
            }
        } catch (error) {
            console.error("Erreur lors de la modification", error);
            res.status(500).json({ message: "Erreur interne du serveur" });
        }
        }
}
module.exports =ControlerAdmin