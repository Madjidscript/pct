import React from 'react';
import Acceuil from './acceuil';
import Apropos from './apropos';
import Connexion from './connexion';
import Contact from './contact';
import Error from "../utils/erors"
import Inscription from './inscription';
import Profil from './profil2';
import {Route,Routes  } from "react-router-dom";
const UtilisatruRouter = (props) => {
    return (
        
        <div>
            <Routes>
                <Route index element= {<Acceuil/>} />
                <Route path='apropos' element= {<Apropos/>} />
                <Route path='connexion' element= {<Connexion/>} />
                <Route path='contact' element= {<Contact/>} />
                <Route path='profil/:id' element= {<Profil/>} />
                <Route path='inscription' element= {<Inscription/>} />
                <Route path='*' element= {<Error/>} />
            </Routes>

        </div>
    );
};

export default UtilisatruRouter;