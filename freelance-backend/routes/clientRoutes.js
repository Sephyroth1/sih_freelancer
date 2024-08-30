const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientControllers');

router.post('/', clientController.createClient);
router.post('/', clientController.getAllClients);
router.post('/:id', clientController.getClientById);
router.post('/:id', clientController.updateClient);
router.post('/:id', clientController.deleteClient);

module.exports = router;