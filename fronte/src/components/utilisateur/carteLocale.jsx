

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const LocalisationMap = ({ latitude, longitude }) => {
    const [places, setPlaces] = useState([]);

    const customIcon = new L.Icon({
        iconUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon.png', // Remplacez par l'URL de votre icône
        iconSize: [32, 32], // Taille de l'icône (largeur, hauteur)
        iconAnchor: [16, 32], // Point de l'icône qui correspond à la position du marqueur
        popupAnchor: [0, -32] // Point de l'icône où le popup doit apparaître
    });

    useEffect(() => {
        const fetchData = async () => {
            if (latitude && longitude) {
                try {
                    const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
                    const { address } = response.data;
                    const { town, city, village, suburb } = address;
                    const placesNearby = [town, city, village, suburb].filter(place => place !== undefined);
                    setPlaces(placesNearby);
                } catch (error) {
                    console.error('Error fetching places:', error);
                }
            }
        };

        fetchData();
    }, [latitude, longitude]);

    const position = [latitude, longitude];
    const position2=[7.54, -5.55]

    return (
        <MapContainer center={position2} zoom={6} style={{ height: '400px', width: '100%' }}>
            <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* <Marker position={position}>
                <Popup>
                    Ta localisation
                </Popup>
            </Marker> */}

            {places.map((place, index) => (
                <Marker key={index} position={position}  icon={customIcon}>
                    <Popup>Ma position est {place}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default LocalisationMap;

