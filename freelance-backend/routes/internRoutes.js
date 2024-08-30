const express = require('express');
const router = express.Router();
const internController = require('../controllers/internControllers');

router.post('/', internController.createIntern);
router.post('/', internController.getAllInterns);
router.post('/:id', internController.getInternById);
router.post('/:id', internController.updateIntern);
router.post('/:id', internController.deleteIntern);

module.exports = router;