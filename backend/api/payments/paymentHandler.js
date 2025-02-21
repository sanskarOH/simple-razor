const express = require("express");
const createOrder = require("./createOrder");
const verifyOrder = require("./verifyOrder");

const paymentRouter = express.Router();
paymentRouter.post("/pay", createOrder);
module.exports = paymentRouter;
