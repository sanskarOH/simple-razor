const express = require("express");
const createOrder = require("./createOrder");
const verifyOrder = require("./verifyOrder");

const paymentRouter = express.Router();
paymentRouter.post("/pay", createOrder);
paymentRouter.post("/verify", verifyOrder);
module.exports = paymentRouter;
