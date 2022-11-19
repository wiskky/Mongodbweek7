const router = require('express').Router();
const controller = require('../controller/userController');

router
    .get('/', controller.getAllTodo)
    .get('/:id', controller.getTodo)
    .post('/', controller.createTodo)
    .put('/:id', controller.updateTodo)
    .delete('/:id', controller.deleteTodo)


module.exports = router