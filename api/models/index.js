import Sequelize from 'sequelize'
let sequelize = {}

if (process.env.DATABASE_URL) {
  console.log("Heroku ENV.")

  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    port: match[4],
    host: match[3],
    logging: true,
    native: true
  })
} else {
  console.log("Local ENV")

  sequelize = new Sequelize(
    process.env.LOCAL_DB,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      dialect: 'postgres',
    }
  )
}

// const models = {
//   User: sequelize.import('./user'),
//   Message: sequelize.import('./message'),
// }

// Object.keys(models).forEach(key => {
//   if ('associate' in models[key]) {
//     models[key].associate(models)
//   }
// })

export { sequelize };
// export default models
