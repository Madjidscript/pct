var express = require('express');
var router = express.Router();
const upload = require("../middlewares/multer")
const uploads = require("../middlewares/multer2")
const ControlerAdmin = require('../controller/controlerAdmin')


router.post("/inscription",uploads.single("image"),ControlerAdmin.Inscription);
router.post("/connexion",ControlerAdmin.Connexion);
router.get("/adminid/:id",ControlerAdmin.AfficheAdminId);
router.post("/publiciter",uploads.single("image"),ControlerAdmin.Publiciter);
router.get("/publiciter",ControlerAdmin.GetPubliciter);
router.delete("/delete/:id",ControlerAdmin.supp);
router.delete("/deletes/:id",ControlerAdmin.suppArtisan);
router.delete("/delete1/:id",ControlerAdmin.suppMessageClient);
router.delete("/delete2/:id",ControlerAdmin.suppMessageArtisan);
router.post("/modif/:id",ControlerAdmin.ModifStatut);
router.post("/editer/:id",uploads.single("image"),ControlerAdmin.edditer);
router.post("/fichier",upload.single("image"),ControlerAdmin.fichier);

module.exports = router;
