import models from '../models'
const Todo = models.Todo

// correct syntax below
const todosController = {
  index: async (req, res) => {
    try {
      const todos = await Todo.findAll()
      res.json(todos)
    } 
    catch (error) {
      console.log(error)
      res.sendStatus(500)
    }
  },
  show: async (req, res) => {
    try {
      const todo = await Todo.findByPk(req.params.todoId)
      console.log("I AM SHOW METHOD")
      res.json(todo)
    } 
    catch (error) {
      console.log(error)
      res.sendStatus(500)
    }
  },
  create: async (req, res) => {
    try {
      const todo = await Todo.create(req.body)
      console.log("I AM CREATE METHOD")
      res.json(todo)
    }
    catch {
      console.log(error)
      res.sendStatus(500)
    }
    
  },
  update: 
  async (req, res) => {
    try {
      const todo = await Todo.findByPk(req.params.todoId)
      const updatedTodo = await todo.update(req.body)
      console.log("I AM UPDATE METHOD")
      res.json(updatedTodo)
    } 
    catch (error) {
      console.log(error)
      res.sendStatus(500)
    }
  },
  delete: async (req, res) => {
    try {
      const todo = await Todo.findByPk(req.params.todoId)
      await todo.delete()
      console.log("I AM DELETE METHOD")
      res.sendStatus(200)
    } 
    catch (error) {
      console.log(error)
      res.sendStatus(500)
    }
  }
  // (req, res) => {
  //   Todo.findByIdAndUpdate(req.params.userId)
  //     .then(() => {
  //       res.send(200) // status: ok
  //     })
  // }
}

export default todosController