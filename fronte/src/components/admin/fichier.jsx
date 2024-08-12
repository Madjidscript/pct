import React from 'react';
import "../utilisateur/css/liste.css"
import { useEffect,useState } from 'react';
import "../utilisateur/css/inscription.css"
import { toast,Toaster } from 'react-hot-toast';
import Axios from '../../service/apiService';
import Sidebar from './seidbar';
const Fichier = (props) => {


    const [formdata,setformdata]=useState({
        
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
        console.log("mes donners depuis le fronte",formdata)
        const formData = new FormData();
       
        
        formData.append('image', e.target.image.files[0]); // Assurez-vous que 'image' correspond au nom du champ dans votre backend
       
            
            Axios.post(`/admin/fichier`,formData)
                .then((response)=>{
                  console.log("ma reponse",response)
                  if (response.status === 200) {
                    toast.success('ajout de fichier effectuée avec succès !', {
                        position: 'top-right',
                        duration: 4000,
                        style: {
                            background: '#4caf50',
                            color: '#ffffff',
                        }
                    });
                }
                    setformdata({
                     
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
    
              <input type="file"  placeholder="Entrer votre fichier" className="email" name='image' value={formdata.image} onChange={handlchange} required />
           
             <button className="login_btn">Ajouter</button>
            </form>
               
            </div>
        </div>
    </div> 
        </>
    );
};

export default Fichier;