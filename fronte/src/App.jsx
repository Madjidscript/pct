import { Route,Routes,BrowserRouter } from "react-router-dom";
import UtilisateurRouter from "../src/components/utilisateur/utilisteurRouter";
import ArtisanRouter from "../src/components/utilisateur/artisanRouter";
import AdminRouter from "../src/components/admin/adminRouter";
import Loader from "./components/utilisateur/loader";
import Securite from "./service/securite/securitePage";
import Securite2 from "./service/securite/securiterAdmin";
import React, { useState, useEffect } from 'react';
import Ss from "../src/components/utilisateur/css/style.module.css"
function App() {
 
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simuler le chargement de la page
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000); // Ajustez le délai si nécessaire

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    
     <BrowserRouter>
     {!isLoaded && <Loader />} {/* Affiche le loader tant que isLoaded est false */}
    
    <Routes>
      <Route path="/*" element={<UtilisateurRouter/>} />
      <Route path="/artisan/*" element={
        <Securite>
         <ArtisanRouter/>
        </Securite>
        } />
       
       <Route path="/admin/*" element={
        <Securite2>
            <AdminRouter/>
         </Securite2>
        }></Route>
       
      </Routes>
      
    </BrowserRouter> 
   
      
    </>
  )
}

export default App
