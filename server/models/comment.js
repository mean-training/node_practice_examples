'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Comment.init({
    postId: DataTypes.INTEGER,
    comment: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, 
  {
    sequelize,
    modelName: 'Comment',
  });

  Comment.associate = (models) => {
    Comment.belongsTo(models.User, {foreignKey: 'UserId', as: 'user'})
  }

  Comment.associate = (models) => {
    Comment.belongsTo(models.Post,{foreignKey:'PostId',as: 'post'})
  }

  return Comment;
};