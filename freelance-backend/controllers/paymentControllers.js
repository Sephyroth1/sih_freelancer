const { json } = require('sequelize');
const { Payment } = require('../models/payments');

// Create a new Payment 
exports.createPayment = async (req, res) => {
    try {
        const payment = await Payment.create(req.body);
        res.status(201).json(payment);
    }
    catch(err){
        res.status(400).json({ error: err.message });
    }
}

// Get all Payments 
exports.getAllPayment = async (req, res) => {
    try {
        const Payment = await Payment.findAll();
        res.status(200).json(users);
    }
    catch(err){
        res.status(400).json({ error: err.message });
    }
};

// Get a Payment by Id
exports.getPaymentById = async (req, res) => {
    try {
        const payment = await Payment.findByPk(req.params.id);
        if(payment) {
            res.status(200).json(Payment);
        }
        else {
            res.status(404).json({ message: "Payment not found"});
        }
    }
    catch(err){
        res.status(400).json({ error: err.message });
    }
};

// Update a user by Id
exports.updatePayment = async (req, res) => {
    try {
        const [updated] = await Payment.update(req.body, {
            where: { payment_id: req.params.id }
        });
        if(updated) {
            const updatedPayment = await Payment.findByPk(req.params.id);
            res.status(200).json(updatedPayment);
        }
        else {
            res.status(404).json({ message: "Payment not found"});
        }
    }
    catch(err){
        res.status(400).json({ error: err.message });
    }
};

// Delete a user by Id
exports.deletePayment = async (req, res) => {
    try {
        const deleted = await Payment.destroy({
            where: { payment_id: req.params.id }
        });
        if(deleted) {
            res.status(204).json();
        }
        else {
            res.status(404).json({ message: "Payment not found"});
        }
    }
    catch(err) {
        res.status(400).json({ error: err.message });
    }
};