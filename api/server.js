import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import models, { sequelize } from './models'
import seeds from './models/seeds'

// initialize app & modules
const app = express()
app.use(cors())

// serve Vue.js build directory at root URL
const serveStatic = require("serve-static")
const path = require('path');
app.use(serveStatic(path.join(__dirname, '../client/dist')))

// comment out for script `npm run dev`
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '../client/dist/index.html')
// })

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

// serve API end points at root/api/
app.get('/api/todos', async (req, res) => {
  try {
    const todos = await models.Todo.findAll()
    console.log("I am Todos:", todos)
    res.json(todos)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
})