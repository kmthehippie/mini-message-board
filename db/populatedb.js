require("dotenv").config();
const { Client } = require("pg");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const createTableSQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    added TIMESTAMP NOT NULL
);
`;
const insertMessageSQL = `
INSERT INTO messages (text, username, added)
VALUES ($1, $2, $3);
`;

const main = async () => {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.SQL_CONNECTION_STRING,
  });
  try {
    await client.connect();

    // Create the table if it doesn't exist
    await client.query(createTableSQL);

    // Insert messages
    for (const message of messages) {
      await client.query(insertMessageSQL, [
        message.text,
        message.user,
        message.added,
      ]);
    }

    console.log("Done");
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await client.end();
  }
};

main();
