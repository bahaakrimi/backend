var express = require('express');
var router = express.Router();
const commandeController =require('../controllers/commandeController');
/* GET home page. */
router.post('/addCommande',commandeController.addCommande );
router.get('/getAllCommande',commandeController.getAllCommande );
router.get('/getCommandeById/:id',commandeController.getCommandeById );



module.exports = router;
