import models, { sequelize } from './'

const seeds = {
  seedTodos: async () => {
    try {
      await models.Todo.create({
        title: 'Go Shopping',
        description: 'Need milk, eggs and bacon.',
        due_date: new Date('July 21, 2019')
      })
      await models.Todo.create({
        title: 'Buy Plane Ticket',
        description: 'Flight to arrive in Miami, FL.',
        due_date: new Date('2019-08-15')
      })
      console.log("Seeds saved to DB successfully.")
    }
    catch (error) {
      console.log("Error saving seeds:", error)
    }
  }
}

export default seeds