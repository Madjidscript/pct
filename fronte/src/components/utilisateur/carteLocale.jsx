// LocalisationMap.js
// import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

// const LocalisationMap = ({ latitude, longitude }) => {
//     const position = [latitude, longitude];

//     return (
//         <MapContainer center={position} zoom={16} style={{ height: '400px', width: '100%' }}>
//             <TileLayer
//                 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             />
//             <Marker position={position}>
//                 <Popup>
//                     Ta localisation.
//                 </Popup>
//             </Marker>
//         </MapContainer>
//     );
// };

// export default LocalisationMap;

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';

const LocalisationMap = ({ latitude, longitude }) => {
    const [places, setPlaces] = useState([]);

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
            <Marker position={position}>
                <Popup>
                    Ta localisation
                </Popup>
            </Marker>

            {places.map((place, index) => (
                <Marker key={index} position={position}>
                    <Popup>Ma position est {place}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default LocalisationMap;

