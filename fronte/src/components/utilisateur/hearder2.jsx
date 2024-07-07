import React from 'react';
import {  useState} from "react";
import {  NavLink} from "react-router-dom";
//import '@fortawesome/fontawesome-free/css/all.css';
import "./css/hearder.css"



const Hearder2 = (props) => {
    

  const [click, setClick] =useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  
  return (
    <>
    
    <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
          E-artisan
            <i className="fa fa-code"></i>
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/artisan/"
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
                contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/artisan/abonnement"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                abonnement
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink
                exact
                to="/artisan/profil/:id"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                Profil
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/artisan/connexion"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
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