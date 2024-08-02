import React from 'react';
import { useEffect,useState } from "react";
import "../utilisateur/css/liste.css"
import Seibar from "./seidbar";
import Axios from '../../service/apiService';
import { toast,Toaster } from 'react-hot-toast';
import logo from "../../assets/logo.svg"
const AdListArtisan = (props) => {
    const [search,setSearch]=useState("") 
    const [data ,setData]= useState([])
    const [statut,setstatut]= useState()
    const domain ="http://localhost:3000/"
    const onchanges = (e)=>{
      setSearch(e.target.value)
    }
    useEffect (()=>{
        Axios.get('/artisan')
        .then(res => {
          console.log('Réponse de l\'API :', res.data.Artisan);
          setData(res.data.Artisan)
        })
        .catch(error => {
          console.error('Erreur lors de la requête :', error);
        });
    
    },[]
    )
  
    const rechercheUser = data.filter(user=>{
      return user.nom.toLowerCase().includes(search.toLowerCase());
    })



    const handleDeleteArtisan = (ArtisanId) => {
        Axios.delete(`/admin/deletes/${ArtisanId}`)
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



      const ModifArtisan = (ArtisanId) => {
        Axios.post(`/admin/modif/${ArtisanId}`)
          .then((response) => {
           
            // Mettre à jour l'état local des réalisations après suppression
            if (response.status === 200) {
              toast.success('mofication effectuée !', {
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
        <div className="mds">
        <div className="left-sides">
            <Seibar/>
        </div>
        <div class="right-sides">
            <div className="center-contents">
            <div class="admin-containers">
        <h1>Liste Artisan</h1>
        <div class="search-bars">
            <input type="text" onChange={onchanges} value={search} id="searchInput" placeholder="Rechercher..."/>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Photo</th>
                    <th>Mail</th>
                    <th>Nom d'artisan</th>
                    <th>Nom Entreprise</th>
                    <th>Numéro Artisan</th>
                    
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    rechercheUser.map((element,index)=>{
                        const imageUrl = element.image ? (domain + element.image.replace(/\\/g, '/')) :logo;

                        return(
                        <tr key={index}>
                        <td><img src={imageUrl} alt="Photo du Client" class="client-photos"/></td>
                        <td>{element.nom} </td>
                        <td>{element.email} </td>
                        <td> {element.entreprise} </td>
                        <td> {element.whathsapp} </td>
                        
                        <td>
                            <button class="delete-buttonss" onClick={()=>handleDeleteArtisan(element._id)} >Supprimer</button>
                            <button class="block-buttons" onClick={()=>ModifArtisan(element._id)}>Bloquer</button>
                        </td>
                    </tr>
                    )})
                }
                
               
               
            </tbody>
        </table>
    </div>
               
            </div>
        </div>
    </div>

    </>
    );
};

export default AdListArtisan;