import { Route,Routes,BrowserRouter } from "react-router-dom";
import UtilisateurRouter from "../src/components/utilisateur/utilisteurRouter";
import ArtisanRouter from "../src/components/utilisateur/artisanRouter";
import Loader from "./components/utilisateur/loader";
import Securite from "./service/securite/securitePage";
function App() {
 

  return (
    <>
    
     <BrowserRouter>
     <Loader/>
    
    <Routes>
      <Route path="/*" element={<UtilisateurRouter/>} />
      <Route path="/artisan/*" element={
        <Securite>
         <ArtisanRouter/>
        </Securite>
        } />
      </Routes>
    
    </BrowserRouter> 
   
      
    </>
  )
}

export default App
