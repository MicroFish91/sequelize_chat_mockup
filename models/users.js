"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.hasMany(models.Questions, { foreignKey: "user_id" });
      Users.hasMany(models.Answers, { foreignKey: "user_id" });
      Users.hasMany(models.Replies, { foreignKey: "user_id" });
      Users.hasMany(models.Question_upvotes, { foreignKey: "user_id" });
      Users.hasMany(models.Answer_upvotes, { foreignKey: "user_id" });
    }
  }
  Users.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};
