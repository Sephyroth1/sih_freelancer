const { json } = require('sequelize');
const { Freelancer } = require('../models/freelancers');

// Create a new user
exports.createFreelancer = async (req, res) => {
    try {
        const Freelancer = await Freelancer.create(req.body);
        res.status(201).json(user);
    }
    catch(err){
        res.status(400).json({ error: err.message });
    }
}

// Get all users
exports.getAllFreelancers = async (req, res) => {
    try {
        const freelancer = await Freelancer.findAll();
        res.status(200).json(users);
    }
    catch(err){
        res.status(400).json({ error: err.message });
    }
};

// Get a user by Id
exports.getFreelancerById = async (req, res) => {
    try {
        const freelancer = await Freelancer.findByPk(req.params.id);
        if(Freelancer) {
            res.status(200).json(Freelancer);
        }
        else {
            res.status(404).json({ message: "Freelancer not found"});
        }
    }
    catch(err){
        res.status(400).json({ error: err.message });
    }
};

// Update a user by Id
exports.updateFreelancer = async (req, res) => {
    try {
        const [updated] = await Freelancer.update(req.body, {
            where: { freelancer_id: req.params.id }
        });
        if(updated) {
            const updatedFreelancer = await Freelancer.findByPk(req.params.id);
            res.status(200).json(updatedFreelancer);
        }
        else {
            res.status(404).json({ message: "Freelancer not found"});
        }
    }
    catch(err){
        res.status(400).json({ error: err.message });
    }
};

// Delete a user by Id
exports.deleteFreelancer = async (req, res) => {
    try {
        const deleted = await Freelancer.destroy({
            where: { freelancer_id: req.params.id }
        });
        if(deleted) {
            res.status(204).json();
        }
        else {
            res.status(404).json({ message: "Freelancer not found"});
        }
    }
    catch(err) {
        res.status(400).json({ error: err.message });
    }
};