const { messages } = require("./../samples");

const getPage = (req, res) => {
  res.render("form", { title: "New Message" })
}

const postNew = (req, res) => {
  const { text, user } = req.body;
  messages.push({ text, user, added: new Date() });
  res.redirect("/");
}

module.exports = {
  getPage,
  postNew
}