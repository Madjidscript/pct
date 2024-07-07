import React from 'react';
import {  useState} from "react";
import {  NavLink} from "react-router-dom";
//import '@fortawesome/fontawesome-free/css/all.css';
import "./css/hearder.css"



const Hearder = (props) => {
    

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
           
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Acceuil
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/apropos"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Apropos
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/connexion"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                se connecter
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


export default Hearder;