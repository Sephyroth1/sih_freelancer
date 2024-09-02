const {json} = require('sequelize');
const {projectAssignments} = require("../models/projectAssignments");

exports.createprojectAssignment = async (req, res) => {
    try {
        const projectAssignment = await projectAssignments.create(req.body);
        res.status(201).json(projectAssignment);
    }
    catch(err){
        res.status(400).json({ error: err.message });
    }
}

exports.getAllprojectAssignments = async (req, res) => {
    try {
        const projectAssignment = await projectAssignments.findAll();
        res.status(200).json(projectAssignment);
    }
    catch(err){
        res.status(400).json({ error: err.message });
    }
}

exports.getprojectAssignmentById = async (req, res) => {
    try {
        const projectAssignment = await projectAssignments.findByPk(req.params.id);
        if(projectAssignment) {
            res.status(200).json(projectAssignment);
        }
        else {
            res.status(404).json({ message: "projectAssignment not found"});
        }
    }
    catch(err) {
        res.status(400).json({ error: err.message });
    }
}

exports.updateprojectAssignment = async (req, res) => {
    try {
        const [updated] = await projectAssignments.update(req.body, {
            where: { id: req.params.id }
        });
        if(updated) {
            const updatedprojectAssignment = await projectAssignments.findByPk(req.params.id);
            res.status(200).json(updatedprojectAssignment);
        }
        else {
            res.status(404).json({ message: "projectAssignment not found"});
        }
    }
    catch(err) {
        res.status(400).json({ error: err.message });
    }
} 

exports.deleteprojectAssignment = async (req, res) => {
    try {
        const deleted = await projectAssignments.destroy({
            where: { id: req.params.id}
        });
        if(deleted) {
            res.status(204).json();
        }
        else {
            res.status(404).json({ message: "projectAssignment not found"});
        }
    }
    catch(err) {
        res.status(400).json({ error: err.message });
    }
}