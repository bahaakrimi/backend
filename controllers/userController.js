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
