const asyncHandler = require('express-async-handler');
const Admin = require('../models/adminModel');
const generateToken = require("../utils/generateToken");

const registerAdmin = asyncHandler(async (req,res) => {
    const{username,password}=req.body;

    const adminExists = await Admin.findOne({username});

    if(adminExists && (await user.matchPassword(password))){
        res.status(400)
        throw new Error("User Already Exists");
    }

    const admin = await Admin.create({
        username,
        password
    });

    if(admin){
        res.status(201).json({
            _id:user._id,
            username:admin.username,
            password:admin.password,
            isAdmin:admin.isAdmin,
            token:generateToken(admin._id),
        });
    }else{
            res.status(400)
            throw new Error("Error occured");
    }

});


module.exports = { registerAdmin };