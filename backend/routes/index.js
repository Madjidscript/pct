var express = require('express');
var router = express.Router();

const ControlerAdmin = require('../controller/controlerAdmin')
/* GET home page. */

router.post("/inscription",ControlerAdmin.Inscription);

module.exports = router;
