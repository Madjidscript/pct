import React from 'react';
import "../utilisateur/css/learning.css"
import Hearder from "./hearder"
import Footer from "./footer"

const Learning = (props) => {
    return (
      <>
        <Hearder/>
        
        <div className='roots'>
    <div className="headerss">
      <div className="header-content">
        <h1>Comment utiliser la Plateforme</h1>
        <p>
          Apprenez à naviguer et à tirer le meilleur parti de notre plateforme
          de promotion des artisans.
        </p>
      </div>
    </div>

    <section className="learning-content">
      <h2>Vidéo Tutoriel</h2>
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/c9UzIr11HH4"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <h2 className="tt" style={{marginTop:"10px"}} >Instructions Étape par Étape</h2>
      <div className="steps">
        
        <h3>1. Parcourir les Artisans</h3>
        <p>
          Utilisez notre moteur de recherche pour trouver des artisans par
          catégorie .
        </p>
        <h3>2. Contacter un Artisan</h3>
        <p>
          Lorsque vous trouvez un artisan qui vous intéresse, cliquez sur son
          profil pour voir ses coordonnées et le contacter directement.
        </p>
        <h3>3. Laisser un Avis</h3>
        <p>
          Après avoir utilisé les services d'un artisan, laissez un avis pour
          aider les autres utilisateurs à faire leur choix.
        </p>
      </div>
    </section>
    </div>
   
    
    
    <Footer/>
    </>
     
    );
};

export default Learning;