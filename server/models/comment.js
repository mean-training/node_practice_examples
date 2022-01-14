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
      models.belongsTo(models.user, {foreignKey: 'UserId', as :'user'});
      models.belongsTo(models.post, {foreignKey:'PostId',as: 'post'});
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

  return Comment;
};