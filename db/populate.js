#! /usr/bin/env node
// Populating DB (Run only once to fill some dummy data)

const { Client } = require("pg");

const SQL = `
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(50) NOT NULL,
    text VARCHAR(255),
    added TIMESTAMPTZ DEFAULT NOW()
  );

  INSERT INTO messages (username, text, added) 
  VALUES
  ('Tuan', 'I wanna become a developer', DEFAULT),
  ('Tiep', 'I wanna become a content creator', DEFAULT),
  ('Mai', 'I wanna become a creative maker', DEFAULT)
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.argv[2]
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("seeding done")
}

main();