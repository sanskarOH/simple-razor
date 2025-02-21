const config = require("./config/config.js");
const express = require("express");
const routes = require("./api/index.js");
const connectDb = require("./utils/database");

async function start() {
  const app = express();

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
