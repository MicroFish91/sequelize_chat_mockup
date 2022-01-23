"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Answers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Answers.belongsTo(models.Users, { foreignKey: "user_id" });
      Answers.belongsTo(models.Questions, { foreignKey: "question_id" });
      Answers.hasMany(models.Replies, { foreignKey: "answer_id" });
      Answers.hasMany(models.Answer_upvotes, { foreignKey: "answer_id" });
    }
  }
  Answers.init(
    {
      message: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      question_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Answers",
    }
  );
  return Answers;
};
