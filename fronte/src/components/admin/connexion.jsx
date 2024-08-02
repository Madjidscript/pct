import React, { useEffect, useState } from 'react';
import "../utilisateur/connexion";
import {  NavLink,useNavigate} from "react-router-dom";
import Axios from '../../service/apiService';
import { LocalService } from "../../service/local2";
import { toast,Toaster } from 'react-hot-toast';

const AdConnexion = (props) => {
    const navigate = useNavigate()

    useEffect(()=>{
        if (LocalService.local()) {
            console.log("veriffffff")
            return navigate("/admin/liste")

        }
    })
    const [formdata,setformdata]=useState({
        email:"",
        password:""
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
            Axios.post("/admin/connexion",formdata)
            .then((response)=>{
                console.log("m a reponse lors de la connexion",response.data.message,"mon objet",response.data.data._doc)
                if (response.status === 200) {
                    toast.success('connexion effectuée avec succès !', {
                        position: 'top-right',
                        duration: 3000,
                        style: {
                            background: '#4caf50',
                            color: '#ffffff',
                        }
                    });
                }
                const info =response.data.data._doc
                const ids = info._id
                console.log("mon info", info);
                if (info && info !== undefined) {
                    const donner = JSON.stringify(response.data.data._doc)
                    console.log("mes doner lor de la connexion",info,"monid depuis la connexion",ids)
                    LocalService.savelocal(donner)
                    setTimeout(() => {
                        console.log("Fonction exécutée après 3 secondes");
                        navigate(`/admin/liste`);
                    }, 3000);
                    
                } else {
                    navigate("/connexion")
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
                password:""
            })
    }
    return ( 
        <>
        <Toaster/>
        <div className="cardss">
        <h2>Conexion</h2>

            
       
         
        <form method='POST' className="form" onSubmit={handlsubmit}>
            <input type="email"  placeholder="Email Adress" className="email" name='email' value={formdata.email} onChange={handlchange} required />
            <input type="password" placeholder="password" className="password" name='password' value={formdata.password} onChange={handlchange} required/>
            <button className="login_btn">Login</button>
        </form>

        
    </div>


    </>
    );
};
    
export default AdConnexion;