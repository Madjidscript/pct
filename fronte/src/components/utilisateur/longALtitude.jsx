import React, { useState,useEffect } from 'react';
import Axios from "axios"
import LocalisationMap from "./carteLocale.jsx";

const FunctionUseffect = (props) => {
    const [longitudes ,setlongitudes]=useState("")
    const [latitudes ,setlatitudes]=useState("")
    // const[maps, setmaps ] =useState(null)
    // useEffect(()=>{
    //     const fecchdata = async ()=>{
    //         try {
    //             const key = "AIzaSyCKaKx_E9Vflmf0c0-utO1H89YhBLqJjps"
    //             const response = await Axios.get(
    //                 `https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=${key}`
    //               );
    //               setlocaldata(response.data)
    //               console.log("mon api hoo", localdata)
                
    //         } catch (error) {
    //             console.log("mon erreu au niveau de lapi de localisation ",error)
    //         }
    //     }
    //     fecchdata()

    //},[])
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            console.log(position)
            const maposition = position
            setlatitudes(maposition.coords.latitude)
            setlongitudes(maposition.coords.longitude)
            console.log("mon latitude",setlatitudes);

        })
       
    },[])
    
    return (
        
        <>
        <LocalisationMap latitude={latitudes} longitude={longitudes}/>
            <h1> longitude: {longitudes} </h1>
            <h1> laltitude:{latitudes} </h1>
        </>
    );
};

export default FunctionUseffect;