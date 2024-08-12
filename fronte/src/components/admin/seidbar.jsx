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
          console.log("aslam hooo", local.nom,"mon id hoo",local._id,"mon image",local.image.replace(/\\/g, '/'));
          setNom(local.nom);
          setid(local._id)
          setimage(domain + local.image.replace(/\\/g, '/'))
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
        <h3 class="sidebar-logos"><img src={logo} alt=""  /></h3>
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
                <span class="sidebar-titles">Réclamation Client</span>
            </a>
            <a href="/admin/artisan" class="sidebar-items">
                <span class="sidebar-icons">&#128172;</span> 
                <span class="sidebar-titles">Réclamation Artisans</span>
            </a>
            <a href="/admin/liste" class="sidebar-items">
                <span class="sidebar-icons">&#128203;</span> 
                <span class="sidebar-titles">Liste Artisans</span>
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
    {/* <div class="main-content">
        <h1>Bienvenue dans l'Application</h1>
        <p>Contenu principal ici</p>
    </div> */}
        </>
    );
};

export default Sidebar;