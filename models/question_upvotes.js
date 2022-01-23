"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Question_upvotes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Question_upvotes.belongsTo(models.Users, { foreignKey: "user_id" });
      Question_upvotes.belongsTo(models.Questions, {
        foreignKey: "question_id",
      });
    }
  }
  Question_upvotes.init(
    {
      user_id: DataTypes.INTEGER,
      question_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Question_upvotes",
    }
  );
  return Question_upvotes;
};
