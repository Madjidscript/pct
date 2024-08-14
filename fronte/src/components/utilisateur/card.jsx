import React from "react";
import "./css/card.css";
import { useState, useEffect } from "react";
import Axios from "../../service/apiService";

function Card({
  backgroundColor,
  metier,
  imgSrc,
  title,
  phoneNumber,
  originalPrice,
  discountedPrice,
  id,
  distance,
}) {
  const [data, setdata] = useState([]);
  console.log("mon image", imgSrc);
  const domain = "https://pct.onrender.com/";

  useEffect(() => {
    Axios.get("/artisan")
      .then((response) => {
        console.log("mon artisant", response.data.Artisan);
        setdata(response.data.Artisan);
      })
      .catch((error) => {
        console.log("mon eereur dans recherche Artisan Api", error);
      });
  }, []);

  return (
    <>
      <div className="product-card">
        <div className="card-header" style={{ backgroundColor }}>
          {imgSrc && (
            <img
              src={imgSrc}
              style={{ width: "100%" }}
              alt={title}
            />
          )}
          <a href={`/profil/${id}`} className="add-btn">
            i 
          </a>
        </div>
        <div className="card-body">
          <h3>{title}</h3>
          <p>
            {" "}
            <span style={{ color: "white" }}>Metier</span> : <span className="discounted-price" >{metier}{" "}</span>
          </p>
          <div className="price">
            <span className="original-price">{originalPrice}</span>
            <span className="discounted-price">{discountedPrice}</span>
           
          </div>
          <p><span>Distance</span> <span className="discounted-price">{distance}</span></p>
          <a href={`tel:${phoneNumber}`} className="cart-btn">
            Contactez-moi
          </a>
          {/* <div className="card-icons">
                <button className="icon-btn">❤</button>
                <button className="icon-btn">🗑</button>
            </div> */}
        </div>
      </div>
    </>
  );
}

export default Card;
