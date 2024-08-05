import React from 'react';
 import "./css/inscription.css"
import { useState,useEffect} from 'react';
import "./css/contact.css"
import Hearder from "./hearder";
import Footer from "./footer.jsx"
import Axios from '../../service/apiService.jsx';
import { toast,Toaster } from 'react-hot-toast';
const Contact = (props) => {
    
  const today = new Date();
  const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = today.toLocaleDateString('fr-FR', options);
  const [error, setError] = useState('');
  const [errors, setErrors] = useState('');
   
    const [formdata,setformdata]=useState({
        nomClient:"",
        numClient:"",
        nomArtisan:"",
        numArtisan:"",
        date:formattedDate,
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

            setError('');
            setErrors('');

    // Validation du numéro de téléphone avant l'envoi
    const phoneRegex = /^\+225 \d{6} \d{4}$/;
    if (!phoneRegex.test(formdata.numClient)) {
      setError('Le numéro du client doit être au format : +225 123400 5678');
      return;
    }
    if (!phoneRegex.test(formdata.numArtisan)) {
      setErrors('Le numéro de lartisan doit être au format : +225 123400 5678');
      return;
    }
            console.log("les donner du formulaire",formdata)
            Axios.post("/reclamation1",formdata)
            .then((response)=>{
               console.log("ma reponse de la reclamation 1", response);
               if (response.status === 200) {
                toast.success('Réclamation effectuée avec succès !', {
                    position: 'top-right',
                    duration: 4000,
                    style: {
                        background: '#4caf50',
                        color: '#ffffff',
                    }
                });
            }

              
            })
            .catch((error)=>{
              console.log("mon erreur pour la reclamation",error)
              toast.error('Erreur lors de la réclamation !', {
                position: 'top-right',
                duration: 4000,
                style: {
                    background: '#f44336',
                    color: '#ffffff',
                }
            });
            })

            setformdata({
                nomClient:"",
                numClient:"",
                nomArtisan:"",
                numArtisan:"",
                date:formattedDate,
                message:""
                
                
            })


    }
    return ( 
        
        <>
        <Toaster />
        <div>
        <Hearder/>
        </div>
        {/* <div className='contactImage'>
            <div className="image"></div>
        </div> */}
        
        



        <div className="cards" style={{marginTop:"70px"}} >
        <h2>Reclamation Client</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {errors && <p style={{ color: 'red' }}>{errors}</p>}
        <form method='POST' className="form" onSubmit={handlsubmit}>
           
           <div className="inputCard">
              <input type="text" placeholder="entre votre nom" className="email" name='nomClient' value={formdata.nomClient} onChange={handlchange} required/>
              <input type="text"  placeholder="+225 123400 5678" className="email" name='numClient' value={formdata.numClient} onChange={handlchange} required />
              
           </div>
           <div className="inputCard">
              <input type="text" placeholder="nom de l'artisan" className="email" name='nomArtisan' value={formdata.nomArtisan} onChange={handlchange} required />
              <input type="text"  placeholder="+225 123400 5678" className="email" name='numArtisan' value={formdata.numArtisan} onChange={handlchange} required />
              
           </div>
           <div className="inputCard">
              <input type="text" placeholder="la date date du jour" className="email" name='date' value={formdata.date} onChange={handlchange} readonly disabled required />
              
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