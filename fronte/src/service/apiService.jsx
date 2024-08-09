import React from 'react';
import axios from 'axios';
const Axios = axios.create({
    baseURL:"http://localhost:3000/"
    //https://pct.onrender.com
    //http://localhost:3000/
});

export default Axios;