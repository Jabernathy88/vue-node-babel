import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import models, { sequelize } from './models'
import seeds from './models/seeds'

// initialize app & modules
const app = express()
app.use(cors())

// register routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// localhost or Heroku
const port = process.env.PORT || process.env.API_PORT

// to drop and seed DB, change to true:
const resetData = false

// connect DB and seed if flag is true
sequelize.sync({force: resetData}).then(async () => {
  if (resetData) {
    seeds.seedTodos()
    console.log('Dropped and re-seeded database.')
  }
  console.log('Sequelize connected to PostgreSQL.')

  // start server
  app.listen(port, () => {
    console.log(`Node API listening on PORT: ${port}.`)
  })
})

app.get('/todos', async (req, res) => {
  try {
    const todos = await models.Todo.findAll()
    console.log("I am Todos:", todos)
    res.json(todos)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
})