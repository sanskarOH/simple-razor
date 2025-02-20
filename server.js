const express = require("express");
const dotenv = require("dotenv");
const routes = require("./api/index.js");

const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.use(routes);

app.listen(PORT, () => {
  console.log(`The sever is started on port ${PORT}`);
});
