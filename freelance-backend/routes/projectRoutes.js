const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectControllers');


router.post('/', projectController.createProject);
router.post('/', projectController.getAllProject);
router.post('/:id', projectController.getProjectById);
router.post('/:id', projectController.updateProject);
router.post('/:id', projectController.deleteProject);

module.exports = router;