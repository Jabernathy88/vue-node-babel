const todo = (sequelize, DataTypes) => {
  const Todo = sequelize.define('todo', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    title: DataTypes.STRING,
    due_date: DataTypes.DATE,
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    } 
  })
  return Todo
}
export default todo