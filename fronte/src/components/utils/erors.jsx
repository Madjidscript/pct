import React from 'react';
import LOgo from "../../assets/logo.svg"
import "../utilisateur/css/error.css"
const Error = (props) => {
    return (
        
        
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8 madjid " >
            <div className="max-w-lg mx-auto text-center">
                <div className="pb-6">
                    <img src={LOgo} width={300} className="mx-auto" />
                </div>
                <h3 className="text-gray-800 text-4xl font-semibold sm:text-5xl">
                Page non trouvée
                </h3>
                <p className="text-gray-600 mt-3">
                Désolé, la page que vous recherchez n'a pas pu être trouvée ou a été supprimée.
                </p>
            </div>
        </div>
    );
};

export default Error;