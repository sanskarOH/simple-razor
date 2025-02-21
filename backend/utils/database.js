const config = require("../config/config");
const { MongoClient } = require("mongodb");
let db = null;

const initializeClient = async () => {
  const client = new MongoClient(config.MONGODB_URI);
  await client.connect();
  return client.db();
};

const connectDb = async () => {
  try {
    if (!db) {
      db = await initializeClient();
    }
    console.log("Connected to database");
    return db;
  } catch (error) {
    console.error("Database connection error:", error);
    throw error;
  }
};
module.exports = connectDb;
