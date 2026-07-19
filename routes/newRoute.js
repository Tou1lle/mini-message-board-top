const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.send("In The New Router");
})

module.exports = router;