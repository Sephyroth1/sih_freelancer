const express = require('express');
const router = express.Router();
const freelancerController = require('../controllers/freelancerControllers');

router.post('/', freelancerController.createFreelancer);
router.post('/', freelancerController.getAllFreelancers);
router.post('/:id', freelancerController.getFreelancerById);
router.post('/:id', freelancerController.updateFreelancer);
router.post('/:id', freelancerController.deleteFreelancer);

module.exports = router;