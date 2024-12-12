const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// Routes
router.get('/', itemController.items);
router.get('/new-item', itemController.addItemForm);
router.post('/create-item', itemController.addItem);
router.get('/:id', itemController.viewItem);
router.get('/:id/edit', itemController.editItemForm);
router.put('/:id', itemController.updateItem);
router.get('/:id/delete', itemController.deleteItemForm); // Route for delete confirmation form
router.delete('/:id', itemController.deleteItem); // Route for actual deletion
module.exports = router;
