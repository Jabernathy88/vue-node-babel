import models from '../models'
const Todo = models.Todo

const todosController = {
  index: async (req, res) => {
    try {
      const todos = await Todo.findAll()
      console.log("I AM INDEX METHOD")
      // console.log(todos)
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
  create: (req, res) => {
    console.log("I AM CREATE METHOD")
    console.log("I am req.body:", req.body)
    Todo.create(req.body)
      .then((todo) => {
        res.send(todo)
      })
  },
  update: async (req, res) => {
    try {
      // console.log("I AM UPDATE METHOD")
      // console.log("I req params:", req.params.todoId)
      const todo = await Todo.findByPk(req.params.todoId)
      const updatedTodo = await todo.update(req.body)
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
      console.log("I AM DELETE METHOD")
      console.log("I am selected todo:", todo)
      await todo.destroy()
      res.sendStatus(200)
    } 
    catch (error) {
      console.log(error)
      res.sendStatus(500)
    }
  }
}

export default todosController
