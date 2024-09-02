const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/userModel.js');

const router = express.Router();

router.post('/signup', async (req, res) => {
    const { email, password, role } = req.body;
    try {
        if (!email || !password || !role) {
            return res.status(400).json({ message: "Missing required fields" });
        }
        const existingUser = await User.findOne({ where: { email } });
        if(existingUser) {
            res.status(500).json({ message: "email already in use."});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({email, password: hashedPassword, role});

        const token = jwt.sign({ id: newUser.id, role: newUser.role }, process.env.SECRET, { expiresIn: '1h'});

        return res.status(200).json({
            message: "User Created Successfully",
            user: {
                id: newUser.id,
                email: newUser.email,
                role: newUser.role,
            },
            token,
        });
    }
    catch(err) {
        return res.status(500).json({ error: err.message });
    }
});

router.post('/login', async (req, res) => {
    const { email, password, role } = req.body;
    try {
        const existingUser = await User.findOne({ where: {email}});
        if(!existingUser) {
            res.status(400).json({ message: "Invalid email or password."});
        }
        const isPasswordvalid = await bcrypt.compare(password, existingUser.password);

        if(!isPasswordvalid) {
            res.status(400).json({ message: "Invalid email or password."});
        }

        const token = jwt.sign({ is: existingUser.id, role: existingUser.role}, process.env.SECRET, { expiresIn: "1h"});

        return res.status(200).json({
            message: "Logged in Successfullly",
            user: {
                id: existingUser.id,
                email: existingUser.email,
                role: existingUser.role,
            },
        });
    }
    catch(err) {
        console.error("Error Logging in user: ", err);
        return res.status(500).json({ error: err.message});
    }  
})

module.exports = router;