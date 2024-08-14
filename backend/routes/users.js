var express = require('express');
var router = express.Router();
const upload = require("../middlewares/multer")
const uploads = require("../middlewares/multer2")
const ControlerUser = require("../controller/controlerUser")
const bcrypt = require("bcryptjs")
const otherArtisan = require('../other/artisan');
const path = require("path/win32");


/* GET users listing. */
router.post("/inscription",uploads.single("image"), ControlerUser.Inscription)
router.post("/connexion",ControlerUser.Connexion)
router.post("/oublier",ControlerUser.Oublier)
router.post("/modifpass/:id",ControlerUser.Oublier2)
router.post("/reclamation1",ControlerUser.Reclamation1)
router.get("/reclamation1",ControlerUser.GetReclamation1)
router.post("/reclamation2",ControlerUser.Reclamation2)
router.get("/reclamation2",ControlerUser.GetReclamation2)
router.get("/artisan",ControlerUser.AfficheArtisan)
router.get("/artisan2/:metier",ControlerUser.AfficheArtisan2)
router.get("/artisanid/:id",ControlerUser.AfficheArtisanId)
router.post("/realisation/:id",uploads.single("image"), ControlerUser.RealisationArtisan)
router.get("/realisation/:id",ControlerUser.getRealisaton)
router.delete("/supp/:id",ControlerUser.supp)
router.post("/papa/:id",uploads.single("image"), ControlerUser.edditer)
// router.post("/papa/:id", async(req,res)=>{
//     console.log("mon id",req.params.id)
//     console.log("req.body",req.body)
//     const id =req.params.id
//      const passwords = req.body.password;
//         const images = req.file.path;
//         const hspass = await bcrypt.hash(passwords, 10);
//         const data = {
//             ...req.body,
//             password: hspass,
//             image: images
//         };
//         const modifs = await otherArtisan.update(id, data);
//         if (modifs) {
//             const message = 'Modification effectuée avec succès';
//             res.json({ message });
//         } else {
//             const message = "Erreur de modification des données";
//             res.status(400).json({ message });
//         }
// })

module.exports = router;
