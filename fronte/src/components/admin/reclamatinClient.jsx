import React from 'react';
import Seibar from "./seidbar";
import { useState,useEffect } from 'react';
import "../utilisateur/css/liste.css"
import "../utilisateur/css/reclaArtisan.css"
import Axios from '../../service/apiService';
import { toast,Toaster } from 'react-hot-toast';
const AdReclamationClient = (props) => {
     const [data,setdata]= useState([])

     useEffect(()=>{
      Axios.get("/reclamation1")
      .then((res)=>{
        console.log("ma recupreation", res.data.recup)
        setdata(res.data.recup)
      })
      .catch((error)=>{
        console.log("mon erreur au niveau ",error)
      })
     },[])

     const handleButtonClick = (id) => {
      Axios.delete(`/admin/delete1/${id}`)
          .then((response) => {
            console.log('Réalisation supprimée avec succès');
            // Mettre à jour l'état local des réalisations après suppression
            if (response.status === 200) {
              toast.success('traitement  terminer !', {
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
      <div className="mds">
      <div className="left-sides">
          <Seibar/>
      </div>
      <div class="right-sides">
          <div class="center-contents">
          <div class="admin-containers">
        <h1 style={{color:'black'}}>Avis Clients</h1>
        <div class="reclamation-containers">
          {
            data.map((element,index)=>{
              return( 
              <div class="reclamation-cards" key={index}>
                <button
                 onClick={() => handleButtonClick(element._id)}
                  className="btn-encours-traitement"
                     >
                      <i className="fas fa-cogs"></i> En cours de traitement
                </button>
                <div class="reclamation-details">
                    <p style={{marginTop:"35px"}}><strong>Date:</strong> {element.date} </p>
                    <p><strong>Numéro client:</strong> {element.numClient} </p>
                    <p><strong>Nom Client:</strong> {element.nomClient}</p>
                    <p><strong>Message:</strong> {element.message} </p>
                    <p><strong>Numéro Artisan:</strong> {element.numArtisan}</p>
                    <p><strong>Nom Artisan:</strong> {element.nomArtisan} </p>
                </div>
            </div>

          )})
          }
            

           

          
        </div>
    </div>
             
          </div>
      </div>
  </div>

  </>
    );
};

export default AdReclamationClient;