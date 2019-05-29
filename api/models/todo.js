const todo = (sequelize, DataTypes) => {
  const Todo = sequelize.define('todo', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID
    },
    title: DataTypes.STRING,
    due_date: DataTypes.DATE
  })
  return Todo
}
export default todo