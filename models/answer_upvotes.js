"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Answer_upvotes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Answer_upvotes.belongsTo(models.Users, { foreignKey: "user_id" });
      Answer_upvotes.belongsTo(models.Answers, { foreignKey: "answer_id" });
    }
  }
  Answer_upvotes.init(
    {
      user_id: DataTypes.INTEGER,
      answer_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Answer_upvotes",
    }
  );
  return Answer_upvotes;
};
