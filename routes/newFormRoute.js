const { Router } = require("express");
const router = Router();
const { messages } = require("./../samples");

router.get("/", (req, res) => {
  res.render("form", { title: "New Message" })
});

router.post("/", (req, res) => {
  const {text, user} = req.body;
  messages.push({ text, user, added: new Date() });
  res.redirect("/");
});

module.exports = router;