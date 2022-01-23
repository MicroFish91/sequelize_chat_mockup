"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Replies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Replies.belongsTo(models.Users, { foreignKey: "user_id" });
      Replies.belongsTo(models.Answers, { foreignKey: "answer_id" });
    }
  }
  Replies.init(
    {
      message: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      answer_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Replies",
    }
  );
  return Replies;
};
