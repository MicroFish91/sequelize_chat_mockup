"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Answers",
      [
        {
          message: "I think he used two layers.",
          user_id: 1,
          question_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          message: "I think he used three layers.",
          user_id: 2,
          question_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  },
};
