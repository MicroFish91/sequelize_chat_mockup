const postsRouter = require("./posts");

const combineRouter = (app) => {
  app.use("/posts", postsRouter);
};

export default combineRouter;
