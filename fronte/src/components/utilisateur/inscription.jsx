import React from 'react';
import "./css/inscription.css"
import { useState,useEffect } from 'react';
import {  NavLink,useNavigate} from "react-router-dom";
import Hearder from "./hearder";
import Footer from "./footer.jsx"
import { LocalService } from "../../service/local";
import LocalisationMap from './carteLocale';
import Axios from '../../service/apiService.jsx';
import { toast,Toaster } from 'react-hot-toast';
const Inscription = (props) => {
    const [longitudes ,setlongitudes]=useState("")
    const [latitudes ,setlatitudes]=useState("")
    const[message,setmessage]=useState(null)
    const navigate = useNavigate()

    // useEffect(()=>{
    //     if (LocalService.local()) {
    //         console.log("veriffffff")
    //         return navigate("/artisan")

    //     }
    // })

    useEffect(() => {
        const local = JSON.parse(localStorage.getItem("Artisan"));
        if (local) {
          console.log("aslam hooo", local.nom,"mon id hoo",local._id);
          return navigate(`/artisan/profil/${local._id}`)
        }
      }, []);
    
    const metiersArtisanat = [
        "Menuisier",
        "Charpentier",
        "Ferronnier",
        "Céramiste",
        "Tailleur de pierre",
        "Ebéniste",
        "Potier",
        "Joaillier",
        "Tapissier",
        "Vitrailliste",
        "Maroquinier",
        "Verrier",
        "Horloger",
        "Chocolatier",
        "Boulanger",
        "Pâtissier",
        "Glacier",
        "Maître d'art",
        "Maquettiste",
        "Restaurateur d'œuvres d'art",
        "Sculpteur",
        "Forgeron",
        "Sellier",
        "Relieur",
        "Luthier",
        "Facteur d'instruments de musique",
        "Modiste",
        "Gainier",
        "Brodeur",
        "Doreur",
        "Encadreur",
        "Serrurier",
        "Cordonnier",
        "Tapissier-décorateur",
        "Faïencier",
        "Métallier",
        "Bijoutier",
        "Bottier",
        "Coutelier",
        "Cuirassier",
        "Emailler",
        "Lapidairier",
        "Marqueteur",
        "Parcheminier",
        "Sculpteur sur bois",
        "Sérigraphe",
        "Teinturier",
        "Tourneur sur bois",
        "Vannier",
        "Zingueur",
        "Aquarelliste",
        "Graveur",
        "Vitrier",
        "Tapissier garnisseur",
        "Facteur de clavecins",
        "Facteur d'orgues",
        "Restaurateur de meubles",
        "Facteur de papier peint",
        "Restaurateur de tableaux",
        "Facteur de jouets",
        "Facteur de poupées",
        "Facteur d'automates",
        "Cristallier",
        "Laqueur",
        "Imprimeur d'art",
        "Tatoueur",
        "Tailleur de pierre précieuse",
        "Malletier",
        "Tapissier matelassier",
        "Polisseur",
        "Métiers du cuir",
        "Métiers de la bijouterie-joaillerie",
        "Métiers du textile",
        "Métiers du bois",
        "Métiers du métal",
        "Métiers de la céramique",
        "Métiers du verre",
        "Métiers de l'horlogerie",
        "Métiers de la restauration d'œuvres d'art"
        // Ajoutez d'autres métiers d'artisanat selon vos besoins
    ];
    
    // Exemple d'utilisation
    console.log(metiersArtisanat);
    
    const [formdata,setformdata]=useState({
        nom:"",
        entreprise:"",
        tel:"",
        whathsapp:"",
        email:"",
        password:"",
        longitude:"",
        altitude:"",
        comune:"",
        ville:"",
        ouverture:"",
        fermeture:"",
        image:null,
        experience:"",
        metier:"",
        statut:true

    })

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            console.log(position)
            const maposition = position
            setlatitudes(maposition.coords.latitude)
            setlongitudes(maposition.coords.longitude)
            setformdata({
                ...formdata,
                longitude: maposition.coords.longitude,
                altitude: maposition.coords.latitude
            });
            console.log("mon latitude",setlatitudes);

        })
       
    },[])
    const handlchange = (e)=>{
        setformdata({
            ...formdata,
            [e.target.name]:e.target.value
        })
    }
    const handfilchange = (e)=>{
        setformdata({
            ...formdata,
            image:e.target.files[0]
        })
    }
   
    const handlsubmit =(e)=>{
        e.preventDefault()
        const formData = new FormData();
        formData.append('nom', formdata.nom);
        formData.append('entreprise', formdata.entreprise);
        formData.append('tel', formdata.tel);
        formData.append('whathsapp', formdata.whathsapp);
        formData.append('email', formdata.email);
        formData.append('password', formdata.password);
        formData.append('longitude', formdata.longitude);
        formData.append('altitude', formdata.altitude);
        formData.append('comune', formdata.comune);
        formData.append('ville', formdata.ville);
        formData.append('ouverture', formdata.ouverture);
        formData.append('fermeture', formdata.fermeture);
        formData.append('image',  e.target.image.files[0]); // Assurez-vous que 'image' correspond au nom du champ dans votre backend
        formData.append('experience', formdata.experience);
        formData.append('metier', formdata.metier);
        formData.append('statut', formdata.statut);

            
            Axios.post("/inscription",formData)
                .then((response)=>{
                  console.log("ma reponse",response)
                   setmessage(response.data)
                   if (response.status === 200) {
                    toast.success('inscription effectuée avec succès !', {
                        position: 'top-right',
                        duration: 2000,
                        style: {
                            background: '#4caf50',
                            color: '#ffffff',
                        }
                    });
                }

                    setformdata({
                     nom:"",
                     entreprise:"",
                     tel:"",
                     whathsapp:"",
                     email:"",
                     password:"",
                     longitude:"",
                     altitude:"",
                     comune:"",
                     ville:"",
                     ouverture:"00:00",
                     fermeture:"00:00",
                     image:null,
                     experience:"",
                     metier:""
                    })
                    
                    
                    setTimeout(() => {
                    console.log("Fonction exécutée après 3 secondes");
                    navigate("/connexion");
                   }, 2000);

                })
                .catch((Error)=>{
                 console.log("mon erreur au niveau de la requete",Error)
                 
                    toast.error('inscription echouer !', {
                        position: 'top-right',
                        duration: 2000,
                        style: {
                            background: '#f44336',
                            color: '#ffffff',
                        }
                    });
                
                })
            
           
                
    }


    

    return ( 
        
        <>
        <Toaster/>
        <div>
        <Hearder/>
        </div>
        <div style={{marginBottom:"10px"}}>
            <LocalisationMap latitude={latitudes} longitude={longitudes} />
        </div>
        
        



        <div className="cards">
        <h2>Inscription Artisan</h2>

            
        <div className="login_register">
        <NavLink to="/inscription" className="register" >S'inscrit</NavLink>
            <NavLink to="/connexion" className="logins" >se connecter</NavLink>
            
        </div>
        <div style={{color:"red",margin:"0px auto"}}>{message}</div>
         
        <form method='POST' className="form" onSubmit={handlsubmit} enctype="multipart/form-data" >
           <div className="inputCard">
              <input type="text"  placeholder="Entre votre nom" className="email" name='nom' value={formdata.nom} onChange={handlchange} required />
              <input type="text"  placeholder="nom de l'  entreprise ou atelier" className="email" name='entreprise' value={formdata.entreprise} onChange={handlchange} required />
           </div>
           <div className="inputCard">
              <input type="number" placeholder="entre votre numero" className="email" name='tel' value={formdata.tel} onChange={handlchange} required/>
              <input type="number"  placeholder=" numero wthsapp" className="email" name='whathsapp' value={formdata.whathsapp} onChange={handlchange} required />
           </div>
           <div className="inputCard">
              <input type="email" placeholder="entre votre mail" className="email" name='email' value={formdata.email} onChange={handlchange} required/>
              <input type="password"  placeholder=" mot de pass" className="email" name='password' value={formdata.password} onChange={handlchange} required />
           </div>
           <div className="inputCard">
              <input type="text" placeholder="longitude" className="email" name='longitude' value={longitudes} onChange={handlchange} required readonly disabled/>
              <input type="text"  placeholder="altitude" className="email" name='altitude' value={latitudes} onChange={handlchange} required readonly disabled />
           </div>
           <div className="inputCard">
              <input type="text" placeholder="votre comune" className="email" name='comune' value={formdata.comune} onChange={handlchange} required/>
              <input type="text"  placeholder="votre ville" className="email" name='ville' value={formdata.ville} onChange={handlchange} required />
           </div>
           <div className="inputCard">
            <label htmlFor="" style={{marginBottom:"4px"}}> heure d'ouverture</label>
              <input type="time" placeholder="entrer l'heure d'ouverture" className="email" name='ouverture' value={formdata.ouverture} onChange={handlchange} required/>
              <label htmlFor="" style={{marginBottom:"4px"}}> heure de fermerture</label>
              <input type="time"  placeholder="entrer l'heure de fermeture " className="email" name='fermeture' value={formdata.fermeture} onChange={handlchange} required />
           </div>
           <div className="inputCard">
           <input type="file"  placeholder="Entrer votre photo" className="email" name='image'   onChange={handfilchange} required />
              <input type="text"  placeholder="votre année dexperience" className="email" name='experience' value={formdata.experience} onChange={handlchange} required />
           </div>
           <div className="inputCard">
           <label htmlFor="metier">Métier :</label>
                    <select
                        id="metier"
                        name="metier"
                        value={formdata.metier}
                        onChange={handlchange}
                        required
                    >
                        <option value="">Sélectionnez un métier</option>
                        {metiersArtisanat.map((metier, index) => (
                            <option key={index} value={metier}>
                                {metier}
                            </option>
                        ))}
                    </select>
              {/* <input type="text"  placeholder="votre metier" className="email" name='metier' value={formdata.metier} onChange={handlchange} required /> */}
           </div>
           <div className="inputCard">
              <input type="hidden"  placeholder="votre statut" className="email" name='statut' value={formdata.statut} onChange={handlchange} required />
           </div>
            
            
            
            <button className="login_btn">inscription</button>
        </form>

        <div className="footer_card">
        <p>deja menbres?</p>
        <NavLink className="logins" to="/connexion">se connecter</NavLink>
        </div>
    </div>
    <Footer/>
    </>
    
    );
};

export default Inscription; 