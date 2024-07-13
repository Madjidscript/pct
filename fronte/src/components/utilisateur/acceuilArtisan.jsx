// Acceuil.js
import React, { useState, useEffect } from 'react';
import Header from './hearder2';
import Footer from './footer';
import RechercheAcceuil from './rechercheAcceuil';
import Modal from 'react-modal';
import Axios from '../../service/apiService';
import Card from './card';

Modal.setAppElement('#root');

const Acceuil = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [searchData, setSearchData] = useState({});
  const [filteredArtisans, setFilteredArtisans] = useState([]);

  useEffect(() => {
    fetchArtisans();
  }, []);

  const fetchArtisans = () => {
    Axios.get('/artisan')
      .then((response) => {
        console.log('Artisans récupérés', response.data.Artisan);
        setFilteredArtisans(response.data.Artisan); // Met à jour les artisans filtrés
      })
      .catch((error) => {
        console.log("Erreur lors de la récupération des artisans depuis l'API", error);
      });
  };

  const openModal = (data) => {
    setSearchData(data);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <Header />
      <RechercheAcceuil openModal={openModal} />
      {/* Autres composants à intégrer ici */}
      <Footer />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal de Liste des Artisans"
        className="modals"
        overlayClassName="Modal-Overlay"
      >
        <h2>Liste des Artisans</h2>
        <button className="bt" onClick={closeModal}>
          Fermer
        </button>
        <div className="modal-content">
          <ul className="modal-list">
            {filteredArtisans
              .filter((artisan) => {
                // Filtrer par métier (si spécifié dans searchData)
                const isMetierMatch = searchData.metier
                  ? artisan.metier.toLowerCase().includes(searchData.metier.toLowerCase())
                  : true;

                // Filtrer par distance (500 mètres)
                // Vous devez intégrer ici la logique de distance basée sur les coordonnées géographiques (latitude/longitude)
                // Je vous recommande d'ajouter la logique de distance comme indiqué précédemment

                return isMetierMatch;
              })
              .map((artisan, index) => (
                <Card
                  key={index}
                  backgroundColor="#FFE6E6"
                  id={artisan._id}
                  imgSrc={artisan.image}
                  title={artisan.nom}
                  metier={artisan.metier}
                  originalPrice={artisan.comune}
                  discountedPrice={artisan.ville}
                  phoneNumber={artisan.tel}
                />
              ))}
          </ul>
        </div>
      </Modal>
    </>
  );
};

export default Acceuil;
