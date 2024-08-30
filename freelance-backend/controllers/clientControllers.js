const { json, where } = require('sequelize');
const { Client } = require('../models/clients');

// Create a Client
exports.createClient = async (req, res) => {
    try {
        const client = await Client.create(req.body);
        res.status(200).json(client);
    }
    catch(err) {
        res.status(400).json({ error: err.message });
    }
}

// Get all clients
exports.getAllClients = async (req, res) => {
    try {
        const clients = await Client.findAll();
        res.status(200).json(clients);
   }
   catch(err) {
    res.status(400).json({ error: err.message });
   }
}

// Get a client by id
exports.getClientById = async (req, res) => {
    try {
        const client = await Client.findByPk(req.params.id);
        if(client) {
            res.status(200).json(client);
        }
        else {
            res.status(404).json({ message: "Client not found"});
        }
    }
    catch(err){
        res.status(400).json({ error: err.message });
    }
}
// update a client data
exports.updateClient = async (req, res) => {
    try {
        const [updated] = await Client.update(req.body, {
            where: { client_id : req.params.id }
        });
        if(updated) {
                const updatedClient = await Client.findByPk(req.params.id);
                res.status(200).json(updatedClient);
        }
        else {
                res.status(404).json({ message: "Client not found" });
        }
    }
    catch(err) {
        res.status(400).json({ error: err.message });
    }
}

// delete client data
exports.deleteClient = async (req, res) => {
    try {
        const deletedClient = await Client.destroy({
            where: { client_id: req.params.id }
        });
        if(deletedClient) {
            res.status(204).json();
        }
        else {
            res.status(404).json({ message: "Client not found" });
        }
    }
    catch(err){
        res.status(400).json({ error: err.message });
    }
}