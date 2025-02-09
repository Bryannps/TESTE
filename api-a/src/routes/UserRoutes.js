const express = require('express');
const UserController = require('../controllers/UserController.js');
const router = express.Router();

router.post('/users', UserController.create);
router.get('/users', UserController.getAll);
router.post('/login', UserController.login)
module.exports = router;
