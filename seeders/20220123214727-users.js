"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "hello_world@gmail.com",
          password: "temp-pass",
          firstName: "joe",
          lastName: "schmoe",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "hello_world2@gmail.com",
          password: "temp-pass",
          firstName: "adam",
          lastName: "schmoe",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
