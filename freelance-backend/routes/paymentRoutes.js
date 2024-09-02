const express = require('express');
const router = express.Router();
const paymentController = require("../controllers/paymentControllers");

router.post('/', paymentController.createPayment);
router.get('/', paymentController.getAllPayment);
router.get('/:id', paymentController.getPaymentById);
router.put('/:id', paymentController.updatePayment);
router.delete('/:id', paymentController.deletePayment);

module.exports = router;