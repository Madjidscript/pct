import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Connexion from "./connexion";
import Inscription from "./inscription";
import Publicite from "./publiciter";
import ReclClient from "./reclamatinClient";
import ReclArtisant from "./reclamationArtisan"
import Error from "../utils/erors"

const AdminRouter = (props) => {
    return (
        
        <>
        <Routes>
            <Route index element={<Connexion/>} ></Route>
            <Route path='/connexion' element={<Connexion/>} ></Route>
            <Route path='/inscription' element={<Inscription/>}></Route>
            <Route path='/publiciter' element={<Publicite/>}></Route>
            <Route path='/client' element={<ReclClient/>}></Route>
            <Route path='/artisan' element= {<ReclArtisant/>}></Route>
            <Route path='*' element={<Error/>}></Route>
        </Routes>
        </>
    );
};

export default AdminRouter;