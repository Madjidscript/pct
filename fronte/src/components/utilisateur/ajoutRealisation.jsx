import React, { useState } from 'react';
import "./css/connexion.css";
import {  NavLink} from "react-router-dom";


const AjoutRealisation = (props) => {
    const [formdata,setformdata]=useState({
        titre:"",
        image:""
    })
    const handlchange = (e)=>{
        setformdata({
            ...formdata,
            [e.target.name]:e.target.value
        })
    }
    const handlsubmit =(e)=>{
            e.preventDefault()
            console.log("les donner du formulaire",formdata)
            setformdata({
                titre:"",
                image:""
            })
    }
    return ( 
        <>
        <div className="card">
        <h2>Ajout Realisation</h2>

            
        <div className="login_register">
            <NavLink to="/artisan/realisation/:id" className="login" >Realisation</NavLink>
            <NavLink to="/artisan/profil/:id" className="registers"   >Profil</NavLink>
        </div>
         
        <form method='POST' className="form" onSubmit={handlsubmit}>
            <input type="text"  placeholder="Entre le titre de la realisation" className="email" name='titre' value={formdata.titre} onChange={handlchange} required />
            <input type="file" placeholder="entrer votre image" className="password" name='image' value={formdata.image} onChange={handlchange} required/>
            <button className="login_btn">Validez</button>
        </form>

        <div className="footer_card">
        <p>NB: <strong>remplie tout les champs</strong> </p>
        
        </div>
    </div>
    </>
    );
};
    
export default AjoutRealisation;