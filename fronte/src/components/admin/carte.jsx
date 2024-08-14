import React from 'react';
import { useEffect,useState } from "react";
import "../utilisateur/css/liste.css"
import Seibar from "./seidbar";
import Axios from '../../service/apiService';
import { toast,Toaster } from 'react-hot-toast';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Carte = (props) => {
    
    const [data ,setData]= useState([])
   
    
    useEffect (()=>{
        Axios.get('/artisan')
        .then(res => {
          console.log('Réponses de l\'API :', res.data.Artisan);
          setData(res.data.Artisan)
          
        })
        .catch(error => {
          console.error('Erreur lors de la requête :', error);
        });
    
    },[]
    )
  
    const centerPosition = [5.3592, -4.0083]; 
    
      

      // Créez une icône personnalisée
      const customIcon = new L.Icon({
        iconUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon.png',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
      });
    

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
        <h1>Liste Artisan sur la carte Geographique</h1>
        <MapContainer center={centerPosition} zoom={13} style={{ height: '80vh', width: '70vw' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {data.map((position, index) => (
        <Marker key={index} position={[position.altitude, position.longitude]} icon={customIcon}>
          <Popup>
            Latitude: {position.altitude} <br/>
            Longitude: {position.longitude} <br/>
            Nom artisans: {position.nom} <br/>
            Metier: {position.metier} <br/>
            Comune: {position.quartier} 
          </Popup>
        </Marker>
      ))}
    </MapContainer>
        
    </div>
               
            </div>
        </div>
    </div>

    </>
    );
};

export default Carte;