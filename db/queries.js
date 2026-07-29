const db = require("./pool");
const { format } = require("date-fns");

async function getAllData() {
  const result = await db.query("SELECT * FROM messages");
  const data = result.rows;
  return data;
}

async function getSelectedData(id) {
  const result = await db.query("SELECT * FROM messages WHERE id = $1", [id]);
  const data = result.rows[0];
  return data;
}

async function insertData({ username, text, added }) {
  const result = await db.query("INSERT INTO messages(username, text, added) VALUES($1, $2, $3) RETURNING *", [username, text, added]);
  return result.rows[0];
}

async function deleteSelectedData(id) {
  const result = await db.query("DELETE FROM messages WHERE id = $1 RETURNING *", [id]);
  return result.rows[0].username;
}

module.exports = {
  getAllData,
  getSelectedData,
  insertData,
  deleteSelectedData
}