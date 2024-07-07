const mongoose = require("mongoose")
require("dotenv").config()
async function connected() {
    await mongoose.connect(process.env.Mongo_Url)
    console.log("connexion a la  base de donner reussit");
}
module.exports ={
    connected
}