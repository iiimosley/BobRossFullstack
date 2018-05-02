'use strict';
module.exports = (sequelize, DataTypes) => {
  var Movie = sequelize.define('Movie', {
    imdb_id: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, { tableName: "movies", timestamps: false });
  Movie.associate = function(models) {
    Movie.belongsTo(models.User, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE'
    });
  };
  return Movie;
};