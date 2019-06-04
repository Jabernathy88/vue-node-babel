const todo = (sequelize, DataTypes) => {
  const Todo = sequelize.define('todo', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    title: {
      type: DataTypes.STRING,
      defaultValue: 'Name for this Todo is TBA.'
    },
    due_date: {
      type: DataTypes.DATE,
      defaultValue: new Date('2019-12-01')
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    } 
  })
  return Todo
}
export default todo