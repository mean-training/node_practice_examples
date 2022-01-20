'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ActorMovies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ActorMovies.init({
    ActorId: DataTypes.INTEGER,
    MovieId: DataTypes.INTEGER
  },{timestamps:false},
  {
    sequelize,
    modelName: 'ActorMovies',
  });
  return ActorMovies;
};