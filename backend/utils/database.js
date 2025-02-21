const mongodb = require("mongodb");
const config = require("../config/config");

let db = mongodb.Db;

const initializeClient = async () => {
  const client = new MongoClient(config.MONGODB_URI);
  return client.db();
};

const connectDb = async () => {
  try {
    if (!db) {
      db = await initializeClient();
    }
    return db;
  } catch (error) {
    console.error(error);
  }
};

module.export = connectDb;
