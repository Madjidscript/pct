import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LocalService } from "../local2";

const Securite = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Vérifie si l'utilisateur est authentifié en utilisant LocalService.local()
    if (!LocalService.local()) {
      // Si non authentifié, redirige vers la page de connexion
      navigate("/connexion2");
    } else {
      // Si authentifié, autorise l'accès au contenu
      setIsAuthenticated(true);
    }
  }, [navigate]); // Ajouter navigate comme dépendance pour éviter les avertissements

  // Affiche le contenu seulement si l'utilisateur est authentifié
  return isAuthenticated ? <>{children}</> : null;
};

export default Securite;
