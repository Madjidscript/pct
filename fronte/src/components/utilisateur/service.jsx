import React from 'react';
import "./css/service.css"
const Service = (props) => {
    return (
        <>
        <div className="heard">
          <div className="bott">
           <p className="testo">Nos Services</p>
           <p className="testo">Nos Services</p>
           
          </div>
        </div>
        <div class="containers">
          
          <div class="boxs" id="box1">
            <div class="service">
               <i class="fas fa-user-cog icon"></i>
               <h3>Inscription et Connexion des Artisans</h3>
              <p class="service-description">
                Permet aux artisans de s'inscrire et de se connecter à leurs comptes.
               Ils peuvent gérer leur profil, leurs réalisations et leurs informations personnelles.
              </p>
            </div>

          </div>
          <div class="boxs" id="box2">
          <div class="service">
          <i class="fas fa-user-cog icon"></i>
              <h3>Gestion des Réalisations sur le Profil</h3>
              <p class="service-description">
               Permet aux artisans d'ajouter et de gérer leurs réalisations sur leur profil.
               Ils peuvent télécharger des images, ajouter des descriptions et mettre à jour leurs réalisations.
              </p>
           </div>
          </div>
          <div class="boxs" id="box3">
            <div class="service">
                <i class="fas fa-envelope icon"></i>
                <h3>Contact et Réclamations pour les Clients</h3>
                <p class="service-description">
                    Permet aux clients de contacter les artisans pour des projets et de faire des réclamations si nécessaire.
                    Les artisans peuvent gérer leurs demandes de clients et améliorer leur service clientèle.
                </p>
            </div>

          </div>
        </div>
        
        <div className="bott" id="temoi" >
           <p className="testo">Temoignages</p>
           <p className="testo">Temoignages</p>
        </div>
        <section class="testimonials">
        <div class="testimonials-content">
          <div class="question-mark">?</div>
          <p>Les témoignages seront bientôt disponibles !</p>
        </div>
      </section>
        
        </>
    );
};

export default Service;