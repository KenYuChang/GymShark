'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      Comment.belongsTo(models.Gym, { foreignKey: 'gymId' })
      Comment.belongsTo(models.User, { foreignKey: 'userId' })
    }
  }
  Comment.init(
    {
      text: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      gymtId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Comment',
      tableName: 'Comments',
      underscored: true,
    }
  )
  return Comment
}
