import React from 'react';
import Seibar from "./seidbar";
import "../utilisateur/css/liste.css"
import { useState,useEffect } from 'react';
import "../utilisateur/css/reclaClient.css"
import Axios from '../../service/apiService';
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
    return (
        
        <>
        <div className="mds">
        <div className="left-sides">
            <Seibar/>
        </div>
        <div class="right-sides">
            <div className="center-contents">
            <div class="admin-containers">
        <h1 style={{color:'black'}}>Réclamations Artisan</h1>
        <div class="reclamation-containers">
             {
                data.map((element)=>{
                    return(
                        <div class="reclamation-cards">
                {/* <img src="https://via.placeholder.com/100" alt="Photo de la Réclamation" class="reclamation-photo"/> */}
                <div class="reclamation-contents">
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