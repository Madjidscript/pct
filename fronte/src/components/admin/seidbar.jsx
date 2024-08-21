import React from 'react';
import "../utilisateur/css/seidbar.css"
import logo from "../../assets/logo.svg"
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from "react";
import { LocalService } from "../../service/local2";
const Sidebar = (props) => {

    const [Nom,setNom]= useState("")
    const [Id,setid]= useState("")
    const [Image,setimage]= useState()
    const domain ="https://pct.onrender.com/"
    //http://localhost:3000/
    //https://pct.onrender.com/

    useEffect(() => {
        const local = JSON.parse(localStorage.getItem("Admin"));
        
        if (local) {
          console.log("aslam hooo", local.nom,"mon id hoo",local._id,"mon image",local.image);
          setNom(local.nom);
          setid(local._id)
          setimage( local.image)
        }
      }, []);
      console.log("mon id",Nom,Id)
    
      const navigate=useNavigate()
      const deconnexion = () => {
        LocalService.deconnexion()
        navigate("/");
      };
    return (
        
        <>
        <div class="sidebars">
        <h3 class="sidebar-logos" ><img src={Image} alt="" style={{width:"45px",height:"45px",borderRadius:"50%",}} /></h3>
        <h3 class="sidebar-logos" > {Nom} </h3>
        {/* <button class="sidebar-toggle" aria-label="Toggle menu">
            <span class="toggle-icon"></span>
        </button> */}
        <nav class="sidebar-navs">
            <a href="/admin/galeriepub" class="sidebar-items">
                <span class="sidebar-icons">&#128247;</span> 
                <span class="sidebar-titles">Galerie</span>
            </a>
            <a href="/admin/publiciter" class="sidebar-items">
                <span class="sidebar-icons">&#128226;</span> 
                <span class="sidebar-titles">Publicité</span>
            </a>
            <a href="/admin/fichier" class="sidebar-items">
                <span class="sidebar-icons">&#128196;</span> 
                <span class="sidebar-titles">import Fichier</span>
            </a>
            <a href="/admin/client" class="sidebar-items">
                <span class="sidebar-icons">&#128172;</span> 
                <span class="sidebar-titles">Avis Client</span>
            </a>
            <a href="/admin/artisan" class="sidebar-items">
                <span class="sidebar-icons">&#128172;</span> 
                <span class="sidebar-titles">Contact Artisans</span>
            </a>
            <a href="/admin/liste" class="sidebar-items">
                <span class="sidebar-icons">&#128203;</span> 
                <span class="sidebar-titles">Liste Artisans</span>
            </a>
            <a href="/admin/carte" class="sidebar-items">
            <span style={{ fontSize: '20px' }}>🗺️</span> 
                <span class="sidebar-titles">Artisans Sur La Carte</span>
            </a>
        </nav>
        <div className="sidebar-footers">
                    <a href="/admin/inscription" className="sidebar-items sidebar-signups">
                        <span className="sidebar-icons">&#128100;</span> 
                        <span className="sidebar-title">Inscription</span>
                    </a>
                    <a href={`/admin/edit/${Id}`} className="sidebar-items sidebar-edit-profiles">
                        <span className="sidebar-icons">&#9998;</span> 
                        <span className="sidebar-title">Éditer Profil</span>
                    </a>
                    <a href="#" onClick={deconnexion} className="sidebar-items sidebar-logouts">
                        <span className="sidebar-icons">&#128682;</span> 
                        <span className="sidebar-titles" >Déconnexion</span>
                    </a>
                </div>
    </div>
    
        </>
    );
};

export default Sidebar;