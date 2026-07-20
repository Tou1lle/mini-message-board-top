const { messages } = require("./../samples");

const indexGet = (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages });
}

module.exports = {
  indexGet,
}