const config = require("./config/config.js");
const express = require("express");
const routes = require("./api/index.js");
const connectDb = require("./utils/database");
const cors = require("cors");

async function start() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  const PORT = config.PORT;

  app.use(routes);
  await connectDb();
  app.listen(PORT, () => {
    console.log(`
      ------------ Server listening on port: ${config.PORT}------------
    `);
  });
}
start();
