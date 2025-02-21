const express = require("express");
const testRouter = require("./test/testRouter.js");
const paymentRouter = require("./payments/paymentHandler");

const router = express.Router();
router.use("/api", testRouter);
router.use("/api", paymentRouter);

module.exports = router;
