const db = require("./pool");
const { format } = require("date-fns");

async function getAllData() {
  const result = await db.query("SELECT * FROM messages");
  const data = result.rows;
  return data;
}

async function getSelectedData() {
  
}

module.exports = {
  getAllData
}