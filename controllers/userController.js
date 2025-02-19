const userModel = require('../models/userShema');

module.exports.addUserClient = async (req,res) => {
    try{

        const{ username , email , password , age } = req.body;
        const roleClient = 'client';
        const user = await userModel.create({
            username, email, password, role: roleClient , age

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
module.exports.updateuserById = async (req, res) => {
    try {
        const {id} = req.params
        const {email , username} = req.body;
    
        await userModel.findByIdAndUpdate(id,{$set : {email , username }})
        const updated = await userModel.findById(id)
    
        res.status(200).json({updated})
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
module.exports.getAllUsersSortByAge= async (req,res) => {

    try {
        const userListe = await userModel.find().sort({age : 1})
        //const userListe = await userModel.find().sort({age : -1}).limit(2)
    
        res.status(200).json({userListe});
        } catch (error) {
            res.status(500).json({message: error.message});
        }
}
   module.exports.getAllClient= async (req,res) => {
        try {

            const userListe = await userModel.find({role : "client"})
    
            res.status(200).json({userListe});
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }
    module.exports.getAllAdmin= async (req,res) => {
        try {

            const userListe = await userModel.find({role : "admin"})
    
            res.status(200).json({userListe});
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }
