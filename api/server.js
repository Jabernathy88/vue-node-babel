import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { sequelize } from './models'
import bodyParser from 'body-parser'
import seeds from './models/seeds'
import routes from './routes'

// initialize app & modules
const app = express()
app.use(cors())
app.use(bodyParser.json())

// serve Vue.js build directory at root URL
const serveStatic = require("serve-static")
const path = require('path');
app.use(serveStatic(path.join(__dirname, '../client/dist')))

// comment out for localhost script: `npm run dev`
app.get('/', (req, res) => {
  res.sendFile(__dirname + '../client/dist/index.html')
})

// register router
app.use('/', routes)

// localhost or Heroku
const port = process.env.PORT || process.env.API_PORT

// to drop and seed DB, change to true:
const resetData = true

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
