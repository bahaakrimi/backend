const userModel = require('../models/userShema');

module.exports.addUserClient = async (req,res) => {
    try{

        const{ username , email , password } = req.body;
        const roleClient = 'client';
        const user = await userModel.create({
            username, email, password, role: roleClient

        })

        res.status(200).json({user});

    }catch (error) {
        res.status(500).json({message: error.message});

    }
}
module.exports.addUserClientWithImg = async (req,res) => {
    try{

        const{ username , email , password } = req.body;
        const roleClient = 'client';
        const {filename} = req.file
        const user = await userModel.create({
            username, email, password, role: roleClient, user_image : filename

        })

        res.status(200).json({user});

    }catch (error) {
        res.status(500).json({message: error.message});

    }
}
module.exports.addUserAdmin = async (req,res) => {
    try{

        const{ username , email , password } = req.body;
        const roleAdmin = 'admin';
        const user = await userModel.create({
            username, email, password, role: roleAdmin

        })

        res.status(200).json({user});

    }catch (error) {
        res.status(500).json({message: error.message});

    }
}
module.exports.getAllUsers = async (req,res) => {
    try{
        const userListe = await userModel.find()

        

        res.status(200).json({userListe});

    }catch (error) {
        res.status(500).json({message: error.message});

    }
}
module.exports.getUsersById = async (req,res) => {
    try{
        //const id= req.params.id
        //console.log(req.params.id)
        const {id} = req.params
        const userListe = await userModel.findById(id)

        

        res.status(200).json({userListe});

    }catch (error) {
        res.status(500).json({message: error.message});

    }
}
module.exports.deleteUserById = async (req,res) => {
    try{

        const {id} = req.params

        const checkIfUserExists = await userModel.findById(id);
        await userModel.findByIdAndDelete(id)

        

        res.status(200).json("delete");

    }catch (error) {
        res.status(500).json({message: error.message});

    }
}
