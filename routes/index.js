const lessonsRouter = require("./lessons");

const combineRouter = (app) => {
  app.use("/api/lessons", lessonsRouter);
};

module.exports = combineRouter;
