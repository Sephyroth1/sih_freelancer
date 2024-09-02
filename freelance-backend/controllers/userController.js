const {json} = require('sequelize');
const userModel = require("../models/userModel");
const bcrypt = require('bcrypt');

exports.createUser = async (req, res) => {
    try {
        const user = await userModel.create(req.body);
        res.status(201).json(user);
    }
    catch(err){
        res.status(400).json({ error: err.message });
    }
}

exports.getAllUsers = async (req, res) => {
    try {
        const users = await userModel.findAll();
        res.status(200).json(users);
    }
    catch(err){
        res.status(400).json({ error: err.message });
    }
}

exports.getUserById = async (req, res) => {
    try {
        const user = await userModel.findByPk(req.params.id);
        if(user) {
            res.status(200).json(user);
        }
        else {
            res.status(404).json({ message: "User not found"});
        }
    }
    catch(err) {
        res.status(400).json({ error: err.message });
    }
}

exports.updateUser = async (req, res) => {
    try {
        const {email, password, role} = req.body;

        const updatedData = {}
        if(email) updatedData.email = email;
        if(role)  updatedData.role = role;
        if(password) updatedData.password = await bcrypt.hash(password, 10);
        const [updated] = await userModel.update(req.body, {
            where: { id: req.params.id }
        });
        if(updated) {
            const updatedUser = await userModel.findByPk(req.params.id);
            res.status(200).json(updatedUser);
        }
        else {
            res.status(404).json({ message: "User not found"});
        }
    }
    catch(err) {
        res.status(500).json({ error: err.message });
    }
} 

exports.deleteUser = async (req, res) => {
    try {
        const deleted = await userModel.destroy({
            where: { id: req.params.id}
        });
        if(deleted) {
            res.status(204).json();
        }
        else {
            res.status(404).json({ message: "User not found"});
        }
    }
    catch(err) {
        res.status(400).json({ error: err.message });
    }
}