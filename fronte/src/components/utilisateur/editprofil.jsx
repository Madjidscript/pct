import React from 'react';
import "./css/inscription.css"
import { useState,useEffect } from 'react';
import {  NavLink,useParams} from "react-router-dom";
import Hearder from "./hearder2.jsx";
import Footer from "./footer.jsx"
import LocalisationMap from './carteLocale.jsx';
import Axios from '../../service/apiService.jsx';
const Edit = (props) => {
    const [longitudes ,setlongitudes]=useState("")
    const [latitudes ,setlatitudes]=useState("")
    const [data ,setdata]=useState([])
    const {id}=useParams()
   
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
        photo:"",
        experience:"",
        metier:"",
        statut:true

    })

   useEffect(()=>{
    Axios.get(`/artisanid/${id}`)
    .then((response)=>{
        console.log("ma reponse hooo",response.data.Artisan)
        setdata(response.data.Artisan)
    })
    .catch((error)=>{
        console.log("mon erreur",error)
    })
   },[id])

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
        formData.append('image', e.target.image.files[0]); // Assurez-vous que 'image' correspond au nom du champ dans votre backend
        formData.append('experience', formdata.experience);
        formData.append('metier', formdata.metier);
        formData.append('statut', formdata.statut);

            
            Axios.post(`/modif/${id}`,formData)
                .then((response)=>{
                  console.log("ma reponse",response)
                   setmessage(response.data)

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
                    navigate(`/artisan/profil/${id}`);
                   }, 3000);

                })
                .catch((Error)=>{
                 console.log("mon erreur au niveau de la requete",Error)
                })
            
           
                
    }
    return ( 
        
        <>
        <div>
        <Hearder/>
        </div>
        <div style={{marginBottom:"10px"}}>
            <LocalisationMap latitude={latitudes} longitude={longitudes} />
        </div>
        
        



        <div className="cards">
        <h2>Inscription Artisan</h2>

            
        <div className="login_register">
        <NavLink to={`/artisan/edit/${id}`} className="register" >Editer</NavLink>
            <NavLink to={`/artisan/profil/${id}`} className="logins" >profil</NavLink>
            
        </div>
         
        <form method='POST' className="form" onSubmit={handlsubmit}>
           <div className="inputCard">
              <input type="text"  placeholder="Entre votre nom" className="email" name='nom' value={data.nom} onChange={handlchange} required disabled />
              <input type="text"  placeholder="nom de l'  entreprise ou atelier" className="email" name='entreprise' value={data.entreprise} onChange={handlchange} required />
           </div>
           <div className="inputCard">
              <input type="number" placeholder="entre votre numero" className="email" name='tel' value={data.tel} onChange={handlchange} required/>
              <input type="number"  placeholder=" numero wthsapp" className="email" name='whathsapp' value={data.whathsapp} onChange={handlchange} required />
           </div>
           <div className="inputCard">
              <input type="email" placeholder="entre votre mail" className="email" name='email' value={data.email} onChange={handlchange} required/>
              <input type="password"  placeholder=" mot de pass" className="email" name='password' value={data.password} onChange={handlchange} required />
           </div>
           <div className="inputCard">
              <input type="text" placeholder="longitude" className="email" name='longitude' value={longitudes} onChange={handlchange} required readonly disabled/>
              <input type="text"  placeholder="altitude" className="email" name='altitude' value={latitudes} onChange={handlchange} required readonly disabled />
           </div>
           <div className="inputCard">
              <input type="text" placeholder="votre comune" className="email" name='comune' value={data.comune} onChange={handlchange} required/>
              <input type="text"  placeholder="votre ville" className="email" name='ville' value={data.ville} onChange={handlchange} required />
           </div>
           <div className="inputCard">
            <label htmlFor="" style={{marginBottom:"4px"}}> heure d'ouverture</label>
              <input type="time" placeholder="entrer l'heure d'ouverture" className="email" name='ouverture' value={data.ouverture} onChange={handlchange} required/>
              <label htmlFor="" style={{marginBottom:"4px"}}> heure de fermerture</label>
              <input type="time"  placeholder="entrer l'heure de fermeture " className="email" name='fermeture' value={data.fermeture} onChange={handlchange} required />
           </div>
           <div className="inputCard">
           <input type="file"  placeholder="Entrer votre photo" className="email" name='photo'  onChange={handlchange} required />
              <input type="text"  placeholder="votre année dexperience" className="email" name='experience' value={data.experience} onChange={handlchange} required />
           </div>
           <div className="inputCard">
              <input type="text"  placeholder="votre metier" className="email" name='metier' value={data.metier} onChange={handlchange} required />
           </div>
           <div className="inputCard">
              <input type="hidden"  placeholder="votre statut" className="email" name='statut' value={data.statut} onChange={handlchange} required />
           </div>
            
            
            
            <button className="login_btn">inscription</button>
        </form>

        
    </div>
    <Footer/>
    </>
    
    );
};

export default Edit; 