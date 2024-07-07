import React from 'react';
 import "./css/inscription.css"
import { useState,useEffect} from 'react';
import "./css/contact.css"
import Hearder2 from "./hearder2";
import Footer from "./footer.jsx"

const Contact2 = (props) => {
   
    
   
    const [formdata,setformdata]=useState({
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
            setformdata({
                nomArtisan:"",
                numArtisan:"",
                message:""
                
                
            })
    }
    return ( 
        
        <>
        <div>
        <Hearder2/>
        </div>
        {/* <div className='contactImage'>
            <div className="image"></div>
        </div> */}
        
        



        <div className="cards"style={{marginTop:"100px"}}>
        <h2>Reclamation Artisan</h2>

        <form method='POST' className="form" onSubmit={handlsubmit}>
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
        <p>NB:<strong>numero wathsapp de l'artisan</strong></p>
        
        </div>
    </div>
    {/* <Footer/> */}
    </>
    
    );
};

export default Contact2; 