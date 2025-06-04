const { MongoClient } = require("mongodb");

const connectionString = process.env.MONGODB_URI || "";

const client = new MongoClient(connectionString);

let db;

async function connectDB() {
  try {
    const conn = await client.connect();
    db = conn.db();
  } catch (e) {
    console.error(e);
  }
}

connectDB();

module.exports = () => db;
