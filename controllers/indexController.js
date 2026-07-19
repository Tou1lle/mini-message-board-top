const data = require("./../samples");

const indexGet = (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: data.messages });
}

module.exports = {
  indexGet,
}