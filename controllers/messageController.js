const { messages, getFormattedMessage } = require("./../samples");
const db = require("./../db/queries");

async function getDetails (req, res) {
  const data = await db.getSelectedData(req.params.id);
  res.render("message", { title: "Message", message: getFormattedMessage(data) });
}

module.exports = {
  getDetails,
}