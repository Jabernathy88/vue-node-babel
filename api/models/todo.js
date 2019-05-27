const todo = (sequelize, DataTypes) => {
  const Todo = sequelize.define('todo', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    due_date: DataTypes.DATE
  })
  return Todo
}
export default todo