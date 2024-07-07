import React from 'react';
import './css/card.css';
import { useState,useEffect } from "react";
import Axios from '../../service/apiService';

function Card({ backgroundColor, imgSrc,metier, title, originalPrice, discountedPrice }) {
    const [data,setdata]=useState([])

    useEffect(()=>{
        Axios.get("/artisan")
        .then((response)=>{
        console.log('mon artisant',response.data.Artisan);
       setdata(response.data.Artisan)
       
      })
      .catch((error)=>{
        console.log("mon eereur dans recherche Artisan Api",error);
      })
      },[])

      // const filteredArtisans = data.filter((artisan) => {
      //   const isMetierMatch = metier ? artisan.metier.toLowerCase().includes(metier.toLowerCase()) : true;
      //   const isLocaliteMatch = comune ? artisan.comune.toLowerCase().includes(comune.toLowerCase()) : true;
      //   return isMetierMatch && isLocaliteMatch;
      // });


  return (
    <>
    <div className="product-card">
        <div className="card-header" style={{ backgroundColor }}>
            {/* <img src={imgSrc} alt={title} /> */}
            <button className="add-btn">+</button>
        </div>
        <div className="card-body">
            <h3>{title}</h3>
            <p>Metier:{metier} </p>
            <div className="price">
                <span className="original-price">{originalPrice}</span>
                <span className="discounted-price">{discountedPrice}</span>
            </div>
            <button className="cart-btn">Contactez-moi</button>
            <div className="card-icons">
                <button className="icon-btn">❤</button>
                <button className="icon-btn">🗑</button>
            </div>
        </div>
    </div>
    </>
  );
}

export default Card;
