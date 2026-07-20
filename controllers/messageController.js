const { messages, getFormattedMessage } = require("./../samples");

const getDetails = (req, res) => {
  const messageID = Number(req.params.id) - 1;
  const messageShowed = messages[messageID];

  res.render("message", { title: "Message", message: getFormattedMessage(messageShowed) });
}

module.exports = {
  getDetails,
}