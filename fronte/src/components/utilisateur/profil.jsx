import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import { useParams,NavLink} from "react-router-dom";
import { useEffect,useState } from "react";
import "./css/profil.css"
import Axios from '../../service/apiService';
export default function Profils() {
   const [data,setdata]=useState()
   const domain ="http://localhost:3000/"
  const {id}= useParams()
  console.log("mon id",id);
  useEffect(()=>{
    Axios.get(`/artisanid/${id}`)
    .then((response)=>{
      console.log('ma reponse',response.data.Artisan);
      setdata(response.data.Artisan)
    })
    .catch((error)=>{
      console.log("mon ereur",error);
    })
    
  },[id])
  return (
    
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
               { data  && <MDBCardImage
                    src={domain + data.image.replace(/\\/g, '/')}
                    alt="Generic placeholder image"
                    className="mt-4 mb-2  rounded-circle"
                    fluid
                    style={{ width: '150px', zIndex: '1' }}
                />} 
                
                </div>
                <div className="ms-3" style={{ marginTop: '110px' }}>
                <MDBCardText className="font-italic" >
                  <strong>Nom de L'artisan:</strong> {data && data.nom}
                </MDBCardText>
                  <MDBCardText><strong>{data && data.ville}</strong></MDBCardText>
                </div>
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <MDBCardText className="mb-1 h5"><a href="/artisan" className="text-muted">Acceuil</a></MDBCardText>
                  </div>
                  <div className="px-3">
                  <MDBCardText className="mb-1 h5"><NavLink exact to={`/artisan/edit/${id}`} className="text-muted">Editer</NavLink></MDBCardText>
                  </div>
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">Apropos</p>
                  <div className="p-4" style={{  border: '1px solid #dee2e6', borderRadius: '5px' }}>
      <MDBRow className="mb-3">
        <MDBCol size="6" className='pp'>
          <MDBCardText className="font-italic pp"style={{ color:'black'}}>
            <strong>Commune:</strong> {data && data.comune}
          </MDBCardText>
          <MDBCardText className="font-italic pp" style={{ color:'black'}}>
            <strong>WhatsApp:</strong> {data && data.whathsapp}
          </MDBCardText>
          <MDBCardText className="font-italic pp" style={{ color:'black'}}>
            <strong>Nom de l'entreprise:</strong> {data && data.entreprise}
          </MDBCardText>
          <MDBCardText className="font-italic pp" style={{ color:'black'}}>
            <strong>Email:</strong> {data && data.email}
          </MDBCardText>
        </MDBCol>
        <MDBCol size="6">
          <MDBCardText className="font-italic pp" style={{ color:'black'}}>
            <strong>Métier:</strong> {data && data.metier}
          </MDBCardText>
          <MDBCardText className="font-italic pp"style={{ color:'black'}}>
            <strong>Expérience:</strong> {data && data.experience}
          </MDBCardText>
          <MDBCardText className="font-italic pp" style={{ color:'black'}}>
            <strong>Heure d'ouverture:</strong> {data && data.ouverture}
          </MDBCardText>
          <MDBCardText className="font-italic pp" style={{ color:'black'}}>
            <strong>Heure de fermeture:</strong> {data && data.fermeture}
          </MDBCardText>
        </MDBCol>
      </MDBRow>
    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCardText className="lead fw-normal mb-0">Galerie</MDBCardText>
                  <MDBCardText className="mb-0"><NavLink exact to= {`/artisan/realisation/${id}`} className="text-muted">ajouter realisation</NavLink></MDBCardText>
                </div>
                <MDBRow>
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="g-2">
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    
  );
}