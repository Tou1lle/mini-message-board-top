const { messages, getFormattedMessages } = require("./../samples");

const indexGet = (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: getFormattedMessages(messages) });
}

module.exports = {
  indexGet,
}