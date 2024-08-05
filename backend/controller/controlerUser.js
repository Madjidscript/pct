const { request } = require("express")
const otherArtisan = require("../other/artisan")
const otherRealisation = require("../other/realisation")
const bcrypt =require("bcrypt")
const path = require("path/win32");
const otherReclamation1 = require("../other/reclamation1");
const otherReclamation2 = require("../other/reclamation2");
const multer = require("../middlewares/multer")

const ControlerUser = class{
    static Inscription = async(req=request,res=response)=>{
      let message=""
      console.log("mes donner",req.body)
      const email = await req.body.email
      const utilisateur = await req.body.utilisateur
      const password = await req.body.password
      const images= req.file.path
      const verifutilisateur = await otherArtisan.utilisateurParUsername(utilisateur)
      const verifmail = await otherArtisan.utilisateurParEmail(email)
      if(verifutilisateur){
        message="le nom d'utilisateur existe deja"
       return res.status(400).json(message)
      }
      if(verifmail){
        message="l'email existe deja"
       return res.status(400).json(message)
      }else{
        const haspass = await bcrypt.hash(password,10)
        console.log("mon password hashe",haspass);
        const data = {
          ...req.body,
          password:haspass,
          image:images
        }
        console.log("mon data",data);
        const insert = await otherArtisan.inscription(data)
      if(insert){
        message="inscription valider"
        return res.status(200).json(message)
      }
      }
      

    }


    static Connexion= async (req=request,res=response)=>{
      let message =""
     console.log("ma connexion",req.body)
     const email = await req.body.email
     const passwords = await req.body.password
     const verifmail = await otherArtisan.utilisateurParEmail(email)

     if (!verifmail) {
      message="email incorrect"
      res.status(400).json({message})
     } 
     if (!verifmail.statut) {
      message = "Compte désactivé";
      return res.status(403).json({ message });
     }else {
      const verifpass = await bcrypt.compare(passwords,verifmail.password)
      if(verifpass){
        const {password:pwd, ...data} = verifmail
        message="connexion reussit"
         console.log("mon data hoo",data);
        return res.status(200).json({data,message})
        
      }else{
        message="mot de pass incorrect"
       return res.status(400).json({message})
      }
      
     }
    }
    static Oublier= async (req=request,res=response)=>{
      let message =""
     console.log("ma connexion",req.body)
     const email = await req.body.email
     
     const verifmail = await otherArtisan.utilisateurParEmail(email)
    //  console.log("monn verifmail",verifmail.statut)
     if (!verifmail) {
      message="email incorrect"
      res.status(400).json(message)
     } 
     if (!verifmail.statut) {
      message = "Compte désactivé";
      return res.status(403).json({ message });
     }
      
        message="connexion reussit"
         console.log("mon data hoo",verifmail);
         res.status(200).json({verifmail,message})
        
      
      
     
    }

    static AfficheArtisan = async (req=request,res=response)=>{
      let message =""
      const Artisan  = await otherArtisan.afficheTout()
      if(Artisan){
        message="recuperation reussit"
        console.log("ma recuperation",Artisan)
        res.json({Artisan,message})
      }else{
        message ="recuperation echouer"
        res.json(message)
      }
    }
    static AfficheArtisan2 = async (req=request,res=response)=>{
      let message =""
      const metier = req.params.metier;
      const Artisan  = await otherArtisan.utilisarteuParMetier(metier)
      if(Artisan){
        message="recuperation reussit"
        console.log("ma recuperation",Artisan)
        res.json({Artisan,message})
      }else{
        message ="recuperation echouer"
        res.json(message)
      }
    }

    static AfficheArtisanId = async (req=request,res=response)=>{
      const id = req.params.id
      console.log("mon id")
      let message =""
      const Artisan  = await otherArtisan.utilisarteuParID(id)
      if(Artisan){
        message="recuperation reussit"
        console.log("ma recuperation",Artisan)
        res.json({Artisan,message})
      }else{
        message ="recuperation echouer"
        res.json(message)
      }
    }
    static Reclamation1 = async (req=request,res=response)=>{
      console.log("ma reclamation1",req.body)
      const nomclient = req.body.nomClient
      const numclient = req.body.numClient
      const numArtisan = req.body.numArtisan
      const nomArtisan = req.body.nomArtisan
      const ms = req.body.message
      let message="reclamation efectuer avac succés"
      const envoi = otherReclamation1.inscription(req.body)
      if (envoi) {
        res.status(200).json({message})
      }else{
        message="reclamation echouer"
        res.status(400).json({message})
      }
      
    }
    static GetReclamation1= async (req=request,res=response)=>{
      let message=""
      const recup = await otherReclamation1.afficheTout()
      // console.log("ma recupertion ....",recup)
      if(recup){
       message = "reclation client recuperer"
       res.json({recup,message})
      }else{
        message="reclamation client client pas recuperer"
        res.json({message})
      }
     }

     
    static Reclamation2 = async (req=request,res=response)=>{
      console.log("ma reclamation2 ",req.body)
     
      const numArtisan = req.body.numArtisan
      const nomArtisan = req.body.nomArtisan
      const ms = req.body.message

      let message="reclamation efectuer avac succés"
      const envoi = otherReclamation2.inscription(req.body)
      if (envoi) {
        res.status(200).json({message})
      }else{
        message="reclamation echouer"
        res.status(400).json({message})
      }
      
      
    }
    static GetReclamation2= async (req=request,res=response)=>{
      let message=""
      const recup =await otherReclamation2.afficheTout()
      if(recup){
       message = "reclation client recuperer"
       res.json({recup,message})
      }else{
        message="reclamation client client pas recuperer"
        res.json({message})
      }
     }

    static RealisationArtisan = async (req=request,res=response)=>{
      let message =""
      const id = req.params.id
      console.log("realisation artisan",req.body,"monimage")
      const images= req.file.path
      const data = {
        ...req.body,
        image:images,
        id_cath:id
        
      }
      const realisation  = await otherRealisation.inscription(data)
      console.log("ma realisation",realisation)
      message="realisation effectuer"
      res.json({realisation,message})
    }
    static getRealisaton= async (req=request,res=response)=>{
       const id = req.params.id
       let message=""
       const recup = await otherRealisation.afficheTout2(id)
       console.log("mais different realisation",recup);
       if(recup){
        message="recuperation effectuer avec succes";
        console.log("ma recuperation de reilsation",recup,"mon message",message)
        res.json({recup,message})
       }else{
            message = "recuperation echouer"
            res.json({message})
       }
    }
    

    static supp = async (req=request,res=response)=>{
      let message=""
      const id =req.params.id
      // const image =await otherRealisation.afficheTout2(id)
      // console.log("imformation de l'image",image)
      // const ids = image.id
      // console.log("mon id serein",ids);
      const supprimer= await otherRealisation.suppression(id)
      if(supprimer){
        message="suppression de realisation valider"
        res.status(200).json({message})
      }else{
        message="suppresion d'image echouer"
        res.status(400).json({message})
      }
    }
    static edditer = async(req=request,res=response)=>{
    //   const id = req.params.id;
    //   console.log("mon id",id,"mon body",req.body)
    //    const passwords = req.body.password;
    //     const images = req.file.path;

        
    //     const hspass = await bcrypt.hash(passwords, 10);

       
    //     const data = {
    //         ...req.body,
    //       image:req.file.path,
    //       password:hspass

    //     }
            

       
    //     const modif = await otherArtisan.update(id, data);

    //     if (modif) {
            
    //         const message = 'Modification effectuée avec succès';
    //         res.json({ message });
    //     } else {
           
    //         const message = "Erreur de modification des données";
    //         res.status(400).json({ message });
    //     }
    // } 


    const id = req.params.id;
    console.log("mon id", id, "mon body", req.body);

    try {
        // Récupérer l'artisan existant depuis la base de données
        const artisan = await otherArtisan.utilisarteuParID(id);

        if (!artisan) {
            return res.status(404).json({ message: "Artisan non trouvé" });
        }

        // Vérifier si le champ 'password' est modifié
        let passwords = req.body.password;
        let hspass = artisan.password; // Utiliser le mot de passe existant par défaut

        if (passwords && passwords !== artisan.password) {
            // Recrypter le nouveau mot de passe s'il est modifié
            hspass = await bcrypt.hash(passwords, 10);
        }

        // Construire les données à mettre à jour
        const data = {
            ...req.body,
            image: req.file ? req.file.path : artisan.image, // Utiliser la nouvelle image ou l'image existante
            password: hspass, // Utiliser le mot de passe recrypté ou existant
        };

        // Effectuer la mise à jour
        const modif = await otherArtisan.update(id, data);

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

module.exports =ControlerUser