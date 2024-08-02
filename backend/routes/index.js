var express = require('express');
var router = express.Router();
const upload = require("../middlewares/multer")
const ControlerAdmin = require('../controller/controlerAdmin')
/* GET home page. */

router.post("/inscription",upload.single("image"),ControlerAdmin.Inscription);
router.post("/connexion",ControlerAdmin.Connexion);
router.get("/adminid/:id",ControlerAdmin.AfficheAdminId);
router.post("/publiciter",upload.single("image"),ControlerAdmin.Publiciter);
router.get("/publiciter",ControlerAdmin.GetPubliciter);
router.delete("/delete/:id",ControlerAdmin.supp);
router.delete("/deletes/:id",ControlerAdmin.suppArtisan);
router.post("/modif/:id",ControlerAdmin.ModifStatut);
router.post("/editer/:id",upload.single("image"),ControlerAdmin.edditer);

module.exports = router;
