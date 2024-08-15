import React, { useEffect, useState } from 'react';
import "./css/connexion.css";
import {  NavLink,useNavigate} from "react-router-dom";
import Axios from '../../service/apiService';
import { LocalService } from "../../service/local";
import { toast,Toaster } from 'react-hot-toast';

const Pswdoublier = (props) => {
    const navigate = useNavigate()
    const [messages,setmessage]= useState()
    const [data,setdata]=useState()
    

    
   
    const [formdata,setformdata]=useState({
        email:"",
       
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
            Axios.post("/oublier",formdata)
            .then((response)=>{
                console.log("m a reponse lors de la connexion",response.data.message,"mon objet",response.data.verifmail)
                setmessage(response.data.message)
                setdata(response.data.verifmail)
                console.log("mon message",messages)
                if (response.status === 200) {
                    toast.success(messages, {
                        position: 'top-right',
                        duration: 3000,
                        style: {
                            background: '#4caf50',
                            color: '#ffffff',
                        }
                    });
                }
                const info = response.data.verifmail
                const ids = info._id
                // const nom = info.nom
                // const lien = navigate(`/modifpass/${ids}`)
                
                console.log("mon info", info);
                if (info && info !== undefined) {
                   // const donner = JSON.stringify(response.data.verifmail)
                    console.log("mes doner lor de la connexion",info,"monid depuis la connexion",ids)
                   // LocalService.savelocal(donner)

                    // const emailAddress = formdata.email; 
                    // setTimeout(() => {
                    // window.location.href = `mailto:${emailAddress}?subject=Réinitialisation du mot de passe&body=Bonjour,${nom} Vous avez demandé la réinitialisation de votre mot de passe. Pour le faire, veuillez suivre le lien suivant:${lien} ACordialement,E-artisans`;
                    // }, 3000);
                    
                } else {
                    navigate("/oublier")
                }
            })
            .catch((Error)=>{
                console.log('mon error durant la connexion',Error)
                toast.error('connexion echouer !', {
                    position: 'top-right',
                    duration: 3000,
                    style: {
                        background: '#f44336',
                        color: '#ffffff',
                    }
                });
            
            })
            setformdata({
                email:"",
               
            })
    }
   
    return ( 
        <>
        <Toaster/>
        <div className="cardss">
        <h2>Verification mail</h2>

            
        <div className="login_register">
            <NavLink to="/connexion" className="login" >Verification</NavLink>
            <NavLink to="/" className="registers"   >Acceuil</NavLink>
        </div>
         
        <form method='POST' className="form" onSubmit={handlsubmit}>
            {messages}
            <input type="email"  placeholder="Email Adress" className="email" name='email' value={formdata.email} onChange={handlchange} required />
           
            <button className="login_btn">Soumettre</button>
        </form>

       
    </div>


    </>
    );
};
    
export default Pswdoublier;