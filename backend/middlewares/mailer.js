const nodemailer = require("nodemailer");
require('dotenv').config()

exports.mailer = (email,nom,id)=>{
    console.log('emm',email,"nom",nom );
  return new Promise((resolve,reject)=>{
  let transporter = nodemailer.createTransport({
      service:'gmail', 
      auth: {
        user: process.env.EMAIL, 
        pass: process.env.PASSWORD 
      },
    });
  let mailOptions = {
      from: process.env.EMAIL, 
      to:email, 
      subject: "Réinitialisation du mot de passe", // Subject line
      text: "Les coordonées de connexion", 
      html: `<p>
      Objet: Réinitialisation du mot de passe

Cher/Chère <strong>${nom}<strong/>,

Vous avez demandé la réinitialisation de votre mot de passe. Pour le faire, veuillez suivre le lien suivant:"https://pct.onrender.com/modifpass/${id}"

Cordialement,
<strong>E-artisans<strong/>
</p> 
                  `  
    };

  transporter.sendMail(mailOptions, (error, info)=>{
   if (error) {
    console.log('error',error);
    reject(error);

   } else {
    console.log('success' , info.response);
    resolve(info.response);
   }
}); 
})
}
