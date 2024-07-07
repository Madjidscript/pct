import React from 'react';
import {useState,useEffect} from "react"
import Hearder from "./hearder";
import Footer from "./footer"
import RechercheAcceuil from './rechercheAcceuil';
import Modal from "react-modal"
import Card  from "./card"
import Axios from '../../service/apiService';
const Acceuil = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [searchData, setSearchData] = useState({});
    const [filteredArtisans, setFilteredArtisans] = useState([]);

    const fetchArtisans = () => {
      Axios.get("/artisan")
        .then((response) => {
          console.log('Artisans récupérés', response.data.Artisan);
          setFilteredArtisans(response.data.Artisan); // Met à jour les artisans filtrés
        })
        .catch((error) => {
          console.log("Erreur lors de la récupération des artisans depuis l'API", error);
        });
    };
    useEffect(() => {
      fetchArtisans();
    }, []);

  const openModal = (data) => {
    setSearchData(data)
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
    return (
        
        <>
            <Hearder></Hearder>
            <RechercheAcceuil openModal={openModal} />
            
            <Footer></Footer>
               <Modal
                 isOpen={modalIsOpen}
                 onRequestClose={closeModal}
                 contentLabel="Example Modal"
                 className="modal"
                 overlayClassName="Modal-Overlay"
             >
        <h2>Liste des Artisans</h2>
        <button onClick={closeModal}>Fermer</button>
        <div className="modal-content">
        <ul className="modal-list">
  {filteredArtisans
    .filter((artisan) => {
      // Assurez-vous que artisan.comune et searchData.comune sont définis avant d'appeler toLowerCase()
      const isMetierMatch = searchData.metier ? artisan.metier.toLowerCase().includes(searchData.metier.toLowerCase()) : true;
      const isLocaliteMatch = searchData.comune ? artisan.comune.toLowerCase().includes(searchData.comune.toLowerCase()) : true;
      return isMetierMatch && isLocaliteMatch;
    })
    .map((artisan, index) => (
      <Card
        key={index}
        backgroundColor="#FFE6E6"
        title={artisan.nom}
        metier={artisan.metier}
        originalPrice={artisan.comune} // Vous devez remplacer cette valeur par la propriété correcte de votre artisan
        discountedPrice={artisan.ville} // Vous devez remplacer cette valeur par la propriété correcte de votre artisan
      />
    ))}
</ul>
        </div>
      </Modal>   
    </>
  );
}

 Modal.setAppElement('#root'); 



export default Acceuil;