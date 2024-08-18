const pool = require("./pool");

const getAllMessages = async () => {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
};

const insertMessage = async (username, message, date) => {
  await pool.query(
    "INSERT INTO messages (text,username,added) VALUES ($1, $2, $3)",
    [message, username, date]
  );
};

module.exports = { getAllMessages, insertMessage };
