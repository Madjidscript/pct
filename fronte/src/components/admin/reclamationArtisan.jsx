import React from 'react';
import Seibar from "./seidbar";
import "../utilisateur/css/liste.css"
import { useState,useEffect } from 'react';
import "../utilisateur/css/reclaClient.css"
import Axios from '../../service/apiService';
import { toast,Toaster } from 'react-hot-toast';
const AdReclamationArtisan = (props) => {

    const [data,setdata]= useState([])

     useEffect(()=>{
      Axios.get("/reclamation2")
      .then((res)=>{
        console.log("ma recupreation", res.data.recup)
        setdata(res.data.recup)
      })
      .catch((error)=>{
        console.log("mon erreur au niveau ",error)
      })
     },[])

     const handleButtonClick = (id) => {
        Axios.delete(`/admin/delete2/${id}`)
          .then((response) => {
            console.log('Réalisation supprimée avec succès');
            // Mettre à jour l'état local des réalisations après suppression
            if (response.status === 200) {
              toast.success('traitement terminer !', {
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
            toast.error('traitement echouer !', {
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
        <div className="mds">
        <div className="left-sides">
            <Seibar/>
        </div>
        <div class="right-sides">
            <div className="center-contents">
            <div class="admin-containers">
        <h1 style={{color:'black'}}>Contact Artisan</h1>
        <div class="reclamation-containers">
             {
                data.map((element,index)=>{
                    return(
                        <div class="reclamation-cards" key={index}>
                {/* <img src="https://via.placeholder.com/100" alt="Photo de la Réclamation" class="reclamation-photo"/> */}

                <button
                onClick={() => handleButtonClick(element._id)}
                 className="btn-encours-traitement"
                >
                <i className="fas fa-cogs"></i> En cours de traitement
                </button>
                <div class="reclamation-contents">
                    <h3 class="reclamation-names" style={{marginTop:"35px"}}>Date de reclamation: <span>{element.date}</span>  </h3>
                    <h3 class="reclamation-names">Nom Artisan: <span>{element.nomArtisan}</span>  </h3>
                    <p class="reclamation-messages"> Message: <span>{element.message}</span> </p>
                    <h3 class="reclamation-names"> numero Artisan: <span>{element.numArtisan}</span> </h3>
                </div>
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

export default AdReclamationArtisan;