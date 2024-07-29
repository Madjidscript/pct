import React from 'react';
import "./css/footer.css";

const Footer = (props) => {
    return (
        
        <>
            <footer>
    <div className="content">
      <div className="top">
        <div className="logo-details">
          <i className="fab fa-slack"></i>
          <span className="logo_name">E-artisans</span>
        </div>
        <div className="media-icons">
          <a href="https://www.facebook.com/profile.php?id=61561429833836"><i className="fab fa-facebook-f"></i></a>
          {/* <a href="#"><i className="fab fa-twitter"></i></a> */}
          <a href=" https://www.instagram.com/e_artisant2024"><i className="fab fa-instagram"></i></a>
          <a href="www.linkedin.com/in/e-artisans-18259031a"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://youtube.com/@grptutoratuvci2024?si=Ku-T2CAUZMIP25fr"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
      <div className="link-boxes">
        <ul class="box">
          <li class="link_name">lien rapide</li>
          <li><a href="#">Home</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Get started</a></li>
        </ul>
       
        <ul class="box">
          <li class="link_name">Compte</li>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Inscription Artisan</a></li>
          <li><a href="#">Connexion Artisan</a></li>
        </ul>
        <ul class="box">
          <li class="link_name">Contact </li>
          <li><a href="#">Adresse physique:Abidjan IIplateau vallon.</a></li>
          <li><a href="#">Adresse email:abdoul.latoundji@uvci.edu.ci</a></li>
          <li><a href="#">Numéro de téléphone:01-53-53-50-65</a></li>
          
          
        </ul>
        <ul class="box input-box">
          <li class="link_name">Subscribe</li>
          <li><input type="text" placeholder="Enter your email"/></li>
          <li><input type="button" value="Subscribe"/></li>
        </ul>
      </div>
    </div>
    <div className="bottom-details">
      <div className="bottom_text">
        <span className="copyright_text">Copyright © 2024 <a href="#">E-artisans</a>Tout droit de reservation</span>
        <span className="policy_terms">
          <a href="#">Privacy policy</a>
          <a href="#">Terms & condition</a>
        </span>
      </div>
    </div>
  </footer>
        </>
    );
};

export default Footer;