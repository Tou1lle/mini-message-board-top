const { getFormattedMessages } = require("./../samples");
const db = require("./../db/queries");

async function indexGet (req, res) {
  const data = await db.getAllData();
  res.render("index", { title: "Mini Messageboard", data: getFormattedMessages(data) });
}

module.exports = {
  indexGet,
}