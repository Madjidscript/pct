import React from 'react';
import axios from 'axios';
const Axios = axios.create({
    baseURL:"https://pct.onrender.com/"
    //https://pct.onrender.com
    //http://localhost:3000/
});

export default Axios;