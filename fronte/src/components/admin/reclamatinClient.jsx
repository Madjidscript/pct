import React from 'react';
import Seibar from "./seidbar";
import { useState,useEffect } from 'react';
import "../utilisateur/css/liste.css"
import "../utilisateur/css/reclaArtisan.css"
import Axios from '../../service/apiService';
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

    return (
        
      <>
      <div className="mds">
      <div className="left-sides">
          <Seibar/>
      </div>
      <div class="right-sides">
          <div class="center-contents">
          <div class="admin-containers">
        <h1 style={{color:'black'}}>Réclamations Clients</h1>
        <div class="reclamation-containers">
          {
            data.map((element)=>{
              return( 
              <div class="reclamation-cards">
                
                <div class="reclamation-details">
                    <p><strong>Date de reclamation:</strong> {element.date} </p>
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