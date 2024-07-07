var express = require('express');
var router = express.Router();
const upload = require("../middlewares/multer")
const ControlerUser = require("../controller/controlerUser")

/* GET users listing. */
router.post("/inscription",upload.single("image"),ControlerUser.Inscription)
router.post("/connexion",ControlerUser.Connexion)
router.get("/artisan",ControlerUser.AfficheArtisan)

module.exports = router;
