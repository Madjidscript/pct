import React from 'react';
import Abonnement from "./abonnement";
import Acceuil from './acceuilArtisan';
import Edit from "./editprofil"
import Contact2 from './contact2';
import Error from "../utils/erors"
import Profil from './profil';
import AjoutRealisation from './ajoutRealisation';
import {Route,Routes  } from "react-router-dom";
const ArtisanRouter = (props) => {
    return (
        
        <div>
            <Routes>
                <Route path='abonnement' element= {<Abonnement/>} />
                <Route index element= {<Acceuil/>} />
                <Route path='/realisation/:id' element= {<AjoutRealisation/>} />
                <Route path='contact' element= {<Contact2/>} />
                <Route path='profil/:id' element= {<Profil/>} />
                <Route path='/edit/:id' element= {<Edit/>}/>
                <Route path='*' element= {<Error/>} />
            </Routes>

        </div>
    );
};

export default ArtisanRouter;