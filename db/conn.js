const { MongoClient } = require("mongodb");

const connectionString = process.env.MONGODB_URI || "";

const client = new MongoClient(connectionString);

let db;

async function connectDB() {
  try {
    const conn = await client.connect();
    db = conn.db(); // TODO: update with DB here
  } catch (e) {
    console.error(e);
  }
}

connectDB();

module.exports = () => db;
