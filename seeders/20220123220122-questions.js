"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Questions",
      [
        {
          message: "How many layers did you use in the bass?",
          user_id: 1,
          activity_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          message: "How many layers did you use in the lead?",
          user_id: 2,
          activity_id: 1,
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
