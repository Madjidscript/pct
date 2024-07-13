import React from 'react';
 import "./css/inscription.css"
import { useState,useEffect} from 'react';
import "./css/contact.css"
import Hearder from "./hearder";
import Footer from "./footer.jsx"
import Axios from '../../service/apiService.jsx';

const Contact = (props) => {
   
    
   
    const [formdata,setformdata]=useState({
        nomClient:"",
        numClient:"",
        nomArtisan:"",
        numArtisan:"",
        message:""

    })

  
    const handlchange = (e)=>{
        setformdata({
            ...formdata,
            [e.target.name]:e.target.value
        })
    }
    const handlsubmit =(e)=>{
            e.preventDefault()
            console.log("les donner du formulaire",formdata)
            Axios.post("/reclamation1",formdata)
            .then((response)=>{
               console.log("ma reponse de la reclamation 1", response);
            })
            .catch((error)=>{
              console.log("mon erreur pour la reclamation",error)
            })

            setformdata({
                nomClient:"",
                numClient:"",
                nomArtisan:"",
                numArtisan:"",
                message:""
                
                
            })
    }
    return ( 
        
        <>
        <div>
        <Hearder/>
        </div>
        {/* <div className='contactImage'>
            <div className="image"></div>
        </div> */}
        
        



        <div className="cards" style={{marginTop:"70px"}} >
        <h2>Reclamation Client</h2>

        <form method='POST' className="form" onSubmit={handlsubmit}>
           
           <div className="inputCard">
              <input type="text" placeholder="entre votre nom" className="email" name='nomClient' value={formdata.nomClient} onChange={handlchange} required/>
              <input type="number"  placeholder="entre votre numero" className="email" name='numClient' value={formdata.numClient} onChange={handlchange} required />
           </div>
           <div className="inputCard">
              <input type="text" placeholder="nom de l'artisan" className="email" name='nomArtisan' value={formdata.nomArtisan} onChange={handlchange} required />
              <input type="number"  placeholder="numero de l'artisan" className="email" name='numArtisan' value={formdata.numArtisan} onChange={handlchange} required />
           </div>
           <div className="inputCard">
              <textarea name="message" className="email" value={formdata.message} onChange={handlchange} id=""></textarea>
           </div>
            
            <button className="login_btn">Validez la Reclamation</button>
        </form>

        <div className="footer_card">
        <p>NB:<strong>numero wathsapp de lartisan</strong></p>
        
        </div>
    </div>
    {/* <Footer/> */}
    </>
    
    );
};

export default Contact; 