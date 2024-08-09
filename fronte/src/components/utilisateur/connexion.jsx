import React, { useEffect, useState } from 'react';
import "./css/connexion.css";
import {  NavLink,useNavigate} from "react-router-dom";
import Axios from '../../service/apiService';
import { LocalService } from "../../service/local";
import { toast,Toaster } from 'react-hot-toast';

const Connexion = (props) => {
    const navigate = useNavigate()
    const [messages,setmessage]= useState()
    const [data,setdata]=useState()
    

    // useEffect(()=>{
    //     if (LocalService.local()) {
    //         const local = JSON.parse(localStorage.getItem("Artisan"));
    //         setid(local._id)
    //         console.log("veriffffff",id)
    //         return navigate(`/artisan/profil/${id}`)

    //     }
    // })
    useEffect(() => {
        const local = JSON.parse(localStorage.getItem("Artisan"));
        
        if (local) {
          console.log("aslam hooo", local.nom,"mon id hoo",local._id);
          
          return navigate(`/artisan/profil/${local._id}`)
        }
      }, []);
   
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
                console.log("m a reponse lors de la connexion",response.data,)
                setmessage(response.data.message)
                setdata(response.data.data._doc)
                console.log("mon message",response.data.message)
                if (response.status === 200) {
                    toast.success(response.data.message, {
                        position: 'top-right',
                        duration: 3000,
                        style: {
                            background: '#4caf50',
                            color: '#ffffff',
                        }
                    });
                }
                const info = response.data.data._doc
                const ids = info._id
                
                console.log("mon info", info);
                if (info && info !== undefined) {
                    const donner = JSON.stringify(response.data.data._doc)
                    console.log("mes doner lor de la connexion",info,"monid depuis la connexion",ids)
                    LocalService.savelocal(donner)
                    setTimeout(() => {
                        console.log("Fonction exécutée après 3 secondes");
                        navigate(`/artisan/profil/${ids}`);
                    }, 3000);
                    
                } else {
                    navigate("/connexion")
                }
            })
            .catch((Error)=>{
                console.log('mon error durant la connexion',Error.response.data.message)
                setmessage(Error.response.data.message)
                toast.error(messages, {
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

            
        <div className="login_register">
            <NavLink to="/connexion" className="login" >connexion</NavLink>
            <NavLink to="/inscription" className="registers"   >S'inscrire</NavLink>
        </div>
        <div style={{color:"red",margin:"0px auto"}}>{messages}</div>
        <form method='POST' className="form" onSubmit={handlsubmit}>
            <input type="email"  placeholder="Addresse Mail" className="email" name='email' value={formdata.email} onChange={handlchange} required />
            <input type="password" placeholder="Mot De Pass" className="password" name='password' value={formdata.password} onChange={handlchange} required/>
            <button className="login_btn">Connexion</button>
        </form>

        <div className="footer_card">
        <p>pas menbre?</p>
        <span><NavLink className="login" to="/inscription">S'inscrire</NavLink>  </span>
        <span style={{marginLeft:"5px"}}><NavLink className="login" to="/oublier"> Mot de pass oublié</NavLink></span>
        </div>
    </div>


    </>
    );
};
    
export default Connexion;