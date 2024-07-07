import React from 'react';
import './css/profil.css';
import {  NavLink} from "react-router-dom";
const Profil = (props) => {
    return (
        
        <>
        <div className="landing">
    <div className="profile">
     <div className="left">
       <div className="img">
        <img src="https://i.postimg.cc/9wbwLtkT/avatar-05.png" alt="avatar-05"/>
       </div>
      {/* <p className="level">level <span>8</span></p>
      <p className="lev"></p>
      <p className="des"><span>25</span> Points to the Next Level</p> */}
     </div>
     <div className="right">
      <h3>Non de l'artelier</h3>
      <p className="desc">
      Avec plus de <strong>années</strong>d'expérience dans la <strong>Metier</strong>,
      <strong>Non de lartisan</strong> vous accueille du lundi au samedi,
       de <strong>heure d'ouverture</strong> à <strong>heure de fermeture</strong>, à son atelier à <strong>ville</strong>.
      Basé à <strong>comune</strong>.
      Pour toute commande ou conseil, contactez-le au :
      <strong>+33 6 12 34 56 78 (WhatsApp disponible)</strong>.
      </p>
      <p className="last"><span>E-</span>Artisan</p>
     </div>
    </div>
    {/* <div className="points container">
      <h3>infos</h3>
      <p className="first">Nom<span> 25 </span> Points For <span>Comleting Quest</span> #118</p>
      <p className="sec">Got<span> 210 </span> Points For <span>Passing Hunting Exam</span> Three</p>
      <p className="third">Got<span> 50 </span> Points For <span>Comleting Quest</span> #82</p>
    </div> */}
    <div className="trophies  container">
      <h3>galerie</h3>
      <div className="images">
        
        <img src="https://i.postimg.cc/fVLmgpDb/avatar-01.png" alt=""/>
        <img src="https://i.postimg.cc/9wbwLtkT/avatar-05.png" alt=""/>
        <img className="intrupt" src="https://i.postimg.cc/bSp20Fmp/avatar-06.png" alt=""/>
        <img src="https://i.postimg.cc/bSp20Fmp/avatar-06.png" alt=""/>
      </div>
    </div>
    <div className="ladder  container">
      <h3><NavLink to="/" style={{marginLeft:"4px"}}>Acceuil</NavLink></h3>
      
      
    </div>
   
  </div>
        </>
    );
};

export default Profil;