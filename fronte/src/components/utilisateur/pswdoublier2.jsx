import React, { useEffect, useState } from 'react';
import "./css/connexion.css";
import {  NavLink,useNavigate,useParams} from "react-router-dom";
import Axios from '../../service/apiService';
import { LocalService } from "../../service/local";
import { toast,Toaster } from 'react-hot-toast';

const Pswdoublier2 = (props) => {
    const navigate = useNavigate()
    const [messages,setmessage]= useState()
    const [data,setdata]=useState()
    const { id } = useParams();
    console.log("mon data .......",data)

    // useEffect(()=>{
    //     if (LocalService.local()) {
    //         const local = JSON.parse(localStorage.getItem("Artisan"));
    //         setid(local._id)
    //         console.log("veriffffff",id)
    //         return navigate(`/artisan/profil/${id}`)

    //     }
    // })
    // useEffect(() => {
    //     const local = JSON.parse(localStorage.getItem("Artisan"));
        
    //     if (local) {
    //       console.log("aslam hooo", local.nom,"mon id hoo",local._id);
          
    //       return navigate(`/artisan/profil/${local._id}`)
    //     }
    //   }, []);
   
    const [formdata,setformdata]=useState({
        password:"",
       
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
            Axios.post(`/modifpass/${id}`,formdata)
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
                
                console.log("mon info", info);
                if (info && info !== undefined) {
                    // const donner = JSON.stringify(response.data.verifmail)
                    console.log("mes doner lor de la connexion",info,"monid depuis la connexion",ids)
                    // LocalService.savelocal(donner)
                    setTimeout(() => {
                        console.log("Fonction exécutée après 3 secondes");
                        navigate(`/connexion`);
                    }, 3000);
                    
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
        <h2>Conexion</h2>

            
        <div className="login_register">
            <NavLink to="/connexion" className="login" >connexion</NavLink>
            <NavLink to="/" className="registers"   >Acceuil</NavLink>
        </div>
         
        <form method='POST' className="form" onSubmit={handlsubmit}>
            <input type="password"  placeholder="Email Adress" className="email" name='password' value={formdata.password} onChange={handlchange} required />
           
            <button className="login_btn">Soumettre</button>
        </form>

       
    </div>


    </>
    );
};
    
export default Pswdoublier2;