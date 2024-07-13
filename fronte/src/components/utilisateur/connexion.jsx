import React, { useEffect, useState } from 'react';
import "./css/connexion.css";
import {  NavLink,useNavigate} from "react-router-dom";
import Axios from '../../service/apiService';
import { LocalService } from "../../service/local";


const Connexion = (props) => {
    const navigate = useNavigate()

    useEffect(()=>{
        if (LocalService.local()) {
            console.log("veriffffff")
            return navigate("/artisan")

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
            Axios.post("/connexion",formdata)
            .then((response)=>{
                console.log("m a reponse lors de la connexion",response.data.message,"mon objet",response.data.data._doc)
                const info =response.data.data._doc
                console.log("mon info", info);
                if (info && info !== undefined) {
                    const donner = JSON.stringify(response.data.data._doc)
                    LocalService.savelocal(donner)
                    setTimeout(() => {
                        console.log("Fonction exécutée après 3 secondes");
                        navigate("/artisan");
                    }, 3000);
                    
                } else {
                    navigate("/connexion")
                }
            })
            .catch((Error)=>{
                console.log('mon error durant la connexion',Error)
            })
            setformdata({
                email:"",
                password:""
            })
    }
    return ( 
        <>
        <div className="cardss">
        <h2>Conexion</h2>

            
        <div className="login_register">
            <NavLink to="/connexion" className="login" >connexion</NavLink>
            <NavLink to="/inscription" className="registers"   >S'inscrire</NavLink>
        </div>
         
        <form method='POST' className="form" onSubmit={handlsubmit}>
            <input type="email"  placeholder="Email Adress" className="email" name='email' value={formdata.email} onChange={handlchange} required />
            <input type="password" placeholder="password" className="password" name='password' value={formdata.password} onChange={handlchange} required/>
            <button className="login_btn">Login</button>
        </form>

        <div className="footer_card">
        <p>pas menbre?</p>
        <NavLink to="/inscription">S'inscrire</NavLink>
        </div>
    </div>


    </>
    );
};
    
export default Connexion;