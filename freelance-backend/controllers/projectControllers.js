const { json } = require('sequelize');
const { Project } = require('../models/projects');

// Create a new project 
exports.createProject = async (req, res) => {
    try {
        const project = await Project.create(req.body);
        res.status(201).json(Project);
    }
    catch(err){
        res.status(400).json({ error: err.message });
    }
}

// Get all Projects 
exports.getAllProject = async (req, res) => {
    try {
        const project = await Project.findAll();
        res.status(200).json(Project);
    }
    catch(err){
        res.status(400).json({ error: err.message });
    }
};

// Get a Project by Id
exports.getProjectById = async (req, res) => {
    try {
        const project = await Project.findByPk(req.params.id);
        if(project) {
            res.status(200).json(project);
        }
        else {
            res.status(404).json({ message: "Project not found"});
        }
    }
    catch(err){
        res.status(400).json({ error: err.message });
    }
};

// Update a user by Id
exports.updateProject = async (req, res) => {
    try {
        const [updated] = await Project.update(req.body, {
            where: { project_id: req.params.id }
        });
        if(updated) {
            const updatedProject = await Project.findByPk(req.params.id);
            res.status(200).json(updatedProject);
        }
        else {
            res.status(404).json({ message: "project not found"});
        }
    }
    catch(err){
        res.status(400).json({ error: err.message });
    }
};

// Delete a user by Id
exports.deleteProject = async (req, res) => {
    try {
        const deleted = await Project.destroy({
            where: { Project_id: req.params.id }
        });
        if(deleted) {
            res.status(204).json();
        }
        else {
            res.status(404).json({ message: "Project not found"});
        }
    }
    catch(err) {
        res.status(400).json({ error: err.message });
    }
};