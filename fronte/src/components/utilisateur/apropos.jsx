import React from 'react';
import "../utilisateur/css/apropos.css"
import Hearder from "./hearder"
import Footer from "./footer"
const Apropos = (props) => {
    return (
        
        <>
        <Hearder/>

            <div className="rootss">
      <header>
       
        <div className="header-content">
        
          <h1>À Propos de Nous</h1>
          <p className='pct' style={{color:"white"}}>Découvrez notre mission, vision et l'impact que nous avons sur les artisans en Côte d'Ivoire et au-delà.</p>
        </div>
       
      </header>

      <main>
        <section className="about-section">
          <div className="container">
            <div className="about-text">
              <h2>Notre Mission</h2>
              <p>Nous valorisons le travail des artisans ivoiriens et soutenons le développement économique en mettant en avant leurs compétences et leur savoir-faire.</p>
            </div>
            <div className="about-text">
              <h2>Notre Vision</h2>
              <p>Nous envisageons un avenir où les artisans de Côte d'Ivoire, du Sénégal et du Ghana accèdent facilement à un marché élargi, augmentent leurs revenus et améliorent leur qualité de vie.</p>
            </div>
            <div className="about-text">
              <h2>Notre Impact</h2>
              <p>Nous catalysons la croissance économique, créons des emplois, notamment pour les jeunes et les femmes, et améliorons l'inclusion économique à travers nos services.</p>
            </div>
            <div className="about-text">
              <h2>Notre Équipe</h2>
              <p>Une équipe passionnée et dévouée, déterminée à faire une différence dans la vie des artisans et des communautés que nous servons.</p>
            </div>
          </div>
        </section>
      </main>

     
    </div>
        <Footer/>
        </>
    );
};

export default Apropos;