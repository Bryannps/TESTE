const express = require('express');
const CompanyController = require('../controllers/CompanyController.js');
const router = express.Router();

router.post('/companies', CompanyController.create);
router.get('/companies', CompanyController.getAll);

module.exports = router;
