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
    const [erro, setErro] = useState('');
    const [error, setError] = useState('');
   const [errors, setErrors] = useState('');
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
        "Boulanger",
        "Charpentier",
        "coiffeur",
        "coiffeuse",
        "Couture",
        "Décorateur",
        "Ébéniste",
        "Ferronnier",
        "Forgeron",
        "Maroquinier",
        "Menuisier",
        "Paysagiste",
        "Plombier",
        "Sculpteur",
        "Tapissier",
        "Vigneron",
        "Vitrailliste",
        "Bijoutier",
        "Céramiste",
        "Graveur",
        "Horloger",
        "Joaillier",
        "Luthier",
        "Mécanicien",
        "Orfèvre",
        "Pépinieriste",
        "Potiér",
        "Serrurier",
        "Tonnelier",
        "Vannier",
        "Verrier",
        "Maréchal-ferrant"
    ];
    
    // Exemple d'utilisation
    console.log(metiersArtisanat);
    
    const [formdata,setformdata]=useState({
        nom:"",
        entreprise:"",
        utilisateur:"",
        quartier:"",
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
     
        setErro('');
        setError('');
        setErrors('');

// Validation du numéro de téléphone avant l'envoi
const phoneRegex = /^\+225 \d{6} \d{4}$/;
if (!phoneRegex.test(formdata.tel)) {
  setError('Le numéroprincipal de lartisan doit être au format : +225 123400 5678');
  return;
}
if (!phoneRegex.test(formdata.whathsapp)) {
  setErrors('Le numéro whatsapp de lartisan doit être au format : +225 123400 5678');
  return;
}
  const usernameRegex =/^(?=.*[A-Z])[A-Za-z\d_-]+$/;
    if (!usernameRegex.test(formdata.utilisateur)) {
      setErro('Le nom d\'utilisateur doit contenir entre 3 et 10 caractères, avec au moins une majuscule, une minuscule, un chiffre, et peut inclure des tirets (-) ou des underscores (_).'); 
      return
    }


        const formData = new FormData();
        formData.append('nom', formdata.nom);
        formData.append('entreprise', formdata.entreprise);
        formData.append('utilisateur', formdata.utilisateur);
        formData.append('quartier', formdata.quartier);
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
                  console.log("ma reponse dessss",response.data)
                   setmessage(response.data)
                   if (response.status === 200) {
                    toast.success(message, {
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
                     utilisateur:"",
                     quartier:"",
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
                 console.log("mon erreur au niveau de la requete",Error.response.data)
                 setmessage(Error.response.data)
                 
                    toast.error(message, {
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

        {erro && <p style={{ color: 'red' }}>{erro}</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {errors && <p style={{ color: 'red' }}>{errors}</p>}
        <div className="login_register">
        <NavLink to="/inscription" className="register" >S'inscrit</NavLink>
            <NavLink to="/connexion" className="logins" >Se connecter</NavLink>
            
        </div>
        <div style={{color:"red",margin:"0px auto"}}>{message}</div>
         
        <form method='POST' className="form" onSubmit={handlsubmit} enctype="multipart/form-data" >
           <div className="inputCard">
              <input type="text"  placeholder="Entrez votre nom" className="email" name='nom' value={formdata.nom} onChange={handlchange} required />
              <input type="text"  placeholder="nom de l'entreprise ou atelier" className="email" name='entreprise' value={formdata.entreprise} onChange={handlchange} required />
           </div>
           <div className="inputCard">
              <input type="text"  placeholder="Entrez votre nom d'utilisateur" className="email" name='utilisateur' value={formdata.utilisateur} onChange={handlchange} required />
              <input type="text"  placeholder="Entrez votre quartier" className="email" name='quartier' value={formdata.quartier} onChange={handlchange} required />
           </div>
           <div className="inputCard">
              <input type="text" placeholder="numero:+225 123400 5678" className="email" name='tel' value={formdata.tel} onChange={handlchange} required/>
              <input type="text"  placeholder="wthsapp:+225 123400 5678" className="email" name='whathsapp' value={formdata.whathsapp} onChange={handlchange} required />
           </div>
           <div className="inputCard">
              <input type="email" placeholder="Entrez votre mail" className="email" name='email' value={formdata.email} onChange={handlchange} required/>
              <input type="password"  placeholder="Entrez votre mot de pass" className="email" name='password' value={formdata.password} onChange={handlchange} required />
           </div>
           <div className="inputCard">
              <input type="text" placeholder="longitude" className="email" name='longitude' value={longitudes} onChange={handlchange} required readonly disabled/>
              <input type="text"  placeholder="altitude" className="email" name='altitude' value={latitudes} onChange={handlchange} required readonly disabled />
           </div>
           <div className="inputCard">
              <input type="text" placeholder="Entrez votre commune" className="email" name='comune' value={formdata.comune} onChange={handlchange} required/>
              <input type="text"  placeholder="Entrez votre ville" className="email" name='ville' value={formdata.ville} onChange={handlchange} required />
           </div>
           <div className="inputCard">
            <label htmlFor="" style={{marginBottom:"4px"}}> heure d'ouverture</label>
              <input type="time" placeholder="Entrez l'heure d'ouverture" className="email" name='ouverture' value={formdata.ouverture} onChange={handlchange} required/>
              <label htmlFor="" style={{marginBottom:"4px"}}> heure de fermerture</label>
              <input type="time"  placeholder="Entrez l'heure de fermeture " className="email" name='fermeture' value={formdata.fermeture} onChange={handlchange} required />
           </div>
           <div className="inputCard">
           <input type="file"  placeholder="Entrez votre photo" className="email" name='image'   onChange={handfilchange} required />
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