const express = require('express');
const todoController = require('../controllers/todo');

const router = express.Router();

router.post('/', todoController.createTodo);
router.get('/:id', todoController.getTodo);
router.put('/:id', todoController.updateTodo);
router.delete('/:id', todoController.deleteTodo);
router.get('/list/:username', todoController.getTodos);

module.exports = router;