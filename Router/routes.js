const express = require('express')
const router = express.Router()
const userController = require('../Controllers/userController')
const taskController= require('../Controllers/taskController')
const jwtMiddleware=require('../middileware/jwtMiddileware')

router.post('/register', userController.userRegister)
router.post('/login', userController.userLogin)
router.post('/add-task',jwtMiddleware, taskController.addTask)
router.get('/get-task',jwtMiddleware, taskController.getTask)
router.put('/update-task',jwtMiddleware, taskController.updateTask)
router.delete('/delete-task/:id',jwtMiddleware, taskController.deleteTask)

module.exports = router