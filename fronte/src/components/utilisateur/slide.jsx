import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from '../../assets/imageArti.jpg'; // Assurez-vous que ce chemin d'accès est correct
import {useState,useEffect} from "react"
import Axios from '../../service/apiService';
const Slide = (props) => {
     const domain ="https://pct.onrender.com/" 
     //http://localhost:3000/
     //https://pct.onrender.com/
    const [data,setdata]= useState([])

    useEffect(()=>{
     Axios.get("/admin/publiciter")
     .then((res)=>{
       console.log("ma recupreation", res.data.recup)
       setdata(res.data.recup)
     })
     .catch((error)=>{
       console.log("mon erreur au niveau ",error)
     })
    },[])
    return (
        <Carousel>
            {
                data.map((element,index)=>{
                    const imageUrl = element.image ? ( element.image) :Image;
                    return(
                        <Carousel.Item id={index}>
                <img
                    className="d-block w-100" 
                    src={imageUrl}
                    alt="First slide"
                    style={{ height: '500px', width: '100%', objectFit: 'cover',backgroundSize:"cover"}}
                />
                <Carousel.Caption>
                    
                    {/* <p> {element.titre} </p> */}
                </Carousel.Caption>
            </Carousel.Item>
                    )
                })
            }
            
            
           
        </Carousel>
    );
};

export default Slide;
