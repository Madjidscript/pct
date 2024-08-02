import React from 'react';
import "../utilisateur/css/inscription2.css"
import { useState,useEffect } from 'react';
import {  NavLink,useNavigate} from "react-router-dom";
import Axios from '../../service/apiService.jsx';
import { toast,Toaster } from 'react-hot-toast';
import Seidbar from "./seidbar.jsx"
const AdEdit = (props) => {
   
    const[message,setmessage]=useState(null)
    
    
   
   
    
    const [formdata,setformdata]=useState({
        nom:"",
        email:"",
        password:"",
        image:null,
    })

    
    const handlchange = (e)=>{
        setformdata({
            ...formdata,
            [e.target.name]:e.target.value
        })
    }
    const handfilchange = (e)=>{
        setformdata({
            ...formdata,
            image:e.target.files[0]
        })
    }
   
    const handlsubmit =(e)=>{
        e.preventDefault()
        const formData = new FormData();
        formData.append('nom', formdata.nom);
        formData.append('email', formdata.email);
        formData.append('password', formdata.password);
        formData.append('image',  e.target.image.files[0]); // Assurez-vous que 'image' correspond au nom du champ dans votre backend
        console.log("formdata partie admin inscription",formdata)

            
            // Axios.post("/inscription",formData)
            //     .then((response)=>{
            //       console.log("ma reponse",response)
            //        setmessage(response.data)
            //        if (response.status === 200) {
            //         toast.success('inscription effectuée avec succès !', {
            //             position: 'top-right',
            //             duration: 2000,
            //             style: {
            //                 background: '#4caf50',
            //                 color: '#ffffff',
            //             }
            //         });
            //     }

            //         setformdata({
            //          nom:"",
            //          email:"",
            //          password:"",
            //          image:null,
                   
            //         })

            //     })
            //     .catch((Error)=>{
            //      console.log("mon erreur au niveau de la requete",Error)
                 
            //         toast.error('inscription echouer !', {
            //             position: 'top-right',
            //             duration: 2000,
            //             style: {
            //                 background: '#f44336',
            //                 color: '#ffffff',
            //             }
            //         });
                
            //     })
            
           
                
    }


    

    return ( 
        
        <>
        <Toaster/>
           <div className="md">
                 <div className="left-side">
                   <Seidbar/>
            </div>
            <div class="right-side">
            <div className="center-content">
                
          

            
       
<div style={{color:"red",margin:"0px auto"}}>{message}</div>
 
<form method='POST' className="form" onSubmit={handlsubmit} enctype="multipart/form-data"  >
   <div className="inputCard">
      <input type="text"  placeholder="Entre votre nom" className="email" name='nom' value={formdata.nom} onChange={handlchange} required />
   </div>
  
   <div className="inputCard">
      <input type="email" placeholder="entre votre mail" className="email" name='email' value={formdata.email} onChange={handlchange} required/>
      <input type="password"  placeholder=" mot de pass" className="email" name='password' value={formdata.password} onChange={handlchange} required />
   </div>
   <div className="inputCard">
   <input type="file"  placeholder="Entrer votre photo" className="email" name='image'   onChange={handfilchange} required />
      
   </div>
  
    <button className="login_btn">inscription</button>
</form>

            </div>
        </div>
    </div>


        

         
         
         

       
       
        
    
   
    </>
    
    );
};

export default AdEdit; 