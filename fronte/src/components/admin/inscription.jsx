import React from 'react';
import "../utilisateur/css/liste.css"
import { useEffect,useState } from 'react';
import "../utilisateur/css/inscription.css"
import { toast,Toaster } from 'react-hot-toast';
import Axios from '../../service/apiService';
import Sidebar from './seidbar';
const AdInscription = (props) => {


    const [formdata,setformdata]=useState({
        nom:"",
        email:"",
        password:"",
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
        formData.append('nom', formdata.nom);
        formData.append('email', formdata.email);
        formData.append('password', formdata.password);
        
        formData.append('image', e.target.image.files[0]); // Assurez-vous que 'image' correspond au nom du champ dans votre backend
       
            
            Axios.post(`/admin/inscription`,formData)
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
                     nom:"",
                     email:"",
                     password:"",
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
            <div className="md">
             <div className="left-side">
                <Sidebar/>
             </div>
             <div class="right-side">
            <div className="center-content">
            <form method='POST' className="form" onSubmit={handlsubmit} enctype="multipart/form-data" >
           
              <input type="text"  placeholder="Entre votre nom" className="email" name='nom' value={formdata.nom} onChange={handlchange} required />
              <input type="email"  placeholder="Entre votre email" className="email" name='email' value={formdata.email} onChange={handlchange} required />
              <input type="password"  placeholder="Entre votre pswd" className="email" name='password' value={formdata.password} onChange={handlchange} required />
              <input type="file"  placeholder="Entrer votre photo" className="email" name='image' value={formdata.image} onChange={handlchange} required />
           
             <button className="login_btn">Ajouter</button>
            </form>
               
            </div>
        </div>
    </div> 
        </>
    );
};

export default AdInscription;