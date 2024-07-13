var express = require('express');
var router = express.Router();
const upload = require("../middlewares/multer")
const ControlerUser = require("../controller/controlerUser")

/* GET users listing. */
router.post("/inscription",upload.single("image"),ControlerUser.Inscription)
router.post("/connexion",ControlerUser.Connexion)
router.post("/reclamation1",ControlerUser.Reclamation1)
router.post("/reclamation2",ControlerUser.Reclamation2)
router.get("/artisan",ControlerUser.AfficheArtisan)
router.get("/artisan2/:metier",ControlerUser.AfficheArtisan2)
router.get("/artisanid/:id",ControlerUser.AfficheArtisanId)
router.post("/realisation/:id",upload.single("image"),ControlerUser.RealisationArtisan)
router.post("/modif/:id",upload.single("image"),ControlerUser.modif)

module.exports = router;
