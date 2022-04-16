const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const Admin = require('../models/adminModel');
const generateToken = require("../utils/generateToken");

const registerAdmin = asyncHandler(async (req, res) => {
    const { username, password } = req.body;

    const adminExists = await Admin.findOne({ username });

    if (adminExists) {
        res.status(400)
        throw new Error("User Already Exists");
    }

    const admin = await Admin.create({
        username,
        password: bcrypt.hashSync(password, 10)
    });

    if (admin) {
        res.status(201).json({
            _id: admin._id,
            username: admin.username,
            token: generateToken(admin._id)
        });
    } else {
        res.status(400)
        throw new Error("Error occured");
    }

});

const login = asyncHandler(async (req, res) => {
    const { username, password } = req.body
    const admin = await Admin.findOne({ username }).select('+password')
    if (!admin) throw new Error('Admin User Not Found')
    if (admin.matchPassword(password)) {
        res.status(200).json(admin)
    } else throw new Error('Invalid username or password')
})


module.exports = { registerAdmin, login };
