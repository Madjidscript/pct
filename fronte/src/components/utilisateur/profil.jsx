import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import { useParams,NavLink,useNavigate} from "react-router-dom";
import { useEffect,useState } from "react";
import { LocalService } from "../../service/local";
import "./css/profil.css"
import Axios from '../../service/apiService';
export default function Profils() {
   const [data,setdata]=useState()
   const [data2,setdata2]=useState()
   const [data3,setData3]=useState()
   const domain ="https://pct.onrender.com/"
   //http://localhost:3000/
   const navigate = useNavigate()
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


    Axios.get(`/realisation/${id}`)
    .then((response)=>{
      console.log('ma reponse pour la realisations',response.data.recup,"l'image heee",response.data.recup[0].image);
      setdata2(response.data.recup)
    })
    .catch((error)=>{
      console.log("mon ereur",error);
    })
    
  },[id])
  const deconnexion = () => {
    LocalService.deconnexion()
    navigate("/");
  };

  const handleDeleteRealisation = (realisationId) => {
    Axios.delete(`/supp/${realisationId}`)
      .then((response) => {
        console.log('Réalisation supprimée avec succès');
        // Mettre à jour l'état local des réalisations après suppression
        setData3(data2.filter((element) => element.id !== realisationId));
        window.location.reload();
      })
      .catch((error) => {
        console.error('Erreur lors de la suppression de la réalisation', error);
      });
  };



  
   
    
 
  return (
    
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div className="rounded-top text-white d-flex flex-row" >
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
               { data  && <MDBCardImage
                    src={domain + data.image.replace(/\\/g, '/')}
                    alt="Generic placeholder image"
                    className="mt-4 mb-2  img-thumbnail"
                    fluid
                    style={{ width: '150px', zIndex: '1' }}
                />} 
                
                </div>
                <div className="ms-3" style={{ marginTop: '110px',color:"white"}}>
                <MDBCardText className="font-italic" style={{color:"white"}} >
                  <strong className='pct'>Nom de L'artisan:</strong> {data && data.nom}
                </MDBCardText>
                  <MDBCardText style={{color:"white"}}><strong>{data && data.ville}</strong></MDBCardText>
                </div>
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="dd ">
                  <div>
                    <MDBCardText className="mb-1 h5"><a href="/artisan/contact" className="text-muted"style={{ marginRight:"10px"}}>Contact  </a></MDBCardText>
                  </div>
                  {/* <div>
                    <MDBCardText className="mb-1 h5"><a href="/artisan/abonnement" className="text-muted">Abonnement</a></MDBCardText>
                  </div> */}
                  <div className="px-3">
                  <MDBCardText className="mb-1 h5"><NavLink exact to={`/artisan/edit/${id}`} className="text-muted">Editer</NavLink></MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5"><a href="" onClick={deconnexion} className="text-muted">Deconnexion</a></MDBCardText>
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
                <div className="image-container">
                    {data2 && data2.map((element, index) => (
                   <div key={index} className="image-item">
                     <button className="button-top"onClick={()=>handleDeleteRealisation(element._id)} > <i class="fas fa-trash-alt delete-icon"></i></button>
                    <img
                    src={domain + element.image.replace(/\\/g, '/')}
                    alt={`Image ${index + 1}`}  
                 />
               </div>
  ))}
</div>
              
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    
  );
}