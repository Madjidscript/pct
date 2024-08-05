import { Route,Routes,BrowserRouter } from "react-router-dom";
import UtilisateurRouter from "../src/components/utilisateur/utilisteurRouter";
import ArtisanRouter from "../src/components/utilisateur/artisanRouter";
import AdminRouter from "../src/components/admin/adminRouter";
import Loader from "./components/utilisateur/loader";
import Securite from "./service/securite/securitePage";
import Securite2 from "./service/securite/securiterAdmin";
import Ss from "../src/components/utilisateur/css/style.module.css"
function App() {
 

  return (
    <>
    
     <BrowserRouter>
    
    
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
