require('dotenv').config(); 

const { UTApi } = require('uploadthing/server'); 
const utapi = new UTApi();

module.exports = utapi