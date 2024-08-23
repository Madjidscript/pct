import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from "react-router-dom";
import Hearder from "./hearder2.jsx";
import Footer from "./footer.jsx";
import LocalisationMap from './carteLocale.jsx';
import Axios from '../../service/apiService.jsx';
import { toast,Toaster } from 'react-hot-toast';

const Edit = (props) => {
    const [longitudes, setLongitudes] = useState("");
    const [latitudes, setLatitudes] = useState("");
    const [data, setData] = useState({});
    const { id } = useParams();

    const [formdata, setFormdata] = useState({
        nom: "",
        entreprise: "",
        tel: "",
        whathsapp: "",
        email: "",
        password: "",
        longitude: "",
        altitude: "",
        comune: "",
        ville: "",
        ouverture: "",
        fermeture: "",
        image: null,
        experience: "",
        metier: "",
        statut: true
    });

    useEffect(() => {
        Axios.get(`/artisanid/${id}`)
            .then((response) => {
                console.log("ma reponse", response.data.Artisan);
                const artisanData = response.data.Artisan;
                setData(artisanData);
                setFormdata({
                    nom: artisanData.nom,
                    entreprise: artisanData.entreprise,
                    tel: artisanData.tel,
                    whathsapp: artisanData.tel,
                    email: artisanData.email,
                    password: artisanData.password,
                    longitude: artisanData.longitude,
                    altitude: artisanData.altitude,
                    comune: artisanData.comune,
                    ville: artisanData.ville,
                    ouverture: artisanData.ouverture,
                    fermeture: artisanData.fermeture,
                    experience: artisanData.experience,
                    metier: artisanData.metier,
                    statut: artisanData.statut
                });
            })
            .catch((error) => {
                console.log("mon erreur", error);
            });

        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position);
            const maposition = position;
            setLatitudes(maposition.coords.latitude);
            setLongitudes(maposition.coords.longitude);
        });
    }, [id]);

    const handlchange = (e) => {
        const { name, value } = e.target;
        setFormdata(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };
    

    const handlsubmit = (e) => {
        e.preventDefault();
        
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
        formData.append('image', e.target.image.files[0]); // Assurez-vous que 'photo' correspond au nom du champ dans votre backend
        formData.append('experience', formdata.experience);
        formData.append('metier', formdata.metier);
        formData.append('statut', formdata.statut);
    //   const data={
    //     nom:"madjid",
    //     prenom:"madjidooo"
    //   }
      console.log("mon id",id)
   

        Axios.post(`/papa/${id} `,formData)
            .then((response) => {
                console.log("ma reponse la modification", response);
                // Traitement des données après soumission avec navigate() ou autre
                if (response.status === 200) {
                    toast.success('modification  effectuée avec succès !', {
                        position: 'top-right',
                        duration: 4000,
                        style: {
                            background: '#4caf50',
                            color: '#ffffff',
                        }
                    });
                }
            })
            .catch((error) => {
                console.error("mon erreur au niveau de la requete", error);
                toast.error('modification echouer !', {
                    position: 'top-right',
                    duration: 4000,
                    style: {
                        background: '#f44336',
                        color: '#ffffff',
                    }
                });
            });
    };

    return (
        <>
        <Toaster/>
            <div>
                <Hearder />
            </div>
            <div style={{ marginBottom: "10px" }}>
                <LocalisationMap latitude={latitudes} longitude={longitudes} />
            </div>

            <div className="cards">
                <h2>Edition Artisan</h2>
                NB: <strong>Etre dans votre lieu de travaille pour editer votre profil </strong>

                <div className="login_register">
                    <NavLink to={`/artisan/edit/${id}`} className="register">Editer</NavLink>
                    <NavLink to={`/artisan/profil/${id}`} className="logins">Profil</NavLink>
                </div>

                <form className="form" onSubmit={handlsubmit}>
                    <div className="inputCard">
                        <input type="text" placeholder="Entrez votre nom" className="email" name='nom' value={formdata.nom} onChange={handlchange} required disabled />
                        <input type="text" placeholder="Nom de l'entreprise ou atelier" className="email" name='entreprise' value={formdata.entreprise} onChange={handlchange} required />
                    </div>
                    <div className="inputCard">
                        <input type="text" placeholder="Entrez votre numéro" className="email" name='tel' value={formdata.tel} onChange={handlchange} required />
                        <input type="text" placeholder="Numéro WhatsApp" className="email" name='whathsapp' value={formdata.whathsapp} onChange={handlchange} required />
                    </div>
                    <div className="inputCard">
                        <input type="email" placeholder="Entrez votre email" className="email" name='email' value={formdata.email} onChange={handlchange} required />
                        <input type="password" placeholder="Mot de passe" className="email" name='password' value={formdata.password} onChange={handlchange} required />
                    </div>
                    <div className="inputCard">
                        <input type="text" placeholder="Longitude" className="email" name='longitude' value={longitudes} onChange={handlchange} required readOnly disabled />
                        <input type="text" placeholder="Latitude" className="email" name='altitude' value={latitudes} onChange={handlchange} required readOnly disabled />
                    </div>
                    <div className="inputCard">
                        <input type="text" placeholder="Votre commune" className="email" name='comune' value={formdata.comune} onChange={handlchange} required />
                        <input type="text" placeholder="Votre ville" className="email" name='ville' value={formdata.ville} onChange={handlchange} required />
                    </div>
                    <div className="inputCard">
                        <label htmlFor="" style={{ marginBottom: "4px" }}>Heure d'ouverture</label>
                        <input type="time" placeholder="Entrez l'heure d'ouverture" className="email" name='ouverture' value={formdata.ouverture} onChange={handlchange} required />
                        <label htmlFor="" style={{ marginBottom: "4px" }}>Heure de fermeture</label>
                        <input type="time" placeholder="Entrez l'heure de fermeture" className="email" name='fermeture' value={formdata.fermeture} onChange={handlchange} required />
                    </div>
                    <div className="inputCard">
                        <input type="file" placeholder="Entrez votre photo" className="email" name='image' onChange={handlchange} required />
                        <input type="text" placeholder="Votre année d'expérience" className="email" name='experience' value={formdata.experience} onChange={handlchange} required />
                    </div>
                    <div className="inputCard">
                        <input type="text" placeholder="Votre métier" className="email" name='metier' value={formdata.metier} onChange={handlchange} required />
                    </div>
                    <div className="inputCard">
                        <input type="hidden" placeholder="Votre statut" className="email" name='statut' value={formdata.statut} onChange={handlchange} required />
                    </div>

                    <button type="submit" className="login_btn">Mettre à jour</button>
                </form>

            </div>
            <Footer />
        </>
    );
};

export default Edit;
