import { Route,Routes,BrowserRouter } from "react-router-dom";
import UtilisateurRouter from "../src/components/utilisateur/utilisteurRouter";
import ArtisanRouter from "../src/components/utilisateur/artisanRouter";
import Loader from "./components/utilisateur/loader";
function App() {
 

  return (
    <>
    
     <BrowserRouter>
     <Loader/>
    
    <Routes>
      <Route path="/*" element={<UtilisateurRouter/>} />
      <Route path="/artisan/*" element={<ArtisanRouter/>} />
    </Routes>
    
    </BrowserRouter> 
   
      
    </>
  )
}

export default App
