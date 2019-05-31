const express = require('express')
const router = express.Router()
import todosController from '../controllers/todosController'

router.get('/api/todos', todosController.index)
router.get('/api/todos/:todoId', todosController.show)
// router.post('/api/todos/', todosController.create)
// router.patch('/api/todos/:todoId', todosController.update)
// router.delete('/api/todos/:todoId', todosController.delete)

export default router