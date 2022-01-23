"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Replies",
      [
        {
          message: "I think he used two layers.",
          user_id: 1,
          answer_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          message: "Or maybe one layer.",
          user_id: 1,
          answer_id: 2,
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
