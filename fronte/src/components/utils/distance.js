import * as turf from "@turf/turf";

export const CalculDistance = (latitude, longitude) => {
  // Obtenir la position géographique actuelle
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Coordonnées du client
        const clientLat = position.coords.latitude;
        const clientLong = position.coords.longitude;
        
        // Création des points Turf.js
        const point1 = turf.point([clientLong, clientLat]);
        const point2 = turf.point([longitude, latitude]);
        
        // Options pour le calcul de la distance
        const options = { units: "kilometers" };
        
        // Calcul de la distance
        const distance = turf.distance(point1, point2, options);
        
        resolve(distance);
      },
      (error) => {
        reject(error);
      }
    );
  });
};
