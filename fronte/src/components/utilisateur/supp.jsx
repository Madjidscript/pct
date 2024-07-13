import { useEffect, useState } from 'react'
import './css/rechercheAcceuil.css'
import Axios from '../../service/apiService';

function RecercheAcceuil2({openModal}) {
    
 
  const [metierInput, setMetierInput] = useState('');
  const [localiteInput, setLocaliteInput] = useState('');
  const [filteredMetiers, setFilteredMetiers] = useState([]);
  const [filteredLocalites, setFilteredLocalites] = useState([]);
  const [message, setmessage] = useState("");
  const[data,setdata]=useState([])
  const[metier,setmetier]=useState([])
  const[local,setlocal]=useState([])
  const [longitudes ,setlongitudes]=useState("")
  const [latitudes ,setlatitudes]=useState("")

  const [latitudesArtisan, setLatitudesArtisan] = useState([]);
  const [longitudesArtisan, setLongitudesArtisan] = useState([]);


  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
        console.log(position)
        const maposition = position
        setlatitudes(maposition.coords.latitude)
        setlongitudes(maposition.coords.longitude)
        console.log("mon latitude",setlatitudes);

    })
   
},[])

  useEffect(()=>{
    Axios.get("/artisan")
    .then((response)=>{
    console.log('mon artisant',response.data.Artisan);
   setdata(response.data.Artisan)
   
   const altitudes = response.data.Artisan.map((element) => element.altitude);
    const longitudes = response.data.Artisan.map((element) => element.longitude);

        setLatitudesArtisan(altitudes);
        setLongitudesArtisan(longitudes);
   
  })
  .catch((error)=>{
    console.log("mon eereur dans recherche Artisan Api",error);
  })
  },[])

  let metiersList= data.map((element)=>{
    console.log("mes metier",element.metier)
    return element.metier
  
  })
  let uniqueMetiersList = [...new Set(metiersList)];
  //ses deux fonction permet d'enlever les doublons dans mon tb
  // let localitesList= data.map((element)=>{
  //   console.log("mes metier",element.comune)
  //   return element.comune
  
  // })
  // let uniqueLocallist = [...new Set(localitesList)];
  // console.log('mescomune',localitesList)

  console.log("altitudeclien",latitudes,"longitudeclien",longitudes)
  console.log("altitudeartisan",latitudesArtisan,"longitudeartisan",longitudesArtisan)
 
  
  
  //listes des métiers et localités
 
  

  //Fonction pour gérer l'entrée des métiers
  const handleMetierChange = (e) => {
    const value = e.target.value;
        setMetierInput(value);
    const filtered = uniqueMetiersList.filter((metier) =>
      metier.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredMetiers(filtered);
    
  };

  // Fonction pour gérer l'entrée des localités
  // const handleLocaliteChange = (e) => {
  //   const value = e.target.value;
  //   setLocaliteInput(value);
  //   const filtered = uniqueLocallist.filter((localite) =>
  //     localite.toLowerCase().includes(value.toLowerCase())
  //   );
  //   setFilteredLocalites(filtered);
    
  // };

  // Fonction pour sélectionner un métier
  const selectMetier = (metier) => {
    setMetierInput(metier);
    setFilteredMetiers([]);
  };

  // Fonction pour sélectionner une localité
  // const selectLocalite = (localite) => {
  //   setLocaliteInput(localite);
  //   setFilteredLocalites([]);
  // };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    if (metierInput ) {
      const serchData={
        metier:metierInput,
        //localite:localiteInput
      }
      openModal(serchData); // Appel à openModal si les champs sont remplis
    } else {
      // Gérer le cas où les champs ne sont pas remplis (optionnel)
      console.log("Veuillez remplir tous les champs.");
      setmessage("Veuillez remplir tous les champs.")
    }
    setMetierInput("")
    //setLocaliteInput("")
    //setFilteredLocalites([])
    setFilteredMetiers([])
  };

  return (
    <>
    
        <section className="hero">
            <h1>Retrouvez un artisan Chap Chap</h1>
             <p style={{color:"red"}}> {message} </p>
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
                {/* <form className="search-input">
                    <input
                        type="text"
                        placeholder="Localité"
                        value={localiteInput}
                        onChange={handleLocaliteChange}
                        required
                    />
                {filteredLocalites.length > 0 && (
                    <ul className="suggestions">
                        {filteredLocalites.map((localite, index) => (
                            <li key={index} onClick={() => selectLocalite(localite)}>
                                {localite}
                            </li>
                        ))}
                    </ul>
                )}
                </form> */}
                    <button onClick={handleFormSubmit} disabled={!metierInput }>Valider</button>
                </div>
        </section>
    </>
  )
}

export default RecercheAcceuil2



            