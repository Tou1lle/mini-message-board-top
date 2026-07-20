const { Router } = require("express");
const router = Router();
const { messages } = require("./../samples");

router.get("/:id", (req, res) => {
  const messageID = Number(req.params.id) - 1;
  const messageShowed = messages[messageID];

  res.render("message", { title: "Message", message: messageShowed });
});

module.exports = router;