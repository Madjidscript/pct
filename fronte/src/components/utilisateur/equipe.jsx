import React from 'react';
import "../utilisateur/css/equipe.css"
import Dg from "../../assets/dg.jpeg"
import COD from "../../assets/aroune.jpeg"
import Com from "../../assets/comunication.jfif"
import Dev from "../../assets/develloppement.jfif"
const Equipe = (props) => {
    return (
        
        <>
             <section class="team" id="team">
        <div class="container text-center">
            {/* <h2>Notre<span>Equipe</span></h2> */}
            <div className="bott" id="temoi" >
           <p className="testo">Notre Equipe</p>
           <p className="testo">Notre Equipe</p>
         </div>
            <p>Notre équipe dynamique réunit des développeurs innovants, des designers créatifs, des experts en communication, des marketeurs stratégiques, un directeur général visionnaire et des coordinateurs efficaces. Ensemble, nous transformons 
            des idées en projets réussis grâce à une collaboration fluide et une expertise diversifiée.</p>
            <div class="row">
                
                <div class="col-lg-3 col-md-6">
                    <div class="box">
                        <div class="image">
                            <img src={Dg} alt="team" class="img-fluid"/>
                            <div class="social-icons">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                
                                <a href="#"><i class="fab fa-instagram"></i></a>
                            </div>
                            <div class="overlay"></div>
                        </div>
                        <h3>TAHIBET LAETITIA ANELIA</h3>
                        <h4>Directrice Generale</h4>
                    </div>
                </div>
              
                <div class="col-lg-3 col-md-6">
                    <div class="box">
                        <div class="image">
                            <img src={COD} alt="team" class="img-fluid"/>
                            <div class="social-icons">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                
                                <a href="#"><i class="fab fa-instagram"></i></a>
                            </div>
                            <div class="overlay"></div>
                        </div>
                        <h3>KOBENAN AROUNA OUATTRA</h3>
                        <h4>Coordinateur</h4>
                    </div>
                </div>
                
                <div class="col-lg-3 col-md-6">
                    <div class="box">
                        <div class="image">
                            <img src={Dev} alt="team" class="img-fluid"/>
                            <div class="social-icons">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                
                                <a href="#"><i class="fab fa-instagram"></i></a>
                            </div>
                            <div class="overlay"></div>
                        </div>
                        <h3>BALLEY SOLQUEFLO</h3>
                        <h4>Directeur Service Develloppement</h4>
                    </div>
                </div>
               
                <div class="col-lg-3 col-md-6">
                    <div class="box">
                        <div class="image">
                            <img src={Com} alt="team" class="img-fluid"/>
                            <div class="social-icons">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                
                                <a href="#"><i class="fab fa-instagram"></i></a>
                            </div>
                            <div class="overlay"></div>
                        </div>
                        <h3>KOFFI YEVOU JEAN MARC</h3>
                        <h4>Chef Servies Communication</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    );
};

export default Equipe;