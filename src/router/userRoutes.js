const router = require('express').Router();
const controller = require('../controller/userController');

router
    .get('/', controller.getAllTodo)
    .post('/', controller.createTodo)

module.exports = router