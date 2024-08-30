const { json } = require('sequelize');
const { Intern } = require('../models/interns');

// Create a new intern
exports.createIntern = async (req, res) => {
    try {
        const intern = await intern.create(req.body);
        res.status(201).json(intern);
    }
    catch(err){
        res.status(400).json({ error: err.message });
    }
}

// Get all interns
exports.getAllInterns = async (req, res) => {
    try {
        const interns = await Intern.findAll();
        res.status(200).json(interns);
    }
    catch(err){
        res.status(400).json({ error: error.message });
    }
};

// Get a intern by Id
exports.getInternById = async (req, res) => {
    try {
        const intern = await Intern.findByPk(req.params.id);
        if(intern) {
            res.status(200).json(intern);
        }
        else {
            res.status(404).json({ message: "Intern not found"});
        }
    }
    catch(err){
        res.status(400).json({ error: err.message });
    }
};

// Update a intern by Id
exports.updateIntern = async (req, res) => {
    try {
        const [updated] = await Intern.update(req.body, {
            where: { intern_id: req.params.id }
        });
        if(updated) {
            const updatedIntern = await Intern.findByPk(req.params.id);
            res.status(200).json(updatedIntern);
        }
        else {
            res.status(404).json({ message: "Intern not found"});
        }
    }
    catch(err){
        res.status(400).json({ error: err.message });
    }
};

// Delete a intern by Id
exports.deleteIntern = async (req, res) => {
    try {
        const deleted = await Intern.destroy({
            where: { intern_id: req.params.id }
        });
        if(deleted) {
            res.status(204).json();
        }
        else {
            res.status(404).json({ message: "Intern not found"});
        }
    }
    catch(err) {
        res.status(400).json({ error: err.message });
    }
};