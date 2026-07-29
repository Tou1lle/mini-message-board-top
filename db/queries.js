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

async function removeSelectedData(id) {
  const result = await db.query("DELETE FROM messages WHERE id = $1 RETURNING *", [id]);
  return result.rows[0].username;
}

module.exports = {
  getAllData,
  getSelectedData,
  removeSelectedData
}