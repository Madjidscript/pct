import React from 'react';
import "../utilisateur/css/liste.css"
import { useEffect,useState } from 'react';
import Axios from '../../service/apiService';
import logo from "../../assets/logo.svg"
import { toast,Toaster } from 'react-hot-toast';
import "../utilisateur/css/galerie.css"
import Seibar from "./seidbar";
const AdGalerie = (props) => {

    // const domain ="https://pct.onrender.com/"
    const [data,setdata]= useState([])

    useEffect(()=>{
     Axios.get("/admin/publiciter")
     .then((res)=>{
       console.log("ma recupreation", res.data.recup)
       setdata(res.data.recup)
     })
     .catch((error)=>{
       console.log("mon erreur au niveau ",error)
     })
    },[])
   

    const handleDeletePubliciter = (pubId) => {
        Axios.delete(`/admin/delete/${pubId}`)
          .then((response) => {
            console.log('Réalisation supprimée avec succès');
            // Mettre à jour l'état local des réalisations après suppression
            if (response.status === 200) {
              toast.success('suppression effectuée !', {
                  position: 'top-right',
                  duration: 4000,
                  style: {
                      background: '#4caf50',
                      color: '#ffffff',
                  }
              });
          }
           
            window.location.reload();
          })
          .catch((error) => {
            console.error('Erreur lors de la suppression de la réalisation', error);
            toast.error('suppression echouer !', {
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
        <div className="md">
        <div className="left-side">
            <Seibar/>
        </div>
        <div class="right-side">
            <div className="center-content">
                
            <div class="gallery-container">
        <button class="delete-all-button">Supprimer Tout</button>
        <div class="gallery">
            {
                data.map((element,index)=>{
                    const imageUrl = element.image ??logo;
                    return(
                        <div key={index} class="gallery-item">
                        <img src={imageUrl} alt="Image 1"/>
                        <button class="delete-button" onClick={()=>handleDeletePubliciter(element._id)} >Supprimer</button>
                    </div>
                    )
                })
            }
           
           
        </div>
    </div>
            </div>
        </div>
    </div>

    </>
    );
};

export default AdGalerie;