const { request } = require("express")
const otherArtisan = require("../other/artisan")
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
}
module.exports =ControlerUser