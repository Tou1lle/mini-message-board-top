const db = require("./../db/queries");

const getPage = (req, res) => {
  res.render("form", { title: "New Message" })
}

async function postNew (req, res) {
  const { username, text } = req.body;
  await db.insertData({ username, text, added: new Date() });
  res.redirect("/");
}

module.exports = {
  getPage,
  postNew
}