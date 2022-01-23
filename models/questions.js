"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Questions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Questions.belongsTo(models.Users, { foreignKey: "user_id" });
      Questions.belongsTo(models.Activities, { foreignKey: "activity_id" });
      Questions.hasMany(models.Answers, { foreignKey: "question_id" });
      Questions.hasMany(models.Question_upvotes, { foreignKey: "question_id" });
    }
  }
  Questions.init(
    {
      message: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      activity_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Questions",
    }
  );
  return Questions;
};
