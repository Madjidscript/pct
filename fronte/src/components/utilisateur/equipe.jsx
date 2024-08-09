import React from 'react';
import "../utilisateur/css/equipe.css"
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
                            <img src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="team" class="img-fluid"/>
                            <div class="social-icons">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                
                                <a href="#"><i class="fab fa-instagram"></i></a>
                            </div>
                            <div class="overlay"></div>
                        </div>
                        <h3>Lorem Ipsum</h3>
                        <h4>Project Manager</h4>
                    </div>
                </div>
              
                <div class="col-lg-3 col-md-6">
                    <div class="box">
                        <div class="image">
                            <img src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="team" class="img-fluid"/>
                            <div class="social-icons">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                
                                <a href="#"><i class="fab fa-instagram"></i></a>
                            </div>
                            <div class="overlay"></div>
                        </div>
                        <h3>Lorem Ipsum</h3>
                        <h4>App Developer</h4>
                    </div>
                </div>
                
                <div class="col-lg-3 col-md-6">
                    <div class="box">
                        <div class="image">
                            <img src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="team" class="img-fluid"/>
                            <div class="social-icons">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                
                                <a href="#"><i class="fab fa-instagram"></i></a>
                            </div>
                            <div class="overlay"></div>
                        </div>
                        <h3>Lorem Ipsum</h3>
                        <h4>Front End</h4>
                    </div>
                </div>
               
                <div class="col-lg-3 col-md-6">
                    <div class="box">
                        <div class="image">
                            <img src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="team" class="img-fluid"/>
                            <div class="social-icons">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                
                                <a href="#"><i class="fab fa-instagram"></i></a>
                            </div>
                            <div class="overlay"></div>
                        </div>
                        <h3>Lorem Ipsum</h3>
                        <h4>Web designer</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    );
};

export default Equipe;