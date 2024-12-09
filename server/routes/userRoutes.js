const express = require('express');
const router = express.Router(); // Feature that allows us to create modular and 
const userController = require('../controllers/userController')

//! http://localhost:3000/users
router.get('/users', userController.users);

module.exports = router;