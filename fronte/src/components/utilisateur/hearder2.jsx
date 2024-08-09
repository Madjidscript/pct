import React from 'react';
import {useEffect,useState} from "react";
import {  NavLink ,useNavigate} from "react-router-dom";
//import '@fortawesome/fontawesome-free/css/all.css';
import { LocalService } from "../../service/local";
import "./css/hearder.css"
import Logo from "../../assets/logo.svg"




const Hearder2 = (props) => {

  const [Nom,setNom]= useState("")
  const [Id,setid]= useState("")



  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("Artisan"));
    
    if (local) {
      console.log("aslam hooo", local.nom,"mon id hoo",local._id);
      setNom(local.nom);
      setid(local._id)
    }
  }, []);
  console.log("mon id",Nom,Id)

  const navigate=useNavigate()
  const deconnexion = () => {
    LocalService.deconnexion()
    navigate("/");
  };
  const [click, setClick] =useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  
  return (
    <>
    
    <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
          
          <span><img src={Logo} alt="" className='logo'/></span>
            
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/artisan"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/artisan/contact"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                reclamation client
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/artisan/abonnement"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                abonnement
              </NavLink>
            </li> */}
            
            <li className="nav-item">
              <NavLink
                exact
                to={`/artisan/profil/${Id}`}
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                Profil:{Nom}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/artisan/connexion"
                activeClassName="active"
                className="nav-links"
               onClick={deconnexion}
               
              >
                Deconnexion
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    
    </>
   
     
  );
        
        
      
 }


export default Hearder2;