const { json } = require("sequelize");
const { Mentorships } = require("../models/mentorships")


exports.createMentor = async (req, res) => {
    try {
        const mentor = await Mentorships.create(req.body);
        res.status(201).json(mentor);
    }
    catch(err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getAllMentors = async ( req, res ) => {
    try {
        const mentor = await Mentorships.findAll();
        res.status(200).json(mentor);
    }
    catch(err) {
        res.status(400).json({ error: err.message });
    }   
}

exports.getMentorById = async (req, res) => {
    try {
        const mentor = await Mentorships.findByPk(req.params.id);
        if(mentor) {
            res.status(200).json(mentor);
        }
        else {
            res.status(404).json({ message: "Mentor not found" });
        }
    }
    catch(err) {
        res.status(400).json({ error: err.message });
    }   
}

exports.updateMentor = async (req, res) => {
    try {
        const [updated] = await Mentorships.update(req.body, {
            where: { id: req.params.id }
        });
        if(updated) {
            const updatedMentor = await Mentorships.findByPk(req.params.id);
            res.status(200).json(this.updatedMentor);
        }
    }
    catch(err) {
        res.status(400).json({ error: err.message });
    }   
};


exports.deleteMentor = async (req, res) => {
    try {
        const deleted = await Mentorships.destroy({
            where: { id: req.params.id }
        });
        if(deleted) {
            res.status(204).json();
        }
        else {
            res.status(404).json({ message: "Mentor not found"});
        }
    }
    catch(err) {
        res.status(400).json({ error: err.message })
    }
};