import React, { useEffect, useState } from 'react';
import './css/loader.css';

const Loader = (props) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Écouteur d'événement pour détecter le chargement complet de la page
        const handleLoad = () => {
            // Mettre à jour l'état pour indiquer que la page est chargée
            setLoaded(true);
        };

        // Ajouter l'écouteur d'événement à window
        window.addEventListener('load', handleLoad);

        // Nettoyage : retirer l'écouteur d'événement lors du démontage du composant
        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    return (
        <div className={`body ${loaded ? 'loaded' : ''}`}>
            <div className='loader loader1'></div>
            <div className='loader loader2'></div>
            <div className='loader loader3'></div>
            <div className='loader loader4'></div>
            <div className='loader loader5'></div>
        </div>
    );
};

export default Loader;
