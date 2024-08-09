import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from '../../assets/imageArti.jpg'; // Assurez-vous que ce chemin d'accès est correct

const Slide = (props) => {
     const domain ="http://localhost:3000/"
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
                    const imageUrl = element.image ? (domain + element.image.replace(/\\/g, '/')) :Image;
                    return(
                        <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imageUrl}
                    alt="First slide"
                    style={{ maxHeight: '500px', width: '100%', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                    {/* <h3>First slide label</h3> */}
                    <p> {element.titre} </p>
                </Carousel.Caption>
            </Carousel.Item>
                    )
                })
            }
            
            
           
        </Carousel>
    );
};

export default Slide;
