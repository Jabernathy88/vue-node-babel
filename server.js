import 'dotenv/config';
import express from 'express';
// import models, { sequelize } from './models';

// initialize app & modules
const app = express();

// register routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.get('/users', async (req, res) => {
//   try {
//     const users = await models.User.findAll(
//       {
//         include: [
//           {model: models.Message}
//         ]
//       }
//     )
//     res.json(users)
//   } catch (error) {
//     console.log(error)
//     res.sendStatus(500)
//   }
// })

// app listen
const PORT = process.env.PORT || 3001

// db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`)
  })
// })