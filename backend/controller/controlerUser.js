const { request } = require("express")
const otherArtisan = require("../other/artisan")
const otherRealisation = require("../other/realisation")
const bcrypt =require("bcrypt")
const path = require("path/win32");


const ControlerUser = class{
    static Inscription = async(req=request,res=response)=>{
      let message=""
      console.log("mes donner",req.body)
      const email = await req.body.email
      const password = await req.body.password
      const images= req.file.path
      const verifmail = await otherArtisan.utilisateurParEmail(email)
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
        const insert = await otherArtisan.inscription(data)
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
     const verifmail = await otherArtisan.utilisateurParEmail(email)
     if (!verifmail) {
      message="email incorrect"
      res.json(message)
     } else {
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
      const message = `nom du client:${nomclient} num du client:${numclient},
      nom du artisan:${nomArtisan} num du artisan:${numArtisan}
      reclamation:${ms}`
      const num =2250546884684
      console.log("mon message",message)
      const whatsappLink = `https://api.whatsapp.com/send/?phone=${num}&text=${message}&type=phone_number&app_absent=0`;
      // const whatsappLink = `https://api.whatsapp.com/send/?phone=2250153535065&text=${message}&type=phone_number&app_absent=0`;
      console.log("wassapplink",whatsappLink);
    // Renvoyer le lien WhatsApp
    return whatsappLink
    }
    static Reclamation2 = async (req=request,res=response)=>{
      console.log("ma reclamation2",req.body)
     
      const numArtisan = req.body.numArtisan
      const nomArtisan = req.body.nomArtisan
      const ms = req.body.message
      const message = 
      `nom du artisan:${nomArtisan} num du artisan:${numArtisan}
      reclamation:${ms}`
      console.log("mon message",message)
    }

    static RealisationArtisan = async (req=request,res=response)=>{
      let message =""
      console.log("realisation artisan",req.body,"monimage")
      const images= req.file.path
      const data = {
        ...req.body,
        image:images
      }
      const realisation  = await otherRealisation.inscription(data)
      console.log("ma realisation",realisation)
      message="realisation effectuer"
      res.json({realisation,message})
    }
    static modif = async(req=request,res=response)=>{
      let message=""
      const id  =req.params.id
      const passwords = req.body.password
      const images =req.file.path
      const hspass = await bcrypt.hash(passwords,10)
      const data ={
        ...req.body,
        password:hspass,
        image:images
      }
      const modifs = await otherArtisan.update(id,data)
      if(modifs){
        message='modification effectuer avec succes'
        res.json({message})
      }else{
        message="erreur de modication des donner"
      }
    }
}
module.exports =ControlerUser