const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const generateToken = require("../utils/generateToken");

const registerUser = asyncHandler(async (req,res) => {
    const{name,email,phonenumber,servicetype,location,pic}=req.body;

    const userExists = await User.findOne({email});

    if(userExists){
        res.status(400)
        throw new Error("User Already Exists");
    }

    const user = await User.create({
        name,
        email,
        phonenumber,
        servicetype,
        location,
        pic
    });

    if(user){
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            phonenumber:user.phonenumber,
            servicetype:user.servicetype,
            location:user.location,
            isAdmin:user.isAdmin,
            pic:user.pic,
            token:generateToken(user._id),
        });
    }else{
            res.status(400)
            throw new Error("Error occured");
    }

});

module.exports = { registerUser };