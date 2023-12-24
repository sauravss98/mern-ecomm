const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Handling product api");
});

module.exports = router;
