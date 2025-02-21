const express = require("express");
const testRouter = require("./test/testRouter.js");

const router = express.Router();
router.use("/api", testRouter);

module.exports = router;
