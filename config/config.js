require("dotenv").config();

module.exports = {
  development: {
    username: "postgres",
    password: process.env.DB_PASSWORD,
    database: "monthly_test",
    host: "127.0.0.1",
    dialect: "postgres",
  },
};
