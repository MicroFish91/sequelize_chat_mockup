const express = require("express");
const router = express.Router();

router.get("/", () => {
  console.log("testing");
});

module.exports = router;
