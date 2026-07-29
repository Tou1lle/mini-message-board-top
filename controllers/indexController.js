const { getFormattedMessages } = require("./../samples");
const db = require("./../db/queries");

async function indexGet (req, res) {
  const data = await db.getAllData();
  res.render("index", { title: "Mini Messageboard", data: getFormattedMessages(data) });
}

async function indexDelete (req, res) {
  const id = req.params.id;
  const deletedUsername = await db.deleteSelectedData(id);
  res.redirect("/");
}

module.exports = {
  indexGet,
  indexDelete
}