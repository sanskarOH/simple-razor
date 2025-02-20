const testController = require("./test.controller.js");
const express = require("express");
const testRouter = express.Router();

testRouter.get("/test", testController);

module.exports = testRouter;
