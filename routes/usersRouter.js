var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const upload = require("../middlewares/uploadFile")

/* GET users listing. */
router.post('/addUserClient',userController.addUserClient);
router.post('/addUserAdmin',userController.addUserAdmin);
router.get('/getAllUsers',userController.getAllUsers);
router.get('/getUsersById/:id',userController.getUsersById);
router.get('/deleteUserById/:id',userController.deleteUserById);
router.post('/addUserClientWithImg',upload.single("user_image"),userController.addUserClientWithImg);







module.exports = router;
