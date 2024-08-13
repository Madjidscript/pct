import React, { useState, useEffect } from "react";
import Header from "./hearder";
import Footer from "./footer";
import RechercheAcceuil1 from "./rechercheAcceuil";
import Modal from "react-modal";
import "../utilisateur/css/anime.css"
import Axios from "../../service/apiService";
import Card from "./card";
import Service from "./service";
import Slide from "./slide";
import { CalculDistance } from "../utils/distance";
import Equipe from "./equipe"
Modal.setAppElement("#root");

const Acceuil = () => {
  const [metierInput, setMetierInput] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [searchData, setSearchData] = useState({});
  const [filteredArtisans, setFilteredArtisans] = useState([]);
  const [filteredMetiers, setFilteredMetiers] = useState([]);
  const [data, setdata] = useState([]);
  const [message, setmessage] = useState("");

  // useEffect(() => {
  //   fetchArtisans();
  // }, []);
  // const fetchArtisans = async () => {
  //   console.log(searchData);
  //   await Axios.get(`/artisan2/${metierInput}`)
  //     .then((response) => {
  //       console.log("Artisans récupérés", response.data.Artisan);
  //       setFilteredArtisans(response.data.Artisan); // Met à jour les artisans filtrés
  //     })
  //     .catch((error) => {
  //       console.log(
  //         "Erreur lors de la récupération des artisans depuis l'API",
  //         error
  //       );
  //     });
  // };

  const openModal = (data) => {
    setSearchData(data);
    console.log("ceci est un test ", data);
    setModalIsOpen(true);
  };

  useEffect(() => {
    Axios.get("/artisan")
      .then((response) => {
        setdata(response.data.Artisan);
      })
      .catch((error) => {
        console.log("mon eereur dans recherche Artisan Api", error);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await Axios.get("/artisan")
      .then((response) => {
        setdata(response.data.Artisan);
      })
      .catch((error) => {
        console.log("mon eereur dans recherche Artisan Api", error);
      });
  };
  let metiersList = data.map((element) => {
    console.log("mes metier", element.metier);
    return element.metier;
  });

  let uniqueMetiersList = [...new Set(metiersList)];
  const closeModal = () => {
    setModalIsOpen(false);
  };

  // Fonction pour sélectionner un métier
  const selectMetier = (metier) => {
    setMetierInput(metier);
    setFilteredMetiers([]);
  };
  //Fonction pour gérer l'entrée des métiers
  const handleMetierChange = (e) => {
    const value = e.target.value;
    setMetierInput(value);
    const filtered = uniqueMetiersList.filter((metier) =>
      metier.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredMetiers(filtered);
    console.log("mes metier filtrer", filteredMetiers);
  };

  // Fonction pour sélectionner une localité
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    if (metierInput) {
      const serchData = {
        metier: metierInput,
        //localite:localiteInput
      };
      openModal(serchData); // Appel à openModal si les champs sont remplis
    } else {
      // Gérer le cas où les champs ne sont pas remplis (optionnel)
      console.log("Veuillez remplir tous les champs.");
      setmessage("Veuillez remplir tous les champs.");
    }
    const fetchArtisans = async () => {
      try {
        const response = await Axios.get(`/artisan2/${metierInput}`);
        console.log("Artisans récupérés", response.data.Artisan);

        // Utilisation de Promise.all pour attendre toutes les distances calculées
        const artisansWithDistance = await Promise.all(
          response.data.Artisan.map(async (artisan) => {
            const distance = await CalculDistance(artisan.altitude, artisan.longitude);
            return { ...artisan, distance }; // Ajouter la distance calculée à l'objet artisan
          })
        );

        // Tri des artisans par distance croissante
        artisansWithDistance.sort((a, b) => a.distance - b.distance);

        // Mise à jour de l'état avec les artisans triés
        setFilteredArtisans(artisansWithDistance);
        console.log("Données filtrées", artisansWithDistance);
      } catch (error) {
        console.error("Erreur lors de la récupération des artisans depuis l'API", error);
      }
    };

    fetchArtisans();
    setMetierInput("");
    setFilteredMetiers([]);
  };

  function formatDistance(distanceKm) {
    if (distanceKm >= 1) {
      // Si la distance est supérieure ou égale à 1 km, la formater avec 2 décimales
      return `${distanceKm.toFixed(2)} km`;
    } else {
      // Si la distance est inférieure à 1 km, la convertir en mètres
      const distanceMeters = distanceKm * 1000;
      return `${distanceMeters.toFixed()} m`;
    }
  }
  
  return (
    <>
      <Header />
      {/* <RechercheAcceuil1 openModal={openModal} /> */}
      <section className="hero">
        <h1 className="txt">Retrouvez un artisan Chap Chap</h1>
        <p style={{ color: "red" }}> {message} </p>
        <div className="search-bar">
          <form className="search-input">
            <input
              type="text"
              placeholder="Métiers"
              value={metierInput}
              onChange={handleMetierChange}
              required
            />
            {filteredMetiers.length > 0 && (
              <ul className="suggestions">
                {filteredMetiers.map((metier, index) => (
                  <li key={index} onClick={() => selectMetier(metier)}>
                    {metier}
                  </li>
                ))}
              </ul>
            )}
          </form>
          <button onClick={handleFormSubmit} disabled={!metierInput}>
            Valider
          </button>
        </div>
      </section>
      <Service />
      <Slide />
      
      <Equipe />


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
              // .filter((artisan) => {
              //   // Filtrer par métier (si spécifié dans searchData)
              //   const isMetierMatch = searchData.metier
              //     ? artisan.metier.toLowerCase().includes(searchData.metier.toLowerCase())
              //     : true;

              //   // Vous pouvez ajouter ici la logique de filtrage supplémentaire par distance si nécessaire

              //   return isMetierMatch;
              // })
              .slice(0, 15)
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
                  distance={formatDistance(artisan.distance)}
                />
              ))}
          </ul>
        </div>
      </Modal>
    </>
  );
};

export default Acceuil;
