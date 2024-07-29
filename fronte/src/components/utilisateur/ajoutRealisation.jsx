
import React from 'react';
import "./css/inscription.css"
import { useState,useEffect } from 'react';
import {  NavLink,useParams} from "react-router-dom";
import Axios from '../../service/apiService.jsx';
import { toast,Toaster } from 'react-hot-toast';
const AjoutRealisation = (props) => {
    
    const[message,setmessage]=useState(null)
    const {id}=useParams()
    const [formdata,setformdata]=useState({
        titre:"",
        image:null
    })
    const handlchange = (e)=>{
        setformdata({
            ...formdata,
            [e.target.name]:e.target.value
        })
    }
   
    const handlsubmit =(e)=>{
        e.preventDefault()
        console.log("mes donner depuis le fronte",formdata)
        const formData = new FormData();
        formData.append('titre', formdata.titre);
        
        formData.append('image', e.target.image.files[0]); // Assurez-vous que 'image' correspond au nom du champ dans votre backend
       
            
            Axios.post(`/realisation/${id}`,formData)
                .then((response)=>{
                  console.log("ma reponse",response)
                  if (response.status === 200) {
                    toast.success('ajout effectuée avec succès !', {
                        position: 'top-right',
                        duration: 4000,
                        style: {
                            background: '#4caf50',
                            color: '#ffffff',
                        }
                    });
                }
                    setformdata({
                     titre:"",
                     image:null,
                    
                    })
                    

                })
                .catch((Error)=>{
                 console.log("mon erreur au niveau de la requete",Error)
                 
                    toast.error('ajout echouer !', {
                        position: 'top-right',
                        duration: 4000,
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
        
    <div className="cardss">
        <h2>Ajout realisation</h2>

        <div className="login_register">
                    <NavLink to={`/artisan/realisation/${id}`} className="login">Realisation</NavLink>
                    <NavLink to={`/artisan/profil/${id}`} className="registers">Profil</NavLink>
        </div>
        
        
         
        <form method='POST' className="form" onSubmit={handlsubmit} enctype="multipart/form-data" >
           
              <input type="text"  placeholder="Entre votre nom" className="email" name='titre' value={formdata.titre} onChange={handlchange} required />
              <input type="file"  placeholder="Entrer votre photo" className="email" name='image' value={formdata.image} onChange={handlchange} required />
              
           
           
            <button className="login_btn">Ajouter</button>
        </form>

        <div className="footer_card">
        <p>nb:remplisez tout les champ</p>
        </div>
    </div>
    
    </>
    
    );
};

export default AjoutRealisation; 