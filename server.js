const express = require("express");
const config = require("./config/config.js");
const routes = require("./api/index.js");

const app = express();

const PORT = config.PORT;

app.use(routes);

app.listen(PORT, () => {
  console.log(`The sever is started on port ${PORT}`);
});
